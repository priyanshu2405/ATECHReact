import React from 'react';
import './WhatsAppButton.css';
import config from '../data/config';
import { trackWhatsAppClick } from '../analytics';

/**
 * Global Sticky WhatsApp Button
 * Bottom-right on mobile and desktop, accessible, elevated z-index, positioned above banners.
 */
const WhatsAppButton = () => {
    const handleClick = () => {
        trackWhatsAppClick('floating_button');
    };

    return (
        <a
            href={config.getWhatsAppLink('Hi Atech Infotech, I would like to discuss a project.')}
            className="wa-floating-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Atech Infotech on WhatsApp"
            onClick={handleClick}
        >
            <span className="wa-floating-btn__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.84 2.42-1.45 0-2.87-.38-4.12-1.11l-.3-.18-3.06.8 1.03-2.98-.19-.31c-.81-1.31-1.24-2.83-1.24-4.48 0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
                </svg>
            </span>
            <span className="wa-floating-btn__tooltip">Chat on WhatsApp</span>
        </a>
    );
};

export default WhatsAppButton;
