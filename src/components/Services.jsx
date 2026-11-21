import React from 'react';
import './Services.css';
import services from '../data/services';

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Core Engineering Capabilities</div>
                    <h2 className="section-title">
                        Tailored Software for <span className="gradient-text">Growing Businesses</span>
                    </h2>
                    <p className="section-subtitle">
                        Fixed-scope milestones, senior engineering, and zero per-seat licensing traps.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, i) => {
                        const isSmaller = service.slug === 'seo-digital-marketing';
                        return (
                            <div
                                className={`service-card glass-card ${service.featured ? 'service-card--featured' : ''} ${isSmaller ? 'service-card--compact' : ''}`}
                                key={service.slug}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <div className="service-card__glow" style={{ background: service.color }} />
                                
                                <div className="service-card__top">
                                    <span className="service-card__icon" style={{ borderColor: `${service.color}40`, background: `${service.color}15` }}>
                                        {service.icon}
                                    </span>
                                    {service.featured && (
                                        <span className="service-card__badge" style={{ color: service.color, borderColor: `${service.color}40` }}>
                                            Core Strength
                                        </span>
                                    )}
                                </div>

                                <h3 className="service-card__title">
                                    <a href={`/services/${service.slug}/`}>{service.shortTitle || service.nav}</a>
                                </h3>

                                <p className="service-card__description">{service.description}</p>

                                <ul className="service-card__features">
                                    {service.features.map((feature) => (
                                        <li key={feature}>
                                            <span className="service-card__check" style={{ color: service.color }}>✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-card__footer">
                                    <a
                                        href={`/services/${service.slug}/`}
                                        className="service-card__link"
                                        style={{ color: service.color }}
                                    >
                                        Explore {service.nav}
                                        <span className="service-card__arrow">→</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
