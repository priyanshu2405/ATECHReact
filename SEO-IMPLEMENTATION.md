# Atech Infotech SEO implementation

## Implemented in this source project

- Added a descriptive homepage title and refined the homepage description for the company's actual service mix and Indore location.
- Retained canonical, Open Graph, Twitter, robots and organization/business structured data on the homepage.
- Added six dedicated, standalone service pages generated during the production build. Each page has a unique title, description, canonical URL, social metadata, semantic headings, internal navigation, contact calls to action, Service/Breadcrumb/FAQ structured data and substantive service-specific copy.
- Updated the service cards to link to the dedicated service pages.
- Generate an XML sitemap containing only the homepage and service pages created by the build, and generate a matching robots.txt.
- Reduced the decorative hero canvas workload on smaller screens and respected `prefers-reduced-motion`.
- Added a honeypot field to the contact form and included Ecommerce and SEO service choices.

## Important items requiring owner verification

- Confirm the business phone, email, address and business hours currently shown on the website.
- Confirm the Google Tag Manager ID (`GTM-N5RN9GGR`) is the correct container and is configured. A GTM loader alone does not mean GA4 or conversion events are configured.
- Confirm the Web3Forms key and recipient configuration. The form should be tested end-to-end before launch.
- Add verified official social profile URLs and real project case-study details when available. No social URLs, customer results, certifications or ranking guarantees have been invented.
- Add a real social sharing image and optimized project images when approved assets are available.

## Build and deployment

Run `npm ci` and `npm run build`. Upload the **contents** of `dist/` to the actual web host's document root. The GoDaddy screenshots provided so far show the Airo/Website Builder dashboard and do not establish that the React source is deployed there. Do not replace the live site or alter DNS until the active hosting product and backup are confirmed.

After deployment, verify the homepage and every `/services/.../` URL, then verify the domain in Google Search Console and submit `https://www.atechinfotech.com/sitemap.xml`.
