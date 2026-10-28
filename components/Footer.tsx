import Image from "next/image";
import Link from "next/link";
import { leistungen } from "@/lib/leistungen";
import { orte } from "@/lib/orte";
import { mapsHref, site, telHref, waHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist pb-28 pt-20 lg:pb-12">
      <div className="wrap grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-full.png" alt={`${site.brand}, ${site.tagline}`} width={1200} height={319} className="h-auto w-64" />
          <address className="mt-8 not-italic leading-relaxed">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </address>
          <p className="mt-4 leading-relaxed">
            <a href={telHref} className="font-semibold hover:text-blue">
              {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-blue">
              {site.email}
            </a>
          </p>
          <p className="mt-4 flex gap-4 text-sm font-semibold">
            <a href={waHref()} target="_blank" rel="noopener" className="text-blue hover:underline">
              WhatsApp
            </a>
            <a href={mapsHref} target="_blank" rel="noopener" className="text-blue hover:underline">
              Route planen
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl">Öffnungszeiten</h2>
          <dl className="mt-4 space-y-1">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.short}</dt>
                <dd className="tabular-nums">
                  {h.opens}–{h.closes} Uhr
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-4 text-muted">
              <dt>So</dt>
              <dd>geschlossen</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Leistungen">
          <h2 className="font-display text-xl">Leistungen</h2>
          <ul className="mt-4 space-y-1.5">
            {leistungen.map((l) => (
              <li key={l.slug}>
                <Link href={`/leistungen/${l.slug}`} className="hover:text-blue">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Einzugsgebiet">
          <h2 className="font-display text-xl">Werkstatt für</h2>
          <ul className="mt-4 space-y-1.5">
            <li>
              <Link href="/" className="hover:text-blue">
                Gengenbach
              </Link>
            </li>
            {orte.map((o) => (
              <li key={o.slug}>
                <Link href={`/kfz-werkstatt/${o.slug}`} className="hover:text-blue">
                  {o.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/einzugsgebiet" className="hover:text-blue">
                Alle Orte
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="wrap mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {site.legalName}
        </p>
        <p className="flex gap-6">
          <Link href="/impressum" className="hover:text-navy">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-navy">
            Datenschutz
          </Link>
        </p>
      </div>
    </footer>
  );
}
