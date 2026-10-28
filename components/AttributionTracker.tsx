"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution-client";

/** Merkt sich Kampagnen-Herkunft (First Touch) in sessionStorage. Übertragen wird erst mit dem Absenden der Anfrage. */
export function AttributionTracker() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
