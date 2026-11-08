# Gift of the Givers Foundation (Web Platform)

## Table of Contents

1. [Overview](#1-overview)
2. [Features](#2-features)
3. [Website Pages](#3-website-pages)
4. [Technology Stack](#4-technology-stack)
5. [Getting Started](#5-getting-started)
6. [Demo Accounts](#6-demo-accounts)
7. [Running Tests](#7-running-tests)
8. [Project Structure](#8-project-structure)
9. [Data Storage](#9-data-storage)
10. [Deployment](#10-deployment)
11. [Known Limitations](#11-known-limitations)
12. [Legal Notice](#12-legal-notice)

---

## 1. Overview

The platform is a central hub for the Foundation's relief work.
Members of the public can donate and volunteer. Staff can log in
to a dashboard to review donations and volunteer sign-ups.

Live site: https://gift-givers-ts.lovable.app

---

## 2. Features

- Guest and registered donations with a downloadable tax
  certificate (PDF).
- Volunteer registration form.
- User registration and login.
- Staff dashboard with donation totals and volunteer lists.
- Contact form.
- Full set of legal pages, each with a linked table of contents.

---

## 3. Website Pages

| Page | Address | Purpose |
| --- | --- | --- |
| Home | `/` | Introduces the Foundation and current projects. |
| About | `/about` | Mission and values. |
| Donate | `/donate` | Make a symbolic donation and get a certificate. |
| Volunteer | `/volunteer` | Register as a volunteer. |
| Contact | `/contact` | Contact details and message form. |
| Log in / Register | `/login`, `/register` | Account access. |
| Dashboard | `/dashboard` | Staff-only overview. |
| Privacy Policy | `/privacy` | What personal information is collected and how it is used, stored, and shared. |
| Cookie Policy | `/cookies` | Cookies, browser storage, and analytics used. |
| Terms and Conditions | `/terms` | Rules for using the website. |
| Disclaimer | `/disclaimer` | Limits of liability for content and links. |
| Data Protection Rights | `/data-protection` | How to access, correct, or delete personal information under POPIA. |
| Copyright Notice | `/copyright` | Ownership and permitted use of content and branding. |

---

## 4. Technology Stack

- TanStack Start (React 19) with file-based routing.
- Vite 7 build tool.
- Tailwind CSS v4 and shadcn/ui components.
- Vitest for unit tests.

---

## 5. Getting Started

Requirements: Node.js 20 or later and npm.

```sh
git clone https://github.com/Naoyuki-Christopher-H/gift-givers-ts.git
cd gift-givers-ts
npm install
npm run dev
```

Open the address shown in the terminal. To create a production
build, run `npm run build`.

---

## 6. Demo Accounts

| Role | Email | Password |
| --- | --- | --- |
| Staff (employee) | employee@giftofthegivers.org | Relief2026! |

Donor accounts can be created on the Register page.

---

## 7. Running Tests

```sh
npm test
```

Tests cover donation calculations, certificate numbering, and
page routing.

---

## 8. Project Structure

| Path | Contents |
| --- | --- |
| `src/routes/` | One file per page. |
| `src/components/site/` | Header, footer, page header, and legal page layout. |
| `src/components/ui/` | Shared interface components. |
| `src/lib/store.ts` | Prototype data storage. |
| `src/lib/helpers.ts` | Donation maths and certificate numbering. |
| `src/lib/certificate.ts` | PDF certificate creation. |
| `src/styles.css` | Colors, fonts, and theme. |

---

## 9. Data Storage

All data is saved in the visitor's own browser (local storage).
Nothing is sent to a server. Clearing site data in the browser
resets the prototype.

---

## 10. Deployment

The site is published through Lovable. Because it needs no
server-side data, it can also be hosted on Azure App Service as
a static Node.js site.

---

## 11. Known Limitations

- Donations are symbolic; no payment is processed.
- Passwords are stored in plain text in the browser. This is
  for demonstration only.
- Contact details, statistics, and project updates are sample
  data.
- Legal pages are templates and must be reviewed by a legal
  adviser before real use.

---

## 12. Legal Notice

Prototype built for academic purposes.

---

END OF DOCUMENT

---
