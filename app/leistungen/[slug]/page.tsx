import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Ampel, Arbeitsweise, Symptome, Umfang, Vergleich, Wissen } from "@/components/leistung/Abschnitte";
import { PageHero } from "@/components/PageHero";
import { RatgeberKarten } from "@/components/RatgeberKarten";
import { CtaBand, Faq, JsonLd } from "@/components/ui";
import { leistungSeiten } from "@/lib/leistung-seiten";
import { getLeistung, leistungen } from "@/lib/leistungen";
import { artikelListe, ratgeberFuer } from "@/lib/ratgeber";
import { serviceSchema } from "@/lib/schema";
import { anfrageLink, ogBasis } from "@/lib/site";
import { trenne } from "@/lib/text";

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
  // „Anfrage starten“ öffnet das Formular auf der Kontaktseite mit dieser Leistung vorausgewählt
  const anfrage = istTransporter ? anfrageLink({ fahrzeug: "transporter" }) : anfrageLink({ leistung: l.key });

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
        fakten={seite?.fakten ?? ["Alle Marken", "Befund per Video", "Nur mit Ihrer Freigabe"]}
        anfrageHref={anfrage}
        waText={`Hallo, ich habe eine Frage zu ${l.name}:`}
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

      <section className="bg-mist">
        <div className="section wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl">Weitere Leistungen</h2>
            <Link href="/leistungen" className="font-semibold text-blue hover:underline">
              Alle Leistungen
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {weitere.map((w) => (
              <li key={w.slug}>
                {/* Mobil: Zeile mit kleinem Bild, ab 640 px Karte */}
                <Link
                  href={`/leistungen/${w.slug}`}
                  className="group flex h-full items-center gap-4 overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-line hover:ring-blue sm:block sm:p-0"
                >
                  <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-mist sm:aspect-[16/10] sm:w-auto sm:rounded-none">
                    <Image src={w.image.src} alt={w.image.alt} fill sizes="(min-width: 768px) 370px, 80px" className="object-cover" />
                  </div>
                  <div className="min-w-0 sm:p-6">
                    <h3 className="font-display text-xl leading-tight group-hover:text-blue sm:text-2xl">{trenne(w.name)}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted sm:mt-2 sm:line-clamp-none sm:text-[0.96rem]">{w.short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap">
        <Faq items={faq} titel={`Fragen zu ${l.name}`} zentriert />
      </section>

      {/* Alle Ratgeber, die zur Leistung passenden zuerst */}
      <RatgeberKarten artikel={[...ratgeberFuer(l.slug), ...artikelListe.filter((a) => !ratgeberFuer(l.slug).includes(a))]} />

      <CtaBand titel={`${l.name}: Anfrage in zwei Minuten.`} href={anfrage} />
      <JsonLd data={serviceSchema(l.name, `/leistungen/${l.slug}`, l.metaDescription)} />
    </>
  );
}
