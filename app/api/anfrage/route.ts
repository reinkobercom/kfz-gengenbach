import { processLead } from "@/lib/leads";
import { verifyTurnstile } from "@/lib/turnstile";
import { einzugsgebiet } from "@/lib/site";
import { anfrageLeistungen } from "@/lib/leistungen";

/**
 * Anfrage-Endpunkt des Konfigurators. Versand und Leadportal laufen zentral über lib/leads.ts.
 * ENV: siehe .env.example
 */

const s = (v: unknown, max = 500) => (typeof v === "string" ? v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim().slice(0, max) : "");

const dringlichkeitText: Record<string, string> = {
  dringend: "Dringend (Fahrzeug fährt nicht oder kaum)",
  woche: "Diese Woche",
  bald: "In 2–3 Wochen",
  flexibel: "Flexibel",
};
const rueckwege = ["WhatsApp", "Anruf", "E-Mail"];
const orte = new Set<string>([...einzugsgebiet, "Anderer Ort"]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Spam-Schutz: Honeypot gefüllt oder Formular unrealistisch schnell ausgefüllt → still verwerfen
  if (s(body.website) || Number(body.dauer) < 2500) {
    console.warn("[LEAD-SPAM] Honeypot oder Ausfüllzeit – verworfen");
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  if (!(await verifyTurnstile(s(body.turnstileToken, 2048) || undefined, ip))) {
    return Response.json({ ok: false, error: "Sicherheitsprüfung fehlgeschlagen. Bitte Seite neu laden." }, { status: 403 });
  }

  const leistungKey = s(body.leistung, 40);
  const leistung = anfrageLeistungen.find((l) => l.key === leistungKey)?.label ?? "";
  const istVerkauf = leistungKey === "verkauf";
  const d = {
    fahrzeugTyp: s(body.fahrzeugTyp, 40),
    marke: s(body.marke, 60),
    modell: s(body.modell, 80),
    baujahr: s(body.baujahr, 4),
    kilometer: s(body.kilometer, 20),
    suche: s(body.suche, 1500),
    dringlichkeit: dringlichkeitText[s(body.dringlichkeit, 20)] ?? "",
    ort: orte.has(s(body.ort, 60)) ? s(body.ort, 60) : "",
    beschreibung: s(body.beschreibung, 2000),
    name: s(body.name, 120),
    telefon: s(body.telefon, 40),
    email: s(body.email, 160),
    rueckweg: rueckwege.includes(s(body.rueckmeldung, 20)) ? s(body.rueckmeldung, 20) : "",
  };
  const emailGueltig = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);

  if (d.name.length < 2 || d.telefon.replace(/\D/g, "").length < 6 || !leistung || body.datenschutz !== true) {
    return Response.json({ ok: false, error: "Pflichtangaben fehlen" }, { status: 422 });
  }
  if (d.rueckweg === "E-Mail" && !emailGueltig) {
    return Response.json({ ok: false, error: "E-Mail-Adresse fehlt" }, { status: 422 });
  }

  // Block 2 der Mail: Frage aus dem Formular als Label, in Formular-Reihenfolge
  const antworten: [string, string][] = [
    ["Was dürfen wir für Sie tun?", leistung],
    ...(istVerkauf
      ? ([["Gesuchtes Fahrzeug", d.suche]] as [string, string][])
      : ([
          ["Fahrzeugtyp", d.fahrzeugTyp],
          ["Marke", d.marke],
          ["Modell", d.modell],
          ["Baujahr", d.baujahr],
          ["Kilometerstand", d.kilometer],
        ] as [string, string][])),
    ["Wie dringend ist es?", d.dringlichkeit],
    ["Ihr Wohnort", d.ort],
    ["Was ist los?", d.beschreibung],
  ];

  const requestId = s(body.requestId, 36);
  const ergebnis = await processLead({
    requestId: uuid.test(requestId) ? requestId : null,
    formType: "anfrage",
    name: d.name,
    telefon: d.telefon,
    email: emailGueltig ? d.email : "",
    rueckweg: d.rueckweg,
    thema: leistung,
    dringend: s(body.dringlichkeit, 20) === "dringend",
    antworten,
    attribution: body.attribution,
  });

  if (!ergebnis.ok) {
    return Response.json({ ok: false, error: "Versand fehlgeschlagen" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
