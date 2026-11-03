import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

export type LegalSection = { id: string; title: string; body: ReactNode };

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[220px_1fr]">
        <nav aria-label="Table of contents" className="md:sticky md:top-24 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contents</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="space-y-10">
          <p className="text-sm text-muted-foreground">Last updated: 3 November 2026. Prototype content for APPR6312; review with a legal adviser before real use.</p>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 space-y-3 text-muted-foreground">
              <h2 className="text-2xl font-semibold text-foreground">{i + 1}. {s.title}</h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

export function legalHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Gift of the Givers Foundation` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Gift of the Givers Foundation` },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
