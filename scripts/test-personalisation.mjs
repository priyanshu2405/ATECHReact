import fs from 'node:fs';
import path from 'node:path';
import { countryToRegion, regions, getRegionConfig } from '../src/data/regions.js';
import middleware, { config as mwConfig } from '../middleware.js';
import { formatPriceDisplay, engagementModels, servicePricingRanges } from '../src/data/pricing.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log('\n--- 1. Testing Country to Region Mapping ---');
assert(countryToRegion('GB') === 'uk', 'GB maps to uk');
assert(countryToRegion('gb') === 'uk', 'gb (lowercase) maps to uk');
assert(countryToRegion('CA') === 'canada', 'CA maps to canada');
assert(countryToRegion('ca') === 'canada', 'ca maps to canada');
assert(countryToRegion('AE') === 'uae', 'AE maps to uae');
assert(countryToRegion('ae') === 'uae', 'ae maps to uae');
assert(countryToRegion('IN') === 'india', 'IN maps to india');
assert(countryToRegion('in') === 'india', 'in (lowercase) maps to india');
assert(countryToRegion('US') === 'global', 'US maps to global');
assert(countryToRegion(null) === 'global', 'null maps to global');
assert(countryToRegion('') === 'global', 'empty string maps to global');

console.log('\n--- 2. Testing Regional Configuration & Content Integrity ---');
assert(regions.uk.currency === 'GBP', 'UK currency is GBP');
assert(regions.canada.currency === 'CAD', 'Canada currency is CAD');
assert(regions.uae.currency === 'AED', 'UAE currency is AED');
assert(regions.india.currency === 'INR', 'India currency is INR');
assert(regions.global.currency === 'USD', 'Global currency is USD');

assert(regions.uae.ctaOrder[0] === 'whatsapp', 'UAE CTA priority is WhatsApp first');
assert(regions.india.ctaOrder[0] === 'whatsapp', 'India CTA priority is WhatsApp first');
assert(regions.uk.ctaOrder[0] === 'booking', 'UK CTA priority is Booking first');
assert(regions.canada.ctaOrder[0] === 'booking', 'Canada CTA priority is Booking first');
assert(regions.global.ctaOrder[0] === 'booking', 'Global CTA priority is Booking first');

assert(Boolean(regions.uk.heroSubheadline && regions.uk.heroSubheadline.length > 30), 'UK has unique hero subheadline');
assert(Boolean(regions.canada.heroSubheadline && regions.canada.heroSubheadline.length > 30), 'Canada has unique hero subheadline');
assert(Boolean(regions.uae.heroSubheadline && regions.uae.heroSubheadline.length > 30), 'UAE has unique hero subheadline');
assert(Boolean(regions.india.heroSubheadline && regions.india.heroSubheadline.length > 30), 'India has unique hero subheadline');
assert(Boolean(regions.global.heroSubheadline && regions.global.heroSubheadline.length > 30), 'Global has hero subheadline');

assert(regions.uk.banner && regions.uk.banner.linkUrl === '/uk/', 'UK suggestion banner links to /uk/');
assert(regions.canada.banner && regions.canada.banner.linkUrl === '/canada/', 'Canada suggestion banner links to /canada/');
assert(regions.uae.banner && regions.uae.banner.linkUrl === '/dubai-uae/', 'UAE suggestion banner links to /dubai-uae/');
assert(regions.india.banner === null, 'India has no suggestion banner while unpublished');
assert(regions.global.banner === null, 'Global has no suggestion banner');

console.log('\n--- 3. Testing Vercel Edge Middleware Logic ---');
assert(JSON.stringify(mwConfig.matcher) === JSON.stringify(['/']), 'Middleware matcher is limited strictly to ["/"]');

// Mock request helper
function createMockRequest({ url = 'https://www.atechinfotech.com/', country = null, cookie = null, userAgent = 'Mozilla/5.0' } = {}) {
  const headers = new Map();
  if (country) headers.set('x-vercel-ip-country', country);
  if (cookie) headers.set('cookie', cookie);
  if (userAgent) headers.set('user-agent', userAgent);

  return {
    url,
    headers: {
      get: (k) => headers.get(k.toLowerCase()) || null
    }
  };
}

// 3a. Bot protection: bots always receive global pass-through
const botUAs = [
  'Googlebot/2.1 (+http://www.google.com/bot.html)',
  'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 (compatible; Google-Lighthouse)'
];
for (const b of botUAs) {
  const req = createMockRequest({ userAgent: b, country: 'GB' });
  const res = middleware(req);
  assert(res.headers.get('x-middleware-next') === '1', `Bot UA gets global pass-through (never cloaked): ${b.split(' ')[0]}`);
  assert(res.headers.get('Vary')?.includes('User-Agent'), 'Vary header includes User-Agent');
}

// 3b. IP Geo detection
{
  const reqGB = createMockRequest({ country: 'GB' });
  const resGB = middleware(reqGB);
  assert(resGB.headers.get('x-middleware-rewrite')?.includes('/v/uk/'), 'GB rewrites to /v/uk/');

  const reqCA = createMockRequest({ country: 'CA' });
  const resCA = middleware(reqCA);
  assert(resCA.headers.get('x-middleware-rewrite')?.includes('/v/canada/'), 'CA rewrites to /v/canada/');

  const reqAE = createMockRequest({ country: 'AE' });
  const resAE = middleware(reqAE);
  assert(resAE.headers.get('x-middleware-rewrite')?.includes('/v/uae/'), 'AE rewrites to /v/uae/');

  const reqIN = createMockRequest({ country: 'IN' });
  const resIN = middleware(reqIN);
  assert(resIN.headers.get('x-middleware-rewrite')?.includes('/v/india/'), 'IN rewrites to /v/india/');

  const reqUS = createMockRequest({ country: 'US' });
  const resUS = middleware(reqUS);
  assert(resUS.headers.get('x-middleware-next') === '1', 'Unknown/US country passes through to global /');
}

// 3c. Cookie override: cookie takes precedence over IP country
{
  const req = createMockRequest({ country: 'GB', cookie: 'atech_region=uae' });
  const res = middleware(req);
  assert(res.headers.get('x-middleware-rewrite')?.includes('/v/uae/'), 'Cookie atech_region=uae overrides GB country header');

  const reqIndia = createMockRequest({ country: 'GB', cookie: 'atech_region=india' });
  const resIndia = middleware(reqIndia);
  assert(resIndia.headers.get('x-middleware-rewrite')?.includes('/v/india/'), 'Cookie atech_region=india overrides GB country header');
}

// 3d. Dev query override: ?geo=CA overrides in non-production
{
  const req = createMockRequest({ url: 'http://localhost:5173/?geo=CA', country: 'GB' });
  const res = middleware(req);
  assert(res.headers.get('x-middleware-rewrite')?.includes('/v/canada/'), 'Dev ?geo=CA query overrides country');

  const reqDevIN = createMockRequest({ url: 'http://localhost:5173/?geo=IN', country: 'GB' });
  const resDevIN = middleware(reqDevIN);
  assert(resDevIN.headers.get('x-middleware-rewrite')?.includes('/v/india/'), 'Dev ?geo=IN query overrides country');
}

console.log('\n--- 4. Testing Static Build Output & SEO Safety ---');
const dist = path.join(process.cwd(), 'dist');
if (fs.existsSync(dist)) {
  const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf-8');
  assert(robots.includes('Disallow: /v/'), 'robots.txt contains Disallow: /v/');

  const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf-8');
  assert(!sitemap.includes('/v/'), 'sitemap.xml strictly excludes /v/*');
  assert(sitemap.includes('/uk/'), 'sitemap.xml includes /uk/');
  assert(sitemap.includes('/canada/'), 'sitemap.xml includes /canada/');
  assert(sitemap.includes('/dubai-uae/'), 'sitemap.xml includes /dubai-uae/');
  assert(!sitemap.includes('/india/'), 'sitemap.xml strictly excludes unpublished /india/');

  // Check /v/ variant static HTML files
  for (const r of ['uk', 'canada', 'uae', 'india']) {
    const filePath = path.join(dist, `v/${r}/index.html`);
    assert(fs.existsSync(filePath), `Static variant exists: dist/v/${r}/index.html`);
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf-8');
      assert(html.includes('<meta name="robots" content="noindex,follow" />'), `${r} variant has noindex,follow`);
      assert(html.includes('rel="canonical" href="https://www.atechinfotech.com/"'), `${r} variant canonical points to root /`);
      assert(html.includes(`window.__ATECH_REGION__ = "${r}"`), `${r} variant injects window.__ATECH_REGION__`);
    }
  }

  // Check real standalone market pages
  for (const m of ['uk', 'canada', 'dubai-uae']) {
    const filePath = path.join(dist, `${m}/index.html`);
    assert(fs.existsSync(filePath), `Market page exists: dist/${m}/index.html`);
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf-8');
      assert(html.includes('content="index,follow,max-image-preview:large"'), `${m} market page has index,follow`);
      assert(html.includes(`href="https://www.atechinfotech.com/${m}/"`), `${m} market page has self-referencing canonical`);
    }
  }

  // Check unpublished India market page
  {
    const indiaPath = path.join(dist, 'india/index.html');
    assert(fs.existsSync(indiaPath), 'Market page exists: dist/india/index.html');
    if (fs.existsSync(indiaPath)) {
      const html = fs.readFileSync(indiaPath, 'utf-8');
      assert(html.includes('content="noindex,follow"'), 'india market page has noindex,follow while unpublished');
      assert(html.includes('href="https://www.atechinfotech.com/india/"'), 'india market page has self-referencing canonical');
    }
  }
} else {
  console.log('  (Skipping dist checks: dist/ folder not built yet)');
}

console.log('\n--- 5. Testing Pricing Calculation & Safe Formatting ---');
for (const curr of ['GBP', 'CAD', 'AED', 'INR', 'USD']) {
  for (const m of engagementModels) {
    const p = m.pricing[curr];
    const formatted = formatPriceDisplay(p);
    assert(typeof formatted === 'string' && formatted.length > 0, `EngagementModel ${m.id} renders safely in ${curr}`);
  }
  for (const s of servicePricingRanges) {
    const p = s.startingPrices[curr];
    const formatted = formatPriceDisplay(p);
    assert(typeof formatted === 'string' && formatted.length > 0, `ServicePricing ${s.serviceSlug} renders safely in ${curr}`);
  }
}

console.log(`\n========================================`);
console.log(`RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
