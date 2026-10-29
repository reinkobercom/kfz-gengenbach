import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Konfigurator } from "@/components/Konfigurator";
import { Bloecke, Inline } from "@/components/ratgeber/Inhalt";
import { Inhaltsverzeichnis } from "@/components/ratgeber/Inhaltsverzeichnis";
import { Breadcrumbs, Faq, JsonLd } from "@/components/ui";
import { getLeistung } from "@/lib/leistungen";
import { artikelBild, artikelListe, getArtikel, lesezeit } from "@/lib/ratgeber";
import { articleSchema } from "@/lib/schema";
import { ogBasis, site, waHref } from "@/lib/site";
import { ohneWitwe } from "@/lib/text";

export function generateStaticParams() {
  return artikelListe.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ratgeber/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) return {};
  const bild = artikelBild(a)?.src;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/ratgeber/${a.slug}` },
    authors: [{ name: site.owner }],
    openGraph: {
      ...ogBasis,
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      url: `/ratgeber/${a.slug}`,
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified,
      authors: [site.owner],
      ...(bild ? { images: [{ url: bild, width: 1600, height: 1067 }] } : {}),
    },
  };
}

const datum = (iso: string) => new Date(iso).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default async function ArtikelPage({ params }: PageProps<"/ratgeber/[slug]">) {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) notFound();
  const leistung = getLeistung(a.leistung);
  const bild = artikelBild(a);
  if (!leistung || !bild) throw new Error(`Ratgeber ${a.slug}: Leistung ${a.leistung} fehlt`);

  const toc = [
    ...a.abschnitte.map((s) => ({ id: s.id, titel: s.titel })),
    { id: "haeufige-fragen", titel: "Häufige Fragen" },
    { id: "fazit", titel: "Fazit" },
  ];
  const weitere = artikelListe.filter((x) => x.slug !== a.slug).slice(0, 3);
  const minuten = lesezeit(a);
  const geaendert = a.dateModified !== a.datePublished;

  return (
    <>
      {/* Kopfbereich mit Titelbild, dunkle Überlagerung für Lesbarkeit */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image src={bild.src} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/50" aria-hidden="true" />
        <div className="wrap pb-16 pt-8 lg:pb-24 lg:pt-12">
          <Breadcrumbs
            items={[
              { name: "Ratgeber", href: "/ratgeber" },
              { name: a.titel, href: `/ratgeber/${a.slug}` },
            ]}
            hell
          />
          <p className="mt-10 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">{a.kategorie}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] sm:text-6xl">{ohneWitwe(a.titel)}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{a.teaser}</p>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/70">
            <span>
              Von <span className="font-semibold text-white">{site.owner}</span>, {site.legalName}
            </span>
            <span>
              {geaendert ? "Aktualisiert" : "Veröffentlicht"} am <time dateTime={a.dateModified}>{datum(a.dateModified)}</time>
            </span>
            <span>{minuten} Min. Lesezeit</span>
          </p>
        </div>
      </section>

      <div className="section wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Mobil: Inhaltsverzeichnis einklappbar über dem Artikel */}
        <details className="rounded-xl bg-mist p-5 lg:hidden">
          <summary className="cursor-pointer font-semibold">Inhalt dieses Artikels</summary>
          <div className="mt-4">
            <Inhaltsverzeichnis eintraege={toc} />
          </div>
        </details>

        <article className="text-[1.0625rem] leading-[1.75] lg:col-span-8 lg:max-w-[44rem]">
          <div className="rounded-2xl bg-blue-tint p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue">Kurze Antwort</p>
            <p className="mt-2 text-lg leading-relaxed text-navy">
              <Inline text={a.antwort} />
            </p>
          </div>

          <h2 className="sr-only">Das Wichtigste in Kürze</h2>
          <ul className="mt-8 space-y-3 border-y border-line py-6">
            {a.kernpunkte.map((k) => (
              <li key={k} className="flex gap-3">
                <svg className="mt-1.5 shrink-0 text-blue" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  <Inline text={k} />
                </span>
              </li>
            ))}
          </ul>

          {a.abschnitte.map((s, i) => (
            <div key={s.id}>
              <section aria-labelledby={s.id} className="mt-14">
                <h2 id={s.id} className="font-display text-[2.1rem] leading-[1.05] sm:text-[2.5rem]">
                  {ohneWitwe(s.titel)}
                </h2>
                <Bloecke blocks={s.blocks} />
              </section>
              {i === a.zwischenCta.nachAbschnitt && (
                <aside className="mt-12 flex flex-col gap-5 rounded-2xl bg-navy p-6 text-white sm:p-8">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight sm:text-3xl">{a.zwischenCta.titel}</p>
                    <p className="mt-2 text-white/80">{a.zwischenCta.text}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href="#anfrage" className="btn btn-primary">
                      Anfrage starten
                    </a>
                    <a href={waHref(`Hallo, ich habe eine Frage zu: ${a.titel}`)} target="_blank" rel="noopener" className="btn border-[1.5px] border-white/25 hover:border-white">
                      Per WhatsApp schreiben
                    </a>
                  </div>
                </aside>
              )}
            </div>
          ))}

          <section id="haeufige-fragen" className="mt-16">
            <Faq items={a.faq} />
          </section>

          <section aria-labelledby="fazit" className="mt-16">
            <h2 id="fazit" className="font-display text-[2.1rem] sm:text-[2.5rem]">
              Fazit
            </h2>
            <p className="mt-5">
              <Inline text={a.fazit} />
            </p>
          </section>

          {a.quellen.length > 0 && (
            <section className="mt-12 border-t border-line pt-6">
              <h2 className="font-display text-xl">Quellen</h2>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
                {a.quellen.map((q) => (
                  <li key={q.url}>
                    <a href={q.url} target="_blank" rel="noopener nofollow" className="hover:text-navy hover:underline">
                      {q.titel}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="mt-12">
            <h2 className="font-display text-3xl">Weiterführende Themen</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <li>
                <Link href={`/leistungen/${leistung.slug}`} className="block h-full rounded-xl border border-line p-5 hover:border-navy">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-blue">Leistung</span>
                  <span className="mt-1 block font-display text-xl font-bold leading-tight">{leistung.name} in Gengenbach</span>
                </Link>
              </li>
              {weitere.map((w) => (
                <li key={w.slug}>
                  <Link href={`/ratgeber/${w.slug}`} className="block h-full rounded-xl border border-line p-5 hover:border-navy">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-blue">{w.kategorie}</span>
                    <span className="mt-1 block font-display text-xl font-bold leading-tight">{w.titel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Abschlussbox: wer schreibt, Hinweis, zwei CTAs */}
          <aside className="mt-14 rounded-2xl bg-navy p-6 text-white sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-full bg-blue font-display text-xl font-bold">MJ</div>
              <div>
                <p className="font-semibold">{site.owner}</p>
                <p className="text-sm text-white/70">
                  Inhaber {site.legalName}, freie Kfz-Werkstatt in {site.address.city}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Hinweis: Dieser Beitrag dient der allgemeinen Information und ersetzt keine Diagnose am Fahrzeug. Genannte Preise sind
              Richtwerte der angegebenen Quellen, keine Angebote von {site.brand}. Was an Ihrem Fahrzeug zu tun ist und was es kostet,
              klären wir nach der Prüfung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#anfrage" className="btn btn-primary">
                Unverbindlich anfragen
              </a>
              <Link href={`/leistungen/${leistung.slug}`} className="btn border-[1.5px] border-white/25 hover:border-white">
                Mehr zu {leistung.name}
              </Link>
            </div>
          </aside>
        </article>

        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 space-y-6">
            <nav aria-label="Inhaltsverzeichnis" className="rounded-2xl border border-line p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Inhalt</p>
              <Inhaltsverzeichnis eintraege={toc} />
            </nav>
            <div className="rounded-2xl bg-mist p-5">
              <p className="font-display text-xl font-bold leading-tight">Unverbindliche Einschätzung erhalten</p>
              <p className="mt-1 text-sm text-muted">Fahrzeug angeben, Problem beschreiben, wir melden uns.</p>
              <a href="#anfrage" className="btn btn-primary mt-4 w-full">
                Anfrage starten
              </a>
            </div>
          </div>
        </aside>
      </div>

      <section className="bg-mist">
        <div className="section wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl sm:text-6xl">Unverbindliche Einschätzung für Ihr Fahrzeug.</h2>
            <p className="mt-5 text-lg text-muted">
              In vier Schritten zur Anfrage. Wir melden uns per WhatsApp, Anruf oder E-Mail und sagen Ihnen, wie es weitergeht.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Konfigurator defaultLeistung={leistung.key === "transporter" ? undefined : leistung.key} />
          </div>
        </div>
      </section>

      <JsonLd data={articleSchema(a, bild.src)} />
    </>
  );
}
