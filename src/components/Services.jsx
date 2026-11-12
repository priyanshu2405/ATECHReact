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
        description: 'Deployment, CI/CD pipelines and hosting setup so your product runs reliably after launch.',
        features: ['Deployment', 'CI/CD Pipelines', 'Docker', 'Hosting Setup'],
        color: '#4cc9f0',
        gradient: 'linear-gradient(135deg, rgba(76, 201, 240, 0.15), rgba(76, 201, 240, 0.05))',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Custom CRM, ERP & Automation',
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
                                <a href="#contact" className="service-card__link" style={{ color: service.color }}
                                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    Discuss a project
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
