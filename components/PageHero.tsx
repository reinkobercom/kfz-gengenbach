import Image from "next/image";
import { Konfigurator } from "./Konfigurator";
import { Breadcrumbs, Fakten } from "./ui";

/** Werkstatthalle, wenn eine Seite kein eigenes Motiv hat */
const STANDARD_BILD = "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?auto=format&fit=crop&w=2000&q=70";

/** Seitenkopf: Bild im Hintergrund, Text links, Anfrage rechts */
export function PageHero({
  crumbs,
  h1,
  intro,
  fakten,
  bild = STANDARD_BILD,
  defaultLeistung,
  defaultFahrzeugTyp,
  defaultOrt,
  titel,
  children,
}: {
  crumbs: { name: string; href: string }[];
  h1: string;
  intro: string;
  fakten?: string[];
  /** Hintergrundbild (dekorativ, ohne Alt-Text) */
  bild?: string;
  defaultLeistung?: string;
  defaultFahrzeugTyp?: string;
  defaultOrt?: string;
  titel?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image src={bild} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/75 lg:to-navy/30" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
      <div className="wrap grid gap-12 pb-16 pt-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-14">
        <div className="lg:col-span-6 lg:pr-6">
          <Breadcrumbs items={crumbs} hell />
          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.97] sm:text-6xl lg:text-7xl">{h1}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{intro}</p>
          {fakten && (
            <div className="mt-10 max-w-xl">
              <Fakten items={fakten} hell />
            </div>
          )}
          {children}
        </div>
        <div className="text-navy lg:col-span-6">
          <Konfigurator defaultLeistung={defaultLeistung} defaultFahrzeugTyp={defaultFahrzeugTyp} defaultOrt={defaultOrt} titel={titel} />
        </div>
      </div>
    </section>
  );
}
