import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { downloadCertificate } from "@/lib/certificate";
import { CURRENCIES, CURRENCY_SYMBOL, formatMoney, isValidAmount, toZar, type Currency, type Frequency } from "@/lib/helpers";
import { addDonation, PROJECTS, useCurrentUser, useStore, type Donation } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Gift of the Givers Foundation" },
      { name: "description", content: "Make a one-time or monthly donation in ZAR, USD or EUR and receive a tax certificate." },
      { property: "og:title", content: "Donate to Gift of the Givers" },
      { property: "og:description", content: "One-time or monthly donations with an instant tax certificate." },
    ],
  }),
  component: Donate,
});

const PRESETS = [100, 250, 500, 1000];

function Donate() {
  const user = useCurrentUser();
  const myDonations = useStore((s) => (user ? s.donations.filter((d) => d.donorEmail === user.email) : []));
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [currency, setCurrency] = useState<Currency>("ZAR");
  const [amount, setAmount] = useState("250");
  const [project, setProject] = useState(PROJECTS[0]!);
  const [anonymous, setAnonymous] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [receipt, setReceipt] = useState<Donation | null>(null);

  const isAnon = !user && anonymous;
  const value = Number(amount);

  if (receipt) return <Receipt d={receipt} onAgain={() => setReceipt(null)} />;

  return (
    <>
      <PageHeader eyebrow="Donate" title="Every gift moves relief closer" intro="Prototype stage: amounts are symbolic and no payment is processed." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.5fr_1fr]">
        <form
          className="space-y-7 rounded-lg border border-border bg-card p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValidAmount(value)) { toast.error("Please enter an amount between 10 and 1,000,000."); return; }
            if (!user && !isAnon && !guestName.trim()) { toast.error("Please enter your name or choose to give anonymously."); return; }
            const d = addDonation({
              donorName: user ? user.name : isAnon ? "Anonymous guest" : guestName.trim(),
              donorEmail: user ? user.email : isAnon ? null : guestEmail.trim() || null,
              anonymous: isAnon,
              amount: value,
              currency,
              frequency,
              project,
            });
            toast.success("Thank you for your donation");
            setReceipt(d);
          }}
        >
          <div>
            <Label>Donation type</Label>
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-md bg-muted p-1">
              {(["once", "monthly"] as Frequency[]).map((f) => (
                <button key={f} type="button" onClick={() => setFrequency(f)} className={cn("rounded py-2 text-sm font-medium transition", frequency === f ? "bg-card text-primary shadow-sm" : "text-muted-foreground")}>
                  {f === "once" ? "One-time" : "Monthly (recurring)"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
            <div className="space-y-2">
              <Label>Currency</Label>
              <Select value={currency} onValueChange={(v) => setCurrency(v as Currency)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{CURRENCIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" min={10} step="any" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <Button key={p} type="button" variant={value === p ? "default" : "outline"} size="sm" onClick={() => setAmount(String(p))}>
                {CURRENCY_SYMBOL[currency]}{p}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Relief project</Label>
            <Select value={project} onValueChange={setProject}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{PROJECTS.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
          </div>

          {user ? (
            <p className="rounded-md bg-secondary p-3 text-sm">Donating as <strong>{user.name}</strong> ({user.email})</p>
          ) : (
            <div className="space-y-4 rounded-md border border-border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Give as an anonymous guest</p>
                  <p className="text-xs text-muted-foreground">No account or name needed. Or <Link to="/login" className="text-primary underline">log in</Link> to save your history.</p>
                </div>
                <Switch checked={anonymous} onCheckedChange={setAnonymous} aria-label="Donate anonymously" />
              </div>
              {!anonymous && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="gname">Name</Label><Input id="gname" value={guestName} onChange={(e) => setGuestName(e.target.value)} /></div>
                  <div className="space-y-2"><Label htmlFor="gemail">Email (optional)</Label><Input id="gemail" type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} /></div>
                </div>
              )}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full">
            Donate {isValidAmount(value) ? formatMoney(value, currency) : ""}{frequency === "monthly" ? " per month" : ""}
          </Button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-lg bg-primary p-6 text-primary-foreground">
            <p className="text-sm opacity-80">Your gift in rand (symbolic rate)</p>
            <p className="mt-1 font-display text-4xl font-semibold">{isValidAmount(value) ? formatMoney(toZar(value, currency), "ZAR") : "—"}</p>
            <p className="mt-4 text-sm opacity-90">R250 can supply a family with a food parcel for a week.</p>
          </div>
          {user && myDonations.length > 0 && (
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Your donations</h2>
              <ul className="mt-3 divide-y divide-border text-sm">
                {myDonations.map((d) => (
                  <li key={d.id} className="flex items-center justify-between py-2">
                    <span>{formatMoney(d.amount, d.currency)} · {d.certificateNumber}</span>
                    <Button variant="ghost" size="icon" aria-label="Download certificate" onClick={() => downloadCertificate(d)}><Download className="h-4 w-4" /></Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}

function Receipt({ d, onAgain }: { d: Donation; onAgain: () => void }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-center text-4xl font-semibold">Thank you</h1>
      <p className="mt-2 text-center text-muted-foreground">Your tax certificate is ready.</p>
      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="bg-primary px-6 py-4 text-primary-foreground">
          <p className="font-display text-xl font-semibold">Donation Tax Certificate (Section 18A)</p>
          <p className="text-xs opacity-80">Prototype placeholder, not valid for SARS</p>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 p-6 text-sm">
          <dt className="text-muted-foreground">Certificate number</dt><dd className="font-mono font-semibold">{d.certificateNumber}</dd>
          <dt className="text-muted-foreground">Date</dt><dd>{new Date(d.createdAt).toLocaleDateString("en-ZA", { dateStyle: "long" })}</dd>
          <dt className="text-muted-foreground">Donor</dt><dd>{d.anonymous ? "Anonymous guest" : d.donorName}</dd>
          <dt className="text-muted-foreground">Amount</dt><dd>{formatMoney(d.amount, d.currency)} ({formatMoney(toZar(d.amount, d.currency), "ZAR")})</dd>
          <dt className="text-muted-foreground">Type</dt><dd>{d.frequency === "monthly" ? "Recurring (monthly)" : "One-time"}</dd>
          <dt className="text-muted-foreground">Project</dt><dd>{d.project}</dd>
        </dl>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button onClick={() => downloadCertificate(d)}><Download className="mr-2 h-4 w-4" />Download PDF</Button>
        <Button variant="outline" onClick={onAgain}>Make another donation</Button>
      </div>
    </div>
  );
}
