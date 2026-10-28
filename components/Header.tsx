"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { leistungen } from "@/lib/leistungen";
import { site, telHref } from "@/lib/site";

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/einzugsgebiet", label: "Einzugsgebiet" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  // Menü schließt sich automatisch beim Seitenwechsel
  const [offenAuf, setOffenAuf] = useState<string | null>(null);
  const offen = offenAuf === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${site.brand}, zur Startseite`}>
          <Image src="/brand/logo-bar.png" alt={site.brand} width={1000} height={196} priority className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`font-medium hover:text-blue ${pathname.startsWith(n.href) ? "text-blue" : ""}`}
            >
              {n.label}
            </Link>
          ))}
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
            aria-expanded={offen}
            aria-controls="mobilmenue"
            onClick={() => setOffenAuf(offen ? null : pathname)}
          >
            <span className="sr-only">Menü {offen ? "schließen" : "öffnen"}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {offen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {offen && (
        <div id="mobilmenue" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <nav aria-label="Mobile Navigation" className="wrap py-6">
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block py-2 font-display text-3xl font-bold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-muted">Leistungen</p>
            <ul className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {leistungen.map((l) => (
                <li key={l.slug}>
                  <Link href={`/leistungen/${l.slug}`} className="block py-2 hover:text-blue">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={telHref} className="btn btn-ghost mt-6 w-full">
              {site.phoneDisplay} anrufen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
