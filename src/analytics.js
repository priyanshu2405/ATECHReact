// Pushes events to Google Tag Manager's dataLayer. In GTM, create GA4 event tags
// triggered by these custom events: generate_lead, whatsapp_click, phone_click.
export const track = (event, params = {}) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
};
