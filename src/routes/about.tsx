import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Gift of the Givers Foundation" },
      { name: "description", content: "Learn about the mission and values of the Gift of the Givers Foundation." },
      { property: "og:title", content: "About the Gift of the Givers Foundation" },
      { property: "og:description", content: "Our mission, values and the way we deliver disaster relief." },
    ],
  }),
  component: About,
});

const VALUES = [
  { title: "Compassion", text: "We serve every person with dignity, regardless of race, religion or politics." },
  { title: "Efficiency", text: "We move fast and use every rand where it makes the greatest difference." },
  { title: "Resilience", text: "We stay long after the cameras leave, helping communities rebuild." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Organised relief, delivered with compassion"
        intro="The Gift of the Givers Foundation provides swift and effective aid to communities hit by natural disasters and emergencies in South Africa and around the world."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">Our mission</h2>
          <p>
            We exist to bring hope to people in crisis. A diverse team of volunteers and specialists works together to deliver food, water, medical care and search and rescue services where they are needed most.
          </p>
          <p>
            This web platform is a central hub for our relief work. It helps us coordinate volunteers, track donations and share live updates from ongoing projects.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our values</h2>
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
