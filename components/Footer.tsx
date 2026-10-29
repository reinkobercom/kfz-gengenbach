import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { leistungen } from "@/lib/leistungen";
import { mapsHref, site, telHref, waHref } from "@/lib/site";

const service = [
  { href: "/leistungen", label: "Alle Leistungen" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/einzugsgebiet", label: "Einzugsgebiet" },
  { href: "/kontakt", label: "Kontakt & Anfahrt" },
  { href: "/#anfrage", label: "Anfrage starten" },
];

const Icon = ({ children }: { children: ReactNode }) => (
  <svg className="mt-0.5 size-4 shrink-0 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Titel = ({ children }: { children: ReactNode }) => <h2 className="font-display text-xl text-navy">{children}</h2>;

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 text-navy/75 lg:pb-0">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1.1fr] lg:py-20">
        <div>
          <Image src="/brand/logo-bar.png" alt={site.brand} width={1000} height={196} className="h-10 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Freie Kfz-Werkstatt in {site.address.city} für Pkw aller Marken und Transporter bis 4,5 t. Schwerpunkt
            Motorinstandsetzung, Befund per Video aufs Handy.
          </p>
          <Link href="/#anfrage" className="btn btn-primary mt-6 min-h-11 text-[0.95rem]">
            Anfrage starten
          </Link>
        </div>

        <nav aria-label="Leistungen">
          <Titel>Leistungen</Titel>
          <ul className="mt-4 space-y-2 text-sm">
            {leistungen.map((l) => (
              <li key={l.slug}>
                <Link href={`/leistungen/${l.slug}`} className="hover:text-blue">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service">
          <Titel>Service</Titel>
          <ul className="mt-4 space-y-2 text-sm">
            {service.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-blue">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Titel>Kontakt</Titel>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={mapsHref} target="_blank" rel="noopener" className="flex gap-3 hover:text-blue">
                <Icon>
                  <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </Icon>
                <span>
                  {site.legalName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={telHref} className="flex gap-3 font-semibold tabular-nums text-navy hover:text-blue">
                <Icon>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                </Icon>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={waHref()} target="_blank" rel="noopener" className="flex gap-3 hover:text-blue">
                <Icon>
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.6-5.3A8.4 8.4 0 1 1 21 11.5Z" />
                </Icon>
                WhatsApp schreiben
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-blue">
                <Icon>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </Icon>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </Icon>
              <dl className="space-y-1">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="font-semibold text-navy">{h.days}</dt>
                    <dd className="tabular-nums">
                      {h.opens}–{h.closes} Uhr
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.legalName}</p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link href="/impressum" className="hover:text-blue">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-blue">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
