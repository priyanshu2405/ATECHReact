/**
 * Pricing & Engagement Models Configuration
 * HARD RULE 1 & TASK 5:
 * Never invent prices. Use [TODO: price] placeholders.
 * If a price is a placeholder or empty, `formatPriceDisplay()` returns "Request a quote" on the public page.
 */

export const currencies = [
  { code: 'GBP', symbol: '£', label: 'GBP (£)', flag: '🇬🇧', country: 'United Kingdom' },
  { code: 'CAD', symbol: '$', label: 'CAD ($)', flag: '🇨🇦', country: 'Canada' },
  { code: 'AED', symbol: 'AED ', label: 'AED (د.إ)', flag: '🇦🇪', country: 'Dubai / UAE' },
  { code: 'INR', symbol: '₹', label: 'INR (₹)', flag: '🇮🇳', country: 'India' },
  { code: 'USD', symbol: '$', label: 'USD ($)', flag: '🇺🇸', country: 'United States & Global' },
];

export const engagementModels = [
  {
    id: 'fixed-price',
    name: 'Fixed-Price Project',
    tagline: 'Best for well-defined scopes and milestone-driven deliverables.',
    idealFor: 'Custom websites, MVPs, specific CRM modules, and well-specified mobile apps.',
    features: [
      'Detailed scope specification & technical architecture before kickoff',
      'Fixed total quote with milestones linked to tangible deliverables',
      'Zero cost overruns on agreed scope',
      'Weekly progress demos & code reviews',
      'Included post-launch support & bug-fix window',
      'Full IP and source code assignment upon completion'
    ],
    pricing: {
      GBP: '[TODO: price in GBP]',
      CAD: '[TODO: price in CAD]',
      AED: '[TODO: price in AED]',
      INR: '[TODO: price in INR]',
      USD: '[TODO: price in USD]',
    },
    billingPeriod: 'per project',
    badge: 'Most Popular',
    popular: true
  },
  {
    id: 'monthly-retainer',
    name: 'Monthly Engineering Retainer',
    tagline: 'Best for ongoing feature development, maintenance, and growth.',
    idealFor: 'Growing platforms requiring continuous development, optimization, and support.',
    features: [
      'Dedicated monthly engineering hours committed to your product',
      'Direct communication channel (Slack / Teams / WhatsApp)',
      'Bi-weekly sprint planning and backlog prioritization',
      'Continuous deployment, cloud maintenance, and monitoring',
      'Flexible rollover of unused hours by agreement',
      'Month-to-month flexibility with a 30-day notice period'
    ],
    pricing: {
      GBP: '[TODO: price in GBP/mo]',
      CAD: '[TODO: price in CAD/mo]',
      AED: '[TODO: price in AED/mo]',
      INR: '[TODO: price in INR/mo]',
      USD: '[TODO: price in USD/mo]',
    },
    billingPeriod: 'per month',
    badge: 'Continuous Growth',
    popular: false
  },
  {
    id: 'dedicated-developer',
    name: 'Dedicated Senior Developer',
    tagline: 'Best for teams needing senior engineering capacity embedded into their workflows.',
    idealFor: 'Agencies and tech teams scaling their engineering team without local recruitment overhead.',
    features: [
      'Dedicated full-time senior full-stack developer (React / Node / Flutter / Laravel)',
      '160 hours per month with daily standups and live time-zone overlap',
      'Direct integration into your Git repositories and project boards',
      'Managed infrastructure, workstations, and high-speed fiber connectivity',
      'Zero recruiter fees, holiday liabilities, or long-term employment overhead',
      'Full IP assignment for every line of code written'
    ],
    pricing: {
      GBP: '[TODO: price in GBP/mo]',
      CAD: '[TODO: price in CAD/mo]',
      AED: '[TODO: price in AED/mo]',
      INR: '[TODO: price in INR/mo]',
      USD: '[TODO: price in USD/mo]',
    },
    billingPeriod: 'per month',
    badge: 'Team Augmentation',
    popular: false
  }
];

export const servicePricingRanges = [
  {
    serviceSlug: 'crm-erp-development',
    serviceName: 'Custom CRM / ERP & Automation',
    description: 'Custom pipelines, role-based dashboards, and internal business workflow automation.',
    timeline: '4 – 10 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  },
  {
    serviceSlug: 'mobile-app-development',
    serviceName: 'Mobile App Development (Flutter & APIs)',
    description: 'Cross-platform iOS and Android apps with secure cloud backends and store submission.',
    timeline: '6 – 12 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  },
  {
    serviceSlug: 'ecommerce-development',
    serviceName: 'Ecommerce & Wholesale Storefronts',
    description: 'Bespoke catalogues, checkout funnels, inventory sync, and payment integrations.',
    timeline: '4 – 8 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  },
  {
    serviceSlug: 'website-development',
    serviceName: 'Website Development & Web Applications',
    description: 'High-speed React applications, marketing websites, and customer portals.',
    timeline: '2 – 6 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  },
  {
    serviceSlug: 'cloud-devops',
    serviceName: 'Cloud & DevOps Infrastructure',
    description: 'CI/CD pipeline configuration, Docker containerization, and hosting architecture.',
    timeline: '1 – 3 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  },
  {
    serviceSlug: 'seo-digital-marketing',
    serviceName: 'Technical SEO Foundations',
    description: 'Crawlability fixes, Schema.org structured data, and international metadata setup.',
    timeline: '2 – 4 weeks typical',
    startingPrices: {
      GBP: '[TODO: starting price in GBP]',
      CAD: '[TODO: starting price in CAD]',
      AED: '[TODO: starting price in AED]',
      INR: '[TODO: starting price in INR]',
      USD: '[TODO: starting price in USD]',
    }
  }
];

/**
 * Public helper: If price contains "[TODO" or is empty, show "Request a quote"
 */
export const formatPriceDisplay = (priceString) => {
  if (!priceString || priceString.includes('[TODO') || priceString.trim() === '') {
    return 'Request a quote';
  }
  return priceString;
};

export default {
  currencies,
  engagementModels,
  servicePricingRanges,
  formatPriceDisplay
};
