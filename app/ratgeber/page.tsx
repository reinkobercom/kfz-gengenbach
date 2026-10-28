import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/ui";
import { artikelBild, artikelListe, kategorien, lesezeit } from "@/lib/ratgeber";
import { businessId } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kfz-Ratgeber: Symptome, Kosten, Prüfungen | KFZ Gengenbach",
  description:
    "Ratgeber aus der Kfz-Werkstatt in Gengenbach: Steuerkette, Zylinderkopfdichtung, Achsvermessung, abgelaufener TÜV. Symptome erkennen, Kosten einordnen, richtig entscheiden.",
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberPage() {
  return (
    <>
      <section className="wrap pb-14 pt-8 lg:pb-20 lg:pt-14">
        <Breadcrumbs items={[{ name: "Ratgeber", href: "/ratgeber" }]} />
        <h1 className="mt-8 max-w-4xl font-display text-5xl font-extrabold leading-[0.97] sm:text-6xl lg:text-7xl">
          Kfz-Ratgeber aus der Werkstatt
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Woran Sie ein Problem erkennen, was eine Reparatur ungefähr kostet und wann sie sich lohnt. Geschrieben von {site.owner},
          Inhaber der freien Kfz-Werkstatt {site.brand} in {site.address.city}.
        </p>
      </section>

      {kategorien.map((k) => {
        const liste = artikelListe.filter((a) => a.kategorie === k);
        if (!liste.length) return null;
        const kid = `kat-${k.toLowerCase().replace(/[^a-z]+/g, "-")}`;
        return (
          <section key={k} className="wrap pb-20 lg:pb-28" aria-labelledby={kid}>
            <h2 id={kid} className="border-b border-line pb-4 font-display text-3xl">
              {k}
            </h2>
            <ul className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {liste.map((a) => {
                const bild = artikelBild(a);
                return (
                  <li key={a.slug}>
                    <Link href={`/ratgeber/${a.slug}`} className="group block">
                      {bild && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-mist">
                          <Image src={bild.src} alt={bild.alt} fill sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                        </div>
                      )}
                      <p className="mt-5 text-sm text-muted">{lesezeit(a)} Min. Lesezeit</p>
                      <h3 className="mt-1 font-display text-3xl leading-tight group-hover:text-blue">{a.titel}</h3>
                      <p className="mt-2 line-clamp-3 text-muted">{a.teaser}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <CtaBand titel="Ihr Fahrzeug zeigt eines dieser Symptome?" href="/#anfrage" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Kfz-Ratgeber",
          url: `${site.url}/ratgeber`,
          publisher: { "@id": businessId },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: artikelListe.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/ratgeber/${a.slug}`,
              name: a.titel,
            })),
          },
        }}
      />
    </>
  );
}
