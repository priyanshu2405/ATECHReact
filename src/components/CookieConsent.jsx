import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const COOKIE_KEY = 'atech_cookie_consent_v1';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_KEY);
        if (!stored) {
            // Short delay so it doesn't trigger layout shift during initial paint
            const timer = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const updateGtmConsent = (granted) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'consent_update',
                consent_mode: granted ? 'granted' : 'denied'
            });
        }
    };

    const handleAccept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        updateGtmConsent(true);
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        updateGtmConsent(false);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="region" aria-label="Cookie Consent Banner">
            <div className="cookie-banner__inner">
                <div className="cookie-banner__content">
                    <p className="cookie-banner__text">
                        We use cookies and privacy-friendly analytics to analyze website traffic and optimize your experience.
                        We build with UK/EU GDPR and Canadian PIPEDA standards in mind. Read our{' '}
                        <a href="/privacy-policy/" className="cookie-banner__link">Privacy Policy</a>.
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button
                        type="button"
                        className="btn btn-sm btn-ghost cookie-banner__btn"
                        onClick={handleDecline}
                    >
                        Decline
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary cookie-banner__btn"
                        onClick={handleAccept}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
