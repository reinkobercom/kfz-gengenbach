import Image from "next/image";
import Link from "next/link";
import { artikelBild, lesezeit, type Artikel } from "@/lib/ratgeber";
import { ohneWitwe } from "@/lib/text";

/** Artikel-Karten „Aus dem Ratgeber“ (mobil wischbar) */
export function RatgeberKarten({ artikel, titel = "Hilfreiche Ratgeber" }: { artikel: Artikel[]; titel?: string }) {
  if (!artikel.length) return null;
  const spalten = artikel.length >= 4 ? "lg:grid-cols-4" : artikel.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section className="section wrap">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl sm:text-5xl">{titel}</h2>
        <Link href="/ratgeber" className="font-semibold text-blue hover:underline">
          Alle Artikel
        </Link>
      </div>
      <ul className={`mt-10 ${artikel.length > 3 ? "wischleiste sm:gap-6" : "grid gap-4 sm:gap-6"} sm:grid-cols-2 ${spalten} ${artikel.length < 3 ? "lg:max-w-4xl" : ""}`}>
        {artikel.map((a) => {
          const bild = artikelBild(a);
          return (
            <li key={a.slug}>
              <Link href={`/ratgeber/${a.slug}`} className="group block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-line hover:ring-blue">
                {bild && (
                  <div className="relative aspect-[16/10] bg-mist">
                    <Image src={bild.src} alt={bild.alt} fill sizes="(min-width: 1024px) 300px, 80vw" className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-muted">
                    {a.kategorie} · {lesezeit(a)}&nbsp;Min. Lesezeit
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight group-hover:text-blue">{ohneWitwe(a.titel)}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
