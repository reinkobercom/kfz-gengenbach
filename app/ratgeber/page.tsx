import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/ui";
import { artikelBild, artikelListe, kategorien, lesezeit } from "@/lib/ratgeber";
import { businessId } from "@/lib/schema";
import { site } from "@/lib/site";
import { ohneWitwe } from "@/lib/text";

export const metadata: Metadata = {
  title: "Kfz-Ratgeber: Symptome, Kosten, Prüfungen | KFZ Gengenbach",
  description:
    "Ratgeber aus der Kfz-Werkstatt in Gengenbach: Steuerkette, Zylinderkopfdichtung, Achsvermessung, abgelaufener TÜV. Symptome erkennen, Kosten einordnen.",
  alternates: { canonical: "/ratgeber" },
};

const kategorieId = (k: string) => `kat-${k.toLowerCase().replace(/[^a-z]+/g, "-")}`;

export default function RatgeberPage() {
  const titelbild = artikelBild(artikelListe[0]);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        {titelbild && <Image src={titelbild.src} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="-z-20 object-cover opacity-70" />}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="wrap pb-16 pt-8 lg:pb-24 lg:pt-12">
          <Breadcrumbs items={[{ name: "Ratgeber", href: "/ratgeber" }]} hell />
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-extrabold leading-[0.97] sm:text-6xl lg:text-7xl">Kfz-Ratgeber</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Woran Sie ein Problem erkennen, was eine Reparatur ungefähr kostet und wann sie sich lohnt. Geschrieben von{" "}
            {site.owner}, Inhaber der freien Kfz-Werkstatt {site.brand} in {site.address.city}.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {kategorien
              .filter((k) => artikelListe.some((a) => a.kategorie === k))
              .map((k) => (
                <li key={k}>
                  <a href={`#${kategorieId(k)}`} className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm hover:bg-white/20">
                    {k}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {kategorien.map((k) => {
        const liste = artikelListe.filter((a) => a.kategorie === k);
        if (!liste.length) return null;
        const kid = kategorieId(k);
        return (
          <section key={k} className="section wrap" aria-labelledby={kid}>
            <h2 id={kid} className="border-b border-line pb-4 font-display text-3xl">
              {k}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
              {liste.map((a) => {
                const bild = artikelBild(a);
                return (
                  <li key={a.slug}>
                    {/* Mobil: Zeile mit kleinem Bild, ab 640 px Karte */}
                    <Link href={`/ratgeber/${a.slug}`} className="group flex items-center gap-4 sm:block">
                      {bild && (
                        <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-mist sm:aspect-[16/10] sm:w-auto">
                          <Image src={bild.src} alt={bild.alt} fill sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 96px" className="object-cover" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm text-muted sm:mt-5">{lesezeit(a)}&nbsp;Min. Lesezeit</p>
                        <h3 className="mt-1 font-display text-xl leading-tight group-hover:text-blue sm:text-3xl">{ohneWitwe(a.titel)}</h3>
                        <p className="mt-2 hidden text-muted sm:line-clamp-3">{a.teaser}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <CtaBand titel="Ihr Fahrzeug zeigt eines dieser Symptome?"  />
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
