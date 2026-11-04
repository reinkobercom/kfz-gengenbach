import Image from "next/image";
import { anfrageLink, waHref } from "@/lib/site";
import { ohneWitwe } from "@/lib/text";
import { Konfigurator } from "./Konfigurator";
import { Breadcrumbs, Fakten, WaIcon } from "./ui";

/** Werkstatthalle, wenn eine Seite kein eigenes Motiv hat */
const STANDARD_BILD = "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?auto=format&fit=crop&w=2000&q=70";

/**
 * Seitenkopf mit Bild im Hintergrund.
 * - Standard: Text über die volle Breite, darunter „Anfrage starten“ (zur Kontaktseite,
 *   mit Vorauswahl) und WhatsApp.
 * - `formular`: Text links, Anfrageformular rechts (nur Kontaktseite).
 */
export function PageHero({
  crumbs,
  h1,
  intro,
  fakten,
  bild = STANDARD_BILD,
  formular = false,
  anfrageHref = anfrageLink(),
  waText,
  children,
}: {
  crumbs: { name: string; href: string }[];
  h1: string;
  intro: string;
  fakten?: string[];
  /** Hintergrundbild (dekorativ, ohne Alt-Text) */
  bild?: string;
  /** Anfrageformular rechts statt Buttons */
  formular?: boolean;
  /** Ziel von „Anfrage starten“, z. B. anfrageLink({ leistung: "motor" }) */
  anfrageHref?: string;
  /** Vorbelegter WhatsApp-Text */
  waText?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image src={bild} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="-z-20 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/80 lg:to-navy/35"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
      {formular ? (
        <div className="wrap grid gap-12 pb-16 pt-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-14">
          <div className="lg:col-span-6 lg:pr-6">
            <Breadcrumbs items={crumbs} hell />
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.97] sm:text-6xl lg:text-7xl">{ohneWitwe(h1)}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{intro}</p>
            {fakten && (
              <div className="mt-10 max-w-xl">
                <Fakten items={fakten} hell />
              </div>
            )}
            {children}
          </div>
          <div className="text-navy lg:col-span-6">
            <Konfigurator />
          </div>
        </div>
      ) : (
        <div className="wrap pb-16 pt-8 lg:pb-28 lg:pt-14">
          <Breadcrumbs items={crumbs} hell />
          <div className="max-w-4xl">
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl">{ohneWitwe(h1)}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>
            {fakten && (
              <div className="mt-8">
                <Fakten items={fakten} hell />
              </div>
            )}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={anfrageHref} className="btn btn-primary min-h-14 px-8 text-lg">
                Anfrage starten
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={waHref(waText)}
                target="_blank"
                rel="noopener"
                className="btn min-h-14 border-[1.5px] border-white/30 px-7 text-lg backdrop-blur-sm hover:border-white hover:bg-white/10"
              >
                <WaIcon className="text-[#25d366]" />
                Per WhatsApp schreiben
              </a>
            </div>
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
