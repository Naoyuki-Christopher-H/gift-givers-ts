import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, HandHeart, HeartPulse, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-relief.jpg";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gift of the Givers Foundation | Disaster Relief in South Africa" },
      { name: "description", content: "Donate, volunteer and follow live relief projects run by the Gift of the Givers Foundation." },
      { property: "og:title", content: "Gift of the Givers Foundation | Disaster Relief" },
      { property: "og:description", content: "Donate, volunteer and follow live relief projects across South Africa." },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "47", label: "countries reached" },
  { value: "R4bn+", label: "in aid delivered" },
  { value: "30 yrs", label: "of relief work" },
];

const AREAS = [
  { icon: Droplets, title: "Water and drought relief", text: "Boreholes and water tankers for communities in crisis." },
  { icon: HeartPulse, title: "Medical aid", text: "Field hospitals, medicines and trained medical teams." },
  { icon: HandHeart, title: "Food parcels", text: "Fast food distribution after floods, fires and storms." },
  { icon: Users, title: "Search and rescue", text: "Specialist teams deployed within hours of a disaster." },
];

function Index() {
  const updates = useStore((s) => s.updates.slice(0, 3));
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Volunteers handing out food and water after a flood" width={1600} height={912} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-overlay)" }} />
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Relief when it matters most</p>
          <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.05] text-primary-foreground md:text-6xl">
            When disaster strikes, we are already on the way.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Your donation or your time puts water, food and medical care in the hands of people who need it today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/donate">Donate now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/volunteer">Become a volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-4">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Latest from the field</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {updates.map((u) => (
            <article key={u.id} className="rounded-lg border-l-4 border-primary bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{u.project}</p>
              <h3 className="mt-2 text-xl font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {new Date(u.createdAt).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })} · {u.author}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
