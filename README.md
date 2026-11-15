# Atech Infotech website

React 19 + Vite website for Atech Infotech.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

The build creates `dist/` and generates crawlable static HTML pages for each service under `dist/services/`, plus `sitemap.xml` and `robots.txt`.

## Service pages generated at build time

- `/services/website-development/`
- `/services/mobile-app-development/`
- `/services/ecommerce-development/`
- `/services/crm-erp-development/`
- `/services/cloud-devops/`
- `/services/seo-digital-marketing/`

## Deployment notes

Upload the **contents** of `dist/` to the document root of the hosting service that actually serves `atechinfotech.com`. Do not upload the source ZIP as the live website. Back up the current website and verify the hosting provider and deployment method before changing DNS or replacing production files.

The current GoDaddy dashboard screenshots show a GoDaddy Airo/Website Builder connection. They do not prove that this React project is currently hosted in a cPanel account. Confirm the active hosting product before deployment.

## Before launch

- Confirm phone, email, office address, business hours and portfolio descriptions.
- Confirm that the GTM container ID in `index.html` belongs to Atech Infotech and is configured correctly; otherwise remove it or replace it with the correct ID.
- Test the contact form and confirm the Web3Forms access key and recipient settings.
- Run a production build and test all routes, mobile layouts, forms and redirects.
- Verify the domain in Google Search Console and submit `/sitemap.xml` after deployment.
