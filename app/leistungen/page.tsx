import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: "Leistungen der Kfz-Werkstatt in Gengenbach | KFZ Gengenbach",
  description:
    "Inspektion, HU/AU, Reifen & Achsvermessung, Reparatur, Motorinstandsetzung, Transporter bis 4,5 t, Karosserie, Lack und Fahrzeugverkauf in Gengenbach.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Leistungen", href: "/leistungen" }]}
        h1="Leistungen der Kfz-Werkstatt"
        intro="Von der Inspektion bis zur Motorinstandsetzung: Wir kümmern uns um Pkw aller Marken und Transporter bis 4,5 t. Karosserie und Lack koordinieren wir mit unserem Partnerbetrieb."
        fakten={["Alle Marken", "Befund per Video", "Nur mit Freigabe"]}
      />

      <section className="section wrap">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
          {leistungen.map((l) => (
            <li key={l.slug}>
              {/* Mobil: kleine Zeile mit Vorschaubild, ab 640 px Karte mit großem Bild */}
              <Link href={`/leistungen/${l.slug}`} className="group flex items-center gap-4 sm:block">
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-mist sm:aspect-[4/3] sm:w-auto">
                  <Image src={l.image.src} alt={l.image.alt} fill sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 96px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-2xl leading-tight group-hover:text-blue sm:mt-5 sm:text-3xl">{l.name}</h2>
                  <p className="mt-1 line-clamp-2 text-[0.95rem] text-muted sm:mt-2 sm:line-clamp-none sm:text-base">{l.short}</p>
                  {l.partner && <p className="mt-1 hidden text-sm text-muted sm:block">Über unseren Partnerbetrieb</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
