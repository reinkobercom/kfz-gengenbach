import { leistungen } from "./leistungen";
import { orte } from "./orte";
import { artikelNav, kategorien } from "./ratgeber";

/** Gruppierung der Leistungen im Megamenü. Jede Leistung muss genau einmal vorkommen. */
const LEISTUNG_GRUPPEN: { titel: string; slugs: string[] }[] = [
  { titel: "Wartung & Prüfung", slugs: ["inspektion-wartung", "hu-au", "reifenservice-achsvermessung"] },
  { titel: "Motor & Reparatur", slugs: ["motorinstandsetzung", "reparatur-diagnose", "transporter-sprinter"] },
  { titel: "Karosserie & mehr", slugs: ["karosserie-unfallinstandsetzung", "lackierung-smart-repair", "fahrzeugverkauf"] },
];

export type NavLink = { href: string; label: string; text?: string };
export type NavGruppe = { titel: string; links: NavLink[] };

export type NavData = {
  leistungen: NavGruppe[];
  orte: NavLink[];
  ratgeber: NavGruppe[];
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

  const artikel = artikelNav();
  return {
    leistungen: gruppen,
    orte: [
      { href: "/", label: "Gengenbach", text: "Werkstatt, Am Winzerkeller 1" },
      ...orte.map((o) => ({ href: `/kfz-werkstatt/${o.slug}`, label: o.name, text: o.orte.join(", ") })),
    ],
    ratgeber: kategorien
      .map((k) => ({
        titel: k,
        links: artikel.filter((a) => a.kategorie === k).map((a) => ({ href: `/ratgeber/${a.slug}`, label: a.titel })),
      }))
      .filter((g) => g.links.length > 0),
  };
}
