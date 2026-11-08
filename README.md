# Gift of the Givers Foundation Web Platform

## Prototype Documentation

This document set provides complete documentation for the Gift of the
Givers Foundation Web Platform prototype. It is written in simple US
English and is suitable for both technical and non-technical readers.

Each document has its own Table of Contents with fully linked
entries. All lines are kept at 74 characters or fewer so the text
is easy to read, review, and copy.

---

## Table of Contents

1. [Document Set Overview](#1-document-set-overview)
2. [Document List](#2-document-list)
3. [Suggested Reading Order](#3-suggested-reading-order)
4. [Documentation Conventions](#4-documentation-conventions)
5. [Source of Information](#5-source-of-information)
6. [Contributing to the Documentation](#6-contributing-to-the-documentation)
7. [License and Legal Notice](#7-license-and-legal-notice)

---

## 1. Document Set Overview

The documentation is split into separate files, one per topic.
This keeps each file short and easy to navigate on GitHub.

Every file follows the same pattern:

- A Table of Contents with linked section entries.
- Numbered sections with clear, descriptive headings.
- Short lines for readability and clean diffs.

---

## 2. Document List

| File | Description |
| --- | --- |
| `docs/00-overview.md` | Purpose, audience, scope, and how to use this set. |
| `docs/01-features.md` | All platform features explained in plain language. |
| `docs/02-website-pages.md` | Every page, its address, and its purpose. |
| `docs/03-technology-stack.md` | The tools and libraries used to build the platform. |
| `docs/04-getting-started.md` | How to install, run, and build the project. |
| `docs/05-demo-accounts.md` | Test login details for the prototype. |
| `docs/06-running-tests.md` | How to run the tests and what they cover. |
| `docs/07-project-structure.md` | The folder and file layout of the project. |
| `docs/08-data-storage.md` | Where data is stored and how to clear it. |
| `docs/09-deployment.md` | How the site is published and hosted. |
| `docs/10-known-limitations.md` | Current limits of the prototype. |
| `docs/11-roadmap-part-2.md` | Planned improvements for the next phase. |
| `docs/12-legal-notice.md` | Copyright and permitted use information. |

---

## 3. Suggested Reading Order

**For new readers:**

`00`, `01`, `02`, `12`

**For developers:**

`03`, `04`, `06`, `07`, `08`

**For reviewers and supervisors:**

`00`, `01`, `10`, `11`, `12`

**For legal and compliance readers:**

`02`, `10`, `12`

---

## 4. Documentation Conventions

- **Language:** simple US English.
- **Line length:** 74 characters or fewer.
- **Punctuation:** commas, parentheses, colons, and semicolons.
  Em dashes and en dashes are not used.
- **Headings:** numbered, with descriptive titles.
- **Links:** every Table of Contents entry links to its section.
- **Formatting:** Markdown only. No decorative styling.

---

## 5. Source of Information

All content in this document set comes from the provided project
description file only. No external sources, opinions, or
speculation were used. Where the source does not provide enough
detail, this is stated plainly.

---

## 6. Contributing to the Documentation

When updating these files:

- Keep lines at 74 characters or fewer.
- Keep section numbering consistent.
- Update the Table of Contents if you add a section.
- Use US English and plain Markdown.
- Do not add emojis or decorative formatting.

---

## 7. License and Legal Notice

Copyright 2026 Gift of the Givers Foundation. The prototype was
built for academic purposes. See [12. Legal Notice](#12-legal-notice)
and the Copyright Notice page on the website for permitted use.

---
---

# 00 Overview

## Table of Contents

1. [Purpose of This Document](#1-purpose-of-this-document)
2. [Audience](#2-audience)
3. [What the Platform Does](#3-what-the-platform-does)
4. [Scope of the Prototype](#4-scope-of-the-prototype)
5. [How This Document Set Is Organized](#5-how-this-document-set-is-organized)
6. [Source of Information](#6-source-of-information)
7. [Reading Tips](#7-reading-tips)

---

## 1. Purpose of This Document

This document introduces the Gift of the Givers Foundation Web
Platform prototype. It explains what the platform is, who it is
for, and how the documentation set is arranged.

---

## 2. Audience

This documentation is for:

- Members of the public who want to donate or volunteer.
- Foundation staff who use the dashboard.
- Developers who run, test, or extend the prototype.
- Reviewers and academic supervisors.
- Legal and compliance readers.

Technical terms are explained where they first appear.

---

## 3. What the Platform Does

The platform is a central hub for the Foundation's relief work.
Members of the public can donate and volunteer. Staff can log in
to a dashboard to review donations and volunteer sign-ups.

---

## 4. Scope of the Prototype

This is a prototype, not a production system. Key points:

- Donations are symbolic. No payment is processed.
- All data is stored in the visitor's own browser.
- Nothing is sent to a server.
- Some content is sample data for demonstration.

---

## 5. How This Document Set Is Organized

The set is split into separate files by topic. See the Document
List in the repository overview for the full list and suggested
order. Each file follows the same pattern:

- A Table of Contents with linked entries.
- Numbered sections with clear headings.
- Short lines for easy reading and copying.

---

## 6. Source of Information

All facts in this set come from the provided project description
file. No external sources, opinions, or speculation were used. If
the source does not state something, it is not presented as fact.

---

## 7. Reading Tips

- Read the Table of Contents first to find your topic.
- Non-technical readers can skip files 03 and 07.
- Developers should read files 03, 04, 06, and 07 together.
- Legal readers should focus on files 02, 10, and 12.

---

*End of document.*

---
---

# 01 Features

## Table of Contents

1. [Feature Summary](#1-feature-summary)
2. [Donations and Tax Certificates](#2-donations-and-tax-certificates)
3. [Volunteer Registration](#3-volunteer-registration)
4. [User Registration and Login](#4-user-registration-and-login)
5. [Staff Dashboard](#5-staff-dashboard)
6. [Contact Form](#6-contact-form)
7. [Legal Pages](#7-legal-pages)
8. [Feature Notes](#8-feature-notes)

---

## 1. Feature Summary

The platform offers the following features:

- Guest and registered donations.
- A downloadable tax certificate in PDF format.
- A volunteer registration form.
- User registration and login.
- A staff dashboard with donation totals and volunteer lists.
- A contact form.
- A full set of legal pages, each with a linked Table of
  Contents.

---

## 2. Donations and Tax Certificates

Visitors can make a symbolic donation. Both guests and registered
users can donate. After donating, the user can download a tax
certificate as a PDF file.

"Symbolic" means no real money is charged. The feature
demonstrates the full donation flow for the prototype.

---

## 3. Volunteer Registration

Visitors can register as volunteers through a dedicated form. The
information is saved in the browser and can be reviewed by staff
in the dashboard.

---

## 4. User Registration and Login

Visitors can create an account on the Register page and log in on
the Login page. Accounts are stored in the visitor's browser.

---

## 5. Staff Dashboard

Staff log in with a demo account to reach the dashboard. The
dashboard shows donation totals and volunteer lists. It is
intended for staff use only.

---

## 6. Contact Form

A contact form lets visitors send a message. Contact details are
also shown on the Contact page.

---

## 7. Legal Pages

The platform includes a full set of legal pages. Each legal page
has its own linked Table of Contents. The pages are:

- Privacy Policy
- Cookie Policy
- Terms and Conditions
- Disclaimer
- Data Protection Rights
- Copyright Notice

---

## 8. Feature Notes

- Donations do not involve real payments.
- Data stays in the browser and is not sent to a server.
- Legal pages are templates and need legal review before real
  use.

---

*End of document.*

---
---

# 02 Website Pages

## Table of Contents

1. [Page Map](#1-page-map)
2. [Public Pages](#2-public-pages)
3. [Account Pages](#3-account-pages)
4. [Staff Pages](#4-staff-pages)
5. [Legal Pages](#5-legal-pages)
6. [Page Address Notes](#6-page-address-notes)

---

## 1. Page Map

| Page | Address | Purpose |
| --- | --- | --- |
| Home | `/` | Introduces the Foundation and current projects. |
| About | `/about` | Mission and values. |
| Donate | `/donate` | Symbolic donation and a certificate. |
| Volunteer | `/volunteer` | Register as a volunteer. |
| Contact | `/contact` | Contact details and a message form. |
| Login | `/login` | Account access. |
| Register | `/register` | Account access. |
| Dashboard | `/dashboard` | Staff-only overview. |
| Privacy | `/privacy` | Privacy Policy. |
| Cookies | `/cookies` | Cookie Policy. |
| Terms | `/terms` | Terms and Conditions. |
| Disclaimer | `/disclaimer` | Disclaimer. |
| Data Protection | `/data-protection` | Data Protection Rights. |
| Copyright | `/copyright` | Copyright Notice. |

---

## 2. Public Pages

These pages are open to all visitors:

- Home
- About
- Donate
- Volunteer
- Contact
- Privacy Policy
- Cookie Policy
- Terms and Conditions
- Disclaimer
- Data Protection Rights
- Copyright Notice

---

## 3. Account Pages

These pages handle account access:

- Login at `/login`
- Register at `/register`

Donor accounts can be created on the Register page.

---

## 4. Staff Pages

The Dashboard at `/dashboard` is for staff only. It shows donation
totals and volunteer lists. Access requires a staff login.

---

## 5. Legal Pages

Each legal page explains one topic:

- **Privacy Policy:** what personal information is collected and
  how it is used, stored, and shared.
- **Cookie Policy:** cookies, browser storage, and analytics used.
- **Terms and Conditions:** rules for using the website.
- **Disclaimer:** limits of liability for content and links.
- **Data Protection Rights:** how to access, correct, or delete
  personal information under POPIA.
- **Copyright Notice:** ownership and permitted use of content
  and branding.

Each legal page has a linked Table of Contents.

---

## 6. Page Address Notes

Addresses are relative to the site root. File-based routing means
each page corresponds to one file in the routes folder. See the
[Project Structure](#07-project-structure) document for the folder
layout.

---

*End of document.*

---
---

# 03 Technology Stack

## Table of Contents

1. [Stack Summary](#1-stack-summary)
2. [TanStack Start and React 19](#2-tanstack-start-and-react-19)
3. [Vite 7](#3-vite-7)
4. [Tailwind CSS v4 and shadcn/ui](#4-tailwind-css-v4-and-shadcnui)
5. [Vitest](#5-vitest)
6. [Why This Stack Was Chosen](#6-why-this-stack-was-chosen)
7. [Reader Notes](#7-reader-notes)

---

## 1. Stack Summary

The platform is built with the following tools:

- TanStack Start (React 19) with file-based routing.
- Vite 7 build tool.
- Tailwind CSS v4 and shadcn/ui components.
- Vitest for unit tests.

---

## 2. TanStack Start and React 19

TanStack Start is the application framework. It uses React 19 for
the user interface. Routing is file-based, which means each page
in the routes folder becomes a page on the website.

---

## 3. Vite 7

Vite 7 is the build tool. It runs the local development server
and creates the production build. It is fast and widely used for
modern web projects.

---

## 4. Tailwind CSS v4 and shadcn/ui

Tailwind CSS v4 handles styling. shadcn/ui provides ready-made
interface components such as buttons, forms, and layout pieces.
Together they give the site a consistent look.

---

## 5. Vitest

Vitest runs the automated unit tests. It works well with
Vite-based projects and supports fast test runs.

---

## 6. Why This Stack Was Chosen

The provided source does not explain why this stack was chosen.
I cannot confirm the reasons. Based on the tools listed, the
stack supports a modern, component-based web application with
fast builds and simple unit testing. This is an observation
from the tool list, not a stated reason.

---

## 7. Reader Notes

- Non-technical readers can skip this document.
- Developers should read [Getting Started](#04-getting-started)
  and [Project Structure](#07-project-structure) next.
- Version numbers are stated exactly as given in the source.

---

*End of document.*

---
---

# 04 Getting Started

## Table of Contents

1. [Requirements](#1-requirements)
2. [Clone the Repository](#2-clone-the-repository)
3. [Install Dependencies](#3-install-dependencies)
4. [Run the Development Server](#4-run-the-development-server)
5. [Create a Production Build](#5-create-a-production-build)
6. [Open the Site](#6-open-the-site)
7. [Troubleshooting Notes](#7-troubleshooting-notes)

---

## 1. Requirements

You need:

- Node.js 20 or later.
- npm (installed with Node.js).

---

## 2. Clone the Repository

Open a terminal and run:

```sh
git clone https://github.com/Naoyuki-Christopher-H/gift-givers-ts
cd gift-givers-ts
```

The first command copies the project to your computer. The
second moves you into the project folder.

---

## 3. Install Dependencies

Run:

```sh
npm install
```

This downloads all libraries the project needs.

---

## 4. Run the Development Server

Run:

```sh
npm run dev
```

This starts a local web server for development.

---

## 5. Create a Production Build

Run:

```sh
npm run build
```

This creates an optimized build ready for hosting.

---

## 6. Open the Site

After starting the development server, open the address shown in
the terminal. The address is usually a local address, such as
`http://localhost:5173`. The exact address is printed by the tool.

---

## 7. Troubleshooting Notes

- If Node.js is too old, upgrade to version 20 or later.
- If install fails, check your internet connection.
- The source does not list other troubleshooting steps. For
  issues beyond these, I cannot confirm a fix from the provided
  material.

---

*End of document.*

---
---

# 05 Demo Accounts

## Table of Contents

1. [Purpose of Demo Accounts](#1-purpose-of-demo-accounts)
2. [Staff Account](#2-staff-account)
3. [Donor Accounts](#3-donor-accounts)
4. [Safety Notes](#4-safety-notes)

---

## 1. Purpose of Demo Accounts

Demo accounts let testers try staff features without creating a
real account. They are for demonstration only.

---

## 2. Staff Account

| Field | Value |
| --- | --- |
| Role | Staff (employee) |
| Email | `employee@giftofthegivers.org` |
| Password | `Relief2026!` |

---

## 3. Donor Accounts

Donor accounts can be created on the Register page. No pre-made
donor accounts are listed in the source.

---

## 4. Safety Notes

- These credentials are for the prototype only.
- Passwords are stored in plain text in the browser. This is
  for demonstration only and is not secure for real use.
- Do not reuse these credentials on any real system.

---

*End of document.*

---
---

# 06 Running Tests

## Table of Contents

1. [How to Run Tests](#1-how-to-run-tests)
2. [What the Tests Cover](#2-what-the-tests-cover)
3. [Test Tool](#3-test-tool)
4. [Interpreting Results](#4-interpreting-results)

---

## 1. How to Run Tests

Run:

```sh
npm test
```

This starts the automated test suite.

---

## 2. What the Tests Cover

The tests cover:

- Donation calculations.
- Certificate numbering.
- Page routing.

---

## 3. Test Tool

Tests use Vitest. See [03 Technology Stack](#03-technology-stack)
for a short description of the tool.

---

## 4. Interpreting Results

The test runner reports which tests pass or fail. If a test
fails, read the message for the file and line involved. The
source does not give further guidance on fixing failures.

---

*End of document.*

---
---

# 07 Project Structure

## Table of Contents

1. [Folder Overview](#1-folder-overview)
2. [Routes Folder](#2-routes-folder)
3. [Site Components Folder](#3-site-components-folder)
4. [UI Components Folder](#4-ui-components-folder)
5. [Library Folder](#5-library-folder)
6. [Styles File](#6-styles-file)
7. [Structure Notes](#7-structure-notes)

---

## 1. Folder Overview

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

## 2. Routes Folder

Each page has one file in `src/routes/`. Because routing is
file-based, the file name and location set the page address.

---

## 3. Site Components Folder

`src/components/site/` holds the shared layout pieces: header,
footer, page header, and the legal page layout. These are reused
across pages.

---

## 4. UI Components Folder

`src/components/ui/` holds shared interface components. These are
generic building blocks used across the site.

---

## 5. Library Folder

`src/lib/` holds core logic:

- `store.ts`: prototype data storage.
- `helpers.ts`: donation maths and certificate numbering.
- `certificate.ts`: PDF certificate creation.

---

## 6. Styles File

`src/styles.css` sets colors, fonts, and theme.

---

## 7. Structure Notes

The layout keeps pages, shared components, and core logic
separate. This makes the project easier to read and change.

---

*End of document.*

---
---

# 08 Data Storage

## Table of Contents

1. [Where Data Is Stored](#1-where-data-is-stored)
2. [What This Means for Users](#2-what-this-means-for-users)
3. [Resetting Data](#3-resetting-data)
4. [Privacy Note](#4-privacy-note)
5. [Limits of Browser Storage](#5-limits-of-browser-storage)

---

## 1. Where Data Is Stored

All data is saved in the visitor's own browser using local
storage. Nothing is sent to a server.

---

## 2. What This Means for Users

- Data stays on the device you used.
- Other people on other devices do not see your data.
- Clearing your browser data removes it.

---

## 3. Resetting Data

To reset the prototype, clear site data in your browser. This
restores the starting state.

---

## 4. Privacy Note

Because data stays in the browser, it is not collected by a
server. However, browser storage is not secure for sensitive
data in a prototype.

---

## 5. Limits of Browser Storage

Browser storage can be cleared at any time by the user or the
browser. It is not a replacement for a real database. The
roadmap plans to replace it with Azure SQL Database. See
[11 Roadmap for Part 2](#11-roadmap-for-part-2).

---

*End of document.*

---
---

# 09 Deployment

## Table of Contents

1. [How the Site Is Published](#1-how-the-site-is-published)
2. [Live Site](#2-live-site)
3. [Hosting Options](#3-hosting-options)
4. [No Server-Side Data](#4-no-server-side-data)

---

## 1. How the Site Is Published

The site is published through Lovable.

---

## 2. Live Site

Live address:

`https://gift-givers-ts.lovable.app`

---

## 3. Hosting Options

Because the site needs no server-side data, it can also be
hosted on Azure App Service as a static Node.js site.

---

## 4. No Server-Side Data

All data stays in the browser. The host only serves the site
files. This keeps hosting simple.

---

*End of document.*

---
---

# 10 Known Limitations

## Table of Contents

1. [Purpose](#1-purpose)
2. [Limit List](#2-limit-list)
3. [Impact on Users](#3-impact-on-users)
4. [Impact on Testing](#4-impact-on-testing)

---

## 1. Purpose

This document lists the current limits of the prototype so
readers know what it does not do.

---

## 2. Limit List

- Donations are symbolic; no payment is processed.
- Passwords are stored in plain text in the browser. This is
  for demonstration only.
- Contact details, statistics, and project updates are sample
  data.
- Legal pages are templates and must be reviewed by a legal
  adviser before real use.

---

## 3. Impact on Users

- No real money changes hands.
- Account security is not production-ready.
- Some content is illustrative, not final.
- Legal text needs professional review before launch.

---

## 4. Impact on Testing

Testers should expect symbolic flows and sample content.
Results confirm behavior, not production readiness.

---

*End of document.*

---
---

# 11 Roadmap for Part 2

## Table of Contents

1. [Purpose](#1-purpose)
2. [Planned Items](#2-planned-items)
3. [Notes on Each Item](#3-notes-on-each-item)

---

## 1. Purpose

This document lists the planned work for the next phase of the
project.

---

## 2. Planned Items

- Replace browser storage with Azure SQL Database.
- Package donation helpers as an npm library.
- Add secure password hashing and real payment processing.

---

## 3. Notes on Each Item

**Replace browser storage:** move data from the browser to a
real database so data is shared and kept safely.

**Package donation helpers:** turn the donation maths code into
a reusable npm library so other projects can use it.

**Add secure password hashing:** replace plain text passwords
with hashed passwords for security.

**Add real payment processing:** allow real donations with a
payment provider. The source does not name a provider, so I
cannot confirm which one will be used.

---

*End of document.*

---
---

# 12 Legal Notice

## Table of Contents

1. [Copyright](#1-copyright)
2. [Purpose of the Prototype](#2-purpose-of-the-prototype)
3. [Permitted Use](#3-permitted-use)
4. [Legal Review Note](#4-legal-review-note)

---

## 1. Copyright

Copyright 2026 Gift of the Givers Foundation.

---

## 2. Purpose of the Prototype

The prototype was built for academic purposes.

---

## 3. Permitted Use

See the Copyright Notice page on the website for permitted use
of content and branding.

---

## 4. Legal Review Note

The legal pages on the website are templates. They must be
reviewed by a legal adviser before any real use. This
documentation does not give legal advice. I cannot confirm
legal compliance from the provided material.

---

*End of document.*

---
