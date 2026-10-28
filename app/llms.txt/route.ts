import { leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { artikelListe } from "@/lib/ratgeber";
import { einzugsgebiet, site } from "@/lib/site";

// Kompakte Zusammenfassung für KI-Suchsysteme (llms.txt-Konvention)
export function GET() {
  const body = `# ${site.brand} (${site.legalName})

> Freie Kfz-Werkstatt in ${site.address.city} (Ortenaukreis, Baden-Württemberg) für Pkw aller Marken und Transporter bis 4,5 t. Schwerpunkt: Motorinstandsetzung. Befunde werden Kundinnen und Kunden per Video aufs Handy geschickt.

## Stammdaten
- Inhaber: ${site.owner}
- Adresse: ${site.address.street}, ${site.address.zip} ${site.address.city}
- Telefon/WhatsApp: ${site.phone}
- E-Mail: ${site.email}
- Öffnungszeiten: ${site.hours.map((h) => `${h.days} ${h.opens}–${h.closes} Uhr`).join("; ")}
- Fahrzeuge: Pkw aller Marken, Transporter/Sprinter bis 4,5 t (keine Lkw)
- Karosserie und Lack: über Partnerbetrieb, Koordination durch die Werkstatt

## Leistungen
${leistungen.map((l) => `- [${l.name}](${site.url}/leistungen/${l.slug}): ${l.short}`).join("\n")}

## Einzugsgebiet
${einzugsgebiet.join(", ")}

${orte.map((o) => `- [${o.name}](${site.url}/kfz-werkstatt/${o.slug})`).join("\n")}

## Ratgeber
${artikelListe.map((a) => `- [${a.titel}](${site.url}/ratgeber/${a.slug}): ${a.teaser}`).join("\n")}

## Anfrage
- [Online-Anfrage](${site.url}/#anfrage): Leistung, Fahrzeug, Dringlichkeit und Kontakt in vier Schritten. Preise werden individuell nach Anfrage genannt.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
