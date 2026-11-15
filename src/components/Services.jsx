import React from 'react';
import './Services.css';

const services = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: 'Web Development',
        slug: 'website-development',
        description: 'We build fast, scalable web applications and APIs with React, Node.js and Laravel.',
        features: ['React & Node.js', 'Laravel & APIs', 'Progressive Web Apps', 'SEO Optimized'],
        color: '#00c6ff',
        gradient: 'linear-gradient(135deg, rgba(0, 198, 255, 0.15), rgba(0, 114, 255, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
            </svg>
        ),
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and performance.',
        features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment'],
        color: '#7b2ff7',
        gradient: 'linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(123, 47, 247, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        title: 'Cloud & DevOps',
        slug: 'cloud-devops',
        description: 'Deployment, CI/CD pipelines and hosting setup so your product runs reliably after launch.',
        features: ['Deployment', 'CI/CD Pipelines', 'Docker', 'Hosting Setup'],
        color: '#4cc9f0',
        gradient: 'linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(76, 201, 240, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" />
                <circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
            </svg>
        ),
        title: 'Ecommerce Development',
        slug: 'ecommerce-development',
        description: 'Online stores with product catalogues, admin tools, checkout flows and integrations shaped around your business.',
        features: ['Product & category management', 'Admin and order management', 'Payment integrations', 'Responsive storefronts'],
        color: '#f4a261',
        gradient: 'linear-gradient(135deg, rgba(244, 162, 97, 0.15), rgba(244, 162, 97, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4M8 11h6M11 8v6" />
            </svg>
        ),
        title: 'SEO & Digital Marketing',
        slug: 'seo-digital-marketing',
        description: 'Website-focused SEO, content structure and organic search improvements to help relevant customers discover your business.',
        features: ['Technical SEO', 'On-page optimization', 'Keyword and content planning', 'Search visibility setup'],
        color: '#f72585',
        gradient: 'linear-gradient(135deg, rgba(247, 37, 133, 0.15), rgba(247, 37, 133, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Custom CRM, ERP & Automation',
        slug: 'crm-erp-development',
        description: 'Custom CRMs, ERPs and internal tools that replace spreadsheets and manual work with software built around how your business runs.',
        features: ['Custom CRM', 'ERP Solutions', 'Process Automation', 'API Integrations'],
        color: '#06d6a0',
        gradient: 'linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(6, 214, 160, 0.05))',
    },
];

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">What We Do</div>
                    <h2 className="section-title">
                        Our <span className="gradient-text">Core Services</span>
                    </h2>
                    <p className="section-subtitle">
                        From first idea to launch, we build the software your business runs on.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            className="service-card glass-card"
                            key={service.title}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-card__icon" style={{ color: service.color, background: service.gradient }}>
                                {service.icon}
                            </div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.description}</p>
                            <ul className="service-card__features">
                                {service.features.map((f) => (
                                    <li key={f} style={{ '--dot-color': service.color }}>
                                        <span className="feature-dot" style={{ background: service.color }}></span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="service-card__footer">
                                <a href={service.slug ? `/services/${service.slug}/` : '#contact'} className="service-card__link" aria-label={`${service.slug ? `Learn more about ${service.title}` : `Discuss ${service.title}`} with Atech Infotech`} style={{ color: service.color }}>
                                    {service.slug ? 'Explore service' : 'Discuss a project'}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="service-card__glow" style={{ background: service.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
