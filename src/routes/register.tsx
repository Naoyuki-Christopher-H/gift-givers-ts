import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/store";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Donor Registration | Gift of the Givers Foundation" },
      { name: "description", content: "Create a donor account to track your donations and certificates." },
      { property: "og:title", content: "Register as a donor" },
      { property: "og:description", content: "Create a Gift of the Givers donor account." },
    ],
  }),
  component: Register,
});

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Create a donor account</h1>
      <p className="mt-2 text-muted-foreground">Keep a record of your donations and tax certificates.</p>
      <form
        className="mt-8 space-y-4 rounded-lg border border-border bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          const password = String(f.get("password"));
          if (password.length < 8) return setError("Password must be at least 8 characters.");
          try {
            register(String(f.get("name")), String(f.get("email")), password);
            toast.success("Account created");
            navigate({ to: "/donate" });
          } catch (err) {
            setError((err as Error).message);
          }
        }}
      >
        <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required /></div>
        <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
        <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" name="password" type="password" required /></div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full">Create account</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already registered? <Link to="/login" className="font-medium text-primary underline">Log in</Link>
        </p>
      </form>
    </div>
  );
}
