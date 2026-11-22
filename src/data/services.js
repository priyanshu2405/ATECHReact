/**
 * Core Services configuration with required international priority ordering:
 * 1. Custom CRM/ERP & Automation
 * 2. Mobile App Development (Flutter + backend APIs)
 * 3. Ecommerce Development
 * 4. Website Development
 * 5. Cloud & DevOps
 * 6. SEO & Digital Marketing (last, smaller)
 */

export const services = [
  {
    slug: 'crm-erp-development',
    nav: 'CRM & ERP Development',
    title: 'Custom CRM and ERP Software Development',
    shortTitle: 'Custom CRM, ERP & Automation',
    icon: '📊',
    color: '#06d6a0',
    gradient: 'linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(6, 214, 160, 0.05))',
    featured: true,
    description: 'Custom CRMs, ERPs, client portals and workflow automation shaped around your exact business processes, user roles, and reporting needs.',
    intro: 'Off-the-shelf tools frequently force businesses into painful workarounds and recurring seat fees. We design and build custom CRM, ERP, and operational platforms that map directly to how your team works, with full database ownership and open API integrations.',
    features: ['Custom CRM workflows', 'Multi-tenant client portals', 'Operations & ERP modules', 'Automation & REST APIs'],
    sections: [
      ['Custom CRM systems', 'Organize leads, accounts, pipeline stages, client records and follow-ups. We define user roles, approval steps and data models with your team before building interfaces.'],
      ['ERP & operational workflows', 'Support invoicing, inventory, resource scheduling, order workflows, and vendor coordination without cumbersome spreadsheets.'],
      ['Role-based portals & dashboards', 'Deliver dedicated customer portals, agent dashboards, and managerial reporting with actionable filters and granular permissions.'],
      ['Automation & API integrations', 'Connect accounting software, payment gateways, WhatsApp messaging, and legacy tools to eliminate manual repetitive data entry.']
    ],
    faqs: [
      ['Can a CRM be tailored to our multi-currency or regional requirements?', 'Yes. We design role-based permissions, custom pipelines, regional tax structures, and currency conversions specific to UK, Canadian, UAE, and global operations.'],
      ['Do we own the source code and database?', 'Yes. You receive 100% intellectual property ownership of the codebase and complete control over your database with zero per-user licensing fees.'],
      ['Can you connect the CRM to our accounting or marketing systems?', 'Yes. We build secure REST APIs or webhooks to integrate with platforms like Stripe, Xero, QuickBooks, HubSpot, or custom proprietary tools.']
    ]
  },
  {
    slug: 'mobile-app-development',
    nav: 'Mobile App Development',
    title: 'Mobile App Development for Android and iOS',
    shortTitle: 'Mobile App Development (Flutter & APIs)',
    icon: '📱',
    color: '#7b2ff7',
    gradient: 'linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(123, 47, 247, 0.05))',
    featured: true,
    description: 'High-performance cross-platform mobile apps using Flutter and React Native with robust, secure backend API integrations.',
    intro: 'We build responsive, engaging mobile applications for iOS and Android. By combining Flutter with performant backend APIs, we deliver native-grade user experiences across both app stores from a single unified codebase.',
    features: ['Flutter & React Native', 'Secure backend APIs', 'iOS & Android App Store release', 'Offline-first & real-time sync'],
    sections: [
      ['Cross-platform engineering', 'Deliver consistent, high-performance apps on both iOS and Android. Flutter enables pixel-perfect design control while keeping maintenance costs predictable.'],
      ['Backend architecture & APIs', 'Mobile apps depend on reliable data. We architect authentication, push notifications, cloud databases, and administrative backends concurrently.'],
      ['Payment & device capabilities', 'Incorporate device features such as camera scanning, geolocation, Apple Pay, Google Pay, biometric sign-in, and offline data sync.'],
      ['Store compliance & releases', 'We assist with Apple App Store and Google Play compliance guidelines, certificates, test tracks, and production rollouts.']
    ],
    faqs: [
      ['Can one codebase serve both iPhone and Android users?', 'Yes. Flutter allows single-codebase development for iOS and Android while retaining 60fps performance and native device integration.'],
      ['Can our mobile app integrate with our existing website or database?', 'Yes. We engineer REST or GraphQL APIs to ensure real-time synchronization between your website, admin portal, and mobile app.'],
      ['Do you handle the App Store and Google Play submissions?', 'Yes. We prepare assets, configure certificates, test on physical devices, and guide the submission process through approval.']
    ]
  },
  {
    slug: 'ecommerce-development',
    nav: 'Ecommerce Development',
    title: 'Ecommerce Website Development & Online Stores',
    shortTitle: 'Ecommerce Development',
    icon: '🛍️',
    color: '#f4a261',
    gradient: 'linear-gradient(135deg, rgba(244, 162, 97, 0.15), rgba(244, 162, 97, 0.05))',
    featured: true,
    description: 'Bespoke online stores, B2B wholesale portals, and custom checkout flows integrated with global payment gateways and ERP systems.',
    intro: 'We build fast, conversion-optimized ecommerce experiences that turn international visitors into buyers. From direct-to-consumer digital storefronts to multi-tier B2B wholesale portals, we engineer stores that load fast and handle volume.',
    features: ['Custom storefronts & catalogues', 'B2B wholesale & volume tiers', 'International payment gateways', 'Inventory & order management'],
    sections: [
      ['Conversion-focused storefronts', 'Streamlined product catalogues, faceted search, mobile-first product cards, and frictionless multi-currency checkouts.'],
      ['B2B & wholesale portals', 'Support trade pricing, account approvals, bulk order matrices, credit limits, and invoice-on-delivery workflows.'],
      ['Payment gateway integrations', 'Seamless integrations with Stripe, Apple Pay, Google Pay, Telr, PayTabs, PayPal, and regional gateways.'],
      ['Logistics & operational sync', 'Connect inventory, automated shipping calculations, carrier tracking APIs, and webhook alerts to your warehouse.']
    ],
    faqs: [
      ['Can you build multi-currency stores for UK, Canada, UAE, and India shoppers?', 'Yes. We implement geolocation-aware currency switching (GBP, CAD, AED, INR, USD) with localized payment gateway checkout options.'],
      ['Do you support custom B2B wholesale pricing rules?', 'Yes. We can architect customer group pricing, minimum order thresholds, and invoice request workflows alongside public retail catalogues.'],
      ['How do you ensure checkout performance and security?', 'We adhere to PCI-DSS compliance best practices, utilizing tokenized checkout sessions so credit card numbers never hit your web server.']
    ]
  },
  {
    slug: 'website-development',
    nav: 'Website Development',
    title: 'Website Development & Web Applications',
    shortTitle: 'Website Development & Web Apps',
    icon: '💻',
    color: '#00c6ff',
    gradient: 'linear-gradient(135deg, rgba(0, 198, 255, 0.15), rgba(0, 114, 255, 0.05))',
    featured: false,
    description: 'Modern, high-performance web applications and corporate websites built with React, Node.js, and clean semantic architecture.',
    intro: 'A modern website should be fast, responsive, and planned around tangible business goals. We engineer semantic React websites and full-stack web applications that present your capabilities clearly and load under 1.5 seconds worldwide.',
    features: ['React & Node.js architecture', 'High Lighthouse speed scores', 'Semantic HTML & Schema markup', 'Lead-generation workflows'],
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
    title: 'Cloud Deployment, CI/CD & DevOps Services',
    shortTitle: 'Cloud & DevOps',
    icon: '☁️',
    color: '#4cc9f0',
    gradient: 'linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(76, 201, 240, 0.05))',
    featured: false,
    description: 'Reliable cloud architecture, automated CI/CD deployment pipelines, containerization, and staging/production management.',
    intro: 'We configure stable, cost-effective hosting and continuous deployment environments so your software updates deploy smoothly with zero downtime. From simple edge deployments to multi-tier containerized systems, we keep infrastructure maintainable.',
    features: ['Automated CI/CD pipelines', 'Docker containerization', 'Cloud infrastructure setup', 'Security headers & SSL'],
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
    title: 'Technical SEO Foundations & Organic Growth',
    shortTitle: 'Technical SEO & Content Foundations',
    icon: '🔍',
    color: '#f72585',
    gradient: 'linear-gradient(135deg, rgba(247, 37, 133, 0.15), rgba(247, 37, 133, 0.05))',
    featured: false,
    description: 'Technical SEO foundations, crawlability enhancements, structured data, and organic search planning for service businesses.',
    intro: 'We ensure your digital products are engineered to be easily crawled, indexed, and understood by search engines. Rather than empty ranking promises, we implement solid technical foundations, clean information hierarchy, and international metadata.',
    features: ['Technical crawlability audits', 'Schema.org JSON-LD structured data', 'International hreflang & canonicals', 'Speed & Core Web Vitals'],
    sections: [
      ['Technical website SEO', 'Optimized indexation directives, XML sitemaps, robots.txt rules, canonical tags, and error handling for search bots.'],
      ['Structured schema data', 'Rich JSON-LD markup for Organization, Service, BreadcrumbList, FAQPage, and Article nodes.'],
      ['International SEO structure', 'Geographic metadata, localized hreflang tags, and crawlable static page paths for international search.'],
      ['Search Console & analytics', 'Google Search Console verification, GTM custom lead tracking, and conversion-funnel measurement setup.']
    ],
    faqs: [
      ['Do you guarantee specific Google rankings?', 'No responsible agency guarantees rankings. We guarantee clean code, semantic schema, fast load times, and crawlable architecture that gives search engines the best possible signals.'],
      ['Can you help fix an existing website that is not indexing?', 'Yes. We perform crawl diagnostics, inspect Search Console errors, fix robots/canonical issues, and resolve indexing blockers.']
    ]
  }
];

export default services;
