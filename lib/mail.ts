import { Resend } from "resend";
import { attributionRows, type SanitizedAttribution } from "@/lib/attribution";

/** Firmenname im Betreff – muss mit dem Kundennamen im Leadportal übereinstimmen (Abgleich liest ihn aus). */
export const FIRMA = "KFZ Gengenbach";
/** Projektbezeichnung in der Fußzeile jeder Lead-Mail */
const PROJEKT = "Website kfz-gengenbach.de";

const STANDARD_ABSENDER = "leads@reinkober-leadportal.com";

/** Nur die nackte Adresse, nie „Name <adresse>": Am Absender soll erkennbar sein, dass der Lead über reinkober kommt. */
function bareAddress(value: string | undefined): string {
  const raw = value?.trim();
  if (!raw) return STANDARD_ABSENDER;
  const match = raw.match(/<([^>]+)>/);
  return (match ? match[1] : raw).trim() || STANDARD_ABSENDER;
}

export function leadRecipients(): string[] {
  const list = (process.env.MAIL_TO || "info@kfz-gengenbach.de,leads@reinkober.agency")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  return Array.from(new Set(list));
}

export const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export type LeadMail = {
  id: string;
  name: string;
  telefon: string;
  email: string;
  rueckweg: string;
  /** Kurzbezeichnung im Mailkopf, z. B. Leistung */
  thema: string;
  dringend: boolean;
  antworten: [string, string][];
  attribution: SanitizedAttribution;
};

export function buildLeadMail(m: LeadMail): { subject: string; html: string; text: string } {
  const strich = (v: string) => v || "—";
  const tel = m.telefon.replace(/[^\d+]/g, "");
  const kontakt: [string, string][] = [
    ["Name", esc(m.name)],
    ["Telefon", `<a href="tel:${esc(tel)}">${esc(m.telefon)}</a>`],
    ["E-Mail", m.email ? `<a href="mailto:${esc(m.email)}">${esc(m.email)}</a>` : "—"],
    ["Rückmeldung per", esc(strich(m.rueckweg))],
  ];
  const inhalt: [string, string][] = m.antworten.map(([q, a]) => [q, esc(strich(a)).replace(/\n/g, "<br>")]);
  const herkunft: [string, string][] = attributionRows(m.attribution).map(([k, v]) => [k, esc(v)]);
  const zeit = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

  const block = (titel: string, rows: [string, string][]) => `
    <tr><td style="padding:20px 32px 0">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#1e5bd8">${esc(titel)}</p>
      <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e2e7ef">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e7ef;background:#f3f5f9;font-size:13px;font-weight:600;width:38%;vertical-align:top">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e7ef;font-size:14px;vertical-align:top">${v}</td></tr>`,
          )
          .join("")}
      </table>
    </td></tr>`;

  const html = `<!doctype html><html><body style="margin:0;background:#f3f5f9;font-family:Arial,Helvetica,sans-serif;color:#0d2340">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5f9;padding:24px 0"><tr><td align="center">
    <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:8px;overflow:hidden">
      <tr><td style="background:#0d2340;padding:20px 32px;color:#ffffff">
        <p style="margin:0;font-size:12px;color:#8fb0f0;font-weight:700;letter-spacing:.05em;text-transform:uppercase">Werkstatt-Anfrage${m.dringend ? " · DRINGEND" : ""}</p>
        <p style="margin:6px 0 0;font-size:20px;font-weight:700">${esc(m.name)}${m.thema ? ` · ${esc(m.thema)}` : ""}</p>
        <p style="margin:6px 0 0;font-size:12px;color:#c9d3e3">${esc(zeit)}</p>
      </td></tr>
      ${block("1. Kontaktdaten", kontakt)}
      ${block("2. Inhalt der Anfrage", inhalt)}
      ${block("3. Herkunft", herkunft)}
      <tr><td style="padding:28px 32px 24px">
        <p style="margin:0;font-size:11px;color:#9aa0a6;text-align:center">Dieser Lead wurde generiert durch <a href="https://reinkober.com" style="color:#9aa0a6">reinkober.com</a> &nbsp;·&nbsp; ${esc(PROJEKT)}</p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`;

  const zeilen = (rows: [string, string][]) => rows.map(([k, v]) => `${k}: ${strich(v)}`).join("\n");
  const text = [
    `Werkstatt-Anfrage${m.dringend ? " (DRINGEND)" : ""} – ${m.name}`,
    zeit,
    "",
    "1. KONTAKTDATEN",
    zeilen([
      ["Name", m.name],
      ["Telefon", m.telefon],
      ["E-Mail", m.email],
      ["Rückmeldung per", m.rueckweg],
    ]),
    "",
    "2. INHALT DER ANFRAGE",
    zeilen(m.antworten),
    "",
    "3. HERKUNFT",
    zeilen(attributionRows(m.attribution)),
    "",
    "—",
    `Dieser Lead wurde generiert durch reinkober.com · ${PROJEKT}`,
  ].join("\n");

  return { subject: `Neue Anfrage | ${FIRMA} - reinkober.com`, html, text };
}

export type MailErgebnis = { ok: true } | { ok: false; error: string };

/**
 * Versendet die interne Lead-Mail. Bis zu 3 Versuche; der Idempotenz-Schlüssel
 * (Lead-ID aus dem Browser) verhindert Doppelmails bei Doppelklick oder Wiederholung.
 */
export async function sendLeadMail(m: LeadMail): Promise<MailErgebnis> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return { ok: false, error: "RESEND_API_KEY fehlt" };
  const resend = new Resend(key);
  const mail = buildLeadMail(m);

  let letzterFehler = "unbekannt";
  for (let versuch = 1; versuch <= 3; versuch++) {
    try {
      const { error } = await resend.emails.send(
        {
          from: bareAddress(process.env.MAIL_FROM),
          to: leadRecipients(),
          subject: mail.subject,
          html: mail.html,
          text: mail.text,
          ...(m.email ? { replyTo: m.email } : {}),
        },
        { idempotencyKey: `anfrage-${m.id}` },
      );
      if (!error) return { ok: true };
      letzterFehler = `${error.name}: ${error.message}`;
      // Validierungsfehler werden durch Wiederholen nicht besser
      if (error.name === "validation_error" || error.name === "missing_required_field") break;
    } catch (e) {
      letzterFehler = e instanceof Error ? e.message : String(e);
    }
    if (versuch < 3) await new Promise((r) => setTimeout(r, 400 * versuch));
  }
  return { ok: false, error: letzterFehler };
}
