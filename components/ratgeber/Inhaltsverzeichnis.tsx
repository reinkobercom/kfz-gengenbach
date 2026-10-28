"use client";

import { useEffect, useState } from "react";

type Eintrag = { id: string; titel: string };

/**
 * Klebendes Inhaltsverzeichnis. Echte Sprunglinks (#id), funktionieren auch ohne JavaScript;
 * der aktive Abschnitt wird per IntersectionObserver hervorgehoben (oberes Drittel zählt).
 */
export function Inhaltsverzeichnis({ eintraege }: { eintraege: Eintrag[] }) {
  const [aktiv, setAktiv] = useState<string | null>(null);

  useEffect(() => {
    const ziele = eintraege.map((e) => document.getElementById(e.id)).filter((x): x is HTMLElement => Boolean(x));
    // Aktiv ist die letzte Überschrift, die das obere Drittel des Fensters erreicht hat.
    // Per Scroll-Position statt Schnittmenge: funktioniert auch bei schnellen Sprüngen.
    let frame = 0;
    const messen = () => {
      frame = 0;
      const grenze = window.innerHeight / 3;
      let id: string | null = null;
      for (const z of ziele) {
        if (z.getBoundingClientRect().top <= grenze) id = z.id;
        else break;
      }
      setAktiv(id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(messen);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [eintraege]);

  return (
    <ol className="space-y-0.5">
      {eintraege.map((e, i) => {
        const ist = aktiv === e.id;
        return (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={ist ? "location" : undefined}
              className={`flex gap-3 rounded-lg border-l-2 py-1.5 pl-3 pr-2 text-[0.95rem] leading-snug transition-colors ${
                ist ? "border-blue bg-blue-tint/60 font-semibold text-navy" : "border-transparent text-muted hover:text-navy"
              }`}
            >
              <span className="tabular-nums text-blue">{i + 1}.</span>
              <span>{e.titel}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
