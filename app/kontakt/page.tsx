import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { mapsHref, site, telHref, waHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | KFZ Gengenbach, Am Winzerkeller 1",
  description:
    "KFZ Gengenbach, Am Winzerkeller 1, 77723 Gengenbach. Telefon und WhatsApp 01516 7844565. Mo–Fr 8–17 Uhr, Sa 8–13 Uhr. Jetzt Anfrage senden.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <PageHero
      crumbs={[{ name: "Kontakt", href: "/kontakt" }]}
      h1="Kontakt und Anfahrt"
      intro="Am schnellsten geht es über das Anfrageformular oder per WhatsApp. Fotos und Videos vom Problem helfen uns bei der ersten Einschätzung."
    >
      <dl className="mt-12 grid max-w-xl gap-8 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted">Adresse</dt>
          <dd className="mt-1 font-semibold">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </dd>
          <dd className="mt-2">
            <a href={mapsHref} target="_blank" rel="noopener" className="text-sm font-semibold text-blue hover:underline">
              Route planen
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Öffnungszeiten</dt>
          {site.hours.map((h) => (
            <dd key={h.days} className="mt-1 tabular-nums">
              {h.days}: {h.opens}–{h.closes} Uhr
            </dd>
          ))}
        </div>
        <div>
          <dt className="text-sm text-muted">Telefon und WhatsApp</dt>
          <dd className="mt-1">
            <a href={telHref} className="font-semibold hover:text-blue">
              {site.phoneDisplay}
            </a>
          </dd>
          <dd className="mt-2">
            <a href={waHref()} target="_blank" rel="noopener" className="text-sm font-semibold text-blue hover:underline">
              WhatsApp öffnen
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">E-Mail</dt>
          <dd className="mt-1">
            <a href={`mailto:${site.email}`} className="font-semibold hover:text-blue">
              {site.email}
            </a>
          </dd>
        </div>
      </dl>
    </PageHero>
  );
}
