import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => legalHead("Cookie Policy", "The cookies, browser storage and analytics tools used on this website."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This policy explains the cookies, tracking technologies and analytics tools used on our website."
      sections={[
        { id: "what-are-cookies", title: "What cookies are", body: <p>Cookies and similar technologies, such as browser local storage, are small pieces of data saved on your device by a website.</p> },
        { id: "what-we-use", title: "What we use", body: <ul className="list-disc space-y-1 pl-5"><li><strong>Essential storage:</strong> browser local storage keeps you logged in and saves your donations and volunteer details in this prototype.</li><li><strong>Font loading:</strong> fonts are loaded from Google Fonts, which may record your IP address.</li></ul> },
        { id: "analytics", title: "Analytics and tracking", body: <p>This prototype does not use advertising cookies or third-party analytics. If analytics are added later, this policy will be updated first.</p> },
        { id: "managing", title: "Managing cookies", body: <p>You can clear cookies and site data at any time in your browser settings. Doing so will log you out and remove prototype data saved on your device.</p> },
        { id: "changes", title: "Changes to this policy", body: <p>We may update this policy and will show the new date at the top of the page.</p> },
      ]}
    />
  ),
});
