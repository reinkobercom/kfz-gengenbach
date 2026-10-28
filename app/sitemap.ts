import type { MetadataRoute } from "next";
import { leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { artikelListe } from "@/lib/ratgeber";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  return [
    { url: u(""), changeFrequency: "monthly", priority: 1 },
    { url: u("/leistungen"), changeFrequency: "monthly", priority: 0.8 },
    ...leistungen.map((l) => ({ url: u(`/leistungen/${l.slug}`), changeFrequency: "monthly" as const, priority: l.key === "motor" ? 0.9 : 0.8 })),
    { url: u("/einzugsgebiet"), changeFrequency: "monthly", priority: 0.7 },
    ...orte.map((o) => ({ url: u(`/kfz-werkstatt/${o.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: u("/ratgeber"), changeFrequency: "weekly", priority: 0.7 },
    ...artikelListe.map((a) => ({
      url: u(`/ratgeber/${a.slug}`),
      lastModified: a.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: u("/kontakt"), changeFrequency: "yearly", priority: 0.6 },
  ];
}
