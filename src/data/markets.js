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
      subtitle: 'We build custom web apps, mobile applications, and bespoke CRM platforms for UK enterprises and scaling startups. Fixed-scope milestones, morning-to-afternoon UK time overlap, and full code ownership.',
      badge: 'Overlap: 9:00 AM – 1:30 PM GMT / 2:30 PM BST',
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
        title: 'UK Time Zone Overlap (GMT & BST)',
        desc: 'Our standard working hours provide dedicated daily overlap with the UK working day (9:00 AM to 1:30 PM GMT / 2:30 PM BST) for sprint standups, review calls, and Slack collaboration.'
      },
      {
        icon: '💷',
        title: 'Transparent GBP Pricing & Invoicing',
        desc: 'Fixed-milestone scopes in GBP with milestone-based delivery, ensuring zero hidden exchange surprises or fluctuating contractor rates.'
      },
      {
        icon: '📜',
        title: 'Full IP & Source Code Ownership',
        desc: 'We are happy to sign an NDA before you share confidential requirements. Complete assignment of intellectual property rights and full Git repository handover upon full payment of the relevant invoices.'
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
        a: 'Our standard working day provides full coverage between 9:00 AM and 1:30 PM GMT / 2:30 PM BST. We conduct weekly video demos, maintain transparent communication via Slack or Microsoft Teams, and share real-time Jira/Trello boards.'
      },
      {
        q: 'How do you approach UK data privacy and GDPR?',
        a: 'We build with UK GDPR requirements in mind from the ground up: database encryption at rest, HTTPS/TLS in transit, cookie banner compliance options, and structured user consent logs.'
      },
      {
        q: 'Can we pay in British Pounds (GBP)?',
        a: 'Yes. We quote and invoice in GBP with milestone-based payments tied to agreed deliverables. You only approve payments when milestone criteria are satisfied.'
      },
      {
        q: 'Who owns the intellectual property and code?',
        a: 'You own 100% of the code, designs, and intellectual property. We provide complete repository transfer and IP assignment upon full payment of the relevant invoices.'
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
      badge: 'Overlap: Evening-IST Calls by Arrangement',
    },
    solutions: [
      {
        icon: '🍁',
        title: 'PIPEDA-Aware Data Practices',
        desc: 'We build with Canadian federal and provincial privacy legislation (PIPEDA) in mind: strict data segregation, audit logging, and clear user privacy controls.'
      },
      {
        icon: '🌐',
        title: 'Multilingual & Localization (i18n) Architecture',
        desc: 'Internationalization (i18n) engineered into the core architecture, allowing your digital product to support multiple languages and locale-specific routing.'
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
        title: 'Scheduled Overlap by Arrangement',
        desc: 'Scheduled evening-IST calls by arrangement to align with Canadian morning schedules (EST/EDT) for daily synchronization, live demos, and sprint planning.'
      },
      {
        icon: '🔒',
        title: 'Confidentiality & Mutual NDAs',
        desc: 'We are happy to sign an NDA before you share confidential requirements, ensuring your proprietary product ideas remain strictly confidential.'
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
        a: 'We structure scheduled evening-IST calls by arrangement during your morning hours (EST/EDT). Regular sprint updates, async video walkthroughs, and shared task boards keep progress continuous and transparent.'
      },
      {
        q: 'Can our website or app be built for multiple languages?',
        a: 'Yes. We architect localization (i18n) from the beginning, supporting dynamic content switching, locale-specific URLs, and bilingual SEO metadata.'
      },
      {
        q: 'How are payments structured for Canadian projects?',
        a: 'We work on milestone-based billing in CAD. Each milestone is defined by tangible deliverables (e.g. wireframes, core API build, frontend completion), and funds are released upon your review.'
      },
      {
        q: 'Do you work under an NDA?',
        a: 'Yes, absolutely. We are happy to sign an NDA before you share confidential requirements.'
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
    metaDescription: 'Software, mobile apps, custom CRM and ecommerce development for businesses in Dubai & the UAE. RTL-ready architecture, UAE payment gateways and close time-zone alignment.',
    hero: {
      eyebrow: 'Dubai & UAE Delivery · Senior Engineering',
      title: 'Web & Mobile App Development for UAE Businesses',
      subtitle: 'We engineer high-performance web applications, mobile apps, and custom business platforms for Dubai and UAE companies. Full working day time-zone alignment, RTL-ready architecture, and AED pricing.',
      badge: 'Full Working Day Alignment (GST, UTC+4)',
    },
    solutions: [
      {
        icon: '🌍',
        title: 'Modern RTL & Multilingual UI Architecture',
        desc: 'Bidirectional and internationalization support engineered into frontend frameworks: clean RTL-friendly layout structures, flexible font rendering, and locale switching.'
      },
      {
        icon: '🧾',
        title: 'UAE VAT-Ready Billing & Invoicing',
        desc: 'Custom invoice generators, accounting workflows, and ERP modules built with Federal Tax Authority (FTA) 5% VAT calculation and reporting standards in mind.'
      },
      {
        icon: '💳',
        title: 'UAE Payment Gateways Integration',
        desc: 'Direct integrations with UAE payment processors including Telr, PayTabs, Network International, Stripe UAE, Apple Pay, and Tamara / Tabby BNPL.'
      },
      {
        icon: '💬',
        title: 'WhatsApp Messaging Workflows',
        desc: 'Automated customer enquiry capture, instant order updates, quote dispatches, and CRM lead routing directly via WhatsApp.'
      },
      {
        icon: '⏰',
        title: 'Gulf Standard Time alignment',
        desc: 'India Standard Time is only 1.5 hours ahead of UAE Gulf Standard Time (GST), giving our engineering teams complete real-time working day overlap.'
      },
      {
        icon: '🏢',
        title: 'Enterprise CRM & Business Solutions',
        desc: 'Custom sales pipelines, automated enquiry routing, client portals, and multi-currency reporting tailored for modern businesses.'
      }
    ],
    servicesList: [
      { name: 'Custom CRM & Business Portals', desc: 'Bespoke pipelines, WhatsApp lead routing, and operational workflows.' },
      { name: 'Mobile Apps (iOS & Android)', desc: 'Bilingual mobile apps with biometric login and UAE payment gateways.' },
      { name: 'High-Converting Ecommerce', desc: 'Multi-currency storefronts with localized checkout and express payment options.' },
      { name: 'Internal ERP & Operations', desc: 'Automate approvals, VAT-ready invoices, and multi-branch inventory.' }
    ],
    faqs: [
      {
        q: 'What is the time difference between India and Dubai?',
        a: 'India is only 1 hour and 30 minutes ahead of Dubai (GST). This allows virtually 100% working day alignment for live calls, instant messaging, and rapid iteration.'
      },
      {
        q: 'Can you integrate local UAE payment processors like Telr or PayTabs?',
        a: 'Yes. We can integrate UAE gateways including Telr, PayTabs, Network International, as well as Stripe UAE, Apple Pay, and Tabby.'
      },
      {
        q: 'Do you support right-to-left (RTL) and multilingual interfaces?',
        a: 'Yes. We build responsive RTL layouts with proper Arabic typography, mirrored icons, and localized number formats.'
      },
      {
        q: 'Can we pay in UAE Dirhams (AED)?',
        a: 'Yes, quotes and milestone invoices can be settled in AED or USD through straightforward bank wire or payment card transfers.'
      }
    ]
  },
  {
    slug: 'india',
    path: '/india/',
    countryCode: 'IN',
    countryName: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    locale: 'en_IN',
    htmlLang: 'en-IN',
    metaTitle: 'Software & App Development for Indian Businesses | Atech',
    metaDescription: 'Custom web and mobile app development for Indian businesses. Senior engineers, INR milestone invoicing, UPI/Razorpay integrations, and DPDP Act-aware builds.',
    ctaOrder: ['whatsapp', 'booking'],
    hero: {
      eyebrow: 'HQ Indore · Senior Engineering Delivery',
      title: 'Custom Software & Mobile Apps for Indian Businesses',
      subtitle: 'We engineer bespoke web applications, mobile apps, and business platforms for Indian startups and enterprises. INR milestone invoicing, direct engineering access, and zero timezone gap.',
      badge: 'Same Time Zone (IST): Full Working-Day Overlap',
    },
    solutions: [
      {
        icon: '₹',
        title: 'INR Milestone Pricing & Invoicing',
        desc: 'Transparent pricing and milestone-based invoicing in Indian Rupees (INR). GST-registered. Invoices include GSTIN and GST breakdown. Fixed-scope deliverables ensure predictable budgets with milestones tied to verified code releases.'
      },
      {
        icon: '💳',
        title: 'Indian Payment Integrations (UPI, Razorpay, PayU)',
        desc: 'Seamless integration with Indian payment infrastructure: instant UPI QR & intent flows, Razorpay, and PayU for cards and net banking.'
      },
      {
        icon: '💬',
        title: 'WhatsApp Messaging Integrations',
        desc: 'Automate customer lead capture, order confirmations, payment receipts, status notifications, and customer support routing directly through WhatsApp.'
      },
      {
        icon: '🛡️',
        title: 'DPDP Act-Aware Architecture',
        desc: 'We engineer digital systems with India\'s Digital Personal Data Protection (DPDP) Act principles in mind: clear notice mechanisms, purpose-specific consent logging, and robust access controls. We build with DPDP Act principles in mind and do not claim certification.'
      },
      {
        icon: '🌐',
        title: 'Multilingual User Experience Architecture',
        desc: 'Frontends engineered with internationalization (i18n) frameworks, allowing multi-language UI toggles, localized form labels, and regional notification flows across web and mobile.'
      },
      {
        icon: '🕒',
        title: 'Same Time Zone (IST): Full Working-Day Overlap',
        desc: 'Full 100% working day alignment in Indian Standard Time (IST). Live sprint reviews, immediate Slack/WhatsApp collaboration, and rapid turnaround without international timezone delays.'
      },
      {
        icon: '📍',
        title: 'Indore-Based Engineering Team',
        desc: 'Headquartered in Indore, Madhya Pradesh. Direct remote collaboration with our team via scheduled video walkthroughs, shared communication channels, and real-time sprint tracking.'
      }
    ],
    servicesList: [
      { name: 'Custom CRM & ERP Software', desc: 'Bespoke operational systems, distributor portals, and internal workflows tailored to Indian business models.' },
      { name: 'Mobile Apps (Flutter & iOS/Android)', desc: 'Fast, high-performance Android and iOS mobile applications with native UPI checkout and offline sync.' },
      { name: 'Ecommerce & B2B Wholesaler Portals', desc: 'Custom storefronts with multi-tier pricing, bulk ordering, and integrated Indian payment gateways.' },
      { name: 'Custom Web Apps & Portals', desc: 'Modern web platforms built with React, Node.js, secure authentication, and cloud scalability.' }
    ],
    faqs: [
      {
        q: 'How are milestone payments and invoicing handled for Indian businesses?',
        a: 'We provide structured milestone-based proposals in Indian Rupees (INR). We are GST-registered; invoices include our GSTIN and a clear GST tax breakdown. Payments are split across clear deliverables (e.g. architecture & wireframes, MVP core, final release), with invoices settled via direct NEFT/RTGS/IMPS bank transfer or online payment gateways.'
      },
      {
        q: 'Which Indian payment gateways do you integrate?',
        a: 'We can integrate leading Indian payment processors including Razorpay, PayU, and Stripe India, supporting UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking.'
      },
      {
        q: 'How do you address data privacy under the DPDP Act?',
        a: 'We architect platforms with Digital Personal Data Protection (DPDP) Act principles in mind: explicit user consent mechanisms, data minimization, secure encrypted storage, and straightforward mechanisms for users to request data correction or erasure. We build with DPDP Act principles in mind and never claim government certification.'
      },
      {
        q: 'Can our website or application support multiple languages?',
        a: 'Yes, we architect internationalization (i18n) from the foundation, allowing clean multi-language switching, localized validation messages, and regional notification templates.'
      },
      {
        q: 'Are in-person discovery or review meetings possible?',
        a: 'Our core engineering and leadership team is based in Indore, Madhya Pradesh. We conduct detailed virtual architecture and scoping workshops via video conference, with in-person sessions possible subject to scheduling and mutual agreement.'
      },
      {
        q: 'Who owns the intellectual property and source code?',
        a: 'You own 100% of the intellectual property, source code, and design assets upon full payment of the relevant invoices. We provide full Git repository access with zero proprietary lock-in. We are happy to sign an NDA before you share confidential requirements.'
      }
    ]
  }
];

export const getMarketBySlug = (slug) => markets.find((m) => m.slug === slug);
export default markets;
