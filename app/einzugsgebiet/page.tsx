import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/ui";
import { orte } from "@/lib/orte";

export const metadata: Metadata = {
  title: "Einzugsgebiet: Kfz-Werkstatt für Gengenbach, Offenburg & Kinzigtal",
  description:
    "Unsere Werkstatt in Gengenbach betreut Kundschaft aus Offenburg, Ortenberg, Ohlsbach, Berghaupten, Biberach, Steinach, Zell a. H., Nordrach, Oberharmersbach und Umgebung.",
  alternates: { canonical: "/einzugsgebiet" },
};

const gengenbach = ["Gengenbach", "Schwaibach", "Reichenbach", "Bermersbach", "Fußbach"];

export default function EinzugsgebietPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Einzugsgebiet", href: "/einzugsgebiet" }]}
        h1="Ihre Werkstatt für Gengenbach und Umgebung"
        intro="Die Werkstatt liegt in Gengenbach an der B33. Zu uns kommen Kundinnen und Kunden aus der Stadt und den Ortsteilen, aus Offenburg, dem Harmersbachtal und dem Kinzigtal bis Steinach."
      />

      <section className="wrap pb-24 lg:pb-36">
        <div className="grid gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl">
              <Link href="/" className="hover:text-blue">
                Gengenbach
              </Link>
            </h2>
            <p className="mt-3 text-muted">{gengenbach.join(", ")}</p>
          </div>
          {orte.map((o) => (
            <div key={o.slug}>
              <h2 className="font-display text-3xl">
                <Link href={`/kfz-werkstatt/${o.slug}`} className="hover:text-blue">
                  {o.name}
                </Link>
              </h2>
              <p className="mt-3 text-muted">{o.orte.join(", ")}</p>
              <Link href={`/kfz-werkstatt/${o.slug}`} className="mt-3 inline-block text-sm font-semibold text-blue hover:underline">
                Werkstatt für {o.name}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-muted">
          Ihr Ort ist nicht dabei? Fragen Sie trotzdem an. Wählen Sie im Formular einfach „Anderer Ort“.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
