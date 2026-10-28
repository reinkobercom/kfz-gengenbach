import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | KFZ Gengenbach",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <article className="wrap max-w-3xl pb-28 pt-10 lg:pt-14">
      <Breadcrumbs items={[{ name: "Datenschutz", href: "/datenschutz" }]} />
      <h1 className="mt-8 font-display text-6xl font-extrabold">Datenschutzerklärung</h1>
      <div className="mt-10 space-y-8 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mb-2 [&_p+p]:mt-3">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            {site.legalName}, Inhaber {site.owner}, {site.address.street}, {site.address.zip} {site.address.city}.
            Telefon {site.phoneDisplay}, E-Mail {site.email}.
          </p>
        </section>

        <section>
          <h2>2. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der
            Seiten verarbeitet Vercel technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und
            Browserinformationen, um die Website auszuliefern und abzusichern. Rechtsgrundlage ist unser berechtigtes
            Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Zusätzlich besteht ein
            Auftragsverarbeitungsvertrag mit Standardvertragsklauseln.
          </p>
        </section>

        <section>
          <h2>3. Reichweitenmessung mit Vercel Web Analytics</h2>
          <p>
            Wir nutzen Vercel Web Analytics, um zu verstehen, wie die Website genutzt wird, etwa welche Seiten aufgerufen
            und wie viele Anfragen gestartet werden. Dabei werden keine Cookies gesetzt und keine Daten gespeichert, mit
            denen Sie über mehrere Tage oder Websites hinweg wiedererkannt werden können. Rechtsgrundlage ist unser
            berechtigtes Interesse an der Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2>4. Anfrageformular</h2>
          <p>
            Wenn Sie uns über das Anfrageformular schreiben, verarbeiten wir Ihre Angaben (Leistung, Fahrzeugdaten, Wohnort,
            Dringlichkeit, Beschreibung, Name, Telefonnummer, E-Mail-Adresse, bevorzugter Rückmeldeweg), um Ihre Anfrage zu
            bearbeiten und Ihnen ein Angebot zu machen. Rechtsgrundlage sind vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b
            DSGVO) sowie Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.
          </p>
          <p>
            Für den Versand der Anfrage per E-Mail nutzen wir den Dienst Resend (Resend, Inc., USA). Die Anfrage wird an
            unseren Betrieb sowie an unsere betreuende Marketingagentur (Reinkober) übermittelt, die uns bei der
            Bearbeitung und Auswertung von Anfragen unterstützt. Mit beiden Dienstleistern bestehen bzw. werden
            Auftragsverarbeitungsverträge geschlossen.
          </p>
          <p>
            Ihre Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen. Kommt ein Auftrag zustande, gelten die handels- und steuerrechtlichen
            Aufbewahrungsfristen.
          </p>
        </section>

        <section>
          <h2>5. Kontakt per WhatsApp, Telefon und E-Mail</h2>
          <p>
            Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres
            Anliegens. WhatsApp ist ein Dienst der WhatsApp Ireland Ltd. bzw. der Meta Platforms Inc.; beim Nutzen von
            WhatsApp gelten zusätzlich deren Datenschutzbestimmungen. Die WhatsApp-Links auf dieser Website stellen erst
            beim Anklicken eine Verbindung her.
          </p>
        </section>

        <section>
          <h2>6. Schriften, Bilder und externe Links</h2>
          <p>
            Die verwendeten Schriften sind lokal auf dieser Website eingebunden. Es wird keine Verbindung zu Google Fonts
            aufgebaut. Bilder werden über den Server dieser Website ausgeliefert. Der Link „Route planen“ öffnet Google
            Maps erst nach einem Klick.
          </p>
        </section>

        <section>
          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            und Widerspruch sowie das Recht, eine erteilte Einwilligung jederzeit für die Zukunft zu widerrufen. Außerdem
            können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den
            Datenschutz und die Informationsfreiheit Baden-Württemberg.
          </p>
        </section>
      </div>
    </article>
  );
}
