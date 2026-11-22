/**
 * Regional Personalisation Configuration (Single Source of Truth)
 * Variants differ ONLY in:
 * a) hero sub-headline
 * b) displayed currency in pricing (UK: GBP, Canada: CAD, UAE: AED, global: USD)
 * c) primary CTA (UAE: WhatsApp first, booking second; UK/Canada/global: booking first, WhatsApp second)
 * d) overlap-hours text
 */

export const regions = {
  global: {
    id: 'global',
    code: 'GLOBAL',
    name: 'Global',
    label: 'Global / Auto-detect',
    flag: '🌐',
    currency: 'USD',
    currencySymbol: '$',
    heroSubheadline: 'We design and build websites, ecommerce platforms, mobile apps, and custom CRM/ERP systems, with senior engineers, fixed-scope milestones and full code ownership.',
    ctaOrder: ['booking', 'whatsapp'], // booking first, whatsapp second
    overlapHours: 'HQ India (IST): Mon–Fri: 9:00 AM – 7:00 PM IST · Overlap available for UK, UAE & Canada',
    marketPath: null,
    banner: null
  },
  uk: {
    id: 'uk',
    code: 'GB',
    name: 'United Kingdom',
    label: 'United Kingdom (UK)',
    flag: '🇬🇧',
    currency: 'GBP',
    currencySymbol: '£',
    heroSubheadline: 'We engineer custom web apps, mobile applications, and bespoke CRM platforms for UK enterprises and scaling startups, with senior engineers, fixed-scope milestones and UK morning-to-afternoon overlap.',
    ctaOrder: ['booking', 'whatsapp'], // booking first, whatsapp second
    overlapHours: 'UK overlap: 9:00 AM – 1:30 PM GMT / 2:30 PM BST',
    marketPath: '/uk/',
    banner: {
      text: 'Visiting from the UK? Explore our dedicated UK services & GDPR-aware builds.',
      linkText: 'See UK Page →',
      linkUrl: '/uk/'
    }
  },
  canada: {
    id: 'canada',
    code: 'CA',
    name: 'Canada',
    label: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    currencySymbol: '$',
    heroSubheadline: 'We build bespoke web applications, cross-platform mobile apps, and business systems for Canadian startups and growing businesses, with senior engineers, fixed-scope milestones and evening-IST calls by arrangement.',
    ctaOrder: ['booking', 'whatsapp'], // booking first, whatsapp second
    overlapHours: 'Canada overlap: Evening-IST calls by arrangement (morning EST/EDT alignment)',
    marketPath: '/canada/',
    banner: {
      text: 'Visiting from Canada? Explore our Canadian development services & PIPEDA-aware builds.',
      linkText: 'See Canada Page →',
      linkUrl: '/canada/'
    }
  },
  uae: {
    id: 'uae',
    code: 'AE',
    name: 'United Arab Emirates',
    label: 'Dubai / UAE',
    flag: '🇦🇪',
    currency: 'AED',
    currencySymbol: 'AED ',
    heroSubheadline: 'We engineer high-performance web applications, mobile apps, and custom CRM/ERP platforms for Dubai and UAE companies, with full working-day alignment, RTL-ready architecture, and AED billing.',
    ctaOrder: ['whatsapp', 'booking'], // WhatsApp first, booking second
    overlapHours: 'UAE near-full working day overlap: only 1.5h time difference (GST, UTC+4)',
    marketPath: '/dubai-uae/',
    banner: {
      text: 'Visiting from the UAE? Explore our Dubai & UAE solutions with VAT-ready billing & integrations.',
      linkText: 'See UAE Page →',
      linkUrl: '/dubai-uae/'
    }
  },
  india: {
    id: 'india',
    code: 'IN',
    name: 'India',
    label: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    currencySymbol: '₹',
    heroSubheadline: 'We design and build bespoke software, mobile apps, and custom business platforms for Indian enterprises and growing businesses, with senior engineers, INR milestone invoicing, and local time-zone collaboration.',
    ctaOrder: ['whatsapp', 'booking'], // WhatsApp first, booking second
    overlapHours: 'Same time zone (IST): full working-day overlap',
    marketPath: '/india/',
    banner: null
  }
};

export const countryToRegion = (countryCode) => {
  if (!countryCode) return 'global';
  const c = countryCode.trim().toUpperCase();
  if (c === 'GB') return 'uk';
  if (c === 'CA') return 'canada';
  if (c === 'AE') return 'uae';
  if (c === 'IN') return 'india';
  return 'global';
};

export const getRegionConfig = (regionId) => {
  return regions[regionId] || regions.global;
};

export default regions;
