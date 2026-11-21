import React, { useState, useEffect } from 'react';
import './SuggestionBanner.css';
import { getRegionConfig } from '../data/regions';
import { isBannerDismissed, dismissBanner } from '../utils/region';

const SuggestionBanner = ({ region = 'global' }) => {
    // Default to dismissed to avoid flash before client checks cookie
    const [dismissed, setDismissed] = useState(true);

    useEffect(() => {
        if (region && region !== 'global') {
            const alreadyDismissed = isBannerDismissed(region);
            setDismissed(alreadyDismissed);
        } else {
            setDismissed(true);
        }
    }, [region]);

    if (dismissed || !region || region === 'global') {
        return null;
    }

    const regionConfig = getRegionConfig(region);
    if (!regionConfig || !regionConfig.banner) {
        return null;
    }

    const handleDismiss = () => {
        dismissBanner(region);
        setDismissed(true);
    };

    return (
        <aside
            className="suggestion-banner"
            role="complementary"
            aria-label="Regional website recommendation"
        >
            <div className="container suggestion-banner__inner">
                <div className="suggestion-banner__content">
                    <span className="suggestion-banner__flag" aria-hidden="true">{regionConfig.flag}</span>
                    <span className="suggestion-banner__text">{regionConfig.banner.text}</span>
                    <a href={regionConfig.banner.linkUrl} className="suggestion-banner__link">
                        {regionConfig.banner.linkText}
                    </a>
                </div>
                <button
                    type="button"
                    className="suggestion-banner__close"
                    onClick={handleDismiss}
                    aria-label="Dismiss country recommendation"
                    title="Dismiss notification"
                >
                    &times;
                </button>
            </div>
        </aside>
    );
};

export default SuggestionBanner;
