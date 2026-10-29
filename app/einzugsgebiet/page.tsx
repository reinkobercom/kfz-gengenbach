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
        <h2 className="border-t border-line pt-12 font-display text-3xl">Wählen Sie Ihren Ort</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/", name: "Gengenbach", orte: gengenbach, hinweis: "Hier ist die Werkstatt" },
            ...orte.map((o) => ({ href: `/kfz-werkstatt/${o.slug}`, name: o.name, orte: o.orte, hinweis: "" })),
          ].map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="group flex h-full flex-col justify-between gap-8 rounded-2xl border-[1.5px] border-line p-6 transition-colors hover:border-blue hover:bg-blue-tint/40 sm:p-7"
              >
                <span>
                  {o.hinweis && (
                    <span className="mb-3 inline-flex rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold text-white">{o.hinweis}</span>
                  )}
                  <span className="block font-display text-3xl font-bold leading-tight group-hover:text-blue">{o.name}</span>
                  <span className="mt-3 block leading-snug text-muted">{o.orte.join(", ")}</span>
                </span>
                <span className="inline-flex items-center justify-between gap-2 border-t border-line pt-4 font-semibold text-blue">
                  {o.href === "/" ? "Zur Werkstatt" : `Werkstatt für ${o.name}`}
                  <span className="grid size-9 place-items-center rounded-full bg-blue-tint transition-colors group-hover:bg-blue group-hover:text-white" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl text-muted">
          Ihr Ort ist nicht dabei? Fragen Sie trotzdem an. Wählen Sie im Formular einfach „Anderer Ort“.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
