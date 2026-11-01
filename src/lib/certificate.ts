import type { Donation } from "./store";
import { formatMoney, toZar } from "./helpers";

/** Builds and downloads a placeholder Section 18A tax certificate as a PDF. */
export async function downloadCertificate(d: Donation) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const date = new Date(d.createdAt).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  doc.setFillColor(122, 28, 36);
  doc.rect(0, 0, 210, 32, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.text("Gift of the Givers Foundation", 20, 20);

  doc.setTextColor(30, 30, 30);
  doc.setFontSize(18);
  doc.text("Donation Tax Certificate (Section 18A)", 20, 50);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(150, 30, 30);
  doc.text("PROTOTYPE PLACEHOLDER - NOT VALID FOR SARS SUBMISSION", 20, 57);

  doc.setTextColor(30, 30, 30);
  doc.setFontSize(12);
  const rows: [string, string][] = [
    ["Certificate number", d.certificateNumber],
    ["Date of donation", date],
    ["Donor", d.anonymous ? "Anonymous guest" : d.donorName],
    ["Amount", formatMoney(d.amount, d.currency)],
    ["Equivalent (ZAR, symbolic)", formatMoney(toZar(d.amount, d.currency), "ZAR")],
    ["Type", d.frequency === "monthly" ? "Recurring (monthly)" : "One-time"],
    ["Allocated to", d.project],
    ["PBO number", "000 000 000 (placeholder)"],
  ];
  let y = 75;
  rows.forEach(([k, v]) => {
    doc.setFont("helvetica", "bold");
    doc.text(k, 20, y);
    doc.setFont("helvetica", "normal");
    doc.text(v, 85, y);
    y += 10;
  });

  doc.setFontSize(10);
  doc.text(
    "Thank you for your generosity. This certificate confirms receipt of the donation above.",
    20,
    y + 10,
  );
  doc.text("Authorised signatory: ______________________", 20, y + 30);
  doc.save(`${d.certificateNumber}.pdf`);
}
