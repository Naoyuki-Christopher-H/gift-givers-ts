import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { getSection } from "@/lib/topics";

export const Route = createFileRoute("/topics/$section/$topic")({
  loader: ({ params }) => {
    const section = getSection(params.section);
    const topic = section?.topics.find((t) => t.slug === params.topic);
    if (!section || !topic) throw notFound();
    return { section, topic };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.topic.title} | Gift of the Givers Foundation` : "Unavailable";
    const desc = loaderData?.topic.summary ?? "";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }] };
  },
  component: TopicPage,
});

function TopicPage() {
  const { section, topic } = Route.useLoaderData();
  return (
    <LegalPage
      eyebrow={section.title}
      title={topic.title}
      intro={topic.summary}
      sections={[
        { id: "overview", title: "Overview", body: <p>{topic.summary}</p> },
        { id: "why-it-matters", title: "Why it matters to us", body: <p>{topic.relevance}</p> },
        { id: "key-points", title: "Key points", body: <ul className="list-disc space-y-1 pl-5">{topic.points.map((p) => <li key={p}>{p}</li>)}</ul> },
        { id: "related-topics", title: "Related topics", body: (
          <ul className="grid gap-1 sm:grid-cols-2">
            {section.topics.filter((t) => t.slug !== topic.slug).map((t) => (
              <li key={t.slug}><Link to="/topics/$section/$topic" params={{ section: section.key, topic: t.slug }} className="text-primary underline">{t.title}</Link></li>
            ))}
          </ul>
        ) },
        { id: "get-help", title: "Get help", body: <p>This page is general information, not legal or financial advice. For questions, visit our <Link to="/contact" className="text-primary underline">Contact</Link> page.</p> },
      ]}
    />
  );
}
