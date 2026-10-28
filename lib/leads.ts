import { randomUUID } from "node:crypto";
import { sanitizeAttribution } from "@/lib/attribution";
import { forwardLeadToPortal, type FormType } from "@/lib/leadportal";
import { sendLeadMail } from "@/lib/mail";

/**
 * Einziger Weg jeder Anfrage: interne Mail und Leadportal parallel.
 * Kein Formular ruft Mail oder Portal selbst auf.
 *
 * Bewusst ohne Datenbank (wie Haus Volking): Der Lead ist zugestellt, sobald
 * ihn ein Mensch sieht, also per Mail oder im Portal. Absicherung:
 *   - Mail mit bis zu 3 Versuchen und Idempotenz-Schlüssel (lib/mail.ts)
 *   - Leadportal-Abgleich vergleicht täglich Resend-Mails mit Portal-Eingängen
 *     und meldet Differenzen an die Agentur
 *   - scheitern Mail und Portal, bekommt der Besucher eine Fehlermeldung mit
 *     Telefonnummer, nie eine falsche Erfolgsmeldung
 *
 * Keine Bestätigungsmail an den Kunden (Entscheidung 28.10.2026).
 */

export type LeadInput = {
  requestId: string | null;
  formType: FormType;
  name: string;
  telefon: string;
  email: string;
  rueckweg: string;
  thema: string;
  dringend: boolean;
  /** Frage → Antwort in Reihenfolge des Formulars */
  antworten: [string, string][];
  attribution: unknown;
};

export async function processLead(input: LeadInput): Promise<{ ok: boolean; id: string }> {
  const id = input.requestId ?? randomUUID();
  const attribution = sanitizeAttribution(input.attribution);

  const [mail, portal] = await Promise.all([
    sendLeadMail({ id, ...input, attribution }),
    forwardLeadToPortal({ id, ...input, attribution }),
  ]);

  // Nur IDs und Status ins Log, keine Personendaten
  if (!mail.ok) console.error(`[LEAD-MAIL-FEHLER] ${id} (${input.formType}): ${mail.error}`);
  if (portal.status === "FEHLER") console.error(`[LEADPORTAL-FEHLER] ${id} (${input.formType}): ${portal.error}`);

  return { ok: mail.ok || portal.status === "GESENDET", id };
}
