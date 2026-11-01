import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addVolunteer } from "@/lib/store";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer | Gift of the Givers Foundation" },
      { name: "description", content: "Register your interest to volunteer with the Gift of the Givers Foundation." },
      { property: "og:title", content: "Volunteer with Gift of the Givers" },
      { property: "og:description", content: "Share your skills and availability to help in disaster relief." },
    ],
  }),
  component: Volunteer,
});

const SKILLS = ["Medical", "Logistics and driving", "Search and rescue", "Cooking", "Counselling", "Admin and IT", "Construction", "General help"];
const AVAILABILITY = ["Weekdays", "Weekends", "Evenings", "On call for emergencies", "Full time for deployments"];

function Volunteer() {
  const [skills, setSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [done, setDone] = useState<string | null>(null);

  if (done) {
    return (
      <>
        <PageHeader eyebrow="Volunteer" title="Thank you for stepping up" />
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <p className="text-lg">We have received your details, {done}. Our team will contact you when a matching need comes up.</p>
          <Button className="mt-6" onClick={() => setDone(null)}>Register another volunteer</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Lend your hands, skills and time"
        intro="Tell us what you can do and when you are free. We match volunteers to projects as needs arise."
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <form
          className="space-y-6 rounded-lg border border-border bg-card p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            if (skills.length === 0) return toast.error("Please choose at least one skill.");
            if (!availability) return toast.error("Please choose your availability.");
            const f = new FormData(e.currentTarget);
            const name = String(f.get("name")).trim();
            addVolunteer({ name, email: String(f.get("email")), phone: String(f.get("phone")), skills, availability });
            toast.success("Volunteer registration received");
            setDone(name.split(" ")[0] ?? name);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
            <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" required /></div>
          </div>
          <fieldset>
            <legend className="text-sm font-medium">Skills</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {SKILLS.map((s) => (
                <label key={s} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={skills.includes(s)}
                    onCheckedChange={(c) => setSkills((prev) => (c ? [...prev, s] : prev.filter((x) => x !== s)))}
                  />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="space-y-2">
            <Label>Availability</Label>
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger><SelectValue placeholder="Choose when you are free" /></SelectTrigger>
              <SelectContent>
                {AVAILABILITY.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" size="lg">Register interest</Button>
        </form>
      </section>
    </>
  );
}
