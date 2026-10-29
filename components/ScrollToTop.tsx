"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Jede neue Seite beginnt ganz oben. Next.js richtet beim Seitenwechsel nur den
 * neuen Seitenteil am Fensterrand aus; mit der klebenden Kopfzeile darüber
 * bliebe die Seite um deren Höhe heruntergescrollt.
 * Ausnahmen: Sprungmarken (#anfrage) und Zurück/Vor im Browser, dort bleibt die
 * gemerkte Position erhalten.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const merken = () => {
      document.documentElement.dataset.zurueck = "1";
    };
    window.addEventListener("popstate", merken);
    return () => window.removeEventListener("popstate", merken);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.zurueck) {
      delete html.dataset.zurueck;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
