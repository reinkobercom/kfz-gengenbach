import Image from "next/image";
import type { LeistungSeite } from "@/lib/leistung-seiten";

const Haken = ({ className = "" }: { className?: string }) => (
  <svg className={`shrink-0 ${className}`} width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Bild links, Leistungsumfang rechts */
export function Umfang({
  name,
  bild,
  lead,
  punkte,
  etikett,
}: {
  name: string;
  bild: { src: string; alt: string };
  lead?: string;
  punkte: string[];
  etikett?: { titel: string; text: string };
}) {
  return (
    <section className="section wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist lg:col-span-5 lg:aspect-[4/5]">
        <Image src={bild.src} alt={bild.alt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
        {etikett && (
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue text-white">
              <Haken />
            </span>
            <span className="text-sm leading-snug">
              <span className="block font-semibold">{etikett.titel}</span>
              <span className="text-muted">{etikett.text}</span>
            </span>
          </div>
        )}
      </div>
      <div className="lg:col-span-7">
        <h2 className="font-display text-4xl sm:text-5xl">Das gehört bei {name} dazu</h2>
        {lead && <p className="mt-5 max-w-xl text-lg text-muted">{lead}</p>}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {punkte.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl bg-blue px-4 py-3.5 font-medium leading-snug text-white sm:p-4">
              <Haken className="mt-0.5 text-white" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** „So arbeiten wir“: mittig, kurzer Text, Schritte als Reihe */
export function Arbeitsweise({ absaetze, schritte }: { absaetze: string[]; schritte: { titel: string; text: string }[] }) {
  return (
    <section className="bg-mist">
      <div className="section wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl">So arbeiten wir</h2>
          <div className="prose-k mt-6 text-lg text-muted">
            {absaetze.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
        <ol className={`mt-14 grid gap-4 sm:grid-cols-2 ${schritte.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {schritte.map((s, i) => (
            <li key={s.titel} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-line sm:block sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue font-display text-xl font-bold text-white sm:size-12" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl sm:mt-5">{s.titel}</h3>
                <p className="mt-2 text-[0.98rem] text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Gegenüberstellung in zwei Karten mit „=“-Marke in der Mitte */
export function Vergleich({ v }: { v: NonNullable<LeistungSeite["vergleich"]> }) {
  return (
    <section className="section wrap">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl sm:text-5xl">{v.titel}</h2>
        <p className="mt-5 text-lg text-muted">{v.lead}</p>
      </div>
      <div className="relative mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
        <div className="rounded-2xl border border-line p-7">
          <p className="font-display text-2xl font-bold">{v.links.titel}</p>
          <ul className="mt-5 space-y-3">
            {v.links.punkte.map((p) => (
              <li key={p} className="flex gap-3 text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-navy/40" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 hidden h-12 min-w-12 -translate-x-1/2 px-3 -translate-y-1/2 place-items-center rounded-full bg-white font-display text-2xl font-bold text-blue shadow-md ring-1 ring-line md:grid"
        >
          {v.mitte ?? "="}
        </span>
        <div className="rounded-2xl bg-navy p-7 text-white">
          <p className="font-display text-2xl font-bold">{v.rechts.titel}</p>
          <ul className="mt-5 space-y-3">
            {v.rechts.punkte.map((p) => (
              <li key={p} className="flex gap-3">
                <Haken className="mt-0.5 text-blue" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {v.quelle && (
        <p className="mt-6 text-center text-sm text-muted">
          Quelle:{" "}
          <a href={v.quelle.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2 hover:text-navy">
            {v.quelle.titel}
          </a>
        </p>
      )}
    </section>
  );
}

/** Kurzwissen als drei Karten */
export function Wissen({ w }: { w: NonNullable<LeistungSeite["wissen"]> }) {
  return (
    <section className="section wrap">
      <div className="rounded-3xl bg-blue-tint/60 p-6 sm:p-10 lg:p-14">
        <h2 className="font-display text-4xl sm:text-5xl">{w.titel}</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {w.karten.map((k) => (
              <li key={k.titel} className="rounded-2xl bg-white p-6">
                <p className="font-display text-xl font-bold">{k.titel}</p>
                <p className="mt-2 text-[0.96rem] text-muted">{k.text}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

const AMPEL = {
  rot: { punkt: "bg-[#d64545]", rand: "border-t-[#d64545]" },
  gelb: { punkt: "bg-[#e8a92c]", rand: "border-t-[#e8a92c]" },
  gruen: { punkt: "bg-[#2f9e5b]", rand: "border-t-[#2f9e5b]" },
} as const;

/** Dringlichkeit der Befunde als Ampel, dunkles Band mit Bild */
export function Ampel({ a, bild }: { a: NonNullable<LeistungSeite["ampel"]>; bild: { src: string; alt: string } }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image src={bild.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 to-navy" />
      <div className="section wrap">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl">{a.titel}</h2>
          <p className="mt-5 text-lg text-white/75">{a.lead}</p>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {a.stufen.map((s) => (
            <li key={s.stufe} className={`rounded-2xl border-t-4 bg-white/[0.06] p-6 backdrop-blur-sm ${AMPEL[s.stufe].rand}`}>
              <p className="flex items-center gap-3 font-display text-2xl font-bold">
                <span className={`size-3 rounded-full ${AMPEL[s.stufe].punkt}`} aria-hidden="true" />
                {s.titel}
              </p>
              <p className="mt-3 text-white/80">{s.text}</p>
              <p className="mt-4 text-sm text-white/55">{s.beispiel}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** „Woran Sie es merken“: Anzeichen links, optional Warnkasten rechts */
export function Symptome({ s }: { s: NonNullable<LeistungSeite["symptome"]> }) {
  return (
    <section className="section wrap">
      <div className="grid gap-10 rounded-3xl border border-line p-6 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
        <div className={s.warnung ? "lg:col-span-7" : "lg:col-span-12"}>
          <h2 className="font-display text-4xl sm:text-5xl">{s.titel}</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">{s.lead}</p>
          <ul className={`mt-8 grid gap-x-8 gap-y-3 ${s.warnung ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
            {s.punkte.map((p) => (
              <li key={p} className="flex gap-3 border-b border-line pb-3 leading-snug">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        {s.warnung && (
          <aside className="self-start rounded-2xl border-l-4 border-[#d64545] bg-[#fdf1f1] p-6 lg:col-span-5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#d64545]">
                <path d="M12 3l10 18H2L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 10v5M12 18v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {s.warnung.titel}
            </p>
            <p className="mt-3 text-navy/85">{s.warnung.text}</p>
          </aside>
        )}
      </div>
    </section>
  );
}
