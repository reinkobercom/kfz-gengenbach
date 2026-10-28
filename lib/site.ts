/**
 * Zentrale Stammdaten. Änderungen hier wirken auf alle Seiten,
 * auf das strukturierte Datenschema (JSON-LD), Impressum und Footer.
 */
export const site = {
  url: "https://www.kfz-gengenbach.de",
  brand: "KFZ Gengenbach",
  legalName: "KFZ Technik Michael Jakob",
  owner: "Michael Jakob",
  tagline: "Kfz-Technik & Service",
  phone: "+49 1516 7844565",
  phoneDisplay: "01516 7844565",
  whatsapp: "4915167844565",
  email: "info@kfz-gengenbach.de",
  address: {
    street: "Am Winzerkeller 1",
    zip: "77723",
    city: "Gengenbach",
    region: "Baden-Württemberg",
    country: "DE",
  },
  // Koordinaten Gengenbach (Ortsmitte). Für das Schema bitte durch die exakte
  // Werkstatt-Position ersetzen, sobald das Google-Unternehmensprofil steht.
  geo: { lat: 48.4044, lng: 8.0153 },
  hours: [
    { days: "Montag bis Freitag", short: "Mo–Fr", opens: "08:00", closes: "17:00", schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { days: "Samstag", short: "Sa", opens: "08:00", closes: "13:00", schema: ["Saturday"] },
  ],
  // Pflichtangaben Impressum für zulassungspflichtiges Handwerk.
  // Leere Felder werden nicht angezeigt – bitte vor Livegang ergänzen.
  impressum: {
    ustId: "", // z. B. "DE123456789"
    berufsbezeichnung: "", // z. B. "Kfz-Techniker-Meister, verliehen in Deutschland"
    kammer: "", // z. B. "Handwerkskammer Freiburg, Bismarckallee 6, 79098 Freiburg"
    handwerksrolle: "", // Eintragungsnummer der Handwerksrolle
  },
  // Empfänger des Anfrageformulars (Server-seitig, per ENV überschreibbar)
  leadRecipients: ["info@kfz-gengenbach.de", "leads@reinkober.agency"],
} as const;

export const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const waHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`,
)}`;

/** Komplettes Einzugsgebiet laut Onboarding */
export const einzugsgebiet = [
  "Gengenbach",
  "Schwaibach",
  "Reichenbach",
  "Bermersbach",
  "Fußbach",
  "Berghaupten",
  "Ohlsbach",
  "Ortenberg",
  "Offenburg",
  "Durbach",
  "Ebersweier",
  "Hohberg",
  "Biberach (Baden)",
  "Prinzbach",
  "Zell am Harmersbach",
  "Unterharmersbach",
  "Unterentersbach",
  "Oberentersbach",
  "Nordrach",
  "Oberharmersbach",
  "Steinach",
] as const;
