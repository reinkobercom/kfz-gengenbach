import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Konfigurator } from "@/components/Konfigurator";
import { CtaBand, Faq } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { einzugsgebiet, mapsHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kfz-Werkstatt Gengenbach | Motorinstandsetzung, Inspektion, HU/AU",
  alternates: { canonical: "/" },
};

const img = (id: string, w = 2000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const faq = [
  {
    q: "Welche Fahrzeuge reparieren Sie?",
    a: "Pkw aller Marken sowie Transporter, Sprinter und Wohnmobile bis 4,5 t zulässiges Gesamtgewicht. Lkw nehmen wir nicht an.",
  },
  {
    q: "Was kostet die Reparatur?",
    a: "Das hängt vom Fahrzeug und vom Befund ab. Nach Ihrer Anfrage bekommen Sie ein individuelles Angebot, und wir beginnen erst mit der Arbeit, wenn Sie zugestimmt haben.",
  },
  {
    q: "Verliere ich die Herstellergarantie in einer freien Werkstatt?",
    a: "Nein, solange die Wartung nach Herstellervorgaben mit passenden Teilen erfolgt und im Serviceheft dokumentiert wird. Genau so arbeiten wir.",
  },
  {
    q: "Wie läuft die Rückmeldung per Video ab?",
    a: "Fällt uns bei der Arbeit etwas auf, filmen wir die Stelle und schicken Ihnen das Video per WhatsApp. Sie sehen selbst, worum es geht, und entscheiden, ob wir es mit erledigen.",
  },
  {
    q: "Wo finde ich die Werkstatt?",
    a: `${site.address.street}, ${site.address.zip} ${site.address.city}. Geöffnet Montag bis Freitag 8–17 Uhr und Samstag 8–13 Uhr.`,
  },
];

const heroFakten = ["Befund per Video aufs Handy", "Antwort per WhatsApp, Anruf oder E-Mail", "Pkw und Transporter bis 4,5 t"];

const ablauf = [
  { t: "Anfrage senden", d: "Leistung und Fahrzeug angeben. Das dauert etwa zwei Minuten." },
  { t: "Termin bekommen", d: "Wir melden uns per WhatsApp, Anruf oder E-Mail und schlagen einen Termin vor." },
  { t: "Befund per Video", d: "Fällt etwas auf, sehen Sie es im Video auf Ihrem Handy, mit unserer Einschätzung." },
  { t: "Freigeben und abholen", d: "Gemacht wird nur, was Sie freigeben. Danach holen Sie Ihr Fahrzeug ab." },
];

export default function Home() {
  return (
    <>
      {/* Hero: Werkstattbild im Hintergrund, Text links, Anfrage rechts */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src={img("1727893119356-1702fe921cf9")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/85 lg:to-navy/40" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="wrap grid gap-10 pb-16 pt-10 sm:gap-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-6 lg:pr-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm">
              <span className="size-2 rounded-full bg-blue" aria-hidden="true" />
              Freie Kfz-Werkstatt · {site.address.city}
            </p>
            <h1 className="mt-6 font-display text-[2.9rem] font-extrabold leading-[0.95] sm:text-7xl lg:text-[5.5rem]">
              Ihre <span className="whitespace-nowrap">Kfz-Werkstatt</span> in Gengenbach
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:mt-7 sm:text-xl">
              Inspektion, HU/AU, Reifen und Reparatur für alle Marken. Unser Schwerpunkt ist die Motorinstandsetzung, auch
              bei Transportern bis 4,5 t.
            </p>
            <ul className="mt-10 hidden max-w-xl gap-x-8 gap-y-3 sm:grid sm:grid-cols-3 lg:mt-14">
              {heroFakten.map((t) => (
                <li key={t} className="flex gap-2.5 text-[0.98rem] leading-snug text-white/90">
                  <svg className="mt-0.5 shrink-0 text-blue" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-navy lg:col-span-6">
            <Konfigurator />
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-5xl sm:text-6xl">Was wir für Ihr Auto tun</h2>
            <p className="mt-5 max-w-sm text-muted">
              Eine Werkstatt für alles Übliche, mit besonderem Können beim Motor. Karosserie und Lack übernimmt unser
              Partnerbetrieb, Ihr Ansprechpartner bleiben wir.
            </p>
            <Link href="/leistungen" className="btn btn-ghost mt-8">
              Alle Leistungen
            </Link>
          </div>
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {leistungen.map((l) => (
            <li key={l.slug} className="border-b border-line">
              <Link
                href={`/leistungen/${l.slug}`}
                className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,15rem)_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <h3 className="font-display text-[1.75rem] leading-tight group-hover:text-blue">
                  {l.name}
                  {l.key === "motor" && <span className="ml-3 align-middle font-sans text-sm font-semibold text-blue">Schwerpunkt</span>}
                </h3>
                <p className="text-muted">
                  {l.short}
                  {l.partner && <span className="block text-sm">Über unseren Partnerbetrieb</span>}
                </p>
                <span aria-hidden="true" className="hidden text-2xl text-line transition-colors group-hover:text-blue sm:block">
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Schwerpunkt Motor */}
      <section className="bg-navy text-white">
        <div className="section wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-display text-5xl sm:text-6xl">Motorschaden heißt nicht automatisch neuer Motor.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Steuerkette, Zylinderkopf, Turbolader oder Ölverbrauch: Oft lässt sich die betroffene Baugruppe gezielt
              instand setzen. Wir prüfen das, bevor über einen Austauschmotor gesprochen wird, und zeigen Ihnen den
              Befund im Video.
            </p>
            <ul className="mt-8 grid max-w-xl gap-x-8 gap-y-2 text-white/90 sm:grid-cols-2">
              {leistungen[0].umfang.slice(0, 6).map((u) => (
                <li key={u} className="border-t border-white/15 py-2.5 text-[0.98rem] leading-snug">
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/leistungen/motorinstandsetzung" className="btn btn-primary">
                Mehr zur Motorinstandsetzung
              </Link>
              <a href="#anfrage" className="btn border-[1.5px] border-white/25 hover:border-white">
                Motorproblem schildern
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-soft lg:col-span-6">
            <Image
              src={img("1615906655593-ad0386982a0f", 1200)}
              alt="Mechaniker arbeitet am Motor eines Fahrzeugs"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video-Befund */}
      <section className="section wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative order-2 aspect-square overflow-hidden rounded-2xl bg-mist lg:order-1 lg:col-span-5">
          <Image
            src={img("1625047509248-ec889cbff17f", 1200)}
            alt="Mechaniker prüft den Motorraum eines Fahrzeugs"
            fill
            sizes="(min-width: 1024px) 470px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white p-4 shadow-lg sm:inset-x-6 sm:bottom-6">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue text-white" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              </span>
              <div className="text-sm leading-snug">
                <p className="font-semibold">Video vom Befund</p>
                <p className="text-muted">Beispiel: Bremsbeläge vorn fast verschlissen</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <h2 className="font-display text-5xl sm:text-6xl">Sie sehen, was wir sehen.</h2>
          <div className="prose-k mt-6 max-w-xl text-lg text-muted">
            <p>
              Fällt uns bei einer Wartung oder Reparatur etwas auf, schicken wir Ihnen ein kurzes Video aufs Handy. Darin
              zeigen wir die Stelle und sagen, wie dringend es ist.
            </p>
            <p>So entscheiden Sie mit eigenen Augen, was gemacht wird. Ohne Fachchinesisch am Telefon und ohne Überraschung bei der Abholung.</p>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-mist">
        <div className="section wrap text-center">
          <h2 className="mx-auto max-w-2xl font-display text-5xl sm:text-6xl">So einfach kommen Sie zum Termin</h2>
          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-line lg:block" />
            {ablauf.map((s, i) => (
              <li key={s.t} className="relative flex flex-col items-center px-2">
                <span className="grid size-14 place-items-center rounded-full bg-blue font-display text-2xl font-bold text-white shadow-[0_0_0_6px_var(--color-mist)]">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-[1.75rem]">{s.t}</h3>
                <p className="mt-2 max-w-[16rem] text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <a href="#anfrage" className="btn btn-primary mt-14">
            Anfrage starten
          </a>
        </div>
      </section>

      {/* Einzugsgebiet + Werkstatt */}
      <section className="section wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl sm:text-6xl">Für Gengenbach und das mittlere Kinzigtal</h2>
          <p className="mt-6 text-lg text-muted">
            Unsere Kundschaft kommt aus Gengenbach und den Ortsteilen, aus Offenburg, dem Harmersbachtal und dem Kinzigtal
            bis Steinach.
          </p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orte.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/kfz-werkstatt/${o.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border-[1.5px] border-line p-6 transition-colors hover:border-blue hover:bg-blue-tint/40"
              >
                <span>
                  <span className="block font-display text-2xl font-bold leading-tight group-hover:text-blue">{o.name}</span>
                  <span className="mt-2 block text-sm leading-snug text-muted">{o.orte.join(", ")}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue">
                  Zur Ortsseite
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Werkstatt als ruhige Infoleiste statt Seitenkasten */}
        <div className="mt-6 grid gap-6 rounded-2xl bg-navy p-6 text-white sm:p-8 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center lg:gap-10">
          <div>
            <p className="text-sm text-white/60">Die Werkstatt</p>
            <p className="mt-1 font-display text-2xl font-bold leading-tight">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/60">Inhaber</p>
            <p className="mt-1 font-semibold">{site.owner}</p>
          </div>
          <div>
            <p className="text-sm text-white/60">Öffnungszeiten</p>
            {site.hours.map((h) => (
              <p key={h.days} className="mt-1 font-semibold tabular-nums">
                {h.short} {h.opens}–{h.closes} Uhr
              </p>
            ))}
          </div>
          <a href={mapsHref} target="_blank" rel="noopener" className="btn bg-white text-navy hover:bg-blue-tint">
            Route planen
          </a>
        </div>
        <p className="mt-8 text-center text-sm leading-relaxed text-muted">
          Außerdem: {einzugsgebiet.filter((o) => o !== "Gengenbach").join(", ")}.{" "}
          <Link href="/einzugsgebiet" className="font-semibold text-navy underline underline-offset-2">
            Ganzes Einzugsgebiet
          </Link>
        </p>
      </section>

      <section className="section wrap">
        <Faq items={faq} zentriert />
      </section>

      <CtaBand />
    </>
  );
}
