import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => legalHead("Terms and Conditions", "The rules governing the use of the Gift of the Givers Foundation website."),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      intro="These terms set out the rules for using our website. By using the website, you agree to them."
      sections={[
        { id: "acceptance", title: "Acceptance of terms", body: <p>If you do not agree with these terms, please do not use the website.</p> },
        { id: "accounts", title: "User accounts", body: <p>You must give accurate details when you register and keep your password private. You are responsible for activity on your account.</p> },
        { id: "donations", title: "Donations", body: <p>This is a student prototype. Donations are symbolic, no money is collected, and certificates are for demonstration only.</p> },
        { id: "acceptable-use", title: "Acceptable use", body: <p>You may not misuse the website, submit false information, attempt to gain unauthorised access, or disrupt its operation.</p> },
        { id: "intellectual-property", title: "Intellectual property", body: <p>Website content is protected as described in our Copyright Notice.</p> },
        { id: "liability", title: "Limitation of liability", body: <p>The website is provided "as is". To the extent the law allows, we are not liable for losses arising from its use.</p> },
        { id: "changes", title: "Changes to these terms", body: <p>We may update these terms at any time. Continued use means you accept the updated terms.</p> },
        { id: "governing-law", title: "Governing law", body: <p>These terms are governed by the laws of the Republic of South Africa.</p> },
      ]}
    />
  ),
});
