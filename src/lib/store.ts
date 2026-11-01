// Prototype data store. Persists to the browser's localStorage, which the
// brief allows for Part 1 ("dummy storage"). Swap for Azure SQL in Part 2.
import { useSyncExternalStore } from "react";
import { formatCertificateNumber, type Currency, type Frequency } from "./helpers";

export type Role = "employee" | "donor";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // prototype only, never store plain passwords in production
  role: Role;
}

export interface Donation {
  id: string;
  certificateNumber: string;
  donorName: string;
  donorEmail: string | null;
  anonymous: boolean;
  amount: number;
  currency: Currency;
  frequency: Frequency;
  project: string;
  createdAt: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  createdAt: string;
}

export interface ProjectUpdate {
  id: string;
  project: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
}

interface State {
  users: User[];
  donations: Donation[];
  volunteers: Volunteer[];
  updates: ProjectUpdate[];
  sessionUserId: string | null;
}

export const PROJECTS = [
  "KwaZulu-Natal Flood Relief",
  "Eastern Cape Drought Water Supply",
  "Gaza Medical Aid",
  "Winter Blanket Drive",
];

export const DEMO_EMPLOYEE = {
  email: "employee@giftofthegivers.org",
  password: "Relief2026!",
};

const KEY = "gotg-prototype-v1";

const seed: State = {
  users: [
    {
      id: "u-employee",
      name: "Thandi Mokoena",
      email: DEMO_EMPLOYEE.email,
      password: DEMO_EMPLOYEE.password,
      role: "employee",
    },
  ],
  donations: [],
  volunteers: [],
  updates: [
    {
      id: "p-1",
      project: PROJECTS[0]!,
      title: "Water tankers reach Verulam",
      body: "Six tankers delivered 60,000 litres of clean water to families cut off by the floods.",
      author: "Thandi Mokoena",
      createdAt: new Date("2026-10-28T09:00:00Z").toISOString(),
    },
    {
      id: "p-2",
      project: PROJECTS[1]!,
      title: "Borehole drilling begins",
      body: "Our drilling team started work on the second borehole near Makhanda.",
      author: "Thandi Mokoena",
      createdAt: new Date("2026-10-25T12:00:00Z").toISOString(),
    },
  ],
  sessionUserId: null,
};

let state: State = seed;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }
  listeners.forEach((l) => l());
}

function set(patch: Partial<State>) {
  state = { ...state, ...patch };
  emit();
}

/** Loads saved data. Call once after the page has loaded in the browser. */
export function hydrateStore() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...seed, ...(JSON.parse(raw) as State) };
  } catch {
    state = seed;
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useStore<T>(select: (s: State) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => select(state),
    () => select(seed),
  );
}

export function useCurrentUser(): User | null {
  return useStore((s) => s.users.find((u) => u.id === s.sessionUserId) ?? null);
}

const uid = () => Math.random().toString(36).slice(2, 10);

// ---------- Auth ----------
export function login(email: string, password: string): User {
  const user = state.users.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
  );
  if (!user) throw new Error("Incorrect email or password.");
  set({ sessionUserId: user.id });
  return user;
}

export function register(name: string, email: string, password: string): User {
  if (state.users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase())) {
    throw new Error("An account with this email already exists.");
  }
  const user: User = { id: uid(), name: name.trim(), email: email.trim(), password, role: "donor" };
  set({ users: [...state.users, user], sessionUserId: user.id });
  return user;
}

export function logout() {
  set({ sessionUserId: null });
}

// ---------- Donations ----------
export function addDonation(
  input: Omit<Donation, "id" | "certificateNumber" | "createdAt">,
): Donation {
  const now = new Date();
  const donation: Donation = {
    ...input,
    id: uid(),
    certificateNumber: formatCertificateNumber(state.donations.length + 1, now.getFullYear()),
    createdAt: now.toISOString(),
  };
  set({ donations: [donation, ...state.donations] });
  return donation;
}

// ---------- Volunteers ----------
export function addVolunteer(input: Omit<Volunteer, "id" | "createdAt">): Volunteer {
  const v: Volunteer = { ...input, id: uid(), createdAt: new Date().toISOString() };
  set({ volunteers: [v, ...state.volunteers] });
  return v;
}

// ---------- Updates ----------
export function addUpdate(input: Omit<ProjectUpdate, "id" | "createdAt">): ProjectUpdate {
  const u: ProjectUpdate = { ...input, id: uid(), createdAt: new Date().toISOString() };
  set({ updates: [u, ...state.updates] });
  return u;
}
