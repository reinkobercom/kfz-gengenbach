import { leistungen } from "./leistungen";

/** Gruppierung der Leistungen im Megamenü. Jede Leistung muss genau einmal vorkommen. */
const LEISTUNG_GRUPPEN: { titel: string; slugs: string[] }[] = [
  { titel: "Wartung & Prüfung", slugs: ["inspektion-wartung", "hu-au", "reifenservice-achsvermessung"] },
  { titel: "Motor & Reparatur", slugs: ["motorinstandsetzung", "reparatur-diagnose", "transporter-sprinter"] },
  { titel: "Karosserie & mehr", slugs: ["karosserie-unfallinstandsetzung", "lackierung-smart-repair", "fahrzeugverkauf"] },
];

export type NavLink = { href: string; label: string; text?: string };
export type NavGruppe = { titel: string; links: NavLink[] };

/** Im Header nur die Leistungen; Einzugsgebiet und Ratgeber stehen im Footer (Entscheidung 29.10.2026). */
export type NavData = {
  leistungen: NavGruppe[];
};

/** Schlanke, serialisierbare Navigationsdaten für den Header (Client-Komponente). */
export function navData(): NavData {
  const gruppen = LEISTUNG_GRUPPEN.map((g) => ({
    titel: g.titel,
    links: g.slugs.map((slug) => {
      const l = leistungen.find((x) => x.slug === slug);
      if (!l) throw new Error(`Leistung ${slug} fehlt in lib/leistungen.ts`);
      return { href: `/leistungen/${l.slug}`, label: l.name, text: l.short };
    }),
  }));

  const vergeben = LEISTUNG_GRUPPEN.flatMap((g) => g.slugs);
  const fehlt = leistungen.filter((l) => !vergeben.includes(l.slug));
  if (fehlt.length) throw new Error(`Leistung ohne Menügruppe: ${fehlt.map((l) => l.slug).join(", ")}`);

  return { leistungen: gruppen };
}
