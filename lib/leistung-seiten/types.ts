/**
 * Ausbaustufe einer Leistungsseite (Template: app/leistungen/[slug]/page.tsx).
 * Reihenfolge auf der Seite: Umfang → [Symptome] → Ablauf → [Vergleich] → [Ampel] → [Wissen] → FAQ.
 * Alle Aussagen nur mit Faktenbasis aus lib/leistungen.ts / lib/site.ts oder öffentlicher Quelle.
 */
export type LeistungSeite = {
  /** Ein Satz über der Umfangsliste */
  umfangLead: string;
  /** Kurzes Etikett auf dem Bild */
  bildEtikett: { titel: string; text: string };
  /** „Woran Sie es merken“: Anzeichen als Checkliste, optional mit Warnkasten */
  symptome?: { kicker: string; titel: string; lead: string; punkte: string[]; warnung?: { titel: string; text: string } };
  /** Ersetzt die Absätze unter „So arbeiten wir“ (Standard: text aus lib/leistungen.ts) */
  arbeitsweise?: string[];
  /** Ablauf „So arbeiten wir“, 3–4 Schritte */
  ablauf: { titel: string; text: string }[];
  /** Gegenüberstellung in zwei Karten, z. B. „Instandsetzen oder tauschen?“ */
  vergleich?: {
    kicker: string;
    titel: string;
    lead: string;
    links: { titel: string; punkte: string[] };
    rechts: { titel: string; punkte: string[] };
    /** Zeichen in der Mitte zwischen den Karten, Standard „=“ (z. B. „oder“ bei einer Entscheidung) */
    mitte?: string;
    quelle?: { titel: string; url: string };
  };
  /** Einordnung der Befunde nach Dringlichkeit (Ampel) */
  ampel?: { titel: string; lead: string; stufen: { stufe: "rot" | "gelb" | "gruen"; titel: string; text: string; beispiel: string }[] };
  /** Kurzwissen als drei Karten */
  wissen?: { kicker: string; titel: string; karten: { titel: string; text: string }[] };
  /** Zusätzliche FAQ, werden an die FAQ aus lib/leistungen.ts angehängt */
  faq?: { q: string; a: string }[];
};
