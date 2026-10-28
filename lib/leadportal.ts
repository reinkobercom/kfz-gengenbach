import type { SanitizedAttribution } from "@/lib/attribution";

/** Alle Formulare der Website. Jedes neue Formular braucht unten eine Portal-Entscheidung. */
export type FormType = "anfrage";

type PortalZiel = { slugEnv: string; secretEnv: string };

/**
 * Zuordnung Formular → Quelle im reinkober-Leadportal.
 * `Record<FormType, …>` erzwingt bei jedem neuen Formular eine Entscheidung zur
 * Compile-Zeit (Vorfall sozialrecht-experten, 09/2026: Weiterleitung war pro
 * Route optional und fehlte bei 5 von 7 Formularen). `null` nur mit Begründung.
 */
const PORTAL_ZIELE: Record<FormType, PortalZiel | null> = {
  anfrage: { slugEnv: "LEADPORTAL_SLUG_ANFRAGE", secretEnv: "LEADPORTAL_SECRET_ANFRAGE" },
};

export type PortalErgebnis =
  | { status: "GESENDET" }
  | { status: "NICHT_VORGESEHEN" }
  | { status: "FEHLER"; error: string };

export async function forwardLeadToPortal(lead: {
  id: string;
  formType: FormType;
  name: string;
  telefon: string;
  email: string;
  rueckweg: string;
  antworten: [string, string][];
  attribution: SanitizedAttribution;
}): Promise<PortalErgebnis> {
  const ziel = PORTAL_ZIELE[lead.formType];
  if (!ziel) return { status: "NICHT_VORGESEHEN" };

  const slug = process.env[ziel.slugEnv]?.trim();
  const secret = process.env[ziel.secretEnv]?.trim();
  // Fehlende Konfiguration zählt als Fehler, nicht als „übersprungen": Sie soll auffallen.
  if (!slug || !secret) return { status: "FEHLER", error: `${ziel.slugEnv}/${ziel.secretEnv} nicht gesetzt` };

  const base = (process.env.LEADPORTAL_BASE_URL ?? "https://reinkober-leadportal.com/api/webhook").replace(/\/$/, "");
  const a = lead.attribution;
  const payload = {
    lead_id: lead.id,
    name: lead.name,
    telefonnummer: lead.telefon,
    e_mail: lead.email,
    rueckweg: lead.rueckweg,
    // Frage als Feldname, damit das Portal die Antworten lesbar zeigt
    ...Object.fromEntries(lead.antworten),
    utm_source: a.utmSource ?? "",
    utm_medium: a.utmMedium ?? "",
    utm_campaign: a.utmCampaign ?? "",
    utm_term: a.utmTerm ?? "",
    utm_content: a.utmContent ?? "",
    gclid: a.gclid ?? "",
    fbclid: a.fbclid ?? "",
    referrer: a.referrer ?? "",
    landing_page: a.landingPath ?? "",
  };

  try {
    const res = await fetch(`${base}/${encodeURIComponent(slug)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
      // Weiterleitungen nicht folgen: aus POST würde sonst GET, und ein 200 täuscht Erfolg vor.
      redirect: "manual",
    });
    if (res.status >= 300 || res.type === "opaqueredirect") return { status: "FEHLER", error: `HTTP ${res.status || "Weiterleitung"}` };
    return { status: "GESENDET" };
  } catch (error) {
    return { status: "FEHLER", error: error instanceof Error ? error.message : String(error) };
  }
}
