# SEO and digital marketing changes

## This revision
- Homepage: crawlable static HTML (headings, service links, projects, guides, contact) now sits inside `#root` so search engines see content without running JavaScript; React replaces it on load.
- Structured data on the homepage: Organization/ProfessionalService (with hours, services catalogue), WebSite, WebPage and FAQPage.
- Social sharing: added `public/og-image.png` (1200x630), `og:image`, and `summary_large_image` Twitter cards on every page.
- Blog: `/blog/` plus four guides (website vs web app, Flutter vs React Native, custom vs off-the-shelf CRM, technical SEO checklist) with Article schema, breadcrumbs and links to the matching service pages.
- Service pages: now generated entirely by `scripts/generate-seo-pages.mjs` (removed stale `public/services/`), with header navigation, related guides, other-services links, WhatsApp/email/phone CTAs.
- Sitemap now includes the blog and `lastmod`; robots.txt blocks only `/404.html`; added `404.html`, `manifest.webmanifest`, `llms.txt`.
- Internal linking: footer now links to all six service pages and the blog; navbar has a Blog link.
- Lead tracking: `src/analytics.js` pushes `generate_lead` (form) and `whatsapp_click` events to the GTM dataLayer.
- Performance: Google Fonts no longer block rendering.
- Hosting: security headers in `netlify.toml` and `vercel.json`; `public/.htaccess` for Apache/cPanel hosting (HTTPS, www, caching, compression).
- Fixed the ESLint config (it crashed) and an unused import; lint and build both pass.

## Still needs you (cannot be done from source code)
See the checklist in the chat reply: Search Console, Google Business Profile, GTM/GA4 tags, social profile URLs, booking link, real project screenshots.
