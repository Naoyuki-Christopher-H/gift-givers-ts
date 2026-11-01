import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { calculateTotalZar, formatMoney } from "@/lib/helpers";
import { addUpdate, PROJECTS, useCurrentUser, useStore } from "@/lib/store";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Employee Dashboard | Gift of the Givers Foundation" },
      { name: "description", content: "Post relief project updates and view volunteer sign-ups." },
      { property: "og:title", content: "Employee dashboard" },
      { property: "og:description", content: "Staff area for relief updates and volunteers." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const user = useCurrentUser();
  const volunteers = useStore((s) => s.volunteers);
  const donations = useStore((s) => s.donations);
  const updates = useStore((s) => s.updates);
  const [project, setProject] = useState(PROJECTS[0]!);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  if (!user || user.role !== "employee") {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold">Employees only</h1>
        <p className="mt-2 text-muted-foreground">Please log in with an employee account to view this page.</p>
        <Button asChild className="mt-6"><Link to="/login">Log in</Link></Button>
      </div>
    );
  }

  const stats = [
    { label: "Volunteer sign-ups", value: String(volunteers.length) },
    { label: "Donations", value: String(donations.length) },
    { label: "Total raised (ZAR, symbolic)", value: formatMoney(calculateTotalZar(donations), "ZAR") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Employee dashboard</p>
      <h1 className="mt-2 text-4xl font-semibold">Welcome, {user.name.split(" ")[0]}</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-1 font-display text-3xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <form
          className="space-y-4 rounded-lg border border-border bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            addUpdate({ project, title: title.trim(), body: body.trim(), author: user.name });
            setTitle("");
            setBody("");
            toast.success("Update posted to the home page");
          }}
        >
          <h2 className="text-xl font-semibold">Post a project update</h2>
          <div className="space-y-2">
            <Label>Project</Label>
            <Select value={project} onValueChange={setProject}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{PROJECTS.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label htmlFor="u-title">Headline</Label><Input id="u-title" required value={title} onChange={(e) => setTitle(e.target.value)} /></div>
          <div className="space-y-2"><Label htmlFor="u-body">Update</Label><Textarea id="u-body" rows={4} required value={body} onChange={(e) => setBody(e.target.value)} /></div>
          <Button type="submit">Publish update</Button>
        </form>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Recent updates</h2>
          <ul className="mt-4 space-y-4">
            {updates.slice(0, 5).map((u) => (
              <li key={u.id} className="border-l-2 border-primary pl-4">
                <p className="text-xs text-muted-foreground">{u.project} · {new Date(u.createdAt).toLocaleDateString("en-ZA")}</p>
                <p className="font-semibold">{u.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-10 rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Volunteer sign-ups</h2>
        {volunteers.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">No sign-ups yet. They will appear here when people use the Volunteer form.</p>
        ) : (
          <Table className="mt-4">
            <TableHeader>
              <TableRow><TableHead>Name</TableHead><TableHead>Contact</TableHead><TableHead>Skills</TableHead><TableHead>Availability</TableHead><TableHead>Date</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {volunteers.map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="font-medium">{v.name}</TableCell>
                  <TableCell>{v.email}<br /><span className="text-muted-foreground">{v.phone}</span></TableCell>
                  <TableCell>{v.skills.join(", ")}</TableCell>
                  <TableCell>{v.availability}</TableCell>
                  <TableCell>{new Date(v.createdAt).toLocaleDateString("en-ZA")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>
    </div>
  );
}
