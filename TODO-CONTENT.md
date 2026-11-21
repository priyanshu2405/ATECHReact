# Content & Configuration Placeholders (TODO-CONTENT.md)

This file contains every placeholder `[TODO: ...]` across the website that requires your input before launch.
No real statistics, prices, client identities, certifications, or testimonials have been invented.

---

## 1. Business & Contact Configuration (`src/data/config.js`)

- [ ] **Email**: `[TODO: hello@atechinfotech.com, a domain email]` (currently configured to default fallback)
- [ ] **Booking URL**: `[TODO: Calendly/Cal.com link]` (e.g. `https://calendly.com/atechinfotech/discovery` or `https://cal.com/atechinfotech/30min`)
- [ ] **Canada Overlap Window**: `[TODO: Canada timezone overlap window]` (e.g. "Canada (EST): 8:00 AM – 11:30 AM EST" or similar based on your preferred shift)
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
  - USD: `[TODO: price in USD]` (e.g. "$3,500")
- [ ] **Monthly Retainer**:
  - GBP: `[TODO: price in GBP/mo]`
  - CAD: `[TODO: price in CAD/mo]`
  - AED: `[TODO: price in AED/mo]`
  - USD: `[TODO: price in USD/mo]`
- [ ] **Dedicated Senior Developer**:
  - GBP: `[TODO: price in GBP/mo]`
  - CAD: `[TODO: price in CAD/mo]`
  - AED: `[TODO: price in AED/mo]`
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

- [ ] **Futura Kitchen Sinks**:
  - Verified Metrics: `[TODO: result/metric]` (e.g. "% increase in WhatsApp enquiry conversion or catalogue downloads after launch")
  - Client Testimonial (Optional): `[TODO: quote from client with permission]`
- [ ] **UniCou Exam Vouchers**:
  - Verified Metrics: `[TODO: result/metric]` (e.g. "number of voucher orders processed or partner institutions onboarded")
  - Client Testimonial (Optional): `[TODO: quote from client with permission]`
- [ ] **Draft Case Studies (Unpublished - Activate when ready)**:
  - Custom Multi-Tenant CRM Platform: Needs client permission, industry confirmation, screenshots, live URL or metrics.
  - Ride-Hailing Mobile App: Needs product name, features, tech stack, screenshots.
  - Luxury Ecommerce Platform: Needs brand name, store features, tech stack, metrics.
  - Flutter Mobile App with Laravel Backend: Needs project title, overview, app store links.

---

## 4. Testimonials (`src/data/testimonials.js`)

- [ ] Genuine Client Reviews: The website currently renders **zero** testimonials because no fake reviews are permitted. Once you have written permission from clients, add them to `src/data/testimonials.js`. The testimonial slider/cards will automatically display once entries exist.

---

## 5. Legal & Compliance Notice

- [ ] **Privacy Policy & Terms of Service**: The templates provided at `/privacy-policy` and `/terms` are clean, reasonable starting templates. They **must be reviewed by a qualified legal professional** in your jurisdiction and target markets (UK GDPR, Canada PIPEDA, UAE Data Protection Law) before commercial deployment.
