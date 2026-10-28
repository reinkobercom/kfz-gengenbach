"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, telHref, waHref } from "@/lib/site";

/** Fixierte Aktionsleiste auf dem Smartphone. Blendet sich aus, solange das Formular sichtbar ist. */
export function MobileBar() {
  const pathname = usePathname();
  const [formSichtbar, setFormSichtbar] = useState(true);

  useEffect(() => {
    const form = document.getElementById("anfrage");
    if (!form) {
      // Seiten ohne Formular: Leiste immer zeigen (asynchron, um Render-Kaskaden zu vermeiden)
      const t = requestAnimationFrame(() => setFormSichtbar(false));
      return () => cancelAnimationFrame(t);
    }
    const io = new IntersectionObserver(([e]) => setFormSichtbar(e.isIntersecting), { threshold: 0.15 });
    io.observe(form);
    return () => io.disconnect();
  }, [pathname]);

  const hatForm = pathname !== "/impressum" && pathname !== "/datenschutz";

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur-md transition-transform duration-200 lg:hidden ${
        formSichtbar ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={formSichtbar}
    >
      <div className="grid grid-cols-[1fr_auto_auto] gap-2">
        <Link href={hatForm ? "#anfrage" : "/#anfrage"} className="btn btn-primary min-h-12" tabIndex={formSichtbar ? -1 : 0}>
          Anfrage starten
        </Link>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener"
          className="btn btn-ghost min-h-12 px-4"
          aria-label="WhatsApp schreiben"
          tabIndex={formSichtbar ? -1 : 0}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
          </svg>
        </a>
        <a href={telHref} className="btn btn-ghost min-h-12 px-4" aria-label={`${site.phoneDisplay} anrufen`} tabIndex={formSichtbar ? -1 : 0}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
