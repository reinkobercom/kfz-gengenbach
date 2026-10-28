import { Konfigurator } from "./Konfigurator";
import { Breadcrumbs, Fakten } from "./ui";

export function PageHero({
  crumbs,
  h1,
  intro,
  fakten,
  defaultLeistung,
  defaultFahrzeugTyp,
  defaultOrt,
  titel,
  children,
}: {
  crumbs: { name: string; href: string }[];
  h1: string;
  intro: string;
  fakten?: string[];
  defaultLeistung?: string;
  defaultFahrzeugTyp?: string;
  defaultOrt?: string;
  titel?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="wrap grid gap-12 pb-20 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-14">
      <div className="lg:col-span-6 lg:pr-6">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.97] sm:text-6xl lg:text-7xl">{h1}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
        {fakten && (
          <div className="mt-10 max-w-xl">
            <Fakten items={fakten} />
          </div>
        )}
        {children}
      </div>
      <div className="lg:col-span-6">
        <Konfigurator defaultLeistung={defaultLeistung} defaultFahrzeugTyp={defaultFahrzeugTyp} defaultOrt={defaultOrt} titel={titel} />
      </div>
    </section>
  );
}
