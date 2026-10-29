import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description: "Impressum der KFZ Technik Michael Jakob, Am Winzerkeller 1, 77723 Gengenbach.",
  title: "Impressum | KFZ Gengenbach",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  const i = site.impressum;
  return (
    <article className="wrap max-w-3xl pb-28 pt-10 lg:pt-14">
      <Breadcrumbs items={[{ name: "Impressum", href: "/impressum" }]} />
      <h1 className="mt-8 font-display text-5xl font-extrabold sm:text-6xl">Impressum</h1>
      <div className="mt-10 space-y-8 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mb-2">
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {site.legalName}
            <br />
            Inhaber: {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.email}
          </p>
        </section>
        {i.ustId && (
          <section>
            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {i.ustId}</p>
          </section>
        )}
        {(i.berufsbezeichnung || i.kammer || i.handwerksrolle) && (
          <section>
            <h2>Berufsrechtliche Angaben</h2>
            <p>
              {i.berufsbezeichnung && (
                <>
                  Berufsbezeichnung: {i.berufsbezeichnung}
                  <br />
                </>
              )}
              {i.kammer && (
                <>
                  Zuständige Kammer: {i.kammer}
                  <br />
                </>
              )}
              {i.handwerksrolle && <>Eintragung in der Handwerksrolle: {i.handwerksrolle}</>}
              <br />
              Es gilt die Handwerksordnung (HwO), einsehbar unter{" "}
              <a className="underline" href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener">
                gesetze-im-internet.de
              </a>
              .
            </p>
          </section>
        )}
        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </p>
        </section>
        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
        <section>
          <h2>Bildnachweise</h2>
          <p>Fotos: Unsplash (unsplash.com), lizenzfrei gemäß Unsplash-Lizenz.</p>
        </section>
      </div>
    </article>
  );
}
