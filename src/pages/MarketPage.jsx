import React, { useEffect } from 'react';
import './MarketPage.css';
import { getMarketBySlug } from '../data/markets';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Process from '../components/Process';
import config from '../data/config';
import { trackBookingClick, trackWhatsAppClick } from '../analytics';

const MarketPage = ({ marketSlug }) => {
    // If not passed as prop, infer from URL
    const slug = marketSlug || window.location.pathname.replace(/^\/|\/$/g, '');
    const market = getMarketBySlug(slug) || getMarketBySlug('uk');

    // Keep India unpublished as noindex until official release
    useEffect(() => {
        if (market.slug === 'india') {
            let meta = document.querySelector('meta[name="robots"]');
            const originalContent = meta ? meta.getAttribute('content') : null;
            if (meta) {
                meta.setAttribute('content', 'noindex,follow');
            } else {
                meta = document.createElement('meta');
                meta.name = 'robots';
                meta.content = 'noindex,follow';
                document.head.appendChild(meta);
            }
            return () => {
                if (meta && originalContent) {
                    meta.setAttribute('content', originalContent);
                }
            };
        }
    }, [market.slug]);

    const handleBooking = () => {
        trackBookingClick(`market_${market.slug}`);
        if (config.bookingUrl) {
            window.open(config.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWhatsApp = () => {
        trackWhatsAppClick(`market_${market.slug}`);
        window.open(
            config.getWhatsAppLink(`Hi Atech Infotech, I am contacting you from ${market.countryName} regarding a software development project.`),
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <div className="market-page">
            {/* Market Hero */}
            <section className="market-hero">
                <div className="container">
                    <div className="market-hero__badge">
                        <span>{market.hero.eyebrow}</span>
                    </div>

                    <h1 className="market-hero__title">
                        {market.hero.title}
                    </h1>

                    <p className="market-hero__subtitle">
                        {market.hero.subtitle}
                    </p>

                    <div className="market-hero__overlap-pill">
                        <span className="market-pill__dot"></span>
                        <span>{market.hero.badge}</span>
                    </div>

                    <div className="market-hero__actions">
                        {market.ctaOrder && market.ctaOrder[0] === 'whatsapp' ? (
                            <>
                                <button
                                    type="button"
                                    className="btn btn-primary market-hero__btn"
                                    onClick={handleWhatsApp}
                                >
                                    💬 WhatsApp Us Direct
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-ghost market-hero__btn"
                                    onClick={handleBooking}
                                >
                                    Book a 30-min call
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="btn btn-primary market-hero__btn"
                                    onClick={handleBooking}
                                >
                                    Book a 30-min call
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-ghost market-hero__btn"
                                    onClick={handleWhatsApp}
                                >
                                    WhatsApp Us Direct
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Solution Blocks (4-6 tailored per market) */}
            <section className="section market-solutions">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Market Specific Solutions</div>
                        <h2 className="section-title">
                            Engineered for <span className="gradient-text">{market.countryName} Compliance &amp; Workflows</span>
                        </h2>
                        <p className="section-subtitle">
                            We build with regional privacy standards, local payment channels, and dedicated time overlap in mind.
                        </p>
                    </div>

                    <div className="market-solutions__grid">
                        {market.solutions.map((sol) => (
                            <div className="market-solution-card glass-card" key={sol.title}>
                                <span className="market-sol__icon">{sol.icon}</span>
                                <h3 className="market-sol__title">{sol.title}</h3>
                                <p className="market-sol__desc">{sol.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Relevant Services */}
            <section className="section market-services">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">High-Demand Capabilities</div>
                        <h2 className="section-title">
                            Core Services for <span className="gradient-text">{market.countryName} Clients</span>
                        </h2>
                    </div>

                    <div className="market-services__grid">
                        {market.servicesList.map((srv) => (
                            <div className="market-srv-card glass-card" key={srv.name}>
                                <h3 className="market-srv-title">{srv.name}</h3>
                                <p className="market-srv-desc">{srv.desc}</p>
                                <a href="#contact" className="market-srv-link">Discuss Scope →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Short Process Section */}
            <Process />

            {/* Localized FAQ with FAQPage Schema */}
            <FAQ
                items={market.faqs}
                title={`Frequently Asked Questions (${market.countryName})`}
                subtitle={`Common questions about contracts, time-zones, payments, and IP protection for ${market.countryName} businesses.`}
            />

            {/* Contact Form with Preselected Country */}
            <Contact
                initialCountry={market.slug === 'uk' ? 'UK' : market.slug === 'canada' ? 'Canada' : market.slug === 'india' ? 'India' : 'UAE'}
                title={`Start Your ${market.countryName} Project`}
                subtitle={`Fixed-scope milestone quote in ${market.currency}. Fast response within 1 business day.`}
            />
        </div>
    );
};

export default MarketPage;
