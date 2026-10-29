"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Logo-Link: führt zur Startseite und immer ganz nach oben, auch wenn man schon dort ist. */
export function LogoLink({ className, label, children }: { className?: string; label: string; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <Link
      href="/"
      aria-label={label}
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        if (window.location.hash) history.replaceState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
