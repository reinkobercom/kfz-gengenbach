"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

/**
 * Cloudflare Turnstile, nur wenn NEXT_PUBLIC_TURNSTILE_SITE_KEY gesetzt ist.
 * Lädt erst im letzten Formularschritt (kein Drittanbieter-Aufruf beim Seitenaufruf),
 * Darstellung nur bei Bedarf ("interaction-only").
 */
export function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const box = useRef<HTMLDivElement>(null);
  const [geladen, setGeladen] = useState(() => typeof window !== "undefined" && Boolean(window.turnstile));
  const cb = useRef(onToken);
  useEffect(() => {
    cb.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!SITE_KEY || !geladen || !box.current || !window.turnstile) return;
    const id = window.turnstile.render(box.current, {
      sitekey: SITE_KEY,
      appearance: "interaction-only",
      language: "de",
      callback: (t: string) => cb.current(t),
      "expired-callback": () => cb.current(""),
      "error-callback": () => cb.current(""),
    });
    return () => window.turnstile?.remove(id);
  }, [geladen]);

  if (!SITE_KEY) return null;
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setGeladen(true)} />
      <div ref={box} className="mt-3" />
    </>
  );
}

export const turnstileAktiv = Boolean(SITE_KEY);
