import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/copyright")({
  head: () => legalHead("Copyright Notice", "Ownership and permitted use of website content, branding and images."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Copyright and Intellectual Property Notice"
      intro="This notice identifies who owns the content on this website and how you may use it."
      sections={[
        { id: "ownership", title: "Ownership", body: <p>Copyright 2026 Gift of the Givers Foundation. Text, layout, graphics and code are owned by the Foundation or its licensors.</p> },
        { id: "trademarks", title: "Trademarks and branding", body: <p>The Gift of the Givers name and logo are the Foundation's marks and may not be used without written permission.</p> },
        { id: "images", title: "Images", body: <p>Images on this prototype are illustrative and were generated for the project. They do not show real people or events.</p> },
        { id: "permitted-use", title: "Permitted use", body: <p>You may view, print and share pages for personal, non-commercial purposes if you credit the Foundation and do not change the content.</p> },
        { id: "permission", title: "Requesting permission", body: <p>For any other use, ask through our <Link to="/contact" className="text-primary underline">Contact</Link> page.</p> },
      ]}
    />
  ),
});
