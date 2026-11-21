// Pushes events to Google Tag Manager's dataLayer (Container: GTM-N5RN9GGR)
// Supported events:
// - generate_lead (contact form submission)
// - whatsapp_click (WhatsApp CTA clicks)
// - booking_click (Calendly / Cal.com booking clicks)
// - phone_click (Direct phone call clicks)
// - view_pricing (Pricing page / engagement model views)

export const track = (event, params = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

export const trackContactSubmit = (params = {}) => track('generate_lead', params);
export const trackWhatsAppClick = (location = 'global') => track('whatsapp_click', { location });
export const trackBookingClick = (location = 'hero') => track('booking_click', { location });
export const trackPhoneClick = (location = 'contact') => track('phone_click', { location });
export const trackPricingView = (currency = 'GBP') => track('view_pricing', { currency });
