import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => legalHead("Disclaimer", "Limits of liability for information, advice and external links on this website."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="This disclaimer limits our liability for information, advice, external links and other website content, where the law allows."
      sections={[
        { id: "general-information", title: "General information", body: <p>Content is provided for general information only. Figures, project names and updates in this prototype are sample data.</p> },
        { id: "no-advice", title: "No professional advice", body: <p>Nothing on this website is legal, tax, medical or financial advice. Speak to a qualified professional before acting on it.</p> },
        { id: "external-links", title: "External links", body: <p>We are not responsible for the content or privacy practices of websites we link to.</p> },
        { id: "accuracy", title: "Accuracy and availability", body: <p>We try to keep content accurate but do not guarantee it is complete, current or always available.</p> },
        { id: "liability", title: "Limitation of liability", body: <p>To the extent permitted by law, we are not liable for any loss resulting from reliance on website content.</p> },
      ]}
    />
  ),
});
