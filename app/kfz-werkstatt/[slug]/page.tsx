import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand, Faq, JsonLd } from "@/components/ui";
import { getLeistung, leistungen } from "@/lib/leistungen";
import { getOrt, orte } from "@/lib/orte";
import { serviceSchema } from "@/lib/schema";
import { mapsHref, ogBasis, ogStandardBild, site } from "@/lib/site";

export function generateStaticParams() {
  return orte.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kfz-werkstatt/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const o = getOrt(slug);
  if (!o) return {};
  return {
    title: o.metaTitle,
    description: o.metaDescription,
    alternates: { canonical: `/kfz-werkstatt/${o.slug}` },
    openGraph: { ...ogBasis, title: o.metaTitle, description: o.metaDescription, url: `/kfz-werkstatt/${o.slug}`, images: [ogStandardBild] },
  };
}

export default async function OrtPage({ params }: PageProps<"/kfz-werkstatt/[slug]">) {
  const { slug } = await params;
  const o = getOrt(slug);
  if (!o) notFound();

  const schwerpunkte = o.schwerpunkte.map(getLeistung).filter((x) => x !== undefined);
  const andere = orte.filter((x) => x.slug !== o.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Einzugsgebiet", href: "/einzugsgebiet" },
          { name: o.name, href: `/kfz-werkstatt/${o.slug}` },
        ]}
        h1={o.h1}
        intro={o.intro}
        fakten={["Befund per Video aufs Handy", "Fester Ansprechpartner", "Pkw & Transporter bis 4,5 t"]}
        defaultOrt={o.formOrt}
      />

      <section className="section wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl">Warum Kundschaft aus {o.name} zu uns kommt</h2>
          <div className="prose-k mt-8 text-lg text-muted">
            {o.absaetze.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl bg-mist p-7">
            <h2 className="font-display text-3xl">Anfahrt</h2>
            <p className="mt-4 text-muted">{o.anfahrt}</p>
            <p className="mt-5 font-semibold">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <a href={mapsHref} target="_blank" rel="noopener" className="btn btn-ghost mt-6 w-full bg-white">
              Route planen
            </a>
            <p className="mt-6 text-sm text-muted">Wir sind für Sie da in: {o.orte.join(", ")}</p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="section wrap">
          <h2 className="max-w-2xl font-display text-4xl sm:text-5xl">Häufig angefragt aus {o.name}</h2>
          <ul className="mt-12 grid gap-x-8 border-t border-line sm:grid-cols-2">
            {schwerpunkte.map((l) => (
              <li key={l.slug} className="border-b border-line">
                <Link href={`/leistungen/${l.slug}`} className="group block py-6">
                  <h3 className="font-display text-[1.75rem] group-hover:text-blue">{l.name}</h3>
                  <p className="mt-1 text-muted">{l.short}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Außerdem:{" "}
            {leistungen
              .filter((l) => !o.schwerpunkte.includes(l.slug))
              .map((l, i, arr) => (
                <span key={l.slug}>
                  <Link href={`/leistungen/${l.slug}`} className="font-semibold text-navy underline-offset-2 hover:underline">
                    {l.name}
                  </Link>
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}
          </p>
        </div>
      </section>

      <section className="section wrap">
        <Faq items={o.faq} titel={`Häufige Fragen aus ${o.name}`} zentriert />
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="font-display text-2xl">Weitere Orte im Einzugsgebiet</h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {[{ slug: "", name: "Gengenbach" }, ...andere].map((x) => (
              <li key={x.name}>
                <Link
                  href={x.slug ? `/kfz-werkstatt/${x.slug}` : "/"}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line px-4 py-2 font-semibold hover:border-blue hover:text-blue"
                >
                  {x.name}
                  <span aria-hidden="true" className="text-blue">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand titel={`Anfrage aus ${o.name}`} />
      <JsonLd
        data={serviceSchema(`Kfz-Werkstatt für ${o.name}`, `/kfz-werkstatt/${o.slug}`, o.metaDescription, o.orte)}
      />
    </>
  );
}
