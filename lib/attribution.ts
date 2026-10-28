export type AttributionPayload = {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  gclid?: string
  fbclid?: string
  referrer?: string
  landingPath?: string
  pagePath?: string
  device?: string
}

export type SanitizedAttribution = {
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  utmTerm: string | null
  utmContent: string | null
  gclid: string | null
  fbclid: string | null
  referrer: string | null
  landingPath: string | null
  pagePath: string | null
  device: string | null
  /** Abgeleitete Quelle: utm_source, sonst gclid → google, fbclid → facebook, sonst Referrer-Host */
  source: string
}

const stripControl = (s: string) => s.replace(/[\x00-\x1F\x7F]/g, "")

function cleanField(value: unknown, maxLen = 200): string | null {
  if (typeof value !== "string") return null
  const cleaned = stripControl(value).trim().slice(0, maxLen)
  return cleaned.length > 0 ? cleaned : null
}

function hostOf(referrer: string | null): string | null {
  if (!referrer) return null
  try {
    return new URL(referrer).hostname.toLowerCase()
  } catch {
    return null
  }
}

export function sanitizeAttribution(raw: unknown): SanitizedAttribution {
  const a = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>
  const fields = {
    utmSource: cleanField(a.utmSource),
    utmMedium: cleanField(a.utmMedium),
    utmCampaign: cleanField(a.utmCampaign),
    utmTerm: cleanField(a.utmTerm),
    utmContent: cleanField(a.utmContent),
    gclid: cleanField(a.gclid),
    fbclid: cleanField(a.fbclid),
    referrer: cleanField(a.referrer, 500),
    landingPath: cleanField(a.landingPath, 500),
    pagePath: cleanField(a.pagePath, 500),
    device: cleanField(a.device, 20),
  }
  return { ...fields, source: deriveSource(fields) }
}

export function deriveSource(a: { utmSource: string | null; gclid: string | null; fbclid: string | null; referrer: string | null }): string {
  if (a.utmSource) return a.utmSource
  if (a.gclid) return "google (gclid)"
  if (a.fbclid) return "facebook (fbclid)"
  const host = hostOf(a.referrer)
  if (host) return host
  return "direkt"
}

export const SOURCE_LABELS: Record<string, string> = {
  google: "Google",
  facebook: "Facebook",
  instagram: "Instagram",
  direkt: "Direkt",
}

/** Block 3 der Lead-Mail: immer alle sieben Felder, „—“ wenn leer. */
export function attributionRows(a: SanitizedAttribution): [string, string][] {
  const v = (x: string | null) => x ?? "—"
  return [
    ["Quelle (utm_source)", a.utmSource ?? (a.gclid ? "google (gclid)" : a.fbclid ? "facebook (fbclid)" : "—")],
    ["Medium (utm_medium)", v(a.utmMedium)],
    ["Kampagne (utm_campaign)", v(a.utmCampaign)],
    ["Keyword (utm_term)", v(a.utmTerm)],
    ["Anzeige (utm_content)", v(a.utmContent)],
    ["Referrer", v(a.referrer)],
    ["Einstiegsseite", v(a.landingPath)],
    ["Formular-Seite", v(a.pagePath)],
    ["Gerät", v(a.device)],
  ]
}
