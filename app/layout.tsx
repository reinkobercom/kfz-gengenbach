import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { AttributionTracker } from "@/components/AttributionTracker";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { JsonLd, MobileBar } from "@/components/ui";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { indexierbar, ogBasis, site } from "@/lib/site";
import "./globals.css";

const body = localFont({
  variable: "--ff-body",
  display: "swap",
  src: [
    { path: "./fonts/barlow-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/barlow-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/barlow-latin-600-normal.woff2", weight: "600" },
  ],
});

const display = localFont({
  variable: "--ff-display",
  display: "swap",
  src: [
    { path: "./fonts/barlow-condensed-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/barlow-condensed-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/barlow-condensed-latin-800-normal.woff2", weight: "800" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kfz-Werkstatt Gengenbach | Motorinstandsetzung, Inspektion, HU/AU",
    template: "%s",
  },
  description:
    "Freie Kfz-Werkstatt in Gengenbach: Inspektion, HU/AU, Reifen, Reparatur und Motorinstandsetzung für Pkw und Transporter bis 4,5 t. Befund per Video.",
  applicationName: site.brand,
  authors: [{ name: site.legalName }],
  formatDetection: { telephone: true },
  openGraph: ogBasis,
  robots: indexierbar ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${body.variable} ${display.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <AttributionTracker />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
