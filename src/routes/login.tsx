import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_EMPLOYEE, login } from "@/lib/store";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In | Gift of the Givers Foundation" },
      { name: "description", content: "Log in as a donor or employee." },
      { property: "og:title", content: "Log in to Gift of the Givers" },
      { property: "og:description", content: "Donor and employee sign in." },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Log in</h1>
      <p className="mt-2 text-muted-foreground">Donors and employees sign in here.</p>
      <form
        className="mt-8 space-y-4 rounded-lg border border-border bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          try {
            const user = login(email, password);
            toast.success(`Welcome back, ${user.name.split(" ")[0]}`);
            navigate({ to: user.role === "employee" ? "/dashboard" : "/donate" });
          } catch (err) {
            setError((err as Error).message);
          }
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full">Log in</Button>
        <p className="text-center text-sm text-muted-foreground">
          New donor? <Link to="/register" className="font-medium text-primary underline">Create an account</Link>
        </p>
      </form>
      <div className="mt-6 rounded-lg border border-dashed border-border bg-muted p-4 text-sm">
        <p className="font-semibold">Demo employee account</p>
        <p className="mt-1 text-muted-foreground">Email: {DEMO_EMPLOYEE.email}</p>
        <p className="text-muted-foreground">Password: {DEMO_EMPLOYEE.password}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3"
          type="button"
          onClick={() => {
            setEmail(DEMO_EMPLOYEE.email);
            setPassword(DEMO_EMPLOYEE.password);
          }}
        >
          Fill in demo details
        </Button>
      </div>
    </div>
  );
}
