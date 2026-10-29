/**
 * Bindet ein kurzes letztes Wort (bis 6 Zeichen) per geschütztem Leerzeichen an
 * das vorherige, damit es in Überschriften nie allein in der letzten Zeile steht
 * („Wann lohnt sich der Steuerkettenwechsel / noch?“).
 */
export function ohneWitwe(text: string): string {
  const i = text.lastIndexOf(" ");
  if (i < 0) return text;
  const letztes = text.slice(i + 1).replace(/[^\p{L}\p{N}]/gu, "");
  return letztes.length <= 6 ? `${text.slice(0, i)} ${text.slice(i + 1)}` : text;
}
