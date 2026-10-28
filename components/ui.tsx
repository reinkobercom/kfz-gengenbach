import Link from "next/link";
import { site, telHref, waHref } from "@/lib/site";

export { MobileBar } from "./MobileBar";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Startseite", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brotkrümelnavigation" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((it, i) => (
            <li key={it.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-navy">
                  {it.name}
                </span>
              ) : (
                <Link href={it.href} className="hover:text-navy">
                  {it.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: `${site.url}${it.href === "/" ? "" : it.href}`,
          })),
        }}
      />
    </>
  );
}

export function Faq({ items, titel = "Häufige Fragen" }: { items: { q: string; a: string }[]; titel?: string }) {
  return (
    <div>
      <h2 className="font-display text-4xl sm:text-5xl">{titel}</h2>
      <div className="mt-10 border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[62ch] pb-7 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </div>
  );
}

/** Abschluss-Band mit wiederholtem CTA */
export function CtaBand({ titel = "Anfrage in zwei Minuten.", href = "#anfrage" }: { titel?: string; href?: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="wrap flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl sm:text-6xl">{titel}</h2>
          <p className="mt-5 text-lg text-white/75">
            Leistung wählen, Fahrzeug angeben, Kontakt hinterlassen. Wir melden uns per WhatsApp, Anruf oder E-Mail,
            ganz wie Sie möchten. Unverbindlich.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={href} className="btn btn-primary">
            Anfrage starten
          </a>
          <a href={waHref()} target="_blank" rel="noopener" className="btn border-[1.5px] border-white/25 hover:border-white">
            WhatsApp
          </a>
          <a href={telHref} className="btn border-[1.5px] border-white/25 tabular-nums hover:border-white">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Kompakte Fakten-Leiste (auch für KI-Suchsysteme gut lesbar) */
export function Fakten({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[0.98rem] leading-snug">
          <svg className="mt-0.5 shrink-0 text-blue" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}
