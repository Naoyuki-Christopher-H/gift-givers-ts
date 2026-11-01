import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Gift of the Givers home">
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <circle cx="20" cy="20" r="19" className="fill-primary" />
        <path
          d="M20 30c-6-4.2-10-7.6-10-12a5.5 5.5 0 0 1 10-3.2A5.5 5.5 0 0 1 30 18c0 4.4-4 7.8-10 12z"
          className="fill-accent"
        />
        <path d="M14 21h12M20 15v12" className="stroke-primary" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold text-foreground">Gift of the Givers</span>
        <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Foundation</span>
      </span>
    </Link>
  );
}
