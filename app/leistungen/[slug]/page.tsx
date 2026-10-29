import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Ampel, Arbeitsweise, Symptome, Umfang, Vergleich, Wissen } from "@/components/leistung/Abschnitte";
import { PageHero } from "@/components/PageHero";
import { CtaBand, Faq, JsonLd } from "@/components/ui";
import { leistungSeiten } from "@/lib/leistung-seiten";
import { getLeistung, leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { serviceSchema } from "@/lib/schema";
import { ogBasis } from "@/lib/site";

/** Ablauf für Leistungen ohne eigenen */
const STANDARD_ABLAUF = [
  { titel: "Anfrage senden", text: "Leistung und Fahrzeug angeben. Das dauert etwa zwei Minuten." },
  { titel: "Termin bekommen", text: "Wir melden uns per WhatsApp, Anruf oder E-Mail und schlagen einen Termin vor." },
  { titel: "Befund per Video", text: "Fällt etwas auf, sehen Sie es im Video auf Ihrem Handy, mit unserer Einschätzung." },
  { titel: "Freigeben und abholen", text: "Gemacht wird nur, was Sie freigeben. Danach holen Sie Ihr Fahrzeug ab." },
];

const AMPEL_BILD = {
  src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=2000&q=70",
  alt: "Mechaniker prüft den Motorraum eines Fahrzeugs",
};

export function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/leistungen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/leistungen/${l.slug}` },
    openGraph: {
      ...ogBasis,
      title: l.metaTitle,
      description: l.metaDescription,
      url: `/leistungen/${l.slug}`,
      images: [{ url: l.image.src.replace("w=1600", "w=1200&h=630"), width: 1200, height: 630, alt: l.image.alt }],
    },
  };
}

export default async function LeistungPage({ params }: PageProps<"/leistungen/[slug]">) {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) notFound();

  const istTransporter = l.key === "transporter";
  const weitere = leistungen.filter((x) => x.slug !== l.slug).slice(0, 3);
  const seite = leistungSeiten[l.slug];
  const faq = [...l.faq, ...(seite?.faq ?? [])];

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Leistungen", href: "/leistungen" },
          { name: l.name, href: `/leistungen/${l.slug}` },
        ]}
        h1={l.h1}
        intro={l.intro}
        bild={l.image.src}
        fakten={["Alle Marken", "Befund per Video", "Nur mit Freigabe"]}
        defaultLeistung={istTransporter ? undefined : l.key}
        defaultFahrzeugTyp={istTransporter ? "Transporter bis 4,5 t" : undefined}
        titel={istTransporter ? "Was steht an Ihrem Transporter an?" : undefined}
      >
        {l.partner && (
          <p className="mt-8 max-w-xl rounded-xl bg-white/10 px-5 py-4 text-[0.98rem] backdrop-blur-sm">
            Diese Arbeiten führt unser Partnerbetrieb aus. Sie haben trotzdem nur einen Ansprechpartner: uns.
          </p>
        )}
      </PageHero>

      <Umfang name={l.name} bild={seite?.umfangBild ?? l.image} lead={seite?.umfangLead} punkte={l.umfang} etikett={seite?.bildEtikett} />

      {seite?.symptome && <Symptome s={seite.symptome} />}

      <Arbeitsweise absaetze={seite?.arbeitsweise ?? l.text} schritte={seite?.ablauf ?? STANDARD_ABLAUF} />

      {seite?.vergleich && <Vergleich v={seite.vergleich} />}

      {seite?.ampel && <Ampel a={seite.ampel} bild={AMPEL_BILD} />}

      {seite?.wissen && <Wissen w={seite.wissen} />}

      <section className="section wrap">
        <Faq items={faq} titel={`Fragen zu ${l.name}`} zentriert />
      </section>

      <section className="bg-mist">
        <div className="section wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl">Weitere Leistungen</h2>
            <Link href="/leistungen" className="font-semibold text-blue hover:underline">
              Alle Leistungen
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {weitere.map((w) => (
              <li key={w.slug}>
                <Link href={`/leistungen/${w.slug}`} className="group block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-line hover:ring-blue">
                  <div className="relative aspect-[16/10] bg-mist">
                    <Image src={w.image.src} alt={w.image.alt} fill sizes="(min-width: 768px) 370px, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl group-hover:text-blue">{w.name}</h3>
                    <p className="mt-2 text-[0.96rem] text-muted">{w.short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-semibold">{l.name} auch für:</span>
            {orte.map((o) => (
              <Link
                key={o.slug}
                href={`/kfz-werkstatt/${o.slug}`}
                className="rounded-full border-[1.5px] border-line bg-white px-4 py-1.5 text-sm font-semibold hover:border-blue hover:text-blue"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand titel={`${l.name}: Anfrage in zwei Minuten.`} />
      <JsonLd data={serviceSchema(l.name, `/leistungen/${l.slug}`, l.metaDescription)} />
    </>
  );
}
