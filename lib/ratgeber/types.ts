/**
 * Datenformat eines Ratgeber-Artikels. Aufbau nach der Blog-Artikel-Architektur:
 * Answer-Block → Kernpunkte → eigenständige H2-Abschnitte → Zwischen-CTA →
 * FAQ → Fazit → Quellen → weiterführende Themen → Abschlussbox.
 *
 * Inline-Formatierung in allen Texten (Absätze, Listen, Tabellenzellen):
 *   **fett**            → <strong>
 *   [Linktext](/pfad)    → interner Link (oder https://… für externe Quellen)
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "table";
      /** Kurzer Satz über der Tabelle, was sie zeigt (mit Stand/Quelle) */
      caption: string;
      head: string[];
      rows: string[][];
    }
  /** Hervorgehobener Kasten, z. B. „Sofort anhalten, wenn …" */
  | { type: "hinweis"; titel: string; text: string };

export type Abschnitt = {
  /** Stabile ID aus dem Titel abgeleitet, z. B. "was-kostet-eine-achsvermessung" */
  id: string;
  /** H2, wo die Suche eine Frage ist als Frage formuliert */
  titel: string;
  blocks: Block[];
};

export type Kategorie = "Motor & Antrieb" | "Prüfung & Wartung" | "Reifen & Fahrwerk";

export type Artikel = {
  slug: string;
  kategorie: Kategorie;
  /** Hauptkeyword, nur zur Dokumentation */
  keyword: string;
  /** Gemessenes Suchvolumen (SISTRIX, DE, Monat), nur zur Dokumentation */
  suchvolumen: string;
  /** H1, max. 70 Zeichen */
  titel: string;
  /** <title>, max. ~60 Zeichen */
  metaTitle: string;
  /** max. ~155 Zeichen */
  metaDescription: string;
  /** Kurzer Teaser für die Übersicht, 1–2 Sätze */
  teaser: string;
  /** Slug der Leistungsseite, zu der der Artikel führt (lib/leistungen.ts) */
  leistung: string;
  /** Titelbild; ohne Angabe wird das Bild der Leistungsseite verwendet */
  bild?: { src: string; alt: string };
  datePublished: string;
  dateModified: string;
  /** Answer-Block, 40–60 Wörter, beantwortet die Suchfrage direkt */
  antwort: string;
  /** 3–5 Kernpunkte */
  kernpunkte: string[];
  /** 5–8 Abschnitte */
  abschnitte: Abschnitt[];
  /** Zwischen-CTA, erscheint nach dem Abschnitt mit diesem Index (0-basiert, ~40 %) */
  zwischenCta: { nachAbschnitt: number; titel: string; text: string };
  /** 4–6 Fragen */
  faq: { q: string; a: string }[];
  /** 60–100 Wörter */
  fazit: string;
  /** Öffentliche Quellen für Zahlen und Rechtsangaben */
  quellen: { titel: string; url: string }[];
};
