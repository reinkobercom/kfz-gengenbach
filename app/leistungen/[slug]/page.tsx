import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand, Faq, JsonLd } from "@/components/ui";
import { getLeistung, leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { serviceSchema } from "@/lib/schema";

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
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: `/leistungen/${l.slug}` },
  };
}

export default async function LeistungPage({ params }: PageProps<"/leistungen/[slug]">) {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) notFound();

  const istTransporter = l.key === "transporter";
  const weitere = leistungen.filter((x) => x.slug !== l.slug).slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Leistungen", href: "/leistungen" },
          { name: l.name, href: `/leistungen/${l.slug}` },
        ]}
        h1={l.h1}
        intro={l.intro}
        defaultLeistung={istTransporter ? undefined : l.key}
        defaultFahrzeugTyp={istTransporter ? "Transporter bis 4,5 t" : undefined}
        titel={istTransporter ? "Was steht an Ihrem Transporter an?" : undefined}
      >
        {l.partner && (
          <p className="mt-8 max-w-xl rounded-xl bg-mist px-5 py-4 text-[0.98rem]">
            Diese Arbeiten führt unser Partnerbetrieb aus. Sie haben trotzdem nur einen Ansprechpartner: uns.
          </p>
        )}
      </PageHero>

      <div className="wrap">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[21/9]">
          <Image src={l.image.src} alt={l.image.alt} fill sizes="(min-width: 1216px) 1152px, 100vw" className="object-cover" />
        </div>
      </div>

      <section className="section wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl">Das gehört dazu</h2>
          <ul className="mt-8 border-t border-line">
            {l.umfang.map((u) => (
              <li key={u} className="flex gap-4 border-b border-line py-4">
                <svg className="mt-1 shrink-0 text-blue" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {u}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="font-display text-4xl sm:text-5xl">So arbeiten wir</h2>
          <div className="prose-k mt-8 text-lg text-muted">
            {l.text.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
          <a href="#anfrage" className="btn btn-primary mt-10">
            Anfrage starten
          </a>
        </div>
      </section>

      <section className="bg-mist">
        <div className="section wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Faq items={l.faq} />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-display text-2xl">{l.name} auch für</h2>
            <ul className="mt-4 space-y-2">
              {orte.map((o) => (
                <li key={o.slug}>
                  <Link href={`/kfz-werkstatt/${o.slug}`} className="font-semibold hover:text-blue">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-2xl">Weitere Leistungen</h2>
            <ul className="mt-4 space-y-2">
              {weitere.map((w) => (
                <li key={w.slug}>
                  <Link href={`/leistungen/${w.slug}`} className="font-semibold hover:text-blue">
                    {w.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={serviceSchema(l.name, `/leistungen/${l.slug}`, l.metaDescription)} />
    </>
  );
}
