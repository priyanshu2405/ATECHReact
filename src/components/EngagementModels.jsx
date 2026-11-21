import React, { useState } from 'react';
import './EngagementModels.css';
import { currencies, engagementModels, servicePricingRanges, formatPriceDisplay } from '../data/pricing';
import { trackPricingView, trackBookingClick } from '../analytics';
import config from '../data/config';

const EngagementModels = ({ showServicesList = true }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('GBP');

    const handleCurrencyChange = (code) => {
        setSelectedCurrency(code);
        trackPricingView(code);
    };

    const handleModelCTA = () => {
        trackBookingClick('pricing_model');
        if (config.bookingUrl) {
            window.open(config.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="section engagement-models" id="pricing">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Predictable Investment</div>
                    <h2 className="section-title">
                        Flexible <span className="gradient-text">Engagement Models</span>
                    </h2>
                    <p className="section-subtitle">
                        Choose the collaboration model that matches your product roadmap and budget.
                    </p>
                </div>

                {/* Currency Switcher */}
                <div className="pricing__currency-toggle-wrap">
                    <span className="pricing__currency-label">Select Currency:</span>
                    <div className="pricing__currency-buttons" role="group" aria-label="Currency selection">
                        {currencies.map((curr) => (
                            <button
                                key={curr.code}
                                type="button"
                                className={`pricing__currency-btn ${selectedCurrency === curr.code ? 'active' : ''}`}
                                onClick={() => handleCurrencyChange(curr.code)}
                            >
                                <span className="pricing__currency-flag">{curr.flag}</span>
                                <span className="pricing__currency-code">{curr.code}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3 Main Engagement Models */}
                <div className="models__grid">
                    {engagementModels.map((model) => {
                        const rawPrice = model.pricing[selectedCurrency];
                        const displayPrice = formatPriceDisplay(rawPrice);

                        return (
                            <div
                                className={`model-card glass-card ${model.popular ? 'model-card--popular' : ''}`}
                                key={model.id}
                            >
                                {model.popular && (
                                    <div className="model-card__popular-badge">{model.badge}</div>
                                )}

                                <div className="model-card__header">
                                    <h3 className="model-card__title">{model.name}</h3>
                                    <p className="model-card__tagline">{model.tagline}</p>
                                </div>

                                <div className="model-card__price-box">
                                    <div className="model-card__price-amount">{displayPrice}</div>
                                    <div className="model-card__price-period">
                                        {displayPrice === 'Request a quote' ? 'tailored proposal' : model.billingPeriod}
                                    </div>
                                </div>

                                <div className="model-card__ideal-for">
                                    <strong>Ideal for:</strong> {model.idealFor}
                                </div>

                                <ul className="model-card__features">
                                    {model.features.map((feat) => (
                                        <li key={feat}>
                                            <span className="model-card__check">✓</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="model-card__footer">
                                    <button
                                        type="button"
                                        className={`btn ${model.popular ? 'btn-primary' : 'btn-ghost'} model-card__btn`}
                                        onClick={handleModelCTA}
                                    >
                                        Choose {model.name}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional Service Starting From Ranges */}
                {showServicesList && (
                    <div className="pricing__services-breakdown">
                        <div className="pricing__services-header">
                            <h3 className="pricing__services-title">Indicative Ranges by Service</h3>
                            <p className="pricing__services-sub">
                                Based on typical project scopes. Exact proposals are calculated upon review of your requirements.
                            </p>
                        </div>

                        <div className="pricing__services-grid">
                            {servicePricingRanges.map((srv) => {
                                const rawSrvPrice = srv.startingPrices[selectedCurrency];
                                const displaySrvPrice = formatPriceDisplay(rawSrvPrice);

                                return (
                                    <div className="pricing__service-item glass-card" key={srv.serviceSlug}>
                                        <div className="pricing__service-info">
                                            <h4 className="pricing__service-name">{srv.serviceName}</h4>
                                            <p className="pricing__service-desc">{srv.description}</p>
                                            <span className="pricing__service-timeline">⏱ {srv.timeline}</span>
                                        </div>
                                        <div className="pricing__service-price-wrap">
                                            <span className="pricing__service-starting-lbl">Starting from</span>
                                            <span className="pricing__service-price">{displaySrvPrice}</span>
                                            <a href="#contact" className="pricing__service-quote-btn">Enquire →</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EngagementModels;
