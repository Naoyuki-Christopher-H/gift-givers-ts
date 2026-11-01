// Pure helper functions used by the donation process.
// Kept framework-free so they can later be packaged as an npm library (Part 2).

export type Currency = "ZAR" | "USD" | "EUR";
export type Frequency = "once" | "monthly";

export const CURRENCIES: Currency[] = ["ZAR", "USD", "EUR"];

export const CURRENCY_SYMBOL: Record<Currency, string> = {
  ZAR: "R",
  USD: "$",
  EUR: "€",
};

// Symbolic exchange rates for the prototype only.
export const RATE_TO_ZAR: Record<Currency, number> = {
  ZAR: 1,
  USD: 18,
  EUR: 20,
};

export function formatMoney(amount: number, currency: Currency): string {
  return `${CURRENCY_SYMBOL[currency]}${amount.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function toZar(amount: number, currency: Currency): number {
  return Math.round(amount * RATE_TO_ZAR[currency] * 100) / 100;
}

/** Formats a certificate number like GOTG-2026-000042. */
export function formatCertificateNumber(sequence: number, year: number): string {
  if (!Number.isInteger(sequence) || sequence < 1) {
    throw new Error("Sequence must be a positive whole number");
  }
  return `GOTG-${year}-${String(sequence).padStart(6, "0")}`;
}

export function calculateTotalZar(
  donations: { amount: number; currency: Currency }[],
): number {
  const total = donations.reduce((sum, d) => sum + toZar(d.amount, d.currency), 0);
  return Math.round(total * 100) / 100;
}

export function isValidAmount(amount: number): boolean {
  return Number.isFinite(amount) && amount >= 10 && amount <= 1_000_000;
}
