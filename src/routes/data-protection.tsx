import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/data-protection")({
  head: () => legalHead("Data Protection Rights", "How to access, correct or delete your personal information under POPIA."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Data Protection Rights"
      intro="Under the Protection of Personal Information Act (POPIA), you have rights over your personal information. This page explains them and how to use them."
      sections={[
        { id: "your-rights", title: "Your rights", body: <ul className="list-disc space-y-1 pl-5"><li>Know whether we hold your information and access it.</li><li>Ask us to correct inaccurate information.</li><li>Ask us to delete information we no longer need.</li><li>Object to processing, including direct marketing.</li><li>Lodge a complaint with the Information Regulator.</li></ul> },
        { id: "how-to-request", title: "How to make a request", body: <p>Send your request through our <Link to="/contact" className="text-primary underline">Contact</Link> page and state which right you want to use. We may ask you to confirm your identity.</p> },
        { id: "response-time", title: "Response time", body: <p>We aim to respond within 30 days. Requests are free unless the law allows a reasonable fee.</p> },
        { id: "prototype-data", title: "Prototype data on your device", body: <p>In this prototype, your data is stored only in your browser. You can delete it immediately by clearing this site's data in your browser settings.</p> },
        { id: "complaints", title: "Complaints", body: <p>If you are unhappy with our response, you may contact the Information Regulator of South Africa.</p> },
      ]}
    />
  ),
});
