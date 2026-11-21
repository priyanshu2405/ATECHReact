/**
 * Case Studies & Portfolio Data
 * HARD RULE: Only real information or [TODO: result/metric] placeholders.
 * Draft items have `draft: true` and are excluded from the public index and sitemap.
 */

export const caseStudies = [
  {
    slug: 'futura-kitchen-sinks',
    title: 'Futura Kitchen Sinks: Digital Product Catalogue & Lead Generation Platform',
    shortTitle: 'Futura Kitchen Sinks',
    clientType: 'Manufacturing & Kitchen Hardware Brand',
    industry: 'Consumer Goods & Hardware',
    country: 'India',
    published: true,
    draft: false,
    liveUrl: 'https://futurasink.com/',
    color: '#ec2027',
    icon: '🚰',
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
    ],
    metrics: [
      { label: 'Platform Availability', value: '99.9%' },
      { label: 'Enquiry Flow', value: 'Direct WhatsApp' },
      { label: 'Catalogue Access', value: 'Instant PDF' },
      { label: 'Client Metric', value: '[TODO: metric]' }
    ],
    testimonial: null // [TODO: client testimonial when approved in writing]
  },
  {
    slug: 'unicou-exam-vouchers',
    title: 'UniCou: Education Exam Voucher Distribution & Agent Portal',
    shortTitle: 'UniCou Exam Vouchers',
    clientType: 'EdTech & Certification Services',
    industry: 'Education & Examination Vouchers',
    country: 'United Kingdom / Global',
    published: true,
    draft: false,
    liveUrl: 'https://unicouuk.janshaurya.org/',
    color: '#06d6a0',
    icon: '🎓',
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
    ],
    metrics: [
      { label: 'Target Audience', value: 'UK & Global Students' },
      { label: 'Account Types', value: 'Student & Agent' },
      { label: 'Security', value: 'Encrypted Allocation' },
      { label: 'Agent Metric', value: '[TODO: metric]' }
    ],
    testimonial: null // [TODO: client testimonial when approved in writing]
  },

  // ---- DRAFT-ONLY CASE STUDIES (EXCLUDED FROM PUBLIC INDEX AND SITEMAP) ----
  {
    slug: 'multi-tenant-crm-platform',
    title: 'Custom Multi-Tenant CRM Platform for Service Enterprises',
    shortTitle: 'Multi-Tenant CRM Platform',
    clientType: 'B2B Enterprise',
    industry: 'Business Software',
    country: 'International',
    published: false,
    draft: true,
    color: '#00c6ff',
    icon: '📊',
    summary: '[TODO: Overview of multi-tenant CRM platform]',
    problem: '[TODO: Client problem statement for multi-tenant CRM]',
    solution: '[TODO: Custom architecture and modular tenant isolation solution]',
    features: [
      'Multi-tenant workspace isolation with role permissions',
      'Dynamic deal pipeline management and stage forecasting',
      'Webhook engine and REST API for third-party tools',
      'Automated email notifications and audit logs'
    ],
    techStack: ['Node.js', 'React.js', 'PostgreSQL', 'Docker'],
    results: ['[TODO: result/metric: number of active enterprise tenants or team hours saved]'],
    metrics: [{ label: 'Tenants', value: '[TODO]' }],
    testimonial: null
  },
  {
    slug: 'ride-hailing-mobile-app',
    title: 'On-Demand Ride Hailing & Dispatch Mobile App',
    shortTitle: 'Ride-Hailing Mobile App',
    clientType: 'Mobility Startup',
    industry: 'Transportation & Logistics',
    country: 'International',
    published: false,
    draft: true,
    color: '#f72585',
    icon: '🚗',
    summary: '[TODO: Overview of ride hailing mobile app with driver and rider apps]',
    problem: '[TODO: Real-time driver dispatch and fare calculation challenges]',
    solution: '[TODO: Flutter cross-platform mobile apps for iOS and Android with WebSockets]',
    features: [
      'Real-time GPS tracking and route navigation',
      'Driver acceptance queue and automated dispatch',
      'In-app fare calculation and payment gateway integration',
      'Customer rating and ride history'
    ],
    techStack: ['Flutter', 'Node.js', 'WebSockets', 'Google Maps API'],
    results: ['[TODO: result/metric: daily trip volume or average match time]'],
    metrics: [{ label: 'Mobile Platforms', value: 'iOS & Android' }],
    testimonial: null
  },
  {
    slug: 'luxury-ecommerce-platform',
    title: 'Luxury Goods Ecommerce Platform & Bespoke Checkout',
    shortTitle: 'Luxury Ecommerce Platform',
    clientType: 'Retail Brand',
    industry: 'Luxury Retail & Fashion',
    country: 'International',
    published: false,
    draft: true,
    color: '#f4a261',
    icon: '💎',
    summary: '[TODO: High-end bespoke ecommerce store with multi-currency checkout]',
    problem: '[TODO: Off-the-shelf limitations with custom variant selectors and international taxes]',
    solution: '[TODO: Custom React storefront with automated tax calculations and VIP concierge messaging]',
    features: [
      'High-resolution media galleries and zoom views',
      'Multi-currency pricing engine (GBP, USD, EUR, AED)',
      'Direct concierge WhatsApp integration for high-value orders',
      'Automated inventory synchronization'
    ],
    techStack: ['React', 'Node.js', 'Stripe', 'Headless Storefront'],
    results: ['[TODO: result/metric: conversion rate increase or average order value]'],
    metrics: [{ label: 'Currencies', value: 'Multi-Currency' }],
    testimonial: null
  }
];

export const getPublishedCaseStudies = () => caseStudies.filter((c) => !c.draft);
export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);
export default caseStudies;
