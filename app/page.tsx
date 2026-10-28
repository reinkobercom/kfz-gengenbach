import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Konfigurator } from "@/components/Konfigurator";
import { CtaBand, Fakten, Faq } from "@/components/ui";
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

const ablauf = [
  { t: "Anfrage senden", d: "Leistung und Fahrzeug angeben. Das dauert etwa zwei Minuten." },
  { t: "Termin bekommen", d: "Wir melden uns per WhatsApp, Anruf oder E-Mail und schlagen einen Termin vor." },
  { t: "Befund per Video", d: "Fällt etwas auf, sehen Sie es im Video auf Ihrem Handy, mit unserer Einschätzung." },
  { t: "Freigeben und abholen", d: "Gemacht wird nur, was Sie freigeben. Danach holen Sie Ihr Fahrzeug ab." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wrap grid gap-8 pb-20 pt-8 sm:gap-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-6 lg:pr-6">
          <h1 className="font-display text-[2.9rem] font-extrabold leading-[0.95] sm:text-7xl lg:text-[5.75rem]">
            Ihre <span className="whitespace-nowrap">Kfz-Werkstatt</span> in Gengenbach
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:mt-7 sm:text-xl">
            Inspektion, HU/AU, Reifen und Reparatur für alle Marken. Unser Schwerpunkt ist die Motorinstandsetzung, auch
            bei Transportern bis 4,5 t.
          </p>
          <div className="mt-10 hidden max-w-xl sm:block lg:mt-14">
            <Fakten
              items={["Befund per Video aufs Handy", "Antwort per WhatsApp, Anruf oder E-Mail", "Pkw und Transporter bis 4,5 t"]}
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <Konfigurator />
          <div className="mt-8 sm:hidden">
            <Fakten
              items={["Befund per Video aufs Handy", "Antwort per WhatsApp, Anruf oder E-Mail", "Pkw und Transporter bis 4,5 t"]}
            />
          </div>
        </div>
      </section>

      {/* Bildband */}
      <div className="wrap">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[21/9]">
          <Image
            src={img("1727893119356-1702fe921cf9")}
            alt="Helle Kfz-Werkstatt mit Fahrzeugen auf der Hebebühne"
            fill
            sizes="(min-width: 1216px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

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
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
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
        <div className="section wrap">
          <h2 className="max-w-2xl font-display text-5xl sm:text-6xl">So einfach kommen Sie zum Termin</h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {ablauf.map((s, i) => (
              <li key={s.t} className="border-t-2 border-navy pt-5">
                <span className="font-display text-xl font-bold text-blue">{i + 1}</span>
                <h3 className="mt-2 font-display text-[1.75rem]">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <a href="#anfrage" className="btn btn-primary mt-14">
            Anfrage starten
          </a>
        </div>
      </section>

      {/* Einzugsgebiet + Werkstatt */}
      <section className="section wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl sm:text-6xl">Für Gengenbach und das mittlere Kinzigtal</h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Unsere Kundschaft kommt aus Gengenbach und den Ortsteilen, aus Offenburg, dem Harmersbachtal und dem Kinzigtal
            bis Steinach.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {orte.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/kfz-werkstatt/${o.slug}`}
                  className="flex h-full items-center justify-between gap-4 rounded-xl border-[1.5px] border-line px-5 py-4 font-semibold hover:border-navy"
                >
                  {o.name}
                  <span aria-hidden="true" className="text-blue">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Außerdem: {einzugsgebiet.filter((o) => o !== "Gengenbach").join(", ")}.{" "}
            <Link href="/einzugsgebiet" className="font-semibold text-navy underline underline-offset-2">
              Zum Einzugsgebiet
            </Link>
          </p>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-2xl bg-mist p-7">
            <h2 className="font-display text-3xl">Die Werkstatt</h2>
            <dl className="mt-5 space-y-4 text-[0.98rem]">
              <div>
                <dt className="text-sm text-muted">Adresse</dt>
                <dd>
                  {site.address.street}, {site.address.zip} {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Inhaber</dt>
                <dd>{site.owner}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Öffnungszeiten</dt>
                {site.hours.map((h) => (
                  <dd key={h.days} className="tabular-nums">
                    {h.short} {h.opens}–{h.closes} Uhr
                  </dd>
                ))}
              </div>
            </dl>
            <a href={mapsHref} target="_blank" rel="noopener" className="btn btn-ghost mt-6 w-full bg-white">
              Route planen
            </a>
          </div>
        </aside>
      </section>

      <section className="wrap pb-24 lg:pb-36">
        <div className="max-w-3xl">
          <Faq items={faq} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
