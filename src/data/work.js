/**
 * Case Studies & Portfolio Data
 * HARD RULE: Only real information or [TODO: result/metric] placeholders.
 * Permission rules:
 * - permission: "named" | "anonymised" | "pending" (default: "anonymised")
 * - references_available: boolean (default: false)
 * - When "anonymised" or "pending": no client name, no logo, no brand colours,
 *   no real names/emails/addresses in screenshots, generic titles only, no liveUrl.
 * - Badge text:
 *   references_available ? "Private client project: private demo and client reference available on request"
 *                        : "Private client project: private demo available on request"
 * - Draft case studies stay unpublished while permission is "pending".
 */

export const caseStudies = [
  {
    slug: 'futura-kitchen-sinks',
    permission: 'anonymised', // 'named' | 'anonymised' | 'pending'
    references_available: false, // true only when client has confirmed references in writing
    // Generic presentation (used when anonymised or pending)
    title: 'Digital Product Catalogue & Lead Generation Platform',
    shortTitle: 'Kitchen Hardware Catalogue',
    clientType: 'Kitchen Hardware Manufacturer',
    industry: 'Consumer Goods & Hardware',
    country: 'India',
    published: true,
    draft: false,
    color: '#00c6ff', // Theme accent, not client brand colour
    icon: '🚰',
    summary: 'Responsive product catalogue platform for a kitchen sink manufacturer with direct WhatsApp enquiry workflows and downloadable product brochures.',
    problem: 'The client needed a modern, lightweight digital catalogue to present hundreds of sink models, technical specifications, and finishes to homeowners, architects, and retail distributors without complex ecommerce overhead.',
    solution: 'Engineered a modern, responsive web catalogue using React.js and a modular component architecture. Focused on high-speed page loads, clear dimensional diagrams, category filters, and frictionless lead capture through integrated WhatsApp enquiry buttons.',
    features: [
      'Comprehensive product catalogue with multi-dimensional filtering',
      'One-click direct WhatsApp enquiry routed with specific product SKU',
      'Downloadable digital specification brochures and technical guides',
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
    testimonial: null,
    // Stored client metadata (activated only when permission === 'named')
    namedDetails: {
      clientName: 'Futura Kitchen Sinks',
      title: 'Futura Kitchen Sinks: Digital Product Catalogue & Lead Generation Platform',
      shortTitle: 'Futura Kitchen Sinks',
      brandColor: '#ec2027',
      liveUrl: 'https://futurasink.com/'
    }
  },
  {
    slug: 'unicou-exam-vouchers',
    permission: 'anonymised', // 'named' | 'anonymised' | 'pending'
    references_available: false, // true only when client has confirmed references in writing
    // Generic presentation (used when anonymised or pending)
    title: 'Education Exam Voucher Distribution & Agent Portal',
    shortTitle: 'Exam Voucher Platform',
    clientType: 'Certification & EdTech Services',
    industry: 'Education & Examination Vouchers',
    country: 'United Kingdom / Global',
    published: true,
    draft: false,
    color: '#7b2ff7', // Theme accent, not client brand colour
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
    testimonial: null,
    // Stored client metadata (activated only when permission === 'named')
    namedDetails: {
      clientName: 'UniCou',
      title: 'UniCou: Education Exam Voucher Distribution & Agent Portal',
      shortTitle: 'UniCou Exam Vouchers',
      brandColor: '#06d6a0',
      liveUrl: 'https://unicouuk.janshaurya.org/'
    }
  },

  // ---- DRAFT-ONLY CASE STUDIES (EXCLUDED FROM PUBLIC INDEX AND SITEMAP) ----
  {
    slug: 'multi-tenant-crm-platform',
    permission: 'pending', // Drafts stay unpublished while permission is 'pending'
    references_available: false,
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
    permission: 'pending', // Drafts stay unpublished while permission is 'pending'
    references_available: false,
    title: 'On-Demand Ride Hailing & Dispatch Mobile App',
    shortTitle: 'Ride-Hailing Mobile App',
    clientType: 'Mobility Startup',
    industry: 'Transportation & Logistics',
    country: 'International',
    published: false,
    draft: true,
    color: '#7b2ff7',
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
    permission: 'pending', // Drafts stay unpublished while permission is 'pending'
    references_available: false,
    title: 'Luxury Goods Ecommerce Platform & Bespoke Checkout',
    shortTitle: 'Luxury Ecommerce Platform',
    clientType: 'Retail Brand',
    industry: 'Luxury Retail & Fashion',
    country: 'International',
    published: false,
    draft: true,
    color: '#00c6ff',
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

/**
 * Returns case study presentation model according to its permission status:
 * - "anonymised" / "pending": generic title, no client name, no brand colour, no liveUrl, private demo badge.
 * - "named": client name, logo/colours, liveUrl permitted.
 */
export function getCaseStudyDisplay(project) {
  if (!project) return null;
  const isNamed = project.permission === 'named';
  const named = project.namedDetails || {};

  const badgeText = project.references_available
    ? 'Private client project: private demo and client reference available on request'
    : 'Private client project: private demo available on request';

  return {
    ...project,
    title: isNamed && named.title ? named.title : project.title,
    shortTitle: isNamed && named.shortTitle ? named.shortTitle : project.shortTitle,
    clientType: isNamed && named.clientName ? `${named.clientName} (${project.clientType})` : project.clientType,
    color: isNamed && named.brandColor ? named.brandColor : (project.color || '#00c6ff'),
    liveUrl: isNamed ? (named.liveUrl || project.liveUrl || null) : null,
    isAnonymised: !isNamed,
    badgeText
  };
}

/**
 * Draft case studies stay unpublished while permission is "pending".
 */
export const getPublishedCaseStudies = () =>
  caseStudies.filter((c) => !c.draft && c.published && c.permission !== 'pending');

export const getCaseStudyBySlug = (slug) => {
  const found = caseStudies.find((c) => c.slug === slug);
  return found ? getCaseStudyDisplay(found) : null;
};

export default caseStudies;
