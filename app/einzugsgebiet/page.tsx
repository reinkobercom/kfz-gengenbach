import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/ui";
import { orte } from "@/lib/orte";

export const metadata: Metadata = {
  title: "Einzugsgebiet: Werkstatt für Gengenbach, Offenburg & Kinzigtal",
  description:
    "Kfz-Werkstatt in Gengenbach für Offenburg, Ortenberg, Ohlsbach, Berghaupten, Biberach, Steinach, Zell a. H., Nordrach und Oberharmersbach.",
  alternates: { canonical: "/einzugsgebiet" },
};

const gengenbach = ["Gengenbach", "Schwaibach", "Reichenbach", "Bermersbach", "Fußbach"];

export default function EinzugsgebietPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Einzugsgebiet", href: "/einzugsgebiet" }]}
        h1="Ihre Werkstatt für Gengenbach und Umgebung"
        intro="Die Werkstatt liegt in Gengenbach an der B33. Wir sind für die Stadt und die Ortsteile da, für Offenburg, das Harmersbachtal und das Kinzigtal bis Steinach."
      />

      <section className="section wrap">
        <h2 className="font-display text-4xl sm:text-5xl">Wählen Sie Ihren Ort</h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {[
            { href: "/", name: "Gengenbach", orte: gengenbach, hinweis: "Hier ist die Werkstatt" },
            ...orte.map((o) => ({ href: `/kfz-werkstatt/${o.slug}`, name: o.name, orte: o.orte, hinweis: "" })),
          ].map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border-[1.5px] border-line p-4 transition-colors hover:border-blue hover:bg-blue-tint/40 sm:flex-col sm:items-stretch sm:gap-8 sm:p-7"
              >
                <span>
                  {o.hinweis && (
                    <span className="mb-3 inline-flex rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold text-white">{o.hinweis}</span>
                  )}
                  <span className="block font-display text-2xl font-bold leading-tight group-hover:text-blue sm:text-3xl">{o.name}</span>
                  <span className="mt-1 block text-sm leading-snug text-muted sm:mt-3 sm:text-base">{o.orte.join(", ")}</span>
                </span>
                <span className="inline-flex items-center justify-between gap-2 font-semibold text-blue sm:border-t sm:border-line sm:pt-4">
                  <span className="hidden sm:inline">{o.href === "/" ? "Zur Werkstatt" : `Werkstatt für ${o.name}`}</span>
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
