import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const base = 'https://www.atechinfotech.com';
const today = new Date().toISOString().slice(0, 10);
const PHONE = '+91 7678410628';
const EMAIL = 'priyanshu.in@gmail.com';
const ogImage = `${base}/og-image.png`;

// Services with updated international priority ordering
const services = [
  {
    slug: 'crm-erp-development',
    nav: 'CRM & ERP Development',
    title: 'Custom CRM and ERP Software Development',
    description: 'Custom CRMs, client portals and business workflow automation shaped around your exact operations, with zero per-user seat fees.',
    intro: 'Atech Infotech designs and develops custom CRM, ERP, and operational platforms that map directly to your business workflows. Gain complete database control, 100% source code ownership, and flexible REST API integrations.',
    sections: [
      ['Custom CRM workflows', 'Organize leads, accounts, pipeline stages, client records and follow-ups. We define user roles, approval steps and data models with your team before building interfaces.'],
      ['ERP & operational workflows', 'Support invoicing, inventory, resource scheduling, order workflows, and vendor coordination without cumbersome spreadsheets.'],
      ['Role-based portals & dashboards', 'Deliver dedicated customer portals, agent dashboards, and managerial reporting with actionable filters and granular permissions.'],
      ['Automation & API integrations', 'Connect accounting software, payment gateways, WhatsApp messaging, and legacy tools to eliminate manual repetitive data entry.']
    ],
    faqs: [
      ['Can a CRM be customized for multi-currency or regional requirements?', 'Yes. We design role-based permissions, custom pipelines, regional tax structures, and currency conversions specific to UK, Canadian, UAE, and global operations.'],
      ['Do we own the source code and database?', 'Yes. You receive 100% intellectual property ownership of the codebase and complete control over your database with zero recurring per-user licensing fees.'],
      ['Can you connect the CRM to our accounting or marketing systems?', 'Yes. We build secure REST APIs or webhooks to integrate with platforms like Stripe, Xero, QuickBooks, HubSpot, or custom proprietary tools.']
    ]
  },
  {
    slug: 'mobile-app-development',
    nav: 'Mobile App Development',
    title: 'Mobile App Development for Android and iOS',
    description: 'High-performance cross-platform mobile apps using Flutter and React Native with robust, secure backend API integrations.',
    intro: 'Atech Infotech helps businesses plan and build responsive mobile applications for iOS and Android. By combining Flutter with performant backend APIs, we deliver native-grade user experiences across both app stores from a single unified codebase.',
    sections: [
      ['Cross-platform engineering', 'Deliver consistent, high-performance apps on both iOS and Android. Flutter enables pixel-perfect design control while keeping maintenance costs predictable.'],
      ['Backend architecture & APIs', 'Mobile apps depend on reliable data. We architect authentication, push notifications, cloud databases, and administrative backends concurrently.'],
      ['Payment & device capabilities', 'Incorporate device features such as camera scanning, geolocation, Apple Pay, Google Pay, biometric sign-in, and offline data sync.'],
      ['Store compliance & releases', 'We assist with Apple App Store and Google Play compliance guidelines, certificates, test tracks, and production rollouts.']
    ],
    faqs: [
      ['Can one codebase serve both iPhone and Android users?', 'Yes. Flutter allows single-codebase development for iOS and Android while retaining 60fps performance and native device integration.'],
      ['Can our mobile app integrate with our existing website or database?', 'Yes. We engineer REST or GraphQL APIs to ensure real-time synchronization between your website, admin portal, and mobile app.'],
      ['Do you handle App Store and Google Play submissions?', 'Yes. We prepare assets, configure certificates, test on physical devices, and guide the submission process through approval.']
    ]
  },
  {
    slug: 'ecommerce-development',
    nav: 'Ecommerce Development',
    title: 'Ecommerce Website Development & Online Stores',
    description: 'Bespoke online stores, B2B wholesale portals, and custom checkout flows integrated with global payment gateways and ERP systems.',
    intro: 'Atech Infotech builds fast, conversion-optimized ecommerce experiences that turn international visitors into buyers. From direct-to-consumer digital storefronts to multi-tier B2B wholesale portals, we engineer stores that load fast and handle volume.',
    sections: [
      ['Conversion-focused storefronts', 'Streamlined product catalogues, faceted search, mobile-first product cards, and frictionless multi-currency checkouts.'],
      ['B2B & wholesale portals', 'Support trade pricing, account approvals, bulk order matrices, credit limits, and invoice-on-delivery workflows.'],
      ['Payment gateway integrations', 'Seamless integrations with Stripe, Apple Pay, Google Pay, Telr, PayTabs, PayPal, and regional gateways.'],
      ['Logistics & operational sync', 'Connect inventory, automated shipping calculations, carrier tracking APIs, and webhook alerts to your warehouse.']
    ],
    faqs: [
      ['Can you build multi-currency stores for UK, Canada, and UAE shoppers?', 'Yes. We implement geolocation-aware currency switching (GBP, CAD, AED, USD) with localized payment gateway checkout options.'],
      ['Do you support custom B2B wholesale pricing rules?', 'Yes. We can architect customer group pricing, minimum order thresholds, and invoice request workflows alongside public retail catalogues.'],
      ['How do you ensure checkout performance and security?', 'We adhere to PCI-DSS compliance best practices, utilizing tokenized checkout sessions so credit card numbers never hit your web server.']
    ]
  },
  {
    slug: 'website-development',
    nav: 'Website Development',
    title: 'Website Development Company & Web Applications',
    description: 'Modern, high-performance web applications and corporate websites built with React, Node.js, and clean semantic architecture.',
    intro: 'Atech Infotech designs and develops business websites and web applications for startups and growing businesses. From a clear company website to a custom web portal, we focus on useful user journeys, responsive layouts, maintainable code and a foundation that search engines can understand.',
    sections: [
      ['Modern web applications', 'Interactive customer dashboards, client onboarding portals, and data tools built with clean component architectures.'],
      ['Corporate & service sites', 'Fast-loading marketing websites engineered with clean semantic HTML, accessible navigation, and compelling international positioning.'],
      ['API & CMS integrations', 'Headless CMS connections, form handling pipelines, analytics layers, and third-party SaaS integrations.'],
      ['Core Web Vitals & speed', 'Engineered with lightweight assets, pre-rendered markup, responsive images, and zero layout shift for 90+ Lighthouse metrics.']
    ],
    faqs: [
      ['Will our website load quickly for overseas visitors in the UK, UAE, or Canada?', 'Yes. We pre-render static HTML, optimize bundles, and configure global CDN caching so pages load in milliseconds globally.'],
      ['Can we edit content after launch?', 'Yes. We can connect a headless CMS or structured configuration files so your team can update copy, case studies, and pricing easily.'],
      ['Is technical SEO included in the build?', 'Yes. Semantic heading structures, Open Graph tags, canonical URLs, XML sitemaps, and Schema.org JSON-LD are built in by default.']
    ]
  },
  {
    slug: 'cloud-devops',
    nav: 'Cloud & DevOps',
    title: 'Cloud Deployment and DevOps Services',
    description: 'Practical deployment, hosting configuration, CI/CD and application operations support for web products.',
    intro: 'Atech Infotech helps teams prepare and deploy web applications with a focus on repeatable releases, environment configuration and operational clarity. The right setup depends on the application, traffic expectations, hosting provider, budget and support requirements.',
    sections: [
      ['CI/CD automation', 'Automated GitHub Actions pipelines that run tests, lint checks, and deploy to staging and production automatically.'],
      ['Containerized environments', 'Docker configurations that guarantee consistency across local development, testing, and production servers.'],
      ['SSL & security configuration', 'Rigorous security headers (HSTS, CSP, X-Frame-Options), CORS restrictions, and environment variable isolation.'],
      ['Cost-optimized hosting', 'Architecture tailored to your scale—avoiding over-engineered cloud bills while ensuring 99.9% uptime.']
    ],
    faqs: [
      ['Which hosting providers do you work with?', 'We configure and deploy to AWS, DigitalOcean, Hetzner, Vercel, Netlify, Cloudflare, and conventional Linux VPS servers.'],
      ['How do you protect environment secrets and keys?', 'Secrets are kept out of source code repositories and managed through encrypted environment variables in your hosting dashboard.']
    ]
  },
  {
    slug: 'seo-digital-marketing',
    nav: 'SEO & Digital Marketing',
    title: 'SEO and Digital Marketing Services for Businesses',
    description: 'Practical SEO foundations, on-page improvements, content planning and organic visibility support for business websites.',
    intro: 'Atech Infotech helps businesses improve the technical and on-page foundations of their websites and plan useful organic content. SEO is an ongoing process: results depend on competition, website quality, relevance, consistency and search engine systems. We do not promise specific rankings or instant traffic.',
    sections: [
      ['Technical website SEO', 'Optimized indexation directives, XML sitemaps, robots.txt rules, canonical tags, and error handling for search bots.'],
      ['Structured schema data', 'Rich JSON-LD markup for Organization, Service, BreadcrumbList, FAQPage, and Article nodes.'],
      ['International SEO structure', 'Geographic metadata, localized hreflang tags, and crawlable static page paths for international search.'],
      ['Search Console & analytics', 'Google Search Console verification, GTM custom lead tracking, and conversion-funnel measurement setup.']
    ],
    faqs: [
      ['Do you guarantee first-page Google rankings?', 'No responsible SEO provider can guarantee a specific ranking. SEO work improves relevance and technical accessibility, while rankings depend on many external factors.'],
      ['Can you help fix an existing website that is not indexing?', 'Yes. We perform crawl diagnostics, inspect Search Console errors, fix robots/canonical issues, and resolve indexing blockers.']
    ]
  }
];

// Blog Articles with categories, reading time, and related posts
const articles = [
  {
    slug: 'website-vs-web-app-for-startups',
    title: 'Website or Web App? What a Startup Should Build First',
    description: 'A plain-language guide to choosing between a business website and a custom web application when you are launching a startup.',
    date: '2026-11-16',
    category: 'Architecture',
    readingTime: '5 min read',
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
    category: 'Mobile Apps',
    readingTime: '6 min read',
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
    category: 'Business Software',
    readingTime: '5 min read',
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
    category: 'SEO',
    readingTime: '6 min read',
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

// Verified Case Studies (Drafts excluded from public generation & sitemap)
const caseStudies = [
  {
    slug: 'futura-kitchen-sinks',
    title: 'Futura Kitchen Sinks: Digital Product Catalogue & Lead Generation Platform',
    shortTitle: 'Futura Kitchen Sinks',
    clientType: 'Manufacturing & Hardware Brand',
    industry: 'Consumer Goods & Hardware',
    country: 'India',
    liveUrl: 'https://futurasink.com/',
    summary: 'Responsive product catalogue platform for a leading kitchen sink manufacturer with direct WhatsApp enquiry workflows and downloadable product brochures.',
    problem: 'The client needed a modern, lightweight digital catalogue to present hundreds of sink models, technical specifications, and finishes to homeowners, architects, and retail distributors without complex ecommerce overhead.',
    solution: 'Engineered a modern, responsive web catalogue using React.js and a modular component architecture. Focused on high-speed page loads, clear dimensional diagrams, category filters, and frictionless lead capture through integrated WhatsApp enquiry buttons.',
    features: [
      'Comprehensive product catalogue with multi-dimensional filtering',
      'One-click direct WhatsApp enquiry routed with specific product SKU',
      'Downloadable digital specification brochures and warranty guides',
      'Mobile-optimized responsive layouts for contractors on job sites',
      'Fast image loading and SEO foundations for search visibility'
    ],
    techStack: ['React.js', 'Node.js', 'Vite', 'CSS3 Modern Layouts', 'WhatsApp Web API'],
    results: [
      'Delivered a fully responsive digital catalogue accessible on all modern devices',
      'Streamlined customer enquiries directly to the sales desk via instant WhatsApp routing',
      '[TODO: result/metric: % increase in distributor catalogue enquiries or pageviews since launch]'
    ]
  },
  {
    slug: 'unicou-exam-vouchers',
    title: 'UniCou: Education Exam Voucher Distribution & Agent Portal',
    shortTitle: 'UniCou Exam Vouchers',
    clientType: 'EdTech & Certification Services',
    industry: 'Education & Examination Vouchers',
    country: 'United Kingdom / Global',
    liveUrl: 'https://unicouuk.janshaurya.org/',
    summary: 'Secure exam voucher distribution platform designed for international students, education consultancies, and academic partner agents.',
    problem: 'Managing bulk discounted exam vouchers for international test takers and certified agency partners required manual verification, resulting in slow turnaround and payment friction.',
    solution: 'Designed and implemented a role-based portal that allows individual candidates and registered partner agencies to view available exam vouchers, purchase in bulk, and receive validated voucher codes through automated workflows.',
    features: [
      'Dedicated partner agent accounts with volume order access',
      'Automated voucher inventory tracking and allocation',
      'Streamlined student checkout and voucher dispatch',
      'Secure transaction records and audit reporting',
      'Responsive interface optimized for international users'
    ],
    techStack: ['React.js', 'Node.js', 'REST API Backend', 'Secure Session Management'],
    results: [
      'Reduced manual verification overhead for international voucher orders',
      'Enabled registered education agents to order multiple exam vouchers in one checkout session',
      '[TODO: result/metric: volume of student vouchers issued or time saved per agent order]'
    ]
  }
];

// Markets configuration
const markets = [
  {
    slug: 'uk',
    path: '/uk/',
    countryName: 'United Kingdom',
    currency: 'GBP',
    locale: 'en_GB',
    htmlLang: 'en-GB',
    title: 'Software & App Development for UK Businesses | Atech Infotech',
    description: 'Custom software, web apps, mobile apps and CRM systems for growing UK businesses. Senior engineers, UK time-zone overlap, fixed-scope milestones and GBP invoicing.',
    heroSubtitle: 'We build custom web apps, mobile applications, and bespoke CRM platforms for UK enterprises and scaling startups. Fixed-scope milestones, afternoon UK time overlap, and full code ownership.',
    badge: 'Overlap: 2:00 PM – 6:00 PM UK Time (GMT/BST)',
    solutions: [
      ['GDPR-Aware Architecture', 'We build with UK and EU GDPR principles in mind: encrypted data storage, clear cookie consent setups, role-based access control, and straightforward data export and deletion mechanisms.'],
      ['UK Payment & Banking Integrations', 'Seamless integrations with Stripe UK, GoCardless for Direct Debit collections, and Open Banking APIs for instant bank transfers and payment reconciliation.'],
      ['Accessibility (WCAG-Minded Builds)', 'We engineer frontends with WCAG 2.1 AA accessibility guidelines in mind: semantic landmarks, full keyboard navigability, high color contrast, and screen-reader compatibility.'],
      ['Dedicated Afternoon UK Time Overlap', 'Our working hours provide 4 solid hours of daily overlap with the UK working day (2:00 PM to 6:00 PM UK time) for sprint standups, review calls, and Slack collaboration.'],
      ['Transparent GBP Pricing & Invoicing', 'Fixed-milestone scopes in GBP with milestone-based delivery, ensuring zero hidden exchange surprises or fluctuating contractor rates.'],
      ['Full IP & Source Code Ownership', 'All custom software is built under comprehensive non-disclosure agreements with complete assignment of intellectual property rights and full Git repository handover.']
    ],
    faqs: [
      ['How do you handle time-zone collaboration with UK clients?', 'Our standard working day provides full coverage between 2:00 PM and 6:00 PM UK time (both GMT and BST). We conduct weekly video demos, maintain transparent communication via Slack or Microsoft Teams, and share real-time Jira/Trello boards.'],
      ['How do you approach UK data privacy and GDPR?', 'We build with UK GDPR requirements in mind from the ground up: database encryption at rest, HTTPS/TLS in transit, cookie banner compliance options, and structured user consent logs.'],
      ['Can we pay in British Pounds (GBP)?', 'Yes. We quote and invoice in GBP with milestone-based payments tied to verified deliverables. You only approve payments when milestone criteria are satisfied.'],
      ['Who owns the intellectual property and code?', 'You own 100% of the code, designs, and intellectual property. We provide full repository access from day one, and complete IP assignment upon project completion.']
    ]
  },
  {
    slug: 'canada',
    path: '/canada/',
    countryName: 'Canada',
    currency: 'CAD',
    locale: 'en_CA',
    htmlLang: 'en-CA',
    title: 'Web & Mobile App Development for Canadian Businesses | Atech',
    description: 'Custom software, web portals, mobile apps and cloud systems for Canadian businesses. Senior engineering, PIPEDA-aware builds, bilingual options and CAD pricing.',
    heroSubtitle: 'We design and engineer bespoke web applications, cross-platform mobile apps, and business software for Canadian startups and established enterprises. Transparent milestone delivery and full IP ownership.',
    badge: 'Overlap Windows for Eastern & Pacific Canada',
    solutions: [
      ['PIPEDA-Aware Data Practices', 'We build with Canadian federal and provincial privacy legislation (PIPEDA) in mind: strict data segregation, audit logging, and clear user privacy controls.'],
      ['Bilingual English/French Capabilities', 'Internationalization (i18n) engineered into the core architecture, allowing your digital product to support seamless English and French language switching across Canada.'],
      ['Stripe & Interac-Friendly Payments', 'Support for popular Canadian payment gateways and workflows, including Stripe Canada, Apple Pay, Google Pay, and Interac-friendly checkout integrations.'],
      ['Predictable CAD Milestone Pricing', 'Get transparent proposals and milestone billing in Canadian Dollars (CAD). Fixed milestones protect your budget from scope creep and currency volatility.'],
      ['Scheduled Overlap & Dedicated Demos', 'Dedicated morning overlap with Eastern Time (EST/EDT) for daily synchronization, live demos, and sprint planning sessions.'],
      ['Strict Confidentiality & Mutual NDAs', 'We execute mutual NDAs before reviewing sensitive business requirements, ensuring your proprietary product ideas remain strictly confidential.']
    ],
    faqs: [
      ['How do you coordinate with Canadian clients across time zones?', 'We structure dedicated overlap windows during your morning hours (EST/EDT). Regular sprint updates, async loom walkthroughs, and shared task boards keep progress continuous and transparent.'],
      ['Can our website or app be built in both English and French?', 'Yes. We architect localization (i18n) from the beginning, supporting dynamic content switching, locale-specific URLs, and bilingual SEO metadata.'],
      ['How are payments structured for Canadian projects?', 'We work on milestone-based billing in CAD. Each milestone is defined by tangible deliverables (e.g. wireframes, core API build, frontend completion), and funds are released upon your review.'],
      ['Do you work under an NDA?', 'Yes, we gladly execute a mutual Non-Disclosure Agreement prior to receiving any project specifications, wireframes, or data models.']
    ]
  },
  {
    slug: 'dubai-uae',
    path: '/dubai-uae/',
    countryName: 'United Arab Emirates',
    currency: 'AED',
    locale: 'en_AE',
    htmlLang: 'en-AE',
    title: 'Web & Mobile App Development for UAE Businesses | Atech',
    description: 'Software, mobile apps, custom CRM and ecommerce development for businesses in Dubai & the UAE. Arabic/RTL support, UAE payment gateways and close time-zone alignment.',
    heroSubtitle: 'We engineer high-performance web applications, mobile apps, and custom business platforms for Dubai and UAE companies. Full working day time-zone alignment, Arabic/RTL support, and AED pricing.',
    badge: 'Full Working Day Alignment (GST, UTC+4)',
    solutions: [
      ['Arabic & Right-to-Left (RTL) Layouts', 'Complete bidirectional support engineered from the ground up: native Arabic typography, mirrored UI elements, and seamless English/Arabic toggling.'],
      ['UAE VAT-Ready Billing & Invoicing', 'Custom invoice generators, accounting workflows, and ERP modules built with Federal Tax Authority (FTA) 5% VAT calculation and reporting standards in mind.'],
      ['UAE Payment Gateways Integration', 'Direct integrations with leading UAE payment processors including Telr, PayTabs, Network International, Stripe UAE, Apple Pay, and Tamara / Tabby BNPL.'],
      ['WhatsApp Business API Workflows', 'Automated customer enquiry capture, instant order updates, quote dispatches, and CRM lead routing directly via WhatsApp.'],
      ['Seamless GST Time-Zone Alignment', 'India Standard Time is only 1.5 hours ahead of UAE Gulf Standard Time (GST), giving our engineering teams complete real-time working day overlap.'],
      ['Enterprise CRM & Real Estate Solutions', 'Lead distribution engines, property listing aggregators, agent commission modules, and multi-currency deal pipelines tailored for Dubai enterprises.']
    ],
    faqs: [
      ['What is the time difference between India and Dubai?', 'India is only 1 hour and 30 minutes ahead of Dubai (GST). This allows virtually 100% working day alignment for live calls, instant messaging, and rapid iteration.'],
      ['Can you integrate local UAE payment processors like Telr or PayTabs?', 'Yes. We have experience integrating UAE gateways including Telr, PayTabs, Network International, as well as Stripe UAE, Apple Pay, and Tabby.'],
      ['Do you support bilingual English and Arabic interfaces?', 'Yes. We build responsive RTL layouts with proper Arabic typography, mirrored icons, and localized number formats.'],
      ['Can we pay in UAE Dirhams (AED)?', 'Yes, quotes and milestone invoices can be settled in AED or USD through straightforward bank wire or payment card transfers.']
    ]
  }
];

const escapeHtml = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const css = `:root{color-scheme:dark;font-family:Inter,Arial,sans-serif;background:#080b16;color:#f7f9ff}*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 15% 10%,#092447 0,transparent 42%),#080b16;color:#f7f9ff;line-height:1.7}a{color:#24c5ff}.wrap{width:min(1080px,calc(100% - 40px));margin:auto}.top{padding:20px 0;border-bottom:1px solid #1d2a40}.top .wrap{display:flex;flex-wrap:wrap;gap:14px 28px;align-items:center;justify-content:space-between}.brand{font-weight:800;color:#fff;text-decoration:none;font-size:21px;display:flex;align-items:center;gap:10px}.brand-box{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#00c6ff,#7b2ff7);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800}.brand span{display:block;color:#19c8ff;font-size:10px;letter-spacing:2px;text-transform:uppercase;line-height:1}.nav a{color:#c9d4ea;text-decoration:none;margin-right:18px;font-size:15px}.nav a:hover{color:#24c5ff}.crumb{font-size:13px;color:#9eabc4;margin:28px 0 14px}.crumb a{color:#9eabc4}.hero{padding:28px 0 46px}.eyebrow{color:#22c5ff;font-size:13px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase}h1,h2,h3{font-family:'Space Grotesk',Inter,sans-serif;line-height:1.2}h1{font-size:clamp(32px,5.5vw,54px);max-width:900px;margin:12px 0 18px}h2{font-size:clamp(24px,3vw,34px);margin:0 0 16px}h3{font-size:21px;margin:0 0 10px}.lead{font-size:18px;color:#b7c3dc;max-width:850px}.cta{display:inline-block;margin:18px 10px 0 0;padding:12px 22px;border-radius:28px;background:linear-gradient(100deg,#00bdf2,#673bff);color:#fff;text-decoration:none;font-weight:700}.cta-ghost{display:inline-block;margin:18px 10px 0 0;padding:12px 22px;border-radius:28px;border:1px solid #20334e;background:#0d1728;color:#00c6ff;text-decoration:none;font-weight:700}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:26px 0 46px}.grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin:26px 0 46px}.card,.faq{padding:24px;border:1px solid #20334e;border-radius:16px;background:#0d1728}.card p,.faq p{color:#b7c3dc;margin:0}.card a.title{color:#fff;text-decoration:none}.faq{margin:12px 0}.badge{display:inline-block;font-size:12px;font-weight:700;padding:4px 10px;border-radius:12px;background:#13243d;color:#00c6ff;margin-bottom:8px}.meta-bar{font-size:13px;color:#8ba0c2;margin:10px 0 16px}.section{padding:24px 0 36px}.muted{color:#aab7d0}.article p{color:#c3cee4;max-width:800px;font-size:17px}.article h2{margin-top:34px}.related a{display:block;margin:6px 0}.foot{border-top:1px solid #20334e;padding:28px 0 44px;color:#aab7d0;font-size:14px}.foot a{margin-right:18px;color:#aab7d0}.foot a:hover{color:#fff}@media(max-width:768px){.grid,.grid-3{grid-template-columns:1fr}.wrap{width:min(100% - 28px,1080px)}.lead{font-size:16px}}`;

const orgNode = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${base}/#organization`,
  name: 'Atech Infotech',
  url: `${base}/`,
  logo: `${base}/favicon.png`,
  image: ogImage,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1782 Omaxe City-1',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452010',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      email: EMAIL,
      availableLanguage: ['English', 'Hindi'],
      areaServed: ['GB', 'CA', 'AE', 'IN']
    }
  ],
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Place', name: 'Worldwide' }
  ]
};

const head = ({ title, description, url, type = 'website', locale = 'en_GB', jsonld = [] }) => `<!doctype html>
<html lang="${locale === 'en_CA' ? 'en-CA' : locale === 'en_AE' ? 'en-AE' : 'en-GB'}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en-GB" href="${base}/uk/">
<link rel="alternate" hreflang="en-CA" href="${base}/canada/">
<link rel="alternate" hreflang="en-AE" href="${base}/dubai-uae/">
<link rel="alternate" hreflang="x-default" href="${base}/">
<meta name="theme-color" content="#080b16">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Atech Infotech"><meta property="og:locale" content="${locale}">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Atech Infotech - Software development for UK, Canada and UAE">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap"></noscript>
<style>${css}</style>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonld })}</script>
<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});(function(w,d,s,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f)})(window,document,'script','GTM-N5RN9GGR');</script>
</head><body>
<header class="top"><div class="wrap">
<a class="brand" href="/"><div class="brand-box">A</div><div>Atech <span>Infotech</span></div></a>
<nav class="nav" aria-label="Main">
<a href="/uk/">UK</a><a href="/canada/">Canada</a><a href="/dubai-uae/">UAE</a>
<a href="/#services">Services</a><a href="/work/">Work</a><a href="/pricing/">Pricing</a><a href="/about/">About</a><a href="/blog/">Blog</a><a href="/contact/">Contact</a>
</nav></div></header>`;

const footer = `<footer class="foot"><div class="wrap">
<p>
<a href="/">Home</a>
<a href="/uk/">UK</a><a href="/canada/">Canada</a><a href="/dubai-uae/">UAE</a>
<a href="/work/">Case Studies</a>
<a href="/pricing/">Pricing</a>
<a href="/about/">About</a>
<a href="/blog/">Blog</a>
<a href="/contact/">Contact</a>
<a href="/privacy-policy/">Privacy Policy</a>
<a href="/terms/">Terms</a>
</p>
<p>&copy; ${new Date().getFullYear()} Atech Infotech. Software development company serving the UK, Canada and UAE. Phone ${PHONE}.</p>
</div></footer></body></html>`;

const waLink = (text) => `https://wa.me/917678410628?text=${encodeURIComponent(text)}`;
const write = (rel, content) => {
  const f = path.join(out, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
};
const crumbLd = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item }))
});

// 1. ---- SERVICE PAGES (All 6, reordered)
for (const s of services) {
  const url = `${base}/services/${s.slug}/`;
  const others = services.filter((x) => x.slug !== s.slug);
  const relArticles = articles.filter((a) => a.related.includes(s.slug));
  const html = head({
    title: `${s.title} | Atech Infotech`,
    description: s.description,
    url,
    jsonld: [
      orgNode,
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.nav,
        serviceType: s.nav,
        description: s.description,
        url,
        provider: { '@id': `${base}/#organization` },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Place', name: 'Worldwide' }
        ]
      },
      crumbLd([['Home', `${base}/`], ['Services', `${base}/#services`], [s.nav, url]]),
      {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    ]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / ${escapeHtml(s.nav)}</nav>
<section class="hero"><div class="eyebrow">Atech Infotech &middot; UK &middot; Canada &middot; UAE</div><h1>${escapeHtml(s.title)}</h1><p class="lead">${escapeHtml(s.intro)}</p><a class="cta" href="/#contact">Discuss your project</a><a class="cta-ghost" href="${waLink(`Hi Atech Infotech, I would like to discuss ${s.nav}.`)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></section>
<section class="section"><h2>How we can help</h2><div class="grid">${s.sections.map(([t, b]) => `<article class="card"><h3>${escapeHtml(t)}</h3><p>${escapeHtml(b)}</p></article>`).join('')}</div></section>
<section class="section"><h2>Frequently asked questions</h2>${s.faqs.map(([q, a]) => `<article class="faq"><h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p></article>`).join('')}</section>
${relArticles.length ? `<section class="section related"><h2>Helpful guides</h2>${relArticles.map((a) => `<a href="/blog/${a.slug}/">${escapeHtml(a.title)} (${a.readingTime})</a>`).join('')}</section>` : ''}
<section class="section related"><h2>Other services</h2>${others.map((o) => `<a href="/services/${o.slug}/">${escapeHtml(o.nav)}</a>`).join('')}</section>
<section class="section"><h2>Talk to our senior engineers</h2><p class="muted">Share your goals, required features and preferred timeline. We provide an itemized milestone scope within 24 hours.</p><a class="cta" href="mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${s.nav}`)}">Email us</a><a class="cta-ghost" href="tel:+917678410628">Call ${PHONE}</a></section>
</main>` + footer;
  write(`services/${s.slug}/index.html`, html);
}

// 2. ---- BLOG INDEX & ARTICLES (Enhanced with categories and reading time)
const blogIndexUrl = `${base}/blog/`;
write('blog/index.html', head({
  title: 'Blog: Web, App & Software Guides | Atech Infotech',
  description: 'Practical guides on websites, mobile apps, CRM architecture and technical SEO from Atech Infotech, a software engineering firm serving UK, Canada & UAE.',
  url: blogIndexUrl,
  jsonld: [
    orgNode,
    crumbLd([['Home', `${base}/`], ['Blog', blogIndexUrl]]),
    { '@type': 'Blog', '@id': `${blogIndexUrl}#blog`, name: 'Atech Infotech Blog', url: blogIndexUrl, publisher: { '@id': `${base}/#organization` } }
  ]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Blog</nav>
<section class="hero"><div class="eyebrow">Atech Infotech Engineering Guides</div><h1>Guides for websites, apps &amp; business software</h1><p class="lead">Plain-language advice for founders, CTOs and operations managers planning custom software, mobile apps, or international expansion.</p></section>
<section class="section"><div class="grid">${articles.map((a) => `
<article class="card">
<span class="badge">${escapeHtml(a.category)}</span>
<div class="meta-bar">${a.date} &middot; ${a.readingTime}</div>
<h3><a class="title" href="/blog/${a.slug}/">${escapeHtml(a.title)}</a></h3>
<p>${escapeHtml(a.description)}</p>
<p style="margin-top:14px"><a href="/blog/${a.slug}/">Read the full guide &rarr;</a></p>
</article>`).join('')}</div></section>
</main>` + footer);

for (const a of articles) {
  const url = `${base}/blog/${a.slug}/`;
  const otherPosts = articles.filter(x => x.slug !== a.slug);
  write(`blog/${a.slug}/index.html`, head({
    title: `${a.title} | Atech Infotech`,
    description: a.description,
    url,
    type: 'article',
    jsonld: [
      orgNode,
      crumbLd([['Home', `${base}/`], ['Blog', blogIndexUrl], [a.title, url]]),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.description,
        image: ogImage,
        datePublished: a.date,
        dateModified: a.date,
        mainEntityOfPage: url,
        author: { '@id': `${base}/#organization` },
        publisher: { '@id': `${base}/#organization` }
      }
    ]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog/">Blog</a> / ${escapeHtml(a.title)}</nav>
<article class="article hero">
<span class="badge">${escapeHtml(a.category)}</span>
<div class="meta-bar">Published ${a.date} &middot; ${a.readingTime}</div>
<h1>${escapeHtml(a.title)}</h1>
<p class="lead">${escapeHtml(a.description)}</p>
${a.sections.map(([h, ps]) => `<h2>${escapeHtml(h)}</h2>${ps.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}`).join('')}
<h2>Need help scoping your project?</h2>
<p>Atech Infotech builds custom web applications, cross-platform mobile apps, and business platforms for clients in the UK, Canada, and UAE. Tell us what you are planning and we will propose a practical, fixed-milestone scope.</p>
<a class="cta" href="/#contact">Get a free consultation</a>
<a class="cta-ghost" href="${waLink(`Hi Atech Infotech, I read your guide "${a.title}" and would like to talk.`)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
</article>
<section class="section related"><h2>Related services</h2>${a.related.map((slug) => { const s = services.find((x) => x.slug === slug); return `<a href="/services/${slug}/">${escapeHtml(s ? s.nav : slug)}</a>`; }).join('')}</section>
<section class="section related"><h2>More guides</h2>${otherPosts.map((p) => `<a href="/blog/${p.slug}/">${escapeHtml(p.title)}</a>`).join('')}</section>
</main>` + footer);
}

// 3. ---- MARKET LANDING PAGES (/uk, /canada, /dubai-uae)
for (const m of markets) {
  const url = `${base}${m.path}`;
  const html = head({
    title: m.title,
    description: m.description,
    url,
    locale: m.locale,
    jsonld: [
      orgNode,
      crumbLd([['Home', `${base}/`], [m.countryName, url]]),
      {
        '@type': 'FAQPage',
        mainEntity: m.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    ]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Markets / ${escapeHtml(m.countryName)}</nav>
<section class="hero">
<div class="eyebrow">${escapeHtml(m.countryName)} &middot; Senior Engineering Delivery</div>
<h1>${escapeHtml(m.title.split('|')[0].trim())}</h1>
<p class="lead">${escapeHtml(m.heroSubtitle)}</p>
<div style="margin:16px 0 24px"><span class="badge" style="font-size:14px;padding:6px 14px">${escapeHtml(m.badge)}</span></div>
<a class="cta" href="/#contact">Book a discovery call (${m.currency})</a>
<a class="cta-ghost" href="${waLink(`Hi Atech Infotech, I am contacting you from ${m.countryName} regarding a software development project.`)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
</section>

<section class="section">
<h2>Solutions tailored for ${escapeHtml(m.countryName)} businesses</h2>
<div class="grid">${m.solutions.map(([t, b]) => `<article class="card"><h3>${escapeHtml(t)}</h3><p>${escapeHtml(b)}</p></article>`).join('')}</div>
</section>

<section class="section">
<h2>Frequently asked questions (${escapeHtml(m.countryName)})</h2>
${m.faqs.map(([q, a]) => `<article class="faq"><h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p></article>`).join('')}
</section>

<section class="section">
<h2>Start your ${escapeHtml(m.countryName)} project with senior engineers</h2>
<p class="muted">Fixed-scope milestone quote in ${m.currency}. Guaranteed response within 24 hours.</p>
<a class="cta" href="/contact/">Enquire online</a>
<a class="cta-ghost" href="mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry from ${m.countryName}`)}">Email us</a>
</section>
</main>` + footer;
  write(`${m.slug}/index.html`, html);
}

// 4. ---- CASE STUDIES (/work and /work/[slug])
const workIndexUrl = `${base}/work/`;
write('work/index.html', head({
  title: 'Case Studies: Web, Mobile & Custom Platforms | Atech Infotech',
  description: 'Explore verified case studies from Atech Infotech: digital product catalogues, education exam voucher portals, and custom business platforms.',
  url: workIndexUrl,
  jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['Work', workIndexUrl]])]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Case Studies</nav>
<section class="hero">
<div class="eyebrow">Proven Software Delivery</div>
<h1>Selected Client Case Studies</h1>
<p class="lead">Real web applications, mobile platforms and software systems delivered with senior engineers and fixed-milestone scopes.</p>
</section>
<section class="section"><div class="grid">${caseStudies.map((cs) => `
<article class="card">
<span class="badge">${escapeHtml(cs.industry)} &middot; ${escapeHtml(cs.country)}</span>
<h3><a class="title" href="/work/${cs.slug}/">${escapeHtml(cs.shortTitle)}</a></h3>
<p>${escapeHtml(cs.summary)}</p>
<div style="margin:14px 0">${cs.techStack.map(t => `<span class="badge" style="margin-right:6px">${escapeHtml(t)}</span>`).join('')}</div>
<p><a href="/work/${cs.slug}/">Read full case study &rarr;</a></p>
</article>`).join('')}</div></section>
</main>` + footer);

for (const cs of caseStudies) {
  const url = `${base}/work/${cs.slug}/`;
  write(`work/${cs.slug}/index.html`, head({
    title: `${cs.shortTitle} Case Study | Atech Infotech`,
    description: cs.summary,
    url,
    jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['Work', workIndexUrl], [cs.shortTitle, url]])]
  }) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/work/">Case Studies</a> / ${escapeHtml(cs.shortTitle)}</nav>
<section class="hero">
<div class="eyebrow">${escapeHtml(cs.industry)} &middot; ${escapeHtml(cs.country)} &middot; ${escapeHtml(cs.clientType)}</div>
<h1>${escapeHtml(cs.title)}</h1>
<p class="lead">${escapeHtml(cs.summary)}</p>
${cs.liveUrl ? `<a class="cta" href="${cs.liveUrl}" target="_blank" rel="noopener noreferrer">Visit live project &rarr;</a>` : ''}
</section>

<section class="section"><div class="grid">
<article class="card"><h3>The Problem &amp; Challenge</h3><p>${escapeHtml(cs.problem)}</p></article>
<article class="card"><h3>The Solution &amp; Technical Approach</h3><p>${escapeHtml(cs.solution)}</p></article>
</div></section>

<section class="section"><h2>Key Capabilities Built</h2>
<div class="card"><ul>${cs.features.map(f => `<li style="margin-bottom:8px">${escapeHtml(f)}</li>`).join('')}</ul></div>
</section>

<section class="section"><h2>Results &amp; Verification</h2>
<div class="card"><ul>${cs.results.map(r => `<li style="margin-bottom:8px">${escapeHtml(r)}</li>`).join('')}</ul></div>
</section>

<section class="section"><h2>Tech Stack</h2>
<div>${cs.techStack.map(t => `<span class="badge" style="font-size:14px;padding:6px 12px;margin-right:8px">${escapeHtml(t)}</span>`).join('')}</div>
</section>

<section class="section">
<h2>Planning a similar platform?</h2>
<p class="muted">We can discuss a practical scope, fixed quote, and milestone delivery plan for your project.</p>
<a class="cta" href="/#contact">Get a free consultation</a>
<a class="cta-ghost" href="/work/">View all case studies</a>
</section>
</main>` + footer);
}

// 5. ---- PRICING (/pricing)
const pricingUrl = `${base}/pricing/`;
write('pricing/index.html', head({
  title: 'Pricing & Engagement Models | Atech Infotech',
  description: 'Transparent milestone pricing, monthly engineering retainers, and dedicated senior developers in GBP, CAD, AED, and USD. No hidden licensing traps.',
  url: pricingUrl,
  jsonld: [
    orgNode,
    crumbLd([['Home', `${base}/`], ['Pricing', pricingUrl]]),
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How are project quotes calculated?', acceptedAnswer: { '@type': 'Answer', text: 'We evaluate the technical specification, user roles, API integrations, and database architecture into itemized milestones.' } },
        { '@type': 'Question', name: 'Which currencies can we be invoiced in?', acceptedAnswer: { '@type': 'Answer', text: 'We invoice directly in British Pounds (GBP), Canadian Dollars (CAD), UAE Dirhams (AED), or US Dollars (USD).' } },
        { '@type': 'Question', name: 'Who owns the code and IP?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of the intellectual property, database schema, and source code upon milestone payment.' } }
      ]
    }
  ]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Pricing</nav>
<section class="hero">
<div class="eyebrow">Predictable Investment &middot; Zero Hidden Overruns</div>
<h1>Engagement Models &amp; Pricing</h1>
<p class="lead">Fixed-price milestone contracts, flexible monthly retainers, and dedicated senior developer capacity. Invoiced in GBP, CAD, AED, or USD.</p>
</section>
<section class="section"><div class="grid-3">
<article class="card">
<span class="badge">Most Popular</span>
<h3>Fixed-Price Project</h3>
<p>Best for well-defined scopes and milestone-driven deliverables. You pay for verified working software.</p>
<div style="font-size:24px;font-weight:800;color:#00c6ff;margin:16px 0">Request a quote</div>
<p style="font-size:14px;color:#a8b2d8">Per-milestone delivery &middot; 30-day warranty &middot; 100% IP ownership</p>
</article>
<article class="card">
<span class="badge">Continuous Growth</span>
<h3>Monthly Retainer</h3>
<p>Best for ongoing feature development, cloud infrastructure maintenance, and sprint optimization.</p>
<div style="font-size:24px;font-weight:800;color:#00c6ff;margin:16px 0">Request a quote</div>
<p style="font-size:14px;color:#a8b2d8">Dedicated monthly hours &middot; Direct Slack channel &middot; Sprint planning</p>
</article>
<article class="card">
<span class="badge">Team Augmentation</span>
<h3>Dedicated Developer</h3>
<p>Senior full-stack engineer embedded directly into your daily standups and Git repository.</p>
<div style="font-size:24px;font-weight:800;color:#00c6ff;margin:16px 0">Request a quote</div>
<p style="font-size:14px;color:#a8b2d8">160 hours/month &middot; Daily time-zone overlap &middot; Zero recruiter overhead</p>
</article>
</div></section>
<section class="section">
<h2>Request an itemized proposal</h2>
<p class="muted">Tell us what you want to build. We will reply within 24 hours with an itemized milestone breakdown.</p>
<a class="cta" href="/contact/">Request a project quote</a>
<a class="cta-ghost" href="${waLink('Hi Atech Infotech, I would like to discuss pricing and project models.')}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
</section>
</main>` + footer);

// 6. ---- ABOUT (/about)
const aboutUrl = `${base}/about/`;
write('about/index.html', head({
  title: 'About Atech Infotech | Senior Software Development Company',
  description: '15+ years of senior software delivery experience. Learn about our story, values, founder leadership, and international overlap with UK, Canada & UAE.',
  url: aboutUrl,
  jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['About', aboutUrl]])]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / About</nav>
<section class="hero">
<div class="eyebrow">Founded 2024 &middot; 15+ Years Technical Leadership</div>
<h1>Senior Software Engineering for Growing Businesses</h1>
<p class="lead">We provide founders and CTOs with direct access to experienced full-stack engineers, transparent milestone delivery, and zero proprietary lock-in.</p>
</section>
<section class="section"><div class="grid">
<article class="card"><h3>Senior-Led Architecture</h3><p>We do not delegate your product to junior trainees. You collaborate directly with senior architects with 15+ years of software delivery experience.</p></article>
<article class="card"><h3>100% Code &amp; IP Ownership</h3><p>You own all code, repositories, and assets from day one. Full Git rights are handed over with zero licensing traps or exit fees.</p></article>
<article class="card"><h3>Dedicated Overlap Windows</h3><p>Structured overlap for UK afternoon hours (2-6 PM UK), UAE full working day (GST), and Canadian morning schedules (EST/EDT).</p></article>
<article class="card"><h3>Milestone Certainty</h3><p>Every phase is defined by tangible deliverables and signed off before funds are released. Predictable budgets, no surprises.</p></article>
</div></section>
<section class="section">
<h2>Start a conversation</h2>
<p class="muted">Book a call with our senior engineering team to discuss your roadmap.</p>
<a class="cta" href="/contact/">Contact us</a>
<a class="cta-ghost" href="${waLink('Hi Atech Infotech, I would like to connect with your senior engineering team.')}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
</section>
</main>` + footer);

// 7. ---- CONTACT (/contact)
const contactUrl = `${base}/contact/`;
write('contact/index.html', head({
  title: 'Contact Atech Infotech | UK, Canada & UAE Software Scoping',
  description: 'Contact Atech Infotech to discuss your web, mobile or custom CRM/ERP project. Guaranteed response within 24 hours with an itemized milestone scope.',
  url: contactUrl,
  jsonld: [orgNode, crumbLd([['Home', `${base}/`], ['Contact', contactUrl]])]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Contact</nav>
<section class="hero">
<div class="eyebrow">Direct Engineering Access</div>
<h1>Start Your Project Today</h1>
<p class="lead">Reach out via form, email, or WhatsApp. We reply with a practical milestone roadmap and fixed quote within 24 hours.</p>
</section>
<section class="section"><div class="grid">
<article class="card"><h3>Direct Contact Details</h3>
<p><strong>Email:</strong> <a href="mailto:${EMAIL}">${EMAIL}</a></p>
<p><strong>Telephone:</strong> <a href="tel:+917678410628">${PHONE}</a></p>
<p><strong>WhatsApp:</strong> <a href="${waLink('Hi Atech Infotech, I would like to discuss a project.')}" target="_blank" rel="noopener noreferrer">+91 7678410628</a></p>
<p><strong>Headquarters:</strong> 1782 Omaxe City-1, Indore, MP 452010, India</p>
</article>
<article class="card"><h3>Time-Zone Overlap Windows</h3>
<p><strong>UAE (GST):</strong> Full working day overlap (only 1.5h difference)</p>
<p><strong>UK (GMT/BST):</strong> 2:00 PM – 6:00 PM UK time dedicated overlap</p>
<p><strong>Canada (EST):</strong> Dedicated morning call synchronization</p>
<p><strong>India (IST):</strong> Mon&ndash;Fri: 9:00 AM &ndash; 7:00 PM IST</p>
</article>
</div></section>
<section class="section">
<h2>Send an enquiry online</h2>
<p class="muted">Visit our main interactive contact form or reach out directly on WhatsApp.</p>
<a class="cta" href="/#contact">Open contact form</a>
<a class="cta-ghost" href="${waLink('Hi Atech Infotech, I would like to discuss a project.')}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
</section>
</main>` + footer);

// 8. ---- LEGAL PAGES (/privacy-policy & /terms)
write('privacy-policy/index.html', head({
  title: 'Privacy Policy | Atech Infotech',
  description: 'Our privacy policy explains how we collect and process data in line with UK/EU GDPR and Canadian PIPEDA principles.',
  url: `${base}/privacy-policy/`,
  jsonld: [orgNode]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Privacy Policy</nav>
<section class="hero">
<div class="eyebrow">Data Protection Notice</div>
<h1>Privacy Policy</h1>
<p class="lead">Designed with UK GDPR and Canadian PIPEDA principles in mind. Last updated: November 2026.</p>
</section>
<section class="section"><div class="card">
<h2>1. Overview</h2><p>Atech Infotech respects your privacy and is committed to protecting your personal data when you visit our website or engage our software development services.</p>
<h2>2. Information We Collect</h2><p>We collect contact information voluntarily provided through forms, technical specifications shared for project quotes, and anonymized analytics traffic data.</p>
<h2>3. Purpose</h2><p>Data is used exclusively to prepare project estimates, fulfill software development contracts, and maintain system security.</p>
<h2>4. Contact</h2><p>Email: ${EMAIL} | Address: 1782 Omaxe City-1, Indore, MP 452010, India</p>
</div></section></main>` + footer);

write('terms/index.html', head({
  title: 'Terms of Service | Atech Infotech',
  description: 'Professional engagement terms covering milestone delivery, IP code ownership, and confidentiality.',
  url: `${base}/terms/`,
  jsonld: [orgNode]
}) + `
<main class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Terms of Service</nav>
<section class="hero">
<div class="eyebrow">Professional Standards</div>
<h1>Terms of Service</h1>
<p class="lead">Engagement standards, milestone delivery, and intellectual property ownership. Last updated: November 2026.</p>
</section>
<section class="section"><div class="card">
<h2>1. Scope &amp; Milestones</h2><p>Software development services are delivered in defined milestones according to an agreed Statement of Work (SOW).</p>
<h2>2. Code &amp; IP Ownership</h2><p>Upon full milestone payment, all custom source code, documentation, and digital assets are 100% assigned to the client with zero vendor lock-in.</p>
<h2>3. Confidentiality</h2><p>We execute bilateral Non-Disclosure Agreements (NDAs) before reviewing confidential technical requirements.</p>
</div></section></main>` + footer);

// 9. ---- 404 PAGE
write('404.html', head({
  title: 'Page not found | Atech Infotech',
  description: 'The page you were looking for could not be found.',
  url: `${base}/404.html`,
  jsonld: [orgNode]
}).replace('content="index,follow,max-image-preview:large"', 'content="noindex,follow"') + `
<main class="wrap"><section class="hero"><div class="eyebrow">Error 404</div><h1>Page not found</h1><p class="lead">That page does not exist or has moved. Try one of our services, case studies, or return to the homepage.</p><a class="cta" href="/">Go to homepage</a><a class="cta-ghost" href="/work/">View case studies</a><a class="cta-ghost" href="/blog/">Read the blog</a></section></main>` + footer);

// 10. ---- SITEMAP & ROBOTS (Excludes drafts, includes all canonical public pages)
const entries = [
  [`${base}/`, '1.0', 'weekly'],
  [`${base}/uk/`, '0.9', 'monthly'],
  [`${base}/canada/`, '0.9', 'monthly'],
  [`${base}/dubai-uae/`, '0.9', 'monthly'],
  ...services.map((s) => [`${base}/services/${s.slug}/`, '0.8', 'monthly']),
  [`${base}/work/`, '0.8', 'monthly'],
  ...caseStudies.map((cs) => [`${base}/work/${cs.slug}/`, '0.7', 'monthly']),
  [`${base}/pricing/`, '0.8', 'monthly'],
  [`${base}/about/`, '0.7', 'monthly'],
  [`${base}/contact/`, '0.7', 'monthly'],
  [blogIndexUrl, '0.7', 'weekly'],
  ...articles.map((a) => [`${base}/blog/${a.slug}/`, '0.6', 'monthly']),
  [`${base}/privacy-policy/`, '0.3', 'yearly'],
  [`${base}/terms/`, '0.3', 'yearly']
];

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(([u, p, c]) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod><changefreq>${c}</changefreq><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${base}/sitemap.xml\n`);

console.log(`Generated:
- ${services.length} service pages
- ${articles.length} articles & blog index
- 3 international market pages (UK, Canada, UAE)
- ${caseStudies.length} case studies & work index (drafts excluded)
- Pricing, About, Contact, Privacy, Terms, 404.html
- sitemap.xml (${entries.length} URLs) & robots.txt`);
