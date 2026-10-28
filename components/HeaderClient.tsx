"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import type { NavData, NavGruppe, NavLink } from "@/lib/navigation";
import { site, telHref, waHref } from "@/lib/site";

type MenuKey = "leistungen" | "einzugsgebiet" | "ratgeber";

const Chevron = ({ offen }: { offen: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-150 ${offen ? "rotate-180" : ""}`}
  >
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pfeil = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Kopfzeile mit Megamenü (Desktop) und ausklappbarem Menü (Mobil).
 * Offen-Zustand hängt an der aktuellen URL: Nach einem Seitenwechsel ist jedes
 * Menü automatisch zu, auch wenn die Maus noch darüber steht.
 */
export function HeaderClient({ nav }: { nav: NavData }) {
  const pathname = usePathname();
  const [mega, setMega] = useState<{ key: MenuKey; on: string } | null>(null);
  const offenesMenu = mega?.on === pathname ? mega.key : null;
  const [mobilAuf, setMobilAuf] = useState<string | null>(null);
  const mobilOffen = mobilAuf === pathname;

  const oeffnen = (key: MenuKey) => setMega({ key, on: pathname });
  const schliessen = () => setMega(null);

  const aktiv = (prefix: string[]) => prefix.some((p) => pathname.startsWith(p));

  const hatRatgeber = nav.ratgeber.length > 0;

  const eintraege: { key: MenuKey; href: string; label: string; prefix: string[]; panel: ReactNode }[] = [
    { key: "leistungen", href: "/leistungen", label: "Leistungen", prefix: ["/leistungen"], panel: <LeistungenPanel nav={nav} /> },
    {
      key: "einzugsgebiet",
      href: "/einzugsgebiet",
      label: "Einzugsgebiet",
      prefix: ["/einzugsgebiet", "/kfz-werkstatt"],
      panel: <OrtePanel orte={nav.orte} />,
    },
    ...(hatRatgeber
      ? [
          {
            key: "ratgeber" as const,
            href: "/ratgeber",
            label: "Ratgeber",
            prefix: ["/ratgeber"],
            panel: <RatgeberPanel gruppen={nav.ratgeber} />,
          },
        ]
      : []),
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/95 backdrop-blur-md" onKeyDown={(e) => e.key === "Escape" && schliessen()}>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${site.brand}, zur Startseite`}>
          <Image src="/brand/logo-bar.png" alt={site.brand} width={1000} height={196} priority className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden h-full items-stretch gap-1 lg:flex xl:gap-3">
          {eintraege.map((m) => {
            const offen = offenesMenu === m.key;
            return (
              <div
                key={m.key}
                className="flex items-stretch"
                onMouseEnter={() => oeffnen(m.key)}
                onMouseLeave={schliessen}
                onFocus={() => oeffnen(m.key)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) schliessen();
                }}
              >
                <Link
                  href={m.href}
                  onClick={schliessen}
                  aria-expanded={offen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1.5 px-3 font-medium hover:text-blue ${
                    offen || aktiv(m.prefix) ? "text-blue" : ""
                  }`}
                >
                  {m.label}
                  <Chevron offen={offen} />
                </Link>
                {/* Panel volle Breite unter der Kopfzeile; die Kopfzeile ist der Bezugsrahmen */}
                <div
                  className={`absolute inset-x-0 top-full transition-[opacity,visibility] duration-150 ${
                    offen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                  onClick={(e) => (e.target as HTMLElement).closest("a") && schliessen()}
                >
                  <div className="border-b border-line bg-white shadow-[0_30px_60px_-30px_rgb(13_35_64/0.35)]">
                    <div className="wrap py-10">{m.panel}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/kontakt" className={`inline-flex items-center px-3 font-medium hover:text-blue ${aktiv(["/kontakt"]) ? "text-blue" : ""}`}>
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref} className="hidden font-semibold tabular-nums hover:text-blue md:block">
            {site.phoneDisplay}
          </a>
          <Link href="/#anfrage" className="btn btn-primary ml-3 hidden min-h-11 sm:inline-flex">
            Anfrage starten
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={mobilOffen}
            aria-controls="mobilmenue"
            onClick={() => setMobilAuf(mobilOffen ? null : pathname)}
          >
            <span className="sr-only">Menü {mobilOffen ? "schließen" : "öffnen"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {mobilOffen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobilOffen && <MobilMenue nav={nav} />}
    </header>
  );
}

function SpaltenTitel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{children}</p>;
}

function LeistungenPanel({ nav }: { nav: NavData }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_17rem] gap-10">
      {nav.leistungen.map((g) => (
        <div key={g.titel}>
          <SpaltenTitel>{g.titel}</SpaltenTitel>
          <ul className="mt-4 space-y-1">
            {g.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group -mx-3 block rounded-lg px-3 py-2.5 hover:bg-mist">
                  <span className="block font-display text-xl font-bold leading-tight group-hover:text-blue">{l.label}</span>
                  {l.text && <span className="mt-1 line-clamp-2 block text-sm leading-snug text-muted">{l.text}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col justify-between rounded-2xl bg-navy p-6 text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">Unser Schwerpunkt</p>
          <p className="mt-3 font-display text-2xl font-bold leading-tight">Motor macht Probleme?</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Schicken Sie uns ein Video vom Geräusch. Sie bekommen eine erste Einschätzung, bevor etwas zerlegt wird.
          </p>
        </div>
        <div className="mt-6 grid gap-2">
          <Link href="/#anfrage" className="btn btn-primary min-h-11 text-[0.95rem]">
            Anfrage starten
          </Link>
          <a href={waHref("Hallo, ich habe ein Problem mit meinem Motor:")} target="_blank" rel="noopener" className="btn min-h-11 border-[1.5px] border-white/25 text-[0.95rem] hover:border-white">
            Video per WhatsApp
          </a>
        </div>
      </div>
      <Link href="/leistungen" className="col-span-3 -mt-2 inline-flex items-center gap-2 font-semibold text-blue hover:underline">
        Alle Leistungen im Überblick <Pfeil />
      </Link>
    </div>
  );
}

function OrtePanel({ orte }: { orte: NavLink[] }) {
  return (
    <div className="grid grid-cols-[1fr_17rem] gap-10">
      <div>
        <SpaltenTitel>Kfz-Werkstatt für</SpaltenTitel>
        <ul className="mt-4 grid grid-cols-3 gap-x-6 gap-y-1">
          {orte.map((o) => (
            <li key={o.href}>
              <Link href={o.href} className="group -mx-3 block rounded-lg px-3 py-2.5 hover:bg-mist">
                <span className="block font-display text-xl font-bold leading-tight group-hover:text-blue">{o.label}</span>
                {o.text && <span className="mt-1 block text-sm leading-snug text-muted">{o.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/einzugsgebiet" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue hover:underline">
          Ganzes Einzugsgebiet ansehen <Pfeil />
        </Link>
      </div>
      <div className="rounded-2xl bg-mist p-6">
        <SpaltenTitel>Werkstatt</SpaltenTitel>
        <address className="mt-3 not-italic leading-relaxed">
          {site.legalName}
          <br />
          {site.address.street}, {site.address.zip} {site.address.city}
        </address>
        <dl className="mt-4 space-y-1 text-sm">
          {site.hours.map((h) => (
            <div key={h.days} className="flex justify-between gap-4">
              <dt>{h.short}</dt>
              <dd className="tabular-nums">
                {h.opens}–{h.closes} Uhr
              </dd>
            </div>
          ))}
        </dl>
        <a href={telHref} className="mt-4 block font-semibold tabular-nums hover:text-blue">
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

function RatgeberPanel({ gruppen }: { gruppen: NavGruppe[] }) {
  return (
    <div className="grid grid-cols-[1fr_17rem] gap-10">
      <div className="grid grid-cols-3 gap-10">
        {gruppen.map((g) => (
          <div key={g.titel}>
            <SpaltenTitel>{g.titel}</SpaltenTitel>
            <ul className="mt-4 space-y-1">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-snug hover:bg-mist hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-mist p-6">
        <div>
          <SpaltenTitel>Ratgeber</SpaltenTitel>
          <p className="mt-3 font-display text-2xl font-bold leading-tight">Wissen aus der Werkstatt</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">Symptome erkennen, Kosten einordnen, richtig entscheiden.</p>
        </div>
        <Link href="/ratgeber" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue hover:underline">
          Alle Artikel <Pfeil />
        </Link>
      </div>
    </div>
  );
}

function MobilGruppe({ titel, href, children }: { titel: string; href: string; children: ReactNode }) {
  return (
    <details className="group border-b border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-display text-3xl font-bold [&::-webkit-details-marker]:hidden">
        {titel}
        <span className="grid size-9 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-180">
          <Chevron offen={false} />
        </span>
      </summary>
      <div className="pb-5">
        {children}
        <Link href={href} className="mt-3 inline-flex items-center gap-2 font-semibold text-blue">
          Übersicht <Pfeil />
        </Link>
      </div>
    </details>
  );
}

function MobilMenue({ nav }: { nav: NavData }) {
  return (
    <div id="mobilmenue" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
      <nav aria-label="Mobile Navigation" className="wrap py-4">
        <MobilGruppe titel="Leistungen" href="/leistungen">
          {nav.leistungen.map((g) => (
            <div key={g.titel} className="mt-3">
              <SpaltenTitel>{g.titel}</SpaltenTitel>
              <ul className="mt-1">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2 text-lg hover:text-blue">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </MobilGruppe>
        <MobilGruppe titel="Einzugsgebiet" href="/einzugsgebiet">
          <ul>
            {nav.orte.map((o) => (
              <li key={o.href}>
                <Link href={o.href} className="block py-2 text-lg hover:text-blue">
                  {o.label}
                </Link>
              </li>
            ))}
          </ul>
        </MobilGruppe>
        {nav.ratgeber.length > 0 && (
          <MobilGruppe titel="Ratgeber" href="/ratgeber">
            {nav.ratgeber.map((g) => (
              <div key={g.titel} className="mt-3">
                <SpaltenTitel>{g.titel}</SpaltenTitel>
                <ul className="mt-1">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block py-2 text-lg leading-snug hover:text-blue">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </MobilGruppe>
        )}
        <Link href="/kontakt" className="block border-b border-line py-3 font-display text-3xl font-bold">
          Kontakt
        </Link>
        <div className="mt-6 grid gap-2">
          <Link href="/#anfrage" className="btn btn-primary w-full">
            Anfrage starten
          </Link>
          <a href={telHref} className="btn btn-ghost w-full tabular-nums">
            {site.phoneDisplay} anrufen
          </a>
        </div>
      </nav>
    </div>
  );
}
