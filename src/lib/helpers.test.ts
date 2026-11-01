import { describe, expect, it } from "vitest";
import { calculateTotalZar, formatCertificateNumber, isValidAmount, toZar } from "./helpers";

describe("donation helpers", () => {
  it("formats certificate numbers with year and six-digit sequence", () => {
    expect(formatCertificateNumber(42, 2026)).toBe("GOTG-2026-000042");
  });

  it("rejects a zero certificate sequence", () => {
    expect(() => formatCertificateNumber(0, 2026)).toThrow();
  });

  it("converts USD and EUR to ZAR at symbolic rates", () => {
    expect(toZar(10, "USD")).toBe(180);
    expect(toZar(10, "EUR")).toBe(200);
  });

  it("totals mixed-currency donations in ZAR", () => {
    expect(
      calculateTotalZar([
        { amount: 100, currency: "ZAR" },
        { amount: 10, currency: "USD" },
      ]),
    ).toBe(280);
  });

  it("requires a minimum donation of 10", () => {
    expect(isValidAmount(9)).toBe(false);
    expect(isValidAmount(10)).toBe(true);
  });
});
