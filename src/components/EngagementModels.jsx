import React, { useState, useEffect } from 'react';
import './EngagementModels.css';
import { currencies, engagementModels, servicePricingRanges, formatPriceDisplay } from '../data/pricing';
import { trackPricingView, trackBookingClick } from '../analytics';
import config from '../data/config';

const EngagementModels = ({ showServicesList = true, defaultCurrency = 'GBP' }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

    useEffect(() => {
        if (defaultCurrency) {
            setSelectedCurrency(defaultCurrency);
        }
    }, [defaultCurrency]);

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
                                        Request a Scope &amp; Quote
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional Service Pricing Ranges Table */}
                {showServicesList && (
                    <div className="pricing__services-wrap glass-card">
                        <div className="pricing__services-header">
                            <h3 className="pricing__services-title">Starting Rates by Project Type ({selectedCurrency})</h3>
                            <p className="pricing__services-sub">
                                Indicative ranges based on technical scope. Every project receives an itemized milestone breakdown before work begins.
                            </p>
                        </div>

                        <div className="pricing__table-container">
                            <table className="pricing__table">
                                <thead>
                                    <tr>
                                        <th>Project Type</th>
                                        <th>Typical Scope</th>
                                        <th>Starting From ({selectedCurrency})</th>
                                        <th>Timeline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicePricingRanges.map((srv) => {
                                        const raw = srv.startingPrices?.[selectedCurrency] || srv.pricing?.[selectedCurrency] || '';
                                        const formatted = formatPriceDisplay(raw);
                                        const slug = srv.serviceSlug || srv.slug;
                                        const name = srv.serviceName || srv.title;
                                        const timeline = srv.timeline || srv.typicalTimeline;

                                        return (
                                            <tr key={slug}>
                                                <td className="pricing__td-name">
                                                    <a href={`/services/${slug}/`}>{name}</a>
                                                </td>
                                                <td className="pricing__td-desc">{srv.description}</td>
                                                <td className="pricing__td-price">
                                                    <strong>{formatted}</strong>
                                                </td>
                                                <td className="pricing__td-timeline">{timeline}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EngagementModels;
