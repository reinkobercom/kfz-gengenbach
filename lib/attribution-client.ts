import type { AttributionPayload } from "@/lib/attribution"

const STORAGE_KEY = "kfzg_attribution"
type Stored = Omit<AttributionPayload, "pagePath" | "device">

const KEYS = [
  ["utm_source", "utmSource"],
  ["utm_medium", "utmMedium"],
  ["utm_campaign", "utmCampaign"],
  ["utm_term", "utmTerm"],
  ["utm_content", "utmContent"],
  ["gclid", "gclid"],
  ["fbclid", "fbclid"],
] as const

/** First-Touch in sessionStorage – kein Cookie, keine Übertragung vor dem Absenden. */
export function captureAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search)
    const fromUrl: Stored = {}
    for (const [param, key] of KEYS) {
      const value = params.get(param)
      if (value) fromUrl[key] = value
    }
    const hasCampaign = Object.keys(fromUrl).length > 0
    const existing = sessionStorage.getItem(STORAGE_KEY)
    if (existing && !hasCampaign) return

    let referrer: string | undefined
    if (document.referrer) {
      try {
        if (new URL(document.referrer).hostname !== window.location.hostname) referrer = document.referrer
      } catch {
        // ungültig – ignorieren
      }
    }
    const prev: Stored = existing ? JSON.parse(existing) : {}
    const data: Stored = {
      ...fromUrl,
      referrer: referrer ?? prev.referrer,
      landingPath: hasCampaign ? window.location.pathname : (prev.landingPath ?? window.location.pathname),
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage gesperrt
  }
}

export function getAttributionPayload(): AttributionPayload {
  let stored: Stored = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}")
  } catch {
    // leer weitermachen
  }
  const width = window.innerWidth
  return {
    ...stored,
    pagePath: window.location.pathname,
    device: width < 768 ? "Mobile" : width < 1024 ? "Tablet" : "Desktop",
  }
}
