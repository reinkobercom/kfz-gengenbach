import { einzugsgebiet, site } from "./site";
import { leistungen } from "./leistungen";

export const businessId = `${site.url}/#werkstatt`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": businessId,
    name: site.brand,
    legalName: site.legalName,
    alternateName: site.legalName,
    description:
      "Freie Kfz-Werkstatt in Gengenbach für Pkw und Transporter bis 4,5 t: Inspektion, HU/AU, Reifenservice, Achsvermessung, Reparatur und Diagnose. Spezialisiert auf Motorinstandsetzung.",
    url: site.url,
    logo: `${site.url}/brand/logo-full.png`,
    image: `${site.url}/opengraph-image.png`,
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schema,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: einzugsgebiet.map((name) => ({ "@type": "City", name })),
    knowsAbout: ["Motorinstandsetzung", "Kfz-Diagnose", "Inspektion", "Hauptuntersuchung", "Achsvermessung"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Werkstattleistungen",
      itemListElement: leistungen.map((l) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: l.name, url: `${site.url}/leistungen/${l.slug}` },
      })),
    },
  };
}

export function serviceSchema(name: string, path: string, description: string, areas: string[] = [...einzugsgebiet]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": businessId },
    areaServed: areas.map((a) => ({ "@type": "City", name: a })),
  };
}
