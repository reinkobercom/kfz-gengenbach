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
      "Freie Kfz-Werkstatt in Gengenbach für Pkw und Transporter bis 4,5 t: Inspektion, HU/AU, Reifenservice, Achsvermessung, Reparatur und Diagnose. Spezialisiert auf Motorinstandsetzung.",
    url: site.url,
    logo: `${site.url}/brand/logo-full.png`,
    image: `${site.url}/opengraph-image.png`,
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", "@id": ownerId, name: site.owner },
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    inLanguage: "de-DE",
    publisher: { "@id": businessId },
  };
}

export const ownerId = `${site.url}/#inhaber`;

/** Inhaber als Person – Autor der Ratgeber-Artikel (E-E-A-T) */
export function ownerSchema() {
  return {
    "@type": "Person",
    "@id": ownerId,
    name: site.owner,
    jobTitle: `Inhaber ${site.legalName}`,
    worksFor: { "@id": businessId },
    knowsAbout: ["Motorinstandsetzung", "Kfz-Diagnose", "Fahrzeugwartung"],
  };
}

export function articleSchema(
  a: { slug: string; titel: string; metaDescription: string; datePublished: string; dateModified: string; kategorie: string; keyword: string },
  bild: string,
) {
  const url = `${site.url}/ratgeber/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#artikel`,
    mainEntityOfPage: url,
    url,
    headline: a.titel,
    description: a.metaDescription,
    image: bild,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    inLanguage: "de-DE",
    articleSection: a.kategorie,
    keywords: a.keyword,
    author: ownerSchema(),
    publisher: { "@id": businessId },
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
