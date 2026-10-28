import { getLeistung } from "../leistungen";
import { artikel as achsvermessung } from "./achsvermessung-kosten";
import { artikel as steuerkette } from "./steuerkette-wechseln-kosten";
import { artikel as tuev } from "./tuev-abgelaufen-strafe";
import type { Artikel, Kategorie } from "./types";
import { artikel as zylinderkopfdichtung } from "./zylinderkopfdichtung-defekt";

export type { Artikel, Abschnitt, Block, Kategorie } from "./types";

/** Reihenfolge = Reihenfolge in Übersicht und Menü */
export const artikelListe: Artikel[] = [steuerkette, zylinderkopfdichtung, tuev, achsvermessung];

export const kategorien: Kategorie[] = ["Motor & Antrieb", "Prüfung & Wartung", "Reifen & Fahrwerk"];

export const getArtikel = (slug: string) => artikelListe.find((a) => a.slug === slug);

/** Titelbild des Artikels, sonst das Bild der verknüpften Leistung */
export const artikelBild = (a: Artikel) => a.bild ?? getLeistung(a.leistung)?.image;

/** Schlanke Einträge für Menü und Footer (ohne Artikeltext im Client-Bundle) */
export const artikelNav = () =>
  artikelListe.map((a) => ({ slug: a.slug, titel: a.titel, kategorie: a.kategorie, teaser: a.teaser }));

/** Grobe Lesezeit aus allen Texten des Artikels */
export function lesezeit(a: Artikel): number {
  const texte = [
    a.antwort,
    ...a.kernpunkte,
    ...a.abschnitte.flatMap((s) =>
      s.blocks.flatMap((b) => {
        switch (b.type) {
          case "p":
          case "h3":
            return [b.text];
          case "ul":
          case "ol":
            return b.items;
          case "table":
            return [b.caption, ...b.head, ...b.rows.flat()];
          case "hinweis":
            return [b.titel, b.text];
        }
      }),
    ),
    ...a.faq.flatMap((f) => [f.q, f.a]),
    a.fazit,
  ];
  const woerter = texte.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(woerter / 200));
}
