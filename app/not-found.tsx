import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-32">
      <h1 className="font-display text-5xl font-extrabold sm:text-6xl">Diese Seite gibt es nicht.</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">Vielleicht hilft Ihnen einer dieser Wege weiter.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Zur Startseite
        </Link>
        <Link href="/leistungen" className="btn btn-ghost">
          Alle Leistungen
        </Link>
      </div>
    </section>
  );
}
