# Atech Infotech Website

Modern, conversion-focused React 19 + Vite website for **Atech Infotech** (Indore, India), engineered for international clients in the **United Kingdom (UK)**, **Canada**, and **Dubai / UAE**.

---

## Quick Start & Local Development

```bash
# Install dependencies
npm ci

# Start local development server (with host access)
npm run dev -- --host --port 5173
```

- **Local URL**: [http://localhost:5173/](http://localhost:5173/)

---

## Production Build & Static Page Generation

```bash
npm run build
```

The build pipeline performs:
1. `vite build`: Minified production bundle with chunk splitting.
2. `scripts/generate-seo-pages.mjs`: Pre-renders semantic HTML for 6 service pages, 4 engineering blog guides, 3 target market landing pages (`/uk`, `/canada`, `/dubai-uae`), 2 case studies, pricing, about, contact, legal pages, XML sitemap, and robots.txt.
3. Pre-renders 3 static regional homepage variants under `/v/uk/`, `/v/canada/`, `/v/uae/` with `noindex, follow` and canonical pointing to root `/`.

---

## Country-Based Personalisation Architecture

The website incorporates zero-redirect, zero-layout-shift country personalisation designed for Vercel Edge hosting:

```
                      [ Incoming Request to "/" ]
                                   │
                      Vercel Edge Middleware
                                   │
                 Is User-Agent a crawler / bot?
                           ├── YES ──> Serve canonical Global Homepage (zero cloaking)
                           └── NO
                                   │
                     Is `atech_region` cookie set?
                           ├── YES ──> Rewrite "/" to "/v/[cookie]/" (URL remains "/")
                           └── NO
                                   │
                Read `x-vercel-ip-country` header:
                - GB  ──> Rewrite "/" to "/v/uk/"
                - CA  ──> Rewrite "/" to "/v/canada/"
                - AE  ──> Rewrite "/" to "/v/uae/"
                - IN  ──> Rewrite "/" to "/v/india/"
                - Other ──> Pass through to Global Homepage ("/")
```

### 1. Variant Differences (Strictly Scoped)
Variants differ **ONLY** in four specific aspects (no cloaking, no duplicate content):
1. **Hero Sub-Headline**: Tailored for regional audience (UK: GDPR-aware & afternoon overlap; Canada: PIPEDA-aware & morning EST overlap; UAE: Arabic/RTL, VAT-ready, full day alignment; India: INR milestone invoicing & same time zone IST overlap; Global: standard outcome-focused copy).
2. **Displayed Pricing Currency**: UK: GBP (£), Canada: CAD ($), UAE: AED (د.إ), India: INR (₹), Global: USD ($).
3. **CTA Priority**: UAE and India visitors see **WhatsApp Us** as primary and Booking as secondary; UK, Canada, and Global see **Book a 30-Min Call** as primary and WhatsApp as secondary.
4. **Time-Zone Overlap Windows**: Highlighting dedicated overlap hours with India Standard Time.

### 2. Single Source of Truth (`src/data/regions.js`)
All regional variations are defined in `src/data/regions.js`. A single shared `HomePage` component is reused with a `region` prop.

### 3. SEO Safety
- Variant pages at `/v/*` contain `<meta name="robots" content="noindex, follow">`.
- Variant pages have `<link rel="canonical" href="https://www.atechinfotech.com/">` pointing strictly to root.
- `/v/` is disallowed in `robots.txt` (`Disallow: /v/`).
- `/v/*` is strictly excluded from `sitemap.xml`.
- Real market pages (`/uk/`, `/canada/`, `/dubai-uae/`, `/india/`) remain independent, crawlable index pages with self-referencing canonicals and localized hreflang tags.

### 4. Edge Caching & Vary Headers
In `vercel.json` and `middleware.js`:
- `Vary: x-vercel-ip-country, Cookie, User-Agent` ensures Vercel's Edge CDN partitions cached static HTML correctly so a UK visitor's cache is never served to a UAE visitor.
- Variant pages are generated at build time as static HTML in `dist/v/*`.

### 5. Region Switcher & Cookies
- Users can manually select their region via the accessible **Region Switcher** in the Header and Footer.
- Setting a preference sets the functional cookie: `atech_region` (`path=/`, `SameSite=Lax`, 180 days).
- Selecting **Global / Auto-detect** deletes the cookie, returning to automatic edge geolocation.
- Dismissing the country recommendation banner sets `atech_banner_dismissed_[region]`.
- No personal data or IP addresses are ever stored or logged.

---

## Local Testing Guide

### 1. Testing via Dev Query Override (`?geo=`)
When running in development or preview mode (`VERCEL_ENV !== 'production'`), you can simulate any country by appending `?geo=`:
- 🇬🇧 **UK variant**: [http://localhost:5173/?geo=GB](http://localhost:5173/?geo=GB)
- 🇨🇦 **Canada variant**: [http://localhost:5173/?geo=CA](http://localhost:5173/?geo=CA)
- 🇦🇪 **UAE variant**: [http://localhost:5173/?geo=AE](http://localhost:5173/?geo=AE)
- 🌐 **Global variant**: [http://localhost:5173/?geo=US](http://localhost:5173/?geo=US)

### 2. Testing via the Header / Footer Switcher
1. Open [http://localhost:5173/](http://localhost:5173/).
2. Click the region button in the header (e.g. `🌐 GLOBAL ▾`).
3. Select `United Kingdom (GBP £)`. Notice:
   - Currency in Pricing updates to `GBP (£)`.
   - Hero subtitle tailors to UK enterprises.
   - Overlap hours highlight UK dedicated window.
   - Suggestion banner appears with link to `/uk/`.
4. Click `×` to dismiss the banner. Notice that refreshing keeps the banner dismissed (persisted in `atech_banner_dismissed_uk` cookie).

---

## How to Add a New Region

1. Open `src/data/regions.js`:
   Add a new entry with `id`, `code`, `name`, `currency`, `heroSubheadline`, `ctaOrder`, `overlapHours`, and optional `banner`.
2. Update `countryToRegion()` in `src/data/regions.js` to map the 2-letter ISO country code.
3. Update `regionalVariants` in `scripts/generate-seo-pages.mjs` so static pre-rendering builds `/v/[new-region]/index.html`.
4. Add the route in `src/App.jsx`: `<Route path="/v/[new-region]" element={<HomePage region="[new-region]" />} />`.
5. Run `npm run build` to verify clean compilation and static generation.
