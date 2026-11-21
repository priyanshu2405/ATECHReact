/**
 * Market Landing Pages Data: UK, Canada, Dubai/UAE
 * HARD RULE 6: No certification claims; phrased as "we build with X in mind".
 * Unique content per market.
 */

export const markets = [
  {
    slug: 'uk',
    path: '/uk/',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    locale: 'en_GB',
    htmlLang: 'en-GB',
    metaTitle: 'Software & App Development for UK Businesses | Atech Infotech',
    metaDescription: 'Custom software, web apps, mobile apps and CRM systems for growing UK businesses. Senior engineers, UK time-zone overlap, fixed-scope milestones and GBP invoicing.',
    hero: {
      eyebrow: 'UK & International Delivery · Senior Engineering',
      title: 'Software & App Development for UK Businesses',
      subtitle: 'We build custom web apps, mobile applications, and bespoke CRM platforms for UK enterprises and scaling startups. Fixed-scope milestones, afternoon UK time overlap, and full code ownership.',
      badge: 'Overlap: 2:00 PM – 6:00 PM UK Time (GMT/BST)',
    },
    solutions: [
      {
        icon: '🛡️',
        title: 'GDPR-Aware Architecture',
        desc: 'We build with UK and EU GDPR principles in mind: encrypted data storage, clear cookie consent setups, role-based access control, and straightforward data export and deletion mechanisms.'
      },
      {
        icon: '💳',
        title: 'UK Payment & Banking Integrations',
        desc: 'Seamless integrations with Stripe UK, GoCardless for Direct Debit collections, and Open Banking APIs for instant bank transfers and payment reconciliation.'
      },
      {
        icon: '♿',
        title: 'Accessibility (WCAG-Minded Builds)',
        desc: 'We engineer frontends with WCAG 2.1 AA accessibility guidelines in mind: semantic landmarks, full keyboard navigability, high color contrast, and screen-reader compatibility.'
      },
      {
        icon: '🕒',
        title: 'Dedicated Afternoon UK Time Overlap',
        desc: 'Our working hours provide 4 solid hours of daily overlap with the UK working day (2:00 PM to 6:00 PM UK time) for sprint standups, review calls, and Slack collaboration.'
      },
      {
        icon: '💷',
        title: 'Transparent GBP Pricing & Invoicing',
        desc: 'Fixed-milestone scopes in GBP with milestone-based delivery, ensuring zero hidden exchange surprises or fluctuating contractor rates.'
      },
      {
        icon: '📜',
        title: 'Full IP & Source Code Ownership',
        desc: 'All custom software is built under comprehensive non-disclosure agreements with complete assignment of intellectual property rights and full Git repository handover.'
      }
    ],
    servicesList: [
      { name: 'Custom CRM & ERP Software', desc: 'Replace cumbersome off-the-shelf subscriptions with tailor-made workflows.' },
      { name: 'Mobile Apps (Flutter & iOS/Android)', desc: 'Fast, cross-platform mobile experiences with reliable cloud APIs.' },
      { name: 'Ecommerce & Customer Portals', desc: 'High-converting online storefronts and client self-service portals.' },
      { name: 'API Integrations & DevOps', desc: 'Connect Xero, Stripe, HubSpot, and custom tools with automated CI/CD.' }
    ],
    faqs: [
      {
        q: 'How do you handle time-zone collaboration with UK clients?',
        a: 'Our standard working day provides full coverage between 2:00 PM and 6:00 PM UK time (both GMT and BST). We conduct weekly video demos, maintain transparent communication via Slack or Microsoft Teams, and share real-time Jira/Trello boards.'
      },
      {
        q: 'How do you approach UK data privacy and GDPR?',
        a: 'We build with UK GDPR requirements in mind from the ground up: database encryption at rest, HTTPS/TLS in transit, cookie banner compliance options, and structured user consent logs.'
      },
      {
        q: 'Can we pay in British Pounds (GBP)?',
        a: 'Yes. We quote and invoice in GBP with milestone-based payments tied to verified deliverables. You only approve payments when milestone criteria are satisfied.'
      },
      {
        q: 'Who owns the intellectual property and code?',
        a: 'You own 100% of the code, designs, and intellectual property. We provide full repository access from day one, and complete IP assignment upon project completion.'
      }
    ]
  },
  {
    slug: 'canada',
    path: '/canada/',
    countryCode: 'CA',
    countryName: 'Canada',
    currency: 'CAD',
    currencySymbol: '$',
    locale: 'en_CA',
    htmlLang: 'en-CA',
    metaTitle: 'Web & Mobile App Development for Canadian Businesses | Atech',
    metaDescription: 'Custom software, web portals, mobile apps and cloud systems for Canadian businesses. Senior engineering, PIPEDA-aware builds, bilingual options and CAD pricing.',
    hero: {
      eyebrow: 'Canada & North America Delivery · Senior Engineering',
      title: 'Web & Mobile App Development for Canadian Businesses',
      subtitle: 'We design and engineer bespoke web applications, cross-platform mobile apps, and business software for Canadian startups and established enterprises. Transparent milestone delivery and full IP ownership.',
      badge: 'Overlap Windows for Eastern & Pacific Canada',
    },
    solutions: [
      {
        icon: '🍁',
        title: 'PIPEDA-Aware Data Practices',
        desc: 'We build with Canadian federal and provincial privacy legislation (PIPEDA) in mind: strict data segregation, audit logging, and clear user privacy controls.'
      },
      {
        icon: '🌐',
        title: 'Bilingual English/French Capabilities',
        desc: 'Internationalization (i18n) engineered into the core architecture, allowing your digital product to support seamless English and French language switching across Canada.'
      },
      {
        icon: '💳',
        title: 'Stripe & Interac-Friendly Payments',
        desc: 'Support for popular Canadian payment gateways and workflows, including Stripe Canada, Apple Pay, Google Pay, and Interac-friendly checkout integrations.'
      },
      {
        icon: '💵',
        title: 'Predictable CAD Milestone Pricing',
        desc: 'Get transparent proposals and milestone billing in Canadian Dollars (CAD). Fixed milestones protect your budget from scope creep and currency volatility.'
      },
      {
        icon: '🤝',
        title: 'Scheduled Overlap & Dedicated Demos',
        desc: 'Dedicated morning overlap with Eastern Time (EST/EDT) for daily synchronization, live demos, and sprint planning sessions.'
      },
      {
        icon: '🔒',
        title: 'Strict Confidentiality & Mutual NDAs',
        desc: 'We execute mutual NDAs before reviewing sensitive business requirements, ensuring your proprietary product ideas remain strictly confidential.'
      }
    ],
    servicesList: [
      { name: 'Custom CRM & Operations Platforms', desc: 'Automate internal workflows, pipeline tracking, and customer service.' },
      { name: 'Cross-Platform Mobile Apps', desc: 'Flutter applications for iOS and Android with bilingual localization.' },
      { name: 'B2B & B2C Web Applications', desc: 'Secure client portals, custom booking engines, and dashboard tools.' },
      { name: 'Cloud Architecture & APIs', desc: 'Scalable AWS, DigitalOcean, or Azure infrastructure with automated deployments.' }
    ],
    faqs: [
      {
        q: 'How do you coordinate with Canadian clients across time zones?',
        a: 'We structure dedicated overlap windows during your morning hours (EST/EDT). Regular sprint updates, async loom walkthroughs, and shared task boards keep progress continuous and transparent.'
      },
      {
        q: 'Can our website or app be built in both English and French?',
        a: 'Yes. We architect localization (i18n) from the beginning, supporting dynamic content switching, locale-specific URLs, and bilingual SEO metadata.'
      },
      {
        q: 'How are payments structured for Canadian projects?',
        a: 'We work on milestone-based billing in CAD. Each milestone is defined by tangible deliverables (e.g. wireframes, core API build, frontend completion), and funds are released upon your review.'
      },
      {
        q: 'Do you work under an NDA?',
        a: 'Yes, we gladly execute a mutual Non-Disclosure Agreement prior to receiving any project specifications, wireframes, or data models.'
      }
    ]
  },
  {
    slug: 'dubai-uae',
    path: '/dubai-uae/',
    countryCode: 'AE',
    countryName: 'United Arab Emirates',
    currency: 'AED',
    currencySymbol: 'AED ',
    locale: 'en_AE',
    htmlLang: 'en-AE',
    metaTitle: 'Web & Mobile App Development for UAE Businesses | Atech',
    metaDescription: 'Software, mobile apps, custom CRM and ecommerce development for businesses in Dubai & the UAE. Arabic/RTL support, UAE payment gateways and close time-zone alignment.',
    hero: {
      eyebrow: 'Dubai & UAE Delivery · Senior Engineering',
      title: 'Web & Mobile App Development for UAE Businesses',
      subtitle: 'We engineer high-performance web applications, mobile apps, and custom business platforms for Dubai and UAE companies. Full working day time-zone alignment, Arabic/RTL support, and AED pricing.',
      badge: 'Full Working Day Alignment (GST, UTC+4)',
    },
    solutions: [
      {
        icon: '🌍',
        title: 'Arabic & Right-to-Left (RTL) Layouts',
        desc: 'Complete bidirectional support engineered from the ground up: native Arabic typography, mirrored UI elements, and seamless English/Arabic toggling.'
      },
      {
        icon: '🧾',
        title: 'UAE VAT-Ready Billing & Invoicing',
        desc: 'Custom invoice generators, accounting workflows, and ERP modules built with Federal Tax Authority (FTA) 5% VAT calculation and reporting standards in mind.'
      },
      {
        icon: '💳',
        title: 'UAE Payment Gateways Integration',
        desc: 'Direct integrations with leading UAE payment processors including Telr, PayTabs, Network International, Stripe UAE, Apple Pay, and Tamara / Tabby BNPL.'
      },
      {
        icon: '💬',
        title: 'WhatsApp Business API Workflows',
        desc: 'Automated customer enquiry capture, instant order updates, quote dispatches, and CRM lead routing directly via WhatsApp.'
      },
      {
        icon: '⏰',
        title: 'Seamless GST Time-Zone Alignment',
        desc: 'India Standard Time is only 1.5 hours ahead of UAE Gulf Standard Time (GST), giving our engineering teams complete real-time working day overlap.'
      },
      {
        icon: '🏢',
        title: 'Enterprise CRM & Real Estate Solutions',
        desc: 'Lead distribution engines, property listing aggregators, agent commission modules, and multi-currency deal pipelines tailored for Dubai enterprises.'
      }
    ],
    servicesList: [
      { name: 'Custom CRM & Real Estate Portals', desc: 'Bespoke pipelines, WhatsApp lead routing, and inventory tracking.' },
      { name: 'Mobile Apps (iOS & Android)', desc: 'Bilingual mobile apps with biometric login and UAE payment gateways.' },
      { name: 'High-Converting Ecommerce', desc: 'Multi-currency storefronts with Arabic localization and express checkouts.' },
      { name: 'Internal ERP & Operations', desc: 'Automate approvals, VAT-ready invoices, and multi-branch inventory.' }
    ],
    faqs: [
      {
        q: 'What is the time difference between India and Dubai?',
        a: 'India is only 1 hour and 30 minutes ahead of Dubai (GST). This allows virtually 100% working day alignment for live calls, instant messaging, and rapid iteration.'
      },
      {
        q: 'Can you integrate local UAE payment processors like Telr or PayTabs?',
        a: 'Yes. We have experience integrating UAE gateways including Telr, PayTabs, Network International, as well as Stripe UAE, Apple Pay, and Tabby.'
      },
      {
        q: 'Do you support bilingual English and Arabic interfaces?',
        a: 'Yes. We build responsive RTL layouts with proper Arabic typography, mirrored icons, and localized number formats.'
      },
      {
        q: 'Can we pay in UAE Dirhams (AED)?',
        a: 'Yes, quotes and milestone invoices can be settled in AED or USD through straightforward bank wire or payment card transfers.'
      }
    ]
  }
];

export const getMarketBySlug = (slug) => markets.find((m) => m.slug === slug);
export default markets;
