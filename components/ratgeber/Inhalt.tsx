import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/ratgeber";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Inline-Formatierung: **fett** und [Text](/pfad) bzw. [Text](https://…) */
export function Inline({ text }: { text: string }) {
  const teile = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {teile.map((t, i) => {
        if (t.startsWith("**") && t.endsWith("**")) return <strong key={i} className="font-semibold text-navy">{t.slice(2, -2)}</strong>;
        const link = t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const cls = "font-semibold text-blue underline decoration-blue/30 underline-offset-[3px] hover:decoration-blue";
          return href.startsWith("/") ? (
            <Link key={i} href={href} className={cls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener" className={cls}>
              {label}
            </a>
          );
        }
        return t;
      })}
    </>
  );
}

const Haken = () => (
  <svg className="mt-1 shrink-0 text-blue" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Bloecke({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i): ReactNode => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="mt-5">
                <Inline text={b.text} />
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-10 font-display text-2xl">
                <Inline text={b.text} />
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Haken />
                    <span>
                      <Inline text={it} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 space-y-3 [counter-reset:schritt]">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-4 [counter-increment:schritt] before:grid before:size-7 before:shrink-0 before:place-items-center before:rounded-full before:bg-blue-tint before:text-sm before:font-bold before:text-blue before:content-[counter(schritt)]">
                    <span>
                      <Inline text={it} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <figure key={i} className="mt-7">
                <figcaption className="mb-3 text-sm text-muted">
                  <Inline text={b.caption} />
                </figcaption>
                <div className="overflow-x-auto rounded-xl ring-1 ring-line">
                  <table className="w-full min-w-[32rem] border-collapse text-left text-[0.95rem]">
                    <thead className="bg-mist">
                      <tr>
                        {b.head.map((h) => (
                          <th key={h} scope="col" className="border-b border-line px-4 py-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, ri) => (
                        <tr key={ri} className="border-b border-line last:border-0 align-top">
                          {r.map((c, ci) =>
                            ci === 0 ? (
                              <th key={ci} scope="row" className="px-4 py-3 font-semibold">
                                <Inline text={c} />
                              </th>
                            ) : (
                              <td key={ci} className="px-4 py-3 text-muted">
                                <Inline text={c} />
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            );
          case "hinweis":
            return (
              <aside key={i} className="mt-7 rounded-xl border-l-4 border-blue bg-blue-tint px-5 py-4">
                <p className="font-semibold">{b.titel}</p>
                <p className="mt-1 text-[0.98rem]">
                  <Inline text={b.text} />
                </p>
              </aside>
            );
        }
      })}
    </>
  );
}
