/**
 * Global Business Configuration (Single Source of Truth)
 * HARD RULE: Read all business details from this config file.
 */

export const BOOKING_URL = 'https://cal.com/priyanshuatech/30min';

export const config = {
  companyName: 'Atech Infotech',
  tagline: 'Software Development Company',
  foundedYear: '2024',
  experienceYears: '15+',
  baseUrl: 'https://www.atechinfotech.com',
  
  // Contact details
  phone: '+91 7678410628',
  phoneDisplay: '+91 7678410628',
  email: 'priyanshu@atechinfotech.com', // Official domain contact email
  domainEmailPlaceholder: '[TODO: hello@atechinfotech.com, a domain email]',
  
  // WhatsApp: link format https://wa.me/<number without + or spaces>
  whatsappNumber: '917678410628',
  whatsappUrl: 'https://wa.me/917678410628',
  getWhatsAppLink: (text = 'Hi Atech Infotech, I would like to discuss a project.') => 
    `https://wa.me/917678410628?text=${encodeURIComponent(text)}`,
  
  // Booking URL (Calendly/Cal.com)
  bookingUrl: BOOKING_URL,
  bookingPlaceholder: BOOKING_URL,
  
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
    uae: 'Full working day overlap (GST, only 1.5h time difference)',
    uk: '9:00 AM – 1:30 PM GMT / 2:30 PM BST UK overlap',
    canada: 'Evening-IST calls by arrangement (morning EST/EDT alignment)',
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

  // Web3Forms endpoint & contact settings
  contactFormEndpoint: 'https://api.web3forms.com/submit',
  web3FormsKey: 'e6c3c45b-47a9-4bc8-95bb-c7da12ed2352',
};

export default config;
