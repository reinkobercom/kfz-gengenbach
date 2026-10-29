import Image from "next/image";
import type { ReactNode } from "react";
import type { LeistungSeite } from "@/lib/leistungen";

/** Nummeriertes Abschnittslabel, z. B. „01 · Leistungsumfang“ – gliedert die Seite ohne Zusatzbilder */
export function Label({ nr, children, hell = false, mittig = false }: { nr: string; children: ReactNode; hell?: boolean; mittig?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] ${hell ? "text-white/60" : "text-muted"} ${mittig ? "justify-center" : ""}`}>
      <span className={`font-display text-base tabular-nums ${hell ? "text-white" : "text-blue"}`}>{nr}</span>
      <span aria-hidden="true" className={`h-px w-8 ${hell ? "bg-white/30" : "bg-line"}`} />
      {children}
    </p>
  );
}

const Haken = ({ className = "" }: { className?: string }) => (
  <svg className={`shrink-0 ${className}`} width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Bild links, Leistungsumfang rechts */
export function Umfang({
  nr,
  name,
  bild,
  lead,
  punkte,
  etikett,
}: {
  nr: string;
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
        <Label nr={nr}>Leistungsumfang</Label>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Das gehört bei {name} dazu</h2>
        {lead && <p className="mt-5 max-w-xl text-lg text-muted">{lead}</p>}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {punkte.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl border border-line bg-white p-4 leading-snug">
              <Haken className="mt-0.5 text-blue" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** „So arbeiten wir“: mittig, kurzer Text, Schritte als Reihe */
export function Arbeitsweise({ nr, absaetze, schritte }: { nr: string; absaetze: string[]; schritte: { titel: string; text: string }[] }) {
  return (
    <section className="bg-mist">
      <div className="section wrap">
        <div className="mx-auto max-w-2xl text-center">
          <Label nr={nr} mittig>
            Ablauf
          </Label>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">So arbeiten wir</h2>
          <div className="prose-k mt-6 text-lg text-muted">
            {absaetze.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
        <ol className={`mt-14 grid gap-4 sm:grid-cols-2 ${schritte.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {schritte.map((s, i) => (
            <li key={s.titel} className="relative rounded-2xl bg-white p-6 ring-1 ring-line">
              <span className="font-display text-5xl font-extrabold leading-none text-blue-tint" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl">{s.titel}</h3>
              <p className="mt-2 text-[0.98rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Gegenüberstellung in zwei Karten mit „=“-Marke in der Mitte */
export function Vergleich({ nr, v }: { nr: string; v: NonNullable<LeistungSeite["vergleich"]> }) {
  return (
    <section className="section wrap">
      <div className="mx-auto max-w-2xl text-center">
        <Label nr={nr} mittig>
          {v.kicker}
        </Label>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">{v.titel}</h2>
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
          className="absolute left-1/2 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white font-display text-2xl font-bold text-blue shadow-md ring-1 ring-line md:grid"
        >
          =
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
export function Wissen({ nr, w }: { nr: string; w: NonNullable<LeistungSeite["wissen"]> }) {
  return (
    <section className="wrap pb-20 lg:pb-32">
      <div className="rounded-3xl bg-blue-tint/60 p-6 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label nr={nr}>{w.kicker}</Label>
            <h2 className="mt-4 font-display text-4xl">{w.titel}</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {w.karten.map((k) => (
              <li key={k.titel} className="rounded-2xl bg-white p-6">
                <p className="font-display text-xl font-bold">{k.titel}</p>
                <p className="mt-2 text-[0.96rem] text-muted">{k.text}</p>
              </li>
            ))}
          </ul>
        </div>
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
export function Ampel({ nr, a, bild }: { nr: string; a: NonNullable<LeistungSeite["ampel"]>; bild: { src: string; alt: string } }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image src={bild.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 to-navy" />
      <div className="section wrap">
        <div className="max-w-2xl">
          <Label nr={nr} hell>
            Befund per Video
          </Label>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">{a.titel}</h2>
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
