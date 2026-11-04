/**
 * Bindet ein kurzes letztes Wort (bis 6 Zeichen) per geschütztem Leerzeichen an
 * das vorherige, damit es in Überschriften nie allein in der letzten Zeile steht
 * („Wann lohnt sich der Steuerkettenwechsel / noch?“).
 */
export function ohneWitwe(eingabe: string): string {
  const text = trenne(eingabe);
  const i = text.lastIndexOf(" ");
  if (i < 0) return text;
  const letztes = text.slice(i + 1).replace(/[^\p{L}\p{N}]/gu, "");
  // Nicht an ein langes Wort binden: das Paar passt sonst auf dem Handy nicht in eine Zeile
  const vorletztes = text.slice(text.lastIndexOf(" ", i - 1) + 1, i).replace(/\u00ad/g, "");
  if (letztes.length > 6 || vorletztes.length > 10) return text;
  return `${text.slice(0, i)}\u00a0${text.slice(i + 1)}`;
}

/** Entfernt **fett** und [Text](url) für reine Textausgaben (strukturierte Daten, Meta-Texte) */
export function ohneMarkdown(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}

/**
 * Feste Trennstellen (weiches Trennzeichen) für lange Fachwörter in schmalen
 * Kacheln und Überschriften. Die automatische Silbentrennung trennt sie falsch
 * („Motorin-standsetzung“), ohne Trennung brechen sie mitten im Wort um.
 */
const TRENNSTELLEN: Record<string, string> = {
  Motorinstandsetzung: "Motor\u00adinstand\u00adsetzung",
  Unfallinstandsetzung: "Unfall\u00adinstand\u00adsetzung",
  Achsvermessung: "Achs\u00advermessung",
  Geländewagen: "Gelände\u00adwagen",
  Zylinderkopfdichtung: "Zylinder\u00adkopf\u00addichtung",
  Steuerkettenwechsel: "Steuer\u00adketten\u00adwechsel",
  Datenschutzerklärung: "Datenschutz\u00aderklärung",
  Fahrzeugverkauf: "Fahrzeug\u00adverkauf",
  Reifenservice: "Reifen\u00adservice",
  Harmersbachtal: "Harmersbach\u00adtal",
  Fehlerspeicher: "Fehler\u00adspeicher",
  Firmenfahrzeuge: "Firmen\u00adfahrzeuge",
  Werkstatttermin: "Werkstatt\u00adtermin",
  Herstellervorgaben: "Hersteller\u00advorgaben",
  Gebrauchtwagen: "Gebraucht\u00adwagen",
  Transporter: "Trans\u00adporter",
};
const TRENN_RX = new RegExp(Object.keys(TRENNSTELLEN).join("|"), "g");

export function trenne(text: string): string {
  return text.replace(TRENN_RX, (w) => TRENNSTELLEN[w] ?? w);
}
