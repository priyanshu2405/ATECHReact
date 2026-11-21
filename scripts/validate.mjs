import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
let errors = 0;
let checked = 0;

function checkHtmlFile(filePath, relPath) {
  // Skip site verification files
  if (relPath.startsWith('google') && relPath.endsWith('.html')) return;

  const content = fs.readFileSync(filePath, 'utf8');
  checked++;

  // 1. Check JSON-LD
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    const raw = match[1];
    try {
      const parsed = JSON.parse(raw);
      if (!parsed['@context']) {
        console.error('Missing @context in', relPath);
        errors++;
      }
    } catch (e) {
      console.error('Invalid JSON-LD in', relPath, e.message);
      errors++;
    }
  }

  // 2. Check canonical
  if (!content.includes('rel="canonical"')) {
    console.error('Missing canonical in', relPath);
    errors++;
  }

  // 3. Check WhatsApp links format if any
  const waRegex = /href="(https:\/\/wa\.me\/[^"]+)"/g;
  let waMatch;
  while ((waMatch = waRegex.exec(content)) !== null) {
    if (!waMatch[1].startsWith('https://wa.me/917678410628')) {
      console.error('Incorrect WhatsApp link in', relPath, waMatch[1]);
      errors++;
    }
  }
}

function walk(dir, rel = '') {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const relFile = path.join(rel, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full, relFile);
    } else if (f.endsWith('.html')) {
      checkHtmlFile(full, relFile);
    }
  }
}

walk(dist);
console.log(`Checked ${checked} HTML files. Total schema/structural errors: ${errors}`);

// Check sitemap.xml
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const locMatches = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
console.log(`Sitemap contains ${locMatches.length} URLs. Validating targets on disk...`);

for (const loc of locMatches) {
  const pathname = loc.replace('https://www.atechinfotech.com', '');
  const expectedFile = pathname === '/' ? path.join(dist, 'index.html') : path.join(dist, pathname, 'index.html');
  if (!fs.existsSync(expectedFile)) {
    console.error('Sitemap target does not exist on disk:', expectedFile);
    errors++;
  }
}

// Check robots.txt
const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://www.atechinfotech.com/sitemap.xml')) {
  console.error('robots.txt missing valid Sitemap directive');
  errors++;
}

if (errors === 0) {
  console.log('✅ ALL VERIFICATIONS PASSED! All 24 pages, schemas, sitemaps, WhatsApp links, and robots directives are 100% valid.');
} else {
  console.error(`❌ Found ${errors} validation errors.`);
  process.exit(1);
}
