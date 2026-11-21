/**
 * Global Business Configuration (Single Source of Truth)
 * HARD RULE: Read all business details from this config file.
 */

export const config = {
  companyName: 'Atech Infotech',
  tagline: 'Software Development Company',
  foundedYear: '2024',
  experienceYears: '15+',
  baseUrl: 'https://www.atechinfotech.com',
  
  // Contact details
  phone: '+91 7678410628',
  phoneDisplay: '+91 7678410628',
  email: 'priyanshu.in@gmail.com', // Active primary contact email
  domainEmailPlaceholder: '[TODO: hello@atechinfotech.com, a domain email]',
  
  // WhatsApp: link format https://wa.me/<number without + or spaces>
  whatsappNumber: '917678410628',
  whatsappUrl: 'https://wa.me/917678410628',
  getWhatsAppLink: (text = 'Hi Atech Infotech, I would like to discuss a project.') => 
    `https://wa.me/917678410628?text=${encodeURIComponent(text)}`,
  
  // Booking URL (Calendly/Cal.com)
  bookingUrl: '', // [TODO: Calendly/Cal.com link] - when empty, booking CTAs link to #contact or open modal
  bookingPlaceholder: '[TODO: Calendly/Cal.com link]',
  
  // Address & Locations
  address: {
    street: '1782 Omaxe City-1',
    locality: 'Indore',
    region: 'Madhya Pradesh',
    postalCode: '452010',
    country: 'India',
    countryCode: 'IN',
    fullFormatted: '1782 Omaxe City-1, Indore, Madhya Pradesh - 452010, India',
  },
  
  // International Markets served
  targetMarkets: ['UK', 'Canada', 'UAE', 'India', 'Worldwide'],
  
  // Business hours & Overlap windows
  businessHours: {
    ist: 'Mon–Fri: 9:00 AM – 7:00 PM IST',
    uae: 'Full overlap with UAE standard business hours (GST, UTC+4)',
    uk: '2:00 PM – 6:00 PM UK time overlap (GMT/BST)',
    canada: '[TODO: Canada overlap window (e.g. 8:00 AM – 11:30 AM EST)]',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },

  // Social Links
  socials: {
    linkedin: '', // [TODO: Company LinkedIn URL]
    github: '',   // [TODO: GitHub URL]
    twitter: '',  // [TODO: Twitter/X URL]
    instagram: '',// [TODO: Instagram URL]
  },

  // Trust Profiles (Clutch / GoodFirms / Upwork)
  // Renders ONLY if URL is populated
  trustProfiles: {
    clutch: '',    // [TODO: Clutch profile URL]
    goodfirms: '', // [TODO: GoodFirms profile URL]
    upwork: '',    // [TODO: Upwork agency/profile URL]
  },

  // Founder Section [TODO: Founder details]
  founder: {
    name: 'Priyanshu Dixit',
    title: 'Founder & CEO',
    bio: '15+ years of software delivery leadership, guiding web, mobile and enterprise systems for clients worldwide.',
    linkedin: '', // [TODO: Founder LinkedIn URL]
    photo: '',    // [TODO: Founder photo URL]
  },

  // Web3Forms endpoint
  web3FormsKey: 'e6c3c45b-47a9-4bc8-95bb-c7da12ed2352',
};

export default config;
