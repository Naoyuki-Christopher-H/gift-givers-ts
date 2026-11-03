import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => legalHead("Privacy Policy", "What personal information we collect, why, and how we use, store and share it."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what personal information we collect, why we collect it, and how we use, store and share it, in line with the Protection of Personal Information Act (POPIA)."
      sections={[
        { id: "who-we-are", title: "Who we are", body: <p>The Gift of the Givers Foundation is the responsible party for personal information collected through this website.</p> },
        { id: "what-we-collect", title: "Information we collect", body: <ul className="list-disc space-y-1 pl-5"><li>Account details: name, email address and password.</li><li>Donation details: amount, donor name and certificate number.</li><li>Volunteer details: name, contact details, skills and availability.</li><li>Messages you send through the contact form.</li></ul> },
        { id: "why-we-collect", title: "Why we collect it", body: <p>We use your information to process donations, issue tax certificates, coordinate volunteers, answer your questions and report on relief work.</p> },
        { id: "how-we-store", title: "How we store it", body: <p>In this prototype, information is stored only in your own browser and is not sent to our servers. In the production version, information will be stored in a secured Microsoft Azure database in line with POPIA.</p> },
        { id: "sharing", title: "Sharing your information", body: <p>We do not sell your information. We share it only with service providers who help us run the platform, or when the law requires it.</p> },
        { id: "retention", title: "How long we keep it", body: <p>We keep information only for as long as needed for the purpose it was collected, or as long as tax and other laws require.</p> },
        { id: "your-rights", title: "Your rights", body: <p>You may access, correct or delete your information. See our <Link to="/data-protection" className="text-primary underline">Data Protection Rights</Link> page.</p> },
        { id: "contact", title: "Contact us", body: <p>Questions about this policy can be sent through our <Link to="/contact" className="text-primary underline">Contact</Link> page.</p> },
      ]}
    />
  ),
});
