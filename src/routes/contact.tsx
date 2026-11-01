import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Gift of the Givers Foundation" },
      { name: "description", content: "Get in touch with the Gift of the Givers Foundation team." },
      { property: "og:title", content: "Contact the Gift of the Givers Foundation" },
      { property: "og:description", content: "Questions about donations, volunteering or relief projects? Contact us." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="We would love to hear from you" />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6 text-sm">
          <p className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /> Head office, Pietermaritzburg, KwaZulu-Natal (sample address)</p>
          <p className="flex gap-3"><Phone className="h-5 w-5 text-primary" /> 0800 000 000 (sample number)</p>
          <p className="flex gap-3"><Mail className="h-5 w-5 text-primary" /> info@example.org (sample email)</p>
        </div>
        <form
          className="space-y-4 rounded-lg border border-border bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thank you. Your message has been received.");
            e.currentTarget.reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="c-name">Name</Label><Input id="c-name" required /></div>
            <div className="space-y-2"><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" required /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="c-msg">Message</Label><Textarea id="c-msg" rows={5} required /></div>
          <Button type="submit">Send message</Button>
        </form>
      </section>
    </>
  );
}
