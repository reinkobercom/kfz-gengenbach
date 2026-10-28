import { Resend } from "resend";
import { site } from "@/lib/site";

/**
 * Anfrage-Endpunkt.
 * ENV:
 *   RESEND_API_KEY  – Pflicht
 *   ANFRAGE_FROM    – Absender, Domain muss in Resend verifiziert sein
 *                     (Standard: "KFZ Gengenbach <anfrage@kfz-gengenbach.de>")
 *   ANFRAGE_TO      – Empfänger, kommagetrennt (Standard: lib/site.ts → leadRecipients)
 */

const s = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const dringlichkeitText: Record<string, string> = {
  dringend: "Dringend (Fahrzeug fährt nicht oder kaum)",
  woche: "Diese Woche",
  bald: "In 2–3 Wochen",
  flexibel: "Flexibel",
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Spam-Schutz: Honeypot gefüllt oder Formular unrealistisch schnell ausgefüllt
  if (s(body.website) || Number(body.dauer) < 2500) {
    return Response.json({ ok: true });
  }

  const d = {
    leistung: s(body.leistungLabel, 80) || s(body.leistung, 40),
    fahrzeugTyp: s(body.fahrzeugTyp, 40),
    marke: s(body.marke, 60),
    modell: s(body.modell, 80),
    baujahr: s(body.baujahr, 4),
    kilometer: s(body.kilometer, 20),
    suche: s(body.suche, 1500),
    dringlichkeit: dringlichkeitText[s(body.dringlichkeit, 20)] ?? "",
    ort: s(body.ort, 60),
    beschreibung: s(body.beschreibung, 2000),
    name: s(body.name, 120),
    telefon: s(body.telefon, 40),
    email: s(body.email, 160),
    rueckmeldung: s(body.rueckmeldung, 20),
    seite: s(body.seite, 200),
  };

  if (d.name.length < 2 || d.telefon.replace(/\D/g, "").length < 6 || !d.leistung || body.datenschutz !== true) {
    return Response.json({ ok: false, error: "Pflichtangaben fehlen" }, { status: 422 });
  }
  const emailGueltig = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[anfrage] RESEND_API_KEY fehlt");
    return Response.json({ ok: false, error: "Versand nicht konfiguriert" }, { status: 500 });
  }
  const resend = new Resend(key);
  const from = process.env.ANFRAGE_FROM || `${site.brand} <anfrage@kfz-gengenbach.de>`;
  const to = (process.env.ANFRAGE_TO || site.leadRecipients.join(","))
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

  const fahrzeug = [d.fahrzeugTyp, d.marke, d.modell, d.baujahr && `Bj. ${d.baujahr}`, d.kilometer && `${d.kilometer} km`]
    .filter(Boolean)
    .join(", ");

  const zeilen: [string, string][] = [
    ["Leistung", d.leistung],
    ["Fahrzeug", d.suche ? "" : fahrzeug],
    ["Gesuchtes Fahrzeug", d.suche],
    ["Dringlichkeit", d.dringlichkeit],
    ["Wohnort", d.ort],
    ["Beschreibung", d.beschreibung],
    ["Name", d.name],
    ["Telefon", d.telefon],
    ["E-Mail", d.email],
    ["Rückmeldung per", d.rueckmeldung],
    ["Gesendet von", `${site.url}${d.seite}`],
  ];
  const sichtbar = zeilen.filter(([, v]) => v);

  const text = sichtbar.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#0d2340;max-width:560px">
  <h2 style="margin:0 0 16px">Neue Anfrage: ${esc(d.leistung)}</h2>
  <table cellpadding="8" style="border-collapse:collapse;width:100%">
  ${sichtbar
    .map(
      ([k, v]) =>
        `<tr><td style="border-bottom:1px solid #e2e7ef;color:#586477;width:150px;vertical-align:top">${esc(k)}</td><td style="border-bottom:1px solid #e2e7ef;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("")}
  </table></div>`;

  const betreff = `Anfrage ${d.leistung} – ${d.name}${d.ort ? `, ${d.ort}` : ""}${d.dringlichkeit.startsWith("Dringend") ? " [DRINGEND]" : ""}`;

  const intern = await resend.emails.send({
    from,
    to,
    subject: betreff,
    text,
    html,
    ...(emailGueltig ? { replyTo: d.email } : {}),
  });
  if (intern.error) {
    console.error("[anfrage] Versand fehlgeschlagen", intern.error);
    return Response.json({ ok: false, error: "Versand fehlgeschlagen" }, { status: 502 });
  }

  // Bestätigung an den Kunden (Fehler hier blockieren die Anfrage nicht)
  if (emailGueltig) {
    const hallo = `Guten Tag ${d.name},\n\nvielen Dank für Ihre Anfrage (${d.leistung}). Wir melden uns per ${d.rueckmeldung} bei Ihnen.\n\nFotos oder ein Video vom Problem können Sie uns gern per WhatsApp an ${site.phoneDisplay} schicken.\n\nViele Grüße\n${site.owner}\n${site.legalName}\n${site.address.street}, ${site.address.zip} ${site.address.city}\n${site.phoneDisplay}`;
    const best = await resend.emails.send({
      from,
      to: d.email,
      replyTo: site.email,
      subject: `Ihre Anfrage bei ${site.brand}`,
      text: hallo,
    });
    if (best.error) console.error("[anfrage] Bestätigung fehlgeschlagen", best.error);
  }

  return Response.json({ ok: true });
}
