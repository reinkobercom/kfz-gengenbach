"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { getAttributionPayload } from "@/lib/attribution-client";
import { anfrageLeistungen } from "@/lib/leistungen";
import { Turnstile, turnstileAktiv } from "./Turnstile";
import { einzugsgebiet, site, telHref, waHref } from "@/lib/site";

type Daten = {
  leistung: string;
  fahrzeugTyp: string;
  marke: string;
  modell: string;
  baujahr: string;
  kilometer: string;
  suche: string;
  dringlichkeit: string;
  ort: string;
  beschreibung: string;
  name: string;
  telefon: string;
  email: string;
  rueckmeldung: string;
  datenschutz: boolean;
  website: string; // Honeypot
};

const fahrzeugTypen = ["Pkw", "SUV / Geländewagen", "Transporter bis 4,5 t"];
const dringlichkeiten = [
  { v: "dringend", l: "Dringend", d: "Fahrzeug fährt nicht oder kaum" },
  { v: "woche", l: "Diese Woche", d: "Sollte bald erledigt sein" },
  { v: "bald", l: "In 2–3 Wochen", d: "Termin mit etwas Vorlauf" },
  { v: "flexibel", l: "Flexibel", d: "Kein Zeitdruck" },
];
const rueckmeldewege = ["WhatsApp", "Anruf", "E-Mail"];
const marken = [
  "Audi", "BMW", "Citroën", "Dacia", "Fiat", "Ford", "Hyundai", "Kia", "Mazda", "Mercedes-Benz",
  "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Renault", "Seat", "Škoda", "Smart", "Subaru",
  "Suzuki", "Tesla", "Toyota", "Volvo", "VW",
];
const schritte = ["Leistung", "Fahrzeug", "Termin", "Kontakt"];

export function Konfigurator({
  defaultLeistung,
  defaultFahrzeugTyp,
  defaultOrt,
  titel = "Was dürfen wir für Sie tun?",
  id = "anfrage",
}: {
  defaultLeistung?: string;
  defaultFahrzeugTyp?: string;
  defaultOrt?: string;
  titel?: string;
  id?: string;
}) {
  const [step, setStep] = useState(defaultLeistung ? 1 : 0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [fehler, setFehler] = useState<string | null>(null);
  const [d, setD] = useState<Daten>({
    leistung: defaultLeistung ?? "",
    fahrzeugTyp: defaultFahrzeugTyp ?? "Pkw",
    marke: "",
    modell: "",
    baujahr: "",
    kilometer: "",
    suche: "",
    dringlichkeit: "",
    ort: defaultOrt ?? "",
    beschreibung: "",
    name: "",
    telefon: "",
    email: "",
    rueckmeldung: "WhatsApp",
    datenschutz: false,
    website: "",
  });
  const startedAt = useRef<number>(0);
  // Stabile ID je Anfrage: doppeltes Absenden erzeugt keine zweite Mail (Idempotenz)
  const requestId = useRef<string>("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  // Letzter fokussierter Zustand: Fokus nur bei echtem Wechsel, nie beim ersten Rendern
  // (sonst springt die Seite zum Formular, wenn es weiter unten steht)
  const letzterStand = useRef(`${step}-${status}`);

  useEffect(() => {
    startedAt.current = Date.now();
    requestId.current = crypto.randomUUID();
  }, []);

  // Fokus beim Schrittwechsel auf die Überschrift setzen (Tastatur & Screenreader)
  useEffect(() => {
    const stand = `${step}-${status}`;
    if (letzterStand.current === stand) return;
    letzterStand.current = stand;
    panel.current?.querySelector<HTMLElement>("[data-step-title]")?.focus({ preventScroll: true });
    panel.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [step, status]);

  const set = <K extends keyof Daten>(k: K, v: Daten[K]) => setD((p) => ({ ...p, [k]: v }));
  const istVerkauf = d.leistung === "verkauf";
  const leistungLabel = anfrageLeistungen.find((l) => l.key === d.leistung)?.label ?? "";

  const pruefen = (): string | null => {
    if (step === 0 && !d.leistung) return "Bitte wählen Sie eine Leistung.";
    if (step === 1) {
      if (istVerkauf && d.suche.trim().length < 3) return "Bitte beschreiben Sie kurz, was Sie suchen.";
      if (!istVerkauf && !d.marke.trim()) return "Bitte geben Sie die Marke Ihres Fahrzeugs an.";
    }
    if (step === 2) {
      if (!d.dringlichkeit) return "Bitte wählen Sie, wie dringend es ist.";
      if (!d.ort) return "Bitte wählen Sie Ihren Wohnort.";
    }
    if (step === 3) {
      if (d.name.trim().length < 2) return "Bitte geben Sie Ihren Namen an.";
      if (d.telefon.replace(/\D/g, "").length < 6) return "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.";
      if (d.rueckmeldung === "E-Mail" && !/^\S+@\S+\.\S+$/.test(d.email)) return "Für eine Antwort per E-Mail brauchen wir Ihre E-Mail-Adresse.";
      if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) return "Die E-Mail-Adresse scheint unvollständig zu sein.";
      if (!d.datenschutz) return "Bitte bestätigen Sie die Datenschutzhinweise.";
      if (turnstileAktiv && !turnstileToken) return "Einen Moment bitte, die Sicherheitsprüfung läuft noch.";
    }
    return null;
  };

  const weiter = () => {
    const f = pruefen();
    setFehler(f);
    if (f) return;
    setStep((s) => Math.min(s + 1, 3));
  };

  const senden = async (e: React.FormEvent) => {
    e.preventDefault();
    const f = pruefen();
    setFehler(f);
    if (f) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...d,
          dauer: Date.now() - startedAt.current,
          requestId: requestId.current,
          turnstileToken,
          attribution: getAttributionPayload(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("anfrage_gesendet", { leistung: d.leistung, ort: d.ort });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const waText = `Hallo, ich habe gerade eine Anfrage über die Website geschickt (${leistungLabel}${
    d.marke ? `, ${d.marke} ${d.modell}` : ""
  }). Viele Grüße, ${d.name}`;

  return (
    <div
      id={id}
      ref={panel}
      className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_#e2e7ef,0_24px_60px_-28px_rgba(13,35,64,0.35)] ring-1 ring-line"
    >
      {/* Kopf im Stil der Logo-Leiste: blau | navy, Fortschritt im navy-Teil */}
      <div className="flex items-stretch text-white">
        <div className="grid place-items-center bg-blue px-5 font-display text-lg font-bold tracking-wide">Anfrage</div>
        <div className="flex-1 bg-navy px-5 pb-3 pt-3.5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-white/80">
              {status === "done" ? "Gesendet" : `Schritt ${step + 1} von 4: ${schritte[step]}`}
            </span>
            <span className="hidden text-sm text-white/80 sm:inline">ohne Preisangaben, unverbindlich</span>
          </div>
          <div className="mt-2.5 flex gap-1" aria-hidden="true">
            {schritte.map((s, i) => (
              <span
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  status === "done" || i <= step ? "bg-blue" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {status === "done" ? (
        <div className="p-6 sm:p-8">
          <h2 tabIndex={-1} data-step-title className="font-display text-3xl outline-none sm:text-4xl">
            Danke, Ihre Anfrage ist angekommen.
          </h2>
          <p className="mt-3 max-w-prose text-muted">
            Wir melden uns per {d.rueckmeldung} bei Ihnen
            {d.dringlichkeit === "dringend" ? ", bei dringenden Fällen so schnell es geht" : ""}. Möchten Sie direkt Fotos
            oder ein Video vom Problem schicken? Dann am einfachsten per WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={waHref(waText)} target="_blank" rel="noopener">
              Fotos per WhatsApp senden
            </a>
            <a className="btn btn-ghost" href={telHref}>
              {site.phoneDisplay} anrufen
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={senden} noValidate className="p-5 sm:p-7">
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" value={d.website} onChange={(e) => set("website", e.target.value)} />
            </label>
          </div>

          {step === 0 && (
            <fieldset>
              <legend tabIndex={-1} data-step-title className="font-display text-2xl outline-none sm:text-[1.75rem]">
                {titel}
              </legend>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {anfrageLeistungen.map((l) => {
                  const aktiv = d.leistung === l.key;
                  return (
                    <button
                      key={l.key}
                      type="button"
                      aria-pressed={aktiv}
                      onClick={() => {
                        set("leistung", l.key);
                        setFehler(null);
                        track("anfrage_start", { leistung: l.key });
                        setStep(1);
                      }}
                      className={`min-h-[3.75rem] rounded-[10px] border-[1.5px] px-3.5 py-3 text-left text-[0.95rem] font-semibold leading-snug transition-colors ${
                        aktiv ? "border-blue bg-blue-tint" : "border-line hover:border-navy"
                      }`}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset className="space-y-4">
              <legend tabIndex={-1} data-step-title className="font-display text-2xl outline-none sm:text-[1.75rem]">
                {istVerkauf ? "Was für ein Fahrzeug suchen Sie?" : "Um welches Fahrzeug geht es?"}
              </legend>
              <p className="-mt-1 text-sm text-muted">
                {leistungLabel}{" "}
                <button type="button" className="font-semibold text-blue underline-offset-2 hover:underline" onClick={() => setStep(0)}>
                  ändern
                </button>
              </p>
              {istVerkauf ? (
                <div>
                  <label className="label" htmlFor={`${id}-suche`}>
                    Gesuchtes Fahrzeug
                  </label>
                  <textarea
                    id={`${id}-suche`}
                    rows={4}
                    className="field"
                    placeholder="z. B. Kombi, Diesel, ab Baujahr 2018, für Familie und Anhänger"
                    value={d.suche}
                    onChange={(e) => set("suche", e.target.value)}
                  />
                </div>
              ) : (
                <>
                  <div role="radiogroup" aria-label="Fahrzeugtyp" className="grid grid-cols-3 gap-2">
                    {fahrzeugTypen.map((t) => (
                      <button
                        key={t}
                        type="button"
                        role="radio"
                        aria-checked={d.fahrzeugTyp === t}
                        onClick={() => set("fahrzeugTyp", t)}
                        className={`min-h-12 rounded-[10px] border-[1.5px] px-2 text-sm font-semibold leading-tight ${
                          d.fahrzeugTyp === t ? "border-blue bg-blue-tint" : "border-line hover:border-navy"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="label" htmlFor={`${id}-marke`}>
                        Marke
                      </label>
                      <input
                        id={`${id}-marke`}
                        className="field"
                        list={`${id}-marken`}
                        autoComplete="off"
                        placeholder="z. B. VW"
                        value={d.marke}
                        onChange={(e) => set("marke", e.target.value)}
                      />
                      <datalist id={`${id}-marken`}>
                        {marken.map((m) => (
                          <option key={m} value={m} />
                        ))}
                      </datalist>
                    </div>
                    <div>
                      <label className="label" htmlFor={`${id}-modell`}>
                        Modell <span className="font-normal text-muted">(optional)</span>
                      </label>
                      <input
                        id={`${id}-modell`}
                        className="field"
                        placeholder="z. B. Golf 7, Sprinter"
                        value={d.modell}
                        onChange={(e) => set("modell", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor={`${id}-baujahr`}>
                        Baujahr <span className="font-normal text-muted">(optional)</span>
                      </label>
                      <input
                        id={`${id}-baujahr`}
                        className="field"
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="z. B. 2016"
                        value={d.baujahr}
                        onChange={(e) => set("baujahr", e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor={`${id}-km`}>
                        Kilometerstand <span className="font-normal text-muted">(optional)</span>
                      </label>
                      <input
                        id={`${id}-km`}
                        className="field"
                        inputMode="numeric"
                        placeholder="z. B. 145.000"
                        value={d.kilometer}
                        onChange={(e) => set("kilometer", e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="space-y-5">
              <legend tabIndex={-1} data-step-title className="font-display text-2xl outline-none sm:text-[1.75rem]">
                Wie dringend ist es?
              </legend>
              <div role="radiogroup" aria-label="Dringlichkeit" className="grid grid-cols-2 gap-2.5">
                {dringlichkeiten.map((x) => (
                  <button
                    key={x.v}
                    type="button"
                    role="radio"
                    aria-checked={d.dringlichkeit === x.v}
                    onClick={() => set("dringlichkeit", x.v)}
                    className={`rounded-[10px] border-[1.5px] px-3.5 py-3 text-left ${
                      d.dringlichkeit === x.v ? "border-blue bg-blue-tint" : "border-line hover:border-navy"
                    }`}
                  >
                    <span className="block font-semibold">{x.l}</span>
                    <span className="block text-sm leading-snug text-muted">{x.d}</span>
                  </button>
                ))}
              </div>
              <div>
                <label className="label" htmlFor={`${id}-ort`}>
                  Ihr Wohnort
                </label>
                <select id={`${id}-ort`} className="field" value={d.ort} onChange={(e) => set("ort", e.target.value)}>
                  <option value="">Bitte wählen</option>
                  {einzugsgebiet.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                  <option>Anderer Ort</option>
                </select>
              </div>
              <div>
                <label className="label" htmlFor={`${id}-beschreibung`}>
                  Was ist los? <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id={`${id}-beschreibung`}
                  rows={3}
                  className="field"
                  placeholder="z. B. Motorkontrollleuchte an, ruckelt beim Beschleunigen"
                  value={d.beschreibung}
                  onChange={(e) => set("beschreibung", e.target.value)}
                />
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="space-y-4">
              <legend tabIndex={-1} data-step-title className="font-display text-2xl outline-none sm:text-[1.75rem]">
                Wie erreichen wir Sie?
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="label" htmlFor={`${id}-name`}>
                    Name
                  </label>
                  <input id={`${id}-name`} className="field" autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} />
                </div>
                <div>
                  <label className="label" htmlFor={`${id}-tel`}>
                    Telefon / WhatsApp
                  </label>
                  <input
                    id={`${id}-tel`}
                    className="field"
                    type="tel"
                    autoComplete="tel"
                    value={d.telefon}
                    onChange={(e) => set("telefon", e.target.value)}
                  />
                </div>
                <div>
                  <label className="label" htmlFor={`${id}-email`}>
                    E-Mail <span className="font-normal text-muted">{d.rueckmeldung === "E-Mail" ? "" : "(optional)"}</span>
                  </label>
                  <input
                    id={`${id}-email`}
                    className="field"
                    type="email"
                    autoComplete="email"
                    value={d.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <span className="label" id={`${id}-rm`}>
                  Rückmeldung bevorzugt per
                </span>
                <div role="radiogroup" aria-labelledby={`${id}-rm`} className="grid grid-cols-3 gap-2">
                  {rueckmeldewege.map((w) => (
                    <button
                      key={w}
                      type="button"
                      role="radio"
                      aria-checked={d.rueckmeldung === w}
                      onClick={() => set("rueckmeldung", w)}
                      className={`min-h-12 rounded-[10px] border-[1.5px] text-sm font-semibold ${
                        d.rueckmeldung === w ? "border-blue bg-blue-tint" : "border-line hover:border-navy"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-3 text-sm leading-snug text-muted">
                <input
                  type="checkbox"
                  className="mt-0.5 size-5 shrink-0 accent-blue"
                  checked={d.datenschutz}
                  onChange={(e) => set("datenschutz", e.target.checked)}
                />
                <span>
                  Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Details in der{" "}
                  <Link href="/datenschutz" className="font-semibold text-navy underline underline-offset-2">
                    Datenschutzerklärung
                  </Link>
                  .
                </span>
              </label>
              <Turnstile onToken={setTurnstileToken} />
            </fieldset>
          )}

          <div aria-live="polite" className="min-h-6">
            {fehler && <p className="mt-4 text-sm font-semibold text-[#b42318]">{fehler}</p>}
            {status === "error" && (
              <p className="mt-4 text-sm font-semibold text-[#b42318]">
                Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut, rufen Sie uns an unter{" "}
                <a className="underline tabular-nums" href={telHref}>
                  {site.phoneDisplay}
                </a>{" "}
                oder schreiben Sie per{" "}
                <a className="underline" href={waHref()} target="_blank" rel="noopener">
                  WhatsApp
                </a>
                .
              </p>
            )}
          </div>

          {step > 0 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setFehler(null);
                  setStep((s) => Math.max(0, s - 1));
                }}
                className="min-h-12 px-1 font-semibold text-muted hover:text-navy"
              >
                Zurück
              </button>
              {step < 3 ? (
                <button key="weiter" type="button" onClick={weiter} className="btn btn-primary min-w-40">
                  Weiter
                </button>
              ) : (
                <button key="senden" type="submit" disabled={status === "sending"} className="btn btn-primary min-w-48 disabled:opacity-60">
                  {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
                </button>
              )}
            </div>
          )}
          {step === 0 && (
            <p className="mt-4 text-sm text-muted">
              Lieber direkt?{" "}
              <a className="font-semibold text-navy underline underline-offset-2" href={waHref()} target="_blank" rel="noopener">
                WhatsApp
              </a>{" "}
              oder{" "}
              <a className="font-semibold text-navy underline underline-offset-2" href={telHref}>
                {site.phoneDisplay}
              </a>
            </p>
          )}
        </form>
      )}
    </div>
  );
}
