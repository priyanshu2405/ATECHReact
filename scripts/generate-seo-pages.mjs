import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const base = 'https://www.atechinfotech.com';
const services = [
  {
    slug: 'website-development', title: 'Website Development Company in Indore, India', nav: 'Website Development',
    description: 'Custom business websites and web applications planned around your goals, customers and day-to-day workflows.',
    intro: 'Atech Infotech designs and develops business websites and web applications for startups and growing businesses. From a clear company website to a custom web portal, we focus on useful user journeys, responsive layouts, maintainable code and a foundation that search engines can understand.',
    sections: [
      ['Business websites', 'Create a clear online presence that explains your services, builds trust and makes it easy for customers to contact your team. We plan page structure, calls to action, mobile layouts and content hierarchy around the people you want to reach.'],
      ['Custom web applications', 'When a standard website is not enough, we can help plan interactive web applications, customer portals, dashboards and workflow tools. Scope, integrations and technical choices are defined around your actual requirements.'],
      ['Frontend, backend and APIs', 'The project may include React interfaces, backend development, database integration and REST APIs. We aim for a maintainable implementation and clear handover so the product can be supported after launch.'],
      ['Website quality and SEO foundations', 'We consider page titles, descriptions, semantic headings, internal links, image alternatives, mobile usability and performance during development. These foundations support discoverability but do not guarantee search rankings.']
    ],
    faqs: [
      ['What type of websites can Atech Infotech build?', 'Business websites, service websites, web portals and custom web applications. The scope is planned after understanding your goals and requirements.'],
      ['Will the website work on mobile devices?', 'Responsive layouts are part of the development approach. The finished site should be tested across common screen sizes and browsers before launch.'],
      ['Can you improve an existing website?', 'Yes. We can review an existing website and discuss redesign, performance, content structure, technical fixes or additional functionality.']
    ]
  },
  {
    slug: 'mobile-app-development', title: 'Mobile App Development for Android and iOS', nav: 'Mobile App Development',
    description: 'Mobile application planning and development for Android and iOS, including app interfaces and backend API integration.',
    intro: 'Atech Infotech helps businesses plan and build mobile applications for Android and iOS. We focus on the core user journey, practical features, reliable API communication and a maintainable foundation that can evolve as your product grows.',
    sections: [
      ['Android and iOS applications', 'We help define app features, user roles, screens and the data each workflow needs. Platform and technology choices depend on the product, budget, integrations and long-term maintenance requirements.'],
      ['Cross-platform development', 'Where appropriate, cross-platform technologies such as Flutter or React Native can support a shared development approach. We evaluate suitability rather than assuming one framework is right for every project.'],
      ['Backend and API integration', 'Mobile apps often need authentication, databases, admin tools, notifications and third-party integrations. We plan these dependencies with the application instead of treating the app as an isolated interface.'],
      ['Testing and release preparation', 'Before release, important flows should be tested on representative devices, including sign-in, forms, network interruptions and error states. Store listing assets and release requirements are planned as part of the delivery scope.']
    ],
    faqs: [
      ['Can you develop apps for both Android and iOS?', 'Yes. The recommended approach depends on the app requirements, target devices, integrations and maintenance expectations.'],
      ['Can the app connect to my existing website or software?', 'It may be possible through APIs. We first review the existing system and its available integration points.'],
      ['Do you help with app publishing?', 'Release preparation and store submission support can be included in the agreed project scope.']
    ]
  },
  {
    slug: 'ecommerce-development', title: 'Ecommerce Website Development and Online Stores', nav: 'Ecommerce Development',
    description: 'Online store development with product catalogues, admin workflows, order management and payment integration planning.',
    intro: 'Atech Infotech develops ecommerce experiences for businesses that want to present products online and manage orders through a practical workflow. We consider both sides of the store: the customer shopping experience and the administration tools used by the business team.',
    sections: [
      ['Customer-facing storefront', 'A useful storefront makes it easy to browse categories, understand product details, view pricing and take the next step. We plan responsive product pages, navigation, search and clear purchase actions.'],
      ['Product and order administration', 'Depending on the scope, the admin panel can support product details, images, categories, stock information, order status and customer records. The workflow should reflect how your team actually processes orders.'],
      ['Payments, shipping and integrations', 'Payment gateways, shipping providers, tax rules, notifications and accounting integrations require provider-specific configuration. We identify these requirements early and validate access and documentation before implementation.'],
      ['Ecommerce SEO foundations', 'Category and product page structure, descriptive content, canonical URLs, structured data where appropriate, image optimization and crawlable navigation help establish a sound technical foundation.']
    ],
    faqs: [
      ['Can the admin panel manage products and orders?', 'Yes, product and order administration can be included. Exact roles and workflows are agreed during project discovery.'],
      ['Can you integrate a payment gateway?', 'Payment integration depends on the chosen provider, merchant account approval, API documentation and business requirements.'],
      ['Can you build a custom ecommerce website?', 'Yes. We can scope a custom storefront and administration workflow based on your catalogue, order process and integrations.']
    ]
  },
  {
    slug: 'crm-erp-development', title: 'Custom CRM and ERP Software Development', nav: 'CRM & ERP Development',
    description: 'Business software, CRM, ERP modules and workflow automation shaped around your team and operations.',
    intro: 'Off-the-shelf tools do not always match the way a business operates. Atech Infotech helps plan custom CRM, ERP and internal business applications around real processes, user roles and reporting needs. The aim is to reduce disconnected work and make important information easier to manage.',
    sections: [
      ['Custom CRM systems', 'A CRM can organize leads, contacts, follow-ups, sales stages and customer communication. We define roles, records and pipeline stages with your team before building screens and workflows.'],
      ['ERP and operations modules', 'Depending on the business, an ERP project may involve inventory, purchasing, sales, invoicing, service operations or internal approvals. Modules should be prioritized around the most important operational needs.'],
      ['Dashboards and reporting', 'Useful dashboards present information that helps people take action. We identify the metrics, filters, permissions and export needs before implementing reports.'],
      ['Automation and integrations', 'Custom software can connect systems through APIs and automate repetitive steps. Integrations are scoped after reviewing the external systems, available APIs and security requirements.']
    ],
    faqs: [
      ['Can a CRM be customized for my business?', 'Yes. User roles, fields, pipelines and workflows can be designed around your sales and customer-management process.'],
      ['Can you connect the software to other systems?', 'Where supported, integrations can be built using APIs or other documented integration methods.'],
      ['Can we start with only a few modules?', 'A phased approach is often practical. We can prioritize the highest-value workflow first and plan future modules separately.']
    ]
  },
  {
    slug: 'cloud-devops', title: 'Cloud Deployment and DevOps Services', nav: 'Cloud & DevOps',
    description: 'Practical deployment, hosting configuration, CI/CD and application operations support for web products.',
    intro: 'Atech Infotech helps teams prepare and deploy web applications with a focus on repeatable releases, environment configuration and operational clarity. The right setup depends on the application, traffic expectations, hosting provider, budget and support requirements.',
    sections: [
      ['Application deployment', 'We help prepare production builds, environment variables, domain configuration and deployment steps for supported hosting platforms. Access and provider capabilities are confirmed before making production changes.'],
      ['CI/CD workflows', 'Where appropriate, automated build and deployment workflows can reduce repetitive release steps. We define the repository, branch, build command, environment and approval process before configuring a pipeline.'],
      ['Containers and environments', 'Docker and separate development, staging and production environments may be useful for applications with matching requirements. We assess complexity and operational overhead before recommending them.'],
      ['Monitoring and maintenance planning', 'A production application needs a clear process for logs, backups, updates, incident response and recovery. These responsibilities and any third-party service costs should be agreed before launch.']
    ],
    faqs: [
      ['Can you deploy an existing React application?', 'Yes, after reviewing its build process, routing, environment variables and the hosting platform’s supported deployment method.'],
      ['Do you work with existing hosting providers?', 'We can review supported hosting environments and plan deployment around their capabilities and access permissions.'],
      ['Is cloud hosting always required?', 'No. Hosting should match the application’s requirements and budget. A simpler hosting plan may be sufficient for some websites.']
    ]
  },
  {
    slug: 'seo-digital-marketing', title: 'SEO and Digital Marketing Services for Businesses', nav: 'SEO & Digital Marketing',
    description: 'Practical SEO foundations, on-page improvements, content planning and organic visibility support for business websites.',
    intro: 'Atech Infotech helps businesses improve the technical and on-page foundations of their websites and plan useful organic content. SEO is an ongoing process: results depend on competition, website quality, relevance, consistency and search engine systems. We do not promise specific rankings or instant traffic.',
    sections: [
      ['Technical SEO', 'Technical work can include crawlability checks, indexation review, XML sitemaps, robots directives, canonical URLs, redirects, mobile usability and page performance. Changes should be tested after deployment.'],
      ['On-page SEO', 'We review page titles, meta descriptions, heading structure, page copy, image alt text and internal links so each important page has a clear purpose and answers the visitor’s search intent.'],
      ['Local SEO foundations', 'For businesses serving a defined area, consistent business details, a complete Google Business Profile, relevant service information and genuine customer reviews can support local discovery. Business details must be accurate and verifiable.'],
      ['Content and measurement', 'Useful service pages, project case studies and helpful articles can answer customer questions. Search Console and analytics data help identify which pages are discovered and where improvements may be needed.']
    ],
    faqs: [
      ['Can you guarantee first-page Google rankings?', 'No responsible SEO provider can guarantee a specific ranking. SEO work improves relevance and technical accessibility, while rankings depend on many external factors.'],
      ['Do you provide paid advertising?', 'This page describes organic SEO and digital marketing foundations. Any paid advertising would be separately scoped and would require an advertising budget.'],
      ['How long does SEO take?', 'There is no fixed timeline. Search engines need to crawl and evaluate changes, and competitive queries can take sustained work. Progress should be measured over time.']
    ]
  }
];

const articles = [
  {
    slug: 'website-vs-web-app-for-startups',
    title: 'Website or Web App? What a Startup Should Build First',
    description: 'A plain-language guide to choosing between a business website and a custom web application when you are launching a startup.',
    date: '2026-11-16',
    related: ['website-development', 'crm-erp-development'],
    sections: [
      ['Start with the job the product must do', ['A website exists to explain your business and make it easy for customers to contact you. A web application exists to let users do something: log in, submit data, manage orders or track progress. Before choosing, write down the first thing a customer must be able to do on day one.', 'If the answer is "understand what we offer and get in touch", you need a website. If the answer is "sign up and use a tool", you need a web application.']],
      ['When a website is enough', ['Most early-stage service businesses can validate demand with a clear website: what you do, who it is for, examples of your work and a simple enquiry form. It is faster to launch, cheaper to maintain and easier for search engines to understand.', 'A website also gives you a place to publish content and collect enquiries while you learn what customers actually ask for.']],
      ['When you need a web application', ['Build an application when the product itself is the software: customer portals, booking systems, dashboards, marketplaces or internal tools. These need user accounts, a database, permissions and a backend API, which raises both scope and testing effort.', 'A practical approach is to launch a focused first version with only the core workflow, then add features based on real usage.']],
      ['A sensible path for most startups', ['Launch a fast, well-structured website first, with proper page titles, descriptions and service pages so customers can find you. In parallel, define the smallest version of the application that proves your idea. Moving in stages keeps cost and risk under control.', 'If you are unsure which route fits, a short discovery call can clarify scope before any development starts.']]
    ]
  },
  {
    slug: 'flutter-vs-react-native-for-your-app',
    title: 'Flutter vs React Native: Choosing a Framework for Your Mobile App',
    description: 'How to think about Flutter and React Native for an Android and iOS app, based on your product, team and long-term maintenance.',
    date: '2026-11-16',
    related: ['mobile-app-development', 'website-development'],
    sections: [
      ['Why cross-platform is popular', ['Cross-platform frameworks let one team build Android and iOS apps from a shared codebase. For many business apps this reduces build time and keeps features consistent across both platforms.', 'It is not automatically the right choice. Apps that depend heavily on platform-specific features may justify native development.']],
      ['Where Flutter fits', ['Flutter uses the Dart language and draws its own interface, which gives precise control over how screens look on every device. It suits products where a consistent custom design matters and where the team is comfortable adopting Dart.']],
      ['Where React Native fits', ['React Native uses JavaScript and React concepts. It can be a natural choice when you already have a React web team or want to share logic between a web product and a mobile app.']],
      ['Questions that matter more than the framework', ['Which backend and APIs will the app use? Who will maintain it after launch? Which device features are required, such as camera, location, notifications or payments? How will you handle store review and updates?', 'A good framework choice follows from these answers. Either option can produce a high-quality app when the scope, API design and testing are handled carefully.']],
      ['Plan the backend alongside the app', ['Most business apps need authentication, an admin panel and a reliable API. Planning these together with the mobile interface avoids rework and makes the website, admin tools and app share one source of truth.']]
    ]
  },
  {
    slug: 'custom-crm-vs-off-the-shelf-crm',
    title: 'Custom CRM vs Off-the-Shelf CRM: How to Decide',
    description: 'When a ready-made CRM is enough and when a custom CRM built around your sales process makes more sense.',
    date: '2026-11-16',
    related: ['crm-erp-development', 'cloud-devops'],
    sections: [
      ['What a CRM must do for you', ['At its core, a CRM keeps track of leads, contacts, follow-ups and sales stages so that nothing is lost between conversations. If a ready-made tool does this and your team actually uses it, you may not need custom software.']],
      ['Signs an off-the-shelf CRM is enough', ['Your sales process is fairly standard, your team is small, and you can work within the tool\'s fields and pipeline. Subscription pricing is predictable and setup is quick.']],
      ['Signs you may need a custom CRM', ['Your process has steps that standard tools handle awkwardly, you need to serve several businesses from one platform, you must connect to your own systems through APIs, or you are working around the tool with spreadsheets.', 'A custom CRM can model your own records, roles and workflow, and integrate with the other software you use.']],
      ['Compare the whole cost', ['Compare licence fees over several years, the time spent on workarounds, integration limits and who owns the data. Custom development has an upfront cost, so start with the one workflow that matters most and expand in phases.']],
      ['Start small', ['Map your current process on paper, list the three problems that cost you the most time, and build or configure only what solves them first. This applies whether you buy or build.']]
    ]
  },
  {
    slug: 'technical-seo-checklist-for-business-websites',
    title: 'Technical SEO Checklist for Small Business Websites',
    description: 'A practical, free checklist covering titles, sitemaps, structured data, speed and Search Console for business websites.',
    date: '2026-11-16',
    related: ['seo-digital-marketing', 'website-development'],
    sections: [
      ['Make sure pages can be crawled', ['Search engines must be able to read your content. Check that important pages return normal responses, are linked from other pages and are not blocked in robots.txt. Content that only appears after heavy JavaScript can be missed, so make sure key text is present in the page HTML.']],
      ['Write unique titles and descriptions', ['Every page should have its own title that describes what the page is about and a short description that encourages the click. Include your service and location where it is true, for example a service plus the city you operate from. Avoid repeating the same title across pages.']],
      ['Use clear headings and internal links', ['Use one main heading per page, then sub-headings in logical order. Link related pages to each other with descriptive link text so visitors and search engines understand how your content connects.']],
      ['Add a sitemap and structured data', ['An XML sitemap lists the pages you want indexed. Structured data such as Organization, Service and FAQ markup helps search engines understand your business details. Only mark up information that is visible and accurate on the page.']],
      ['Keep the site fast and mobile friendly', ['Most visitors arrive on phones. Compress images, avoid unnecessary scripts, and test your pages in a free speed tool. Faster pages are easier to use and easier to crawl.']],
      ['Set up free measurement tools', ['Verify your site in Google Search Console, submit your sitemap and watch which queries and pages appear. Create a free Google Business Profile if you serve customers in a specific area, and keep your name, address and phone number consistent everywhere.']],
      ['Be patient and consistent', ['SEO is gradual. No one can guarantee rankings, but steady improvements, helpful content and accurate business information build visibility over time.']]
    ]
  }
];

const escapeHtml = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = new Date().toISOString().slice(0, 10);
const PHONE = '+91 7678410628';
const EMAIL = 'priyanshu.in@gmail.com';
const ogImage = `${base}/og-image.png`;

const css = `:root{color-scheme:dark;font-family:Inter,Arial,sans-serif;background:#080b16;color:#f7f9ff}*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 15% 10%,#092447 0,transparent 42%),#080b16;color:#f7f9ff;line-height:1.7}a{color:#24c5ff}.wrap{width:min(1080px,calc(100% - 40px));margin:auto}.top{padding:20px 0;border-bottom:1px solid #1d2a40}.top .wrap{display:flex;flex-wrap:wrap;gap:14px 28px;align-items:center;justify-content:space-between}.brand{font-weight:800;color:#fff;text-decoration:none;font-size:21px}.brand span{display:block;color:#19c8ff;font-size:10px;letter-spacing:2px;text-transform:uppercase;line-height:1}.nav a{color:#c9d4ea;text-decoration:none;margin-right:18px;font-size:15px}.nav a:hover{color:#24c5ff}.crumb{font-size:13px;color:#9eabc4;margin:28px 0 14px}.crumb a{color:#9eabc4}.hero{padding:28px 0 46px}.eyebrow{color:#22c5ff;font-size:13px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase}h1,h2,h3{font-family:'Space Grotesk',Inter,sans-serif;line-height:1.2}h1{font-size:clamp(32px,5.5vw,54px);max-width:900px;margin:12px 0 18px}h2{font-size:clamp(24px,3vw,34px);margin:0 0 16px}h3{font-size:21px;margin:0 0 10px}.lead{font-size:18px;color:#b7c3dc;max-width:850px}.cta{display:inline-block;margin:18px 10px 0 0;padding:12px 22px;border-radius:28px;background:linear-gradient(100deg,#00bdf2,#673bff);color:#fff;text-decoration:none;font-weight:700}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:26px 0 46px}.card,.faq{padding:24px;border:1px solid #20334e;border-radius:16px;background:#0d1728}.card p,.faq p{color:#b7c3dc;margin:0}.card a.title{color:#fff;text-decoration:none}.faq{margin:12px 0}.section{padding:24px 0 36px}.muted{color:#aab7d0}.article p{color:#c3cee4;max-width:800px;font-size:17px}.article h2{margin-top:34px}.related a{display:block;margin:6px 0}.foot{border-top:1px solid #20334e;padding:28px 0 44px;color:#aab7d0;font-size:14px}.foot a{margin-right:18px}@media(max-width:650px){.grid{grid-template-columns:1fr}.wrap{width:min(100% - 28px,1080px)}.lead{font-size:16px}}`;

const orgNode = {
  '@type': ['Organization', 'ProfessionalService'], '@id': `${base}/#organization`, name: 'Atech Infotech', url: `${base}/`,
  logo: `${base}/favicon.png`, image: ogImage, telephone: PHONE, email: EMAIL,
  address: { '@type': 'PostalAddress', streetAddress: '1782 Omaxe City-1', addressLocality: 'Indore', addressRegion: 'Madhya Pradesh', postalCode: '452010', addressCountry: 'IN' },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }]
};

const head = ({ title, description, url, type = 'website', jsonld }) => `<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#080b16">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Atech Infotech"><meta property="og:locale" content="en_IN">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Atech Infotech - websites, mobile apps and business software">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"></noscript>
<style>${css}</style>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonld })}</script>
<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});(function(w,d,s,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f)})(window,document,'script','GTM-N5RN9GGR');</script>
</head><body>
<header class="top"><div class="wrap"><a class="brand" href="/">Atech <span>Infotech</span></a><nav class="nav" aria-label="Main"><a href="/#services">Services</a><a href="/blog/">Blog</a><a href="/#portfolio">Portfolio</a><a href="/#contact">Contact</a></nav></div></header>`;

const footer = `<footer class="foot"><div class="wrap"><p><a href="/">Home</a>${services.map((s) => `<a href="/services/${s.slug}/">${escapeHtml(s.nav)}</a>`).join('')}<a href="/blog/">Blog</a></p><p>&copy; ${new Date().getFullYear()} Atech Infotech. Software development company in Indore, India. Phone ${PHONE}.</p></div></footer></body></html>`;

const waLink = (text) => `https://wa.me/917678410628?text=${encodeURIComponent(text)}`;
const write = (rel, content) => { const f = path.join(out, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); };
const crumbLd = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });

// ---- Service pages
for (const s of services) {
  const url = `${base}/services/${s.slug}/`;
  const others = services.filter((x) => x.slug !== s.slug);
  const relArticles = articles.filter((a) => a.related.includes(s.slug));
  const html = head({
    title: `${s.title} | Atech Infotech`, description: s.description, url,
    jsonld: [orgNode,
      { '@type': 'Service', '@id': `${url}#service`, name: s.nav, serviceType: s.nav, description: s.description, url, provider: { '@id': `${base}/#organization` }, areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }] },
      crumbLd([['Home', `${base}/`], ['Services', `${base}/#services`], [s.nav, url]]),
      { '@type': 'FAQPage', mainEntity: s.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / ${escapeHtml(s.nav)}</nav>
<section class="hero"><div class="eyebrow">Atech Infotech &middot; Indore, India</div><h1>${escapeHtml(s.title)}</h1><p class="lead">${escapeHtml(s.intro)}</p><a class="cta" href="/#contact">Discuss your project</a><a class="cta" href="${waLink(`Hi Atech Infotech, I would like to discuss ${s.nav}.`)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></section>
<section class="section"><h2>How we can help</h2><div class="grid">${s.sections.map(([t, b]) => `<article class="card"><h3>${escapeHtml(t)}</h3><p>${escapeHtml(b)}</p></article>`).join('')}</div></section>
<section class="section"><h2>Frequently asked questions</h2>${s.faqs.map(([q, a]) => `<article class="faq"><h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p></article>`).join('')}</section>
${relArticles.length ? `<section class="section related"><h2>Helpful guides</h2>${relArticles.map((a) => `<a href="/blog/${a.slug}/">${escapeHtml(a.title)}</a>`).join('')}</section>` : ''}
<section class="section related"><h2>Other services</h2>${others.map((o) => `<a href="/services/${o.slug}/">${escapeHtml(o.nav)}</a>`).join('')}</section>
<section class="section"><h2>Talk to Atech Infotech</h2><p class="muted">Share your goals, required features and preferred timeline. We can discuss a practical scope for your project.</p><a class="cta" href="mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${s.nav}`)}">Email us</a><a class="cta" href="tel:+917678410628">Call ${PHONE}</a></section>
</main>` + footer;
  write(`services/${s.slug}/index.html`, html);
}

// ---- Blog
const blogIndexUrl = `${base}/blog/`;
write('blog/index.html', head({
  title: 'Blog: Web, App and Business Software Guides | Atech Infotech',
  description: 'Practical guides on websites, mobile apps, CRM software and technical SEO from Atech Infotech, a software company in Indore, India.',
  url: blogIndexUrl,
  jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['Blog', blogIndexUrl]]), { '@type': 'Blog', '@id': `${blogIndexUrl}#blog`, name: 'Atech Infotech Blog', url: blogIndexUrl, publisher: { '@id': `${base}/#organization` } }]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Blog</nav>
<section class="hero"><div class="eyebrow">Atech Infotech Blog</div><h1>Guides for websites, apps and business software</h1><p class="lead">Plain-language advice for startups and growing businesses planning a website, mobile app, CRM or search visibility.</p></section>
<section class="section"><div class="grid">${articles.map((a) => `<article class="card"><h3><a class="title" href="/blog/${a.slug}/">${escapeHtml(a.title)}</a></h3><p>${escapeHtml(a.description)}</p><p><a href="/blog/${a.slug}/">Read the guide</a></p></article>`).join('')}</div></section>
</main>` + footer);

for (const a of articles) {
  const url = `${base}/blog/${a.slug}/`;
  write(`blog/${a.slug}/index.html`, head({
    title: `${a.title} | Atech Infotech`, description: a.description, url, type: 'article',
    jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['Blog', blogIndexUrl], [a.title, url]]),
      { '@type': 'Article', '@id': `${url}#article`, headline: a.title, description: a.description, image: ogImage, datePublished: a.date, dateModified: a.date, mainEntityOfPage: url, author: { '@id': `${base}/#organization` }, publisher: { '@id': `${base}/#organization` } }]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog/">Blog</a> / ${escapeHtml(a.title)}</nav>
<article class="article hero"><div class="eyebrow">Guide &middot; ${a.date}</div><h1>${escapeHtml(a.title)}</h1><p class="lead">${escapeHtml(a.description)}</p>
${a.sections.map(([h, ps]) => `<h2>${escapeHtml(h)}</h2>${ps.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}`).join('')}
<h2>Need help with this?</h2><p>Atech Infotech is a software development company in Indore, India. Tell us what you are planning and we will suggest a practical scope.</p><a class="cta" href="/#contact">Get a free consultation</a><a class="cta" href="${waLink(`Hi Atech Infotech, I read your guide "${a.title}" and would like to talk.`)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></article>
<section class="section related"><h2>Related services</h2>${a.related.map((slug) => { const s = services.find((x) => x.slug === slug); return `<a href="/services/${slug}/">${escapeHtml(s.nav)}</a>`; }).join('')}</section>
</main>` + footer);
}

// ---- 404 page (served by hosts that support custom error pages)
write('404.html', head({ title: 'Page not found | Atech Infotech', description: 'The page you were looking for could not be found.', url: `${base}/404.html`, jsonld: [orgNode] }).replace('content="index,follow,max-image-preview:large"', 'content="noindex,follow"') + `
<main class="wrap"><section class="hero"><div class="eyebrow">Error 404</div><h1>Page not found</h1><p class="lead">That page does not exist or has moved. Try one of our services or return to the homepage.</p><a class="cta" href="/">Go to homepage</a><a class="cta" href="/blog/">Read the blog</a></section></main>` + footer);

// ---- Sitemap and robots
const entries = [
  [`${base}/`, '1.0', 'monthly'],
  ...services.map((s) => [`${base}/services/${s.slug}/`, '0.8', 'monthly']),
  [blogIndexUrl, '0.7', 'weekly'],
  ...articles.map((a) => [`${base}/blog/${a.slug}/`, '0.6', 'monthly'])
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(([u, p, c]) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod><changefreq>${c}</changefreq><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`Generated ${services.length} service pages, ${articles.length} articles, blog index, 404.html, sitemap.xml and robots.txt.`);
