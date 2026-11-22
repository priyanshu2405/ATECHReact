# Content & Configuration Placeholders (TODO-CONTENT.md)

This file contains every placeholder `[TODO: ...]` across the website that requires your input before launch.
No real statistics, prices, client identities, certifications, or testimonials have been invented.

---

## 1. Business & Contact Configuration (`src/data/config.js`)

- [x] **Email**: `priyanshu@atechinfotech.com` (Official domain email configured)
- [x] **Booking URL**: `https://cal.com/priyanshuatech/30min` (Central booking calendar configured)
- [ ] **Canada Overlap Window**: `Evening-IST calls by arrangement (morning EST/EDT alignment)`
- [ ] **Founder Section**:
  - Founder Name: `[TODO: Founder Name]`
  - Founder Title: `[TODO: Founder Title / Role]`
  - Founder Bio / Story: `[TODO: Founder background details / 15+ years experience story]`
  - Founder Photo: `[TODO: Founder Headshot Image URL / path]`
  - Founder LinkedIn URL: `[TODO: Founder LinkedIn Profile URL]`
- [ ] **Trust Profiles (Optional)**:
  - Clutch URL: `[TODO: Clutch profile URL]` (Trust badge only renders when URL is provided)
  - GoodFirms URL: `[TODO: GoodFirms profile URL]` (Trust badge only renders when URL is provided)
  - Upwork Agency/Profile URL: `[TODO: Upwork profile URL]` (Trust badge only renders when URL is provided)
- [ ] **Social Media Links**:
  - LinkedIn: `[TODO: Company LinkedIn URL]`
  - GitHub: `[TODO: GitHub URL]`
  - Instagram: `[TODO: Instagram URL]`
  - Twitter/X: `[TODO: Twitter/X URL]`

---

## 2. Pricing & Currency Rates (`src/data/pricing.js`)

All prices on public pages show **"Request a quote"** until you replace these placeholders with real starting figures:

- [ ] **Fixed Price Milestone Projects**:
  - GBP: `[TODO: price in GBP]` (e.g. "£2,500")
  - CAD: `[TODO: price in CAD]` (e.g. "$4,500 CAD")
  - AED: `[TODO: price in AED]` (e.g. "12,000 AED")
  - INR: `[TODO: price in INR]` (e.g. "₹2,50,000")
  - USD: `[TODO: price in USD]` (e.g. "$3,500")
- [ ] **Monthly Retainer**:
  - GBP: `[TODO: price in GBP/mo]`
  - CAD: `[TODO: price in CAD/mo]`
  - AED: `[TODO: price in AED/mo]`
  - INR: `[TODO: price in INR/mo]`
  - USD: `[TODO: price in USD/mo]`
- [ ] **Dedicated Senior Developer**:
  - GBP: `[TODO: price in GBP/mo]`
  - CAD: `[TODO: price in CAD/mo]`
  - AED: `[TODO: price in AED/mo]`
  - INR: `[TODO: price in INR/mo]`
  - USD: `[TODO: price in USD/mo]`
- [ ] **Starting From per Service**:
  - Custom CRM/ERP & Automation: `[TODO: starting price]`
  - Mobile App Development (Flutter/React Native): `[TODO: starting price]`
  - Ecommerce Development: `[TODO: starting price]`
  - Website Development: `[TODO: starting price]`
  - Cloud & DevOps: `[TODO: starting price]`
  - SEO & Digital Marketing: `[TODO: starting price]`

---

## 3. Case Studies & Metrics (`src/data/work.js`)

> **Client Permission & Anonymisation Policy**:
> - Each case study has a `permission` field: `"named" | "anonymised" | "pending"`. Default is `"anonymised"`.
> - When `permission: "anonymised"` or `"pending"`: no client name, no logo, no brand colours, no real live URLs, and generic titles only.
> - Badge: Displays `"Private client project: private demo available on request"` unless `references_available: true` is explicitly configured in `src/data/work.js`.
> - Draft case studies remain unpublished while permission is `"pending"`.

- [ ] **Kitchen Hardware Catalogue** (Internal ref: Futura):
  - Current status: `permission: "anonymised"`, `references_available: false`.
  - To display named client brand: obtain written client approval and set `permission: "named"` in `src/data/work.js`.
  - Metrics: `[TODO: result/metric]` (e.g. "% increase in WhatsApp enquiry conversion or catalogue downloads after launch")
  - Client Testimonial (Optional): `[TODO: quote from client with permission]`
- [ ] **Exam Voucher Platform** (Internal ref: UniCou):
  - Current status: `permission: "anonymised"`, `references_available: false`.
  - To display named client brand: obtain written client approval and set `permission: "named"` in `src/data/work.js`.
  - Metrics: `[TODO: result/metric]` (e.g. "number of voucher orders processed or partner institutions onboarded")
  - Client Testimonial (Optional): `[TODO: quote from client with permission]`
- [ ] **Draft Case Studies (Unpublished - Activate when ready)**:
  - Custom Multi-Tenant CRM Platform (`permission: "pending"`): Needs client permission, industry confirmation, screenshots, live URL or metrics.
  - Ride-Hailing Mobile App (`permission: "pending"`): Needs product name, features, tech stack, screenshots.
  - Luxury Ecommerce Platform (`permission: "pending"`): Needs brand name, store features, tech stack, metrics.

---

## 4. Testimonials (`src/data/testimonials.js`)

- [ ] Genuine Client Reviews: The website currently renders **zero** testimonials because no fake reviews are permitted. Once you have written permission from clients, add them to `src/data/testimonials.js`. The testimonial slider/cards will automatically display once entries exist.

---

## 5. Legal & Compliance Notice

- [ ] **Privacy Policy & Terms of Service**: The templates provided at `/privacy-policy` and `/terms` are clean, reasonable starting templates. They **must be reviewed by a qualified legal professional** in your jurisdiction and target markets (UK GDPR, Canada PIPEDA, UAE Data Protection Law) before commercial deployment.

---

## 6. Regional Personalisation & Timezone Overlap (`src/data/regions.js`)

- [x] **UK Overlap Window**: `9:00 AM – 1:30 PM GMT / 2:30 PM BST` (Option A: 9:00–19:00 IST)
- [x] **Canada Overlap Window**: `Evening-IST calls by arrangement (morning EST/EDT alignment)`
- [x] **India Overlap Window**: `Same time zone (IST): full working-day overlap`
- [ ] **Regional Starting Rates**: Fill in starting figures in `src/data/pricing.js` for GBP (£), CAD ($), AED (د.إ), INR (₹), and USD ($) once finalized. Until filled, all cards safely show "Request a quote".

---

## 7. Unconfirmed Claims & Country Content Placeholders

The following capability and language claims were removed from public copy to avoid unverified statements. Confirm before restoring:

- [ ] **India (`/india/`)**:
  - [x] **GST Registration**: Confirmed GST-registered. Invoices include GSTIN and GST breakdown.
  - [ ] **GSTIN Number**: `[TODO: add GSTIN, or omit]`
  - [ ] **GST E-Invoicing / IRN**: Do not claim GST e-invoicing or IRN generation until required and confirmed.
  - **Hindi Native UI Translation**: Removed until dedicated Hindi localization and translation workflows are confirmed. (Current public copy describes generic multilingual i18n architecture).
  - **Indore In-Person Meetings**: Removed guarantee of in-person kickoff meetings until travel and on-site meeting policy is formalized.
  - **Publication Status**: `/india/` is currently set to `noindex` and excluded from `sitemap.xml`, hidden from header navigation and footer menus until approved for release.
- [ ] **Canada (`/canada/`)**:
  - **French Language Support**: Removed explicit claim of bilingual English/French support until French translation resources are confirmed. (Current public copy describes generic multilingual i18n architecture).
- [ ] **Dubai / UAE (`/dubai-uae/`)**:
  - **Arabic / RTL Localization**: Removed explicit claim of Arabic translation/typography until native Arabic resources are confirmed. (Current public copy describes modern RTL-ready and multilingual UI architecture).
  - **Real Estate Capabilities**: Removed unconfirmed specific claims ("lead distribution engines", "property listing aggregators", "agent commission modules"). (Current public copy describes custom sales pipelines, automated enquiry routing, and client portals).
- [ ] **Delivered Integrations & Warranty** (`[TODO: delivered integrations/warranty]`):
  - **Cashfree & E-Mandates**: Removed until a specific delivered project with Cashfree or automated e-mandates is confirmed.
  - **Official WhatsApp Business API**: Removed claims of official API partner setup; replaced with supported WhatsApp messaging and lead routing workflows.
  - **30-Day Warranty**: Removed formal warranty claims; replaced with agreed post-launch support windows.
- [ ] **Case Study Metrics**:
  - **Futura**: Specific percentage increase in distributor enquiries or brochure downloads.
  - **UniCou**: Specific volume of student vouchers issued or time saved per agent order.
- [ ] **Legal Review**:
  - Terms of Service and Privacy Policy require professional legal review before general public reliance.

