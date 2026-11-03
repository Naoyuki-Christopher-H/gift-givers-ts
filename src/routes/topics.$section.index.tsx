import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getSection } from "@/lib/topics";

export const Route = createFileRoute("/topics/$section/")({
  loader: ({ params }) => {
    const section = getSection(params.section);
    if (!section) throw notFound();
    return section;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | Gift of the Givers Foundation` : "Unavailable";
    const desc = loaderData?.intro ?? "";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: SectionPage,
});

function SectionPage() {
  const s = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow="Knowledge hub" title={s.title} intro={s.intro} />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {s.topics.map((t) => (
          <Link key={t.slug} to="/topics/$section/$topic" params={{ section: s.key, topic: t.slug }} className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
            <h2 className="font-semibold text-primary">{t.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
