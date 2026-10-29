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

export function Faq({
  items,
  titel = "Häufige Fragen",
  zentriert = false,
}: {
  items: { q: string; a: string }[];
  titel?: string;
  /** Überschrift mittig, Liste schmal und mittig (Standard für Seitenabschnitte) */
  zentriert?: boolean;
}) {
  return (
    <div className={zentriert ? "mx-auto max-w-3xl" : undefined}>
      <h2 className={`font-display text-4xl sm:text-5xl ${zentriert ? "text-center" : ""}`}>{titel}</h2>
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
            <p className="max-w-[65ch] pb-7 text-muted">{f.a}</p>
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

const WaIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
  </svg>
);
const TelIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

/**
 * Abschluss-Band: links Botschaft, rechts eine Kontaktkarte mit einem klaren
 * Hauptweg (Anfrage) und zwei ruhigen Alternativen (WhatsApp, Telefon).
 */
export function CtaBand({
  titel = "Anfrage in zwei Minuten.",
  text = "Leistung wählen, Fahrzeug angeben, Kontakt hinterlassen. Wir melden uns per WhatsApp, Anruf oder E-Mail, ganz wie Sie möchten.",
  href = "#anfrage",
}: {
  titel?: string;
  text?: string;
  href?: string;
}) {
  const zeiten = site.hours.map((h) => `${h.short} ${h.opens}–${h.closes}`).join(" · ");
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* dezente Linien im Hintergrund, angelehnt an die Logo-Leiste */}
      <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 hidden h-full w-[38rem] skew-x-[-18deg] bg-gradient-to-b from-blue/25 to-transparent lg:block" />
      <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-6">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">Unverbindlich und kostenlos</p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl">{titel}</h2>
          <p className="mt-5 max-w-lg text-lg text-white/75">{text}</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl bg-white p-3 text-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <a href={href} className="btn btn-primary min-h-16 w-full text-lg">
              Anfrage starten
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a href={waHref()} target="_blank" rel="noopener" className="group flex items-center gap-3 rounded-xl bg-mist p-4 hover:bg-blue-tint">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#1a9e55]">
                  <WaIcon />
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold group-hover:text-blue">WhatsApp</span>
                  <span className="text-sm text-muted">Fotos & Videos schicken</span>
                </span>
              </a>
              <a href={telHref} className="group flex items-center gap-3 rounded-xl bg-mist p-4 hover:bg-blue-tint">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-blue">
                  <TelIcon />
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold tabular-nums group-hover:text-blue">{site.phoneDisplay}</span>
                  <span className="text-sm text-muted">Direkt anrufen</span>
                </span>
              </a>
            </div>
            <p className="px-2 pb-1 pt-3 text-center text-xs text-muted">{zeiten} Uhr</p>
          </div>
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
