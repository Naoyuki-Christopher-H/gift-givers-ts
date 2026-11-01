import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { logout, useCurrentUser } from "@/lib/store";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/donate", label: "Donate" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkCls = "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  const activeCls = "text-sm font-medium text-primary";

  const authArea = user ? (
    <div className="flex items-center gap-2">
      {user.role === "employee" && (
        <Button asChild variant="outline" size="sm">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      )}
      <span className="hidden text-sm text-muted-foreground lg:inline">Hi, {user.name.split(" ")[0]}</span>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          logout();
          navigate({ to: "/" });
        }}
      >
        Log out
      </Button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost" size="sm">
        <Link to="/login">Log in</Link>
      </Button>
      <Button asChild size="sm">
        <Link to="/donate">Donate now</Link>
      </Button>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={linkCls}
              activeProps={{ className: activeCls }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">{authArea}</div>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">{authArea}</div>
        </div>
      )}
    </header>
  );
}
