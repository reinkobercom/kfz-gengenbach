import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: "Leistungen der Kfz-Werkstatt in Gengenbach | KFZ Gengenbach",
  description:
    "Inspektion, HU/AU, Reifen & Achsvermessung, Reparatur, Motorinstandsetzung, Transporter bis 4,5 t, Karosserie, Lack und Fahrzeugverkauf in Gengenbach.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Leistungen", href: "/leistungen" }]}
        h1="Leistungen der Kfz-Werkstatt"
        intro="Von der Inspektion bis zur Motorinstandsetzung: Wir kümmern uns um Pkw aller Marken und Transporter bis 4,5 t. Karosserie und Lack koordinieren wir mit unserem Partnerbetrieb."
        fakten={["Alle Marken", "Wartung nach Herstellervorgaben", "Befund per Video"]}
      />

      <section className="wrap pb-24 lg:pb-36">
        <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l) => (
            <li key={l.slug}>
              <Link href={`/leistungen/${l.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist">
                  <Image src={l.image.src} alt={l.image.alt} fill sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <h2 className="mt-5 font-display text-3xl group-hover:text-blue">{l.name}</h2>
                <p className="mt-2 text-muted">{l.short}</p>
                {l.partner && <p className="mt-1 text-sm text-muted">Über unseren Partnerbetrieb</p>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
