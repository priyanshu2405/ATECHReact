import React from 'react';
import './AboutPage.css';
import config from '../data/config';
import Contact from '../components/Contact';

const values = [
    {
        icon: '🛡️',
        title: 'Senior Engineering Integrity',
        desc: 'You work directly with seasoned full-stack developers with 15+ years of software delivery experience.'
    },
    {
        icon: '🎯',
        title: 'Fixed Milestones & Zero Scope Creep',
        desc: 'Software development should not be an open-ended financial risk. We commit to defined deliverables, firm timelines, and milestone sign-offs.'
    },
    {
        icon: '🔐',
        title: 'Complete IP & Code Ownership',
        desc: 'You own 100% of your source code, database schemas, and designs. Complete repository transfer and IP assignment take place upon milestone completion and final payment.'
    },
    {
        icon: '🌐',
        title: 'International Overlap & Empathy',
        desc: 'We respect the schedules and standards of international and domestic clients, offering reliable overlap hours for the UK, Canada, UAE, and India.'
    }
];

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__badge">
                        <span>Atech Infotech · Founded 2024 · 15+ Years Experience</span>
                    </div>
                    <h1 className="about-hero__title">
                        Senior Software Engineering for <span className="gradient-text">International Leaders</span>
                    </h1>
                    <p className="about-hero__subtitle">
                        We build custom web apps, cross-platform mobile apps, and business software platforms
                        for growing enterprises across the UK, Canada, the UAE, India, and worldwide.
                    </p>
                </div>
            </section>

            {/* Company Story & 15+ Years Experience */}
            <section className="section about-story">
                <div className="container about-story__grid">
                    <div className="about-story__content">
                        <div className="section-tag">Our Story</div>
                        <h2 className="section-title">
                            Built on Practical Engineering, <span className="gradient-text">Not Agency Overhead</span>
                        </h2>
                        <p className="about-story__p">
                            Atech Infotech was founded with a straightforward mission: provide fast-growing businesses
                            in the UK, Canada, the UAE, and India with direct access to senior full-stack developers without
                            the inflated agency fees, sales middlemen, or rotating account managers common in traditional agencies.
                        </p>
                        <p className="about-story__p">
                            With over <strong>15 years of technical leadership experience</strong> across complex enterprise
                            architectures, we have planned and shipped business systems ranging from multi-tenant CRMs and
                            educational voucher portals to high-converting ecommerce platforms and Flutter mobile apps.
                        </p>
                        <p className="about-story__p">
                            Headquartered in Indore, India—one of the country's most vibrant, high-infrastructure technology
                            hubs—we combine senior technical expertise with agile milestone delivery.
                        </p>
                    </div>

                    <div className="about-story__stats glass-card">
                        <div className="about-stat">
                            <span className="about-stat__num">15+</span>
                            <span className="about-stat__label">Years Senior Engineering</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat__num">100%</span>
                            <span className="about-stat__label">Code &amp; IP Ownership Handed to You</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat__num">0</span>
                            <span className="about-stat__label">Per-User Recurring License Traps</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat__num">3</span>
                            <span className="about-stat__label">Primary International Overlap Regions (UK, CA, UAE)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section about-founder">
                <div className="container">
                    <div className="founder-card glass-card">
                        <div className="founder-card__avatar-wrap">
                            <div className="founder-card__avatar">
                                {config.founder.name ? config.founder.name.split(' ').map(n => n[0]).join('') : 'FD'}
                            </div>
                        </div>

                        <div className="founder-card__content">
                            <span className="founder-card__tag">Leadership</span>
                            <h3 className="founder-card__name">{config.founder.name}</h3>
                            <p className="founder-card__title">{config.founder.title}</p>
                            <p className="founder-card__bio">
                                {config.founder.bio}
                            </p>
                            <p className="founder-card__placeholder-note" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                [TODO: Founder photo &amp; LinkedIn profile URL can be added in config.js]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working with International Clients */}
            <section className="section about-intl">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Global Delivery Standards</div>
                        <h2 className="section-title">
                            Working With <span className="gradient-text">International Clients</span>
                        </h2>
                        <p className="section-subtitle">
                            How we ensure smooth, predictable collaboration for clients in London, Toronto, Dubai, and beyond.
                        </p>
                    </div>

                    <div className="about-intl__grid">
                        <div className="about-intl__card glass-card">
                            <span className="about-intl__icon">🕒</span>
                            <h3>Daily Time-Zone Overlap</h3>
                            <p>
                                We structure our engineering shifts to overlap with UK working hours (9:00 AM – 1:30 PM GMT / 2:30 PM BST),
                                UAE full working hours, and Canadian morning schedules via evening-IST calls by arrangement.
                            </p>
                        </div>

                        <div className="about-intl__card glass-card">
                            <span className="about-intl__icon">🎥</span>
                            <h3>Asynchronous &amp; Live Video Demos</h3>
                            <p>
                                Every milestone is backed by a recorded video walkthrough and live demo call, so non-technical
                                stakeholders can see real, functioning software before signing off.
                            </p>
                        </div>

                        <div className="about-intl__card glass-card">
                            <span className="about-intl__icon">💳</span>
                            <h3>Multi-Currency Invoicing</h3>
                            <p>
                                We invoice in British Pounds (GBP), Canadian Dollars (CAD), UAE Dirhams (AED), or USD,
                                eliminating exchange rate friction and surprise contractor conversion fees.
                            </p>
                        </div>

                        <div className="about-intl__card glass-card">
                            <span className="about-intl__icon">📜</span>
                            <h3>Confidentiality &amp; Clean Handover</h3>
                            <p>
                                We are happy to sign an NDA before you share confidential requirements, maintain clean Git repository commits,
                                and transfer all assets without vendor lock-in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section about-values">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Core Principles</div>
                        <h2 className="section-title">
                            Our <span className="gradient-text">Operating Values</span>
                        </h2>
                    </div>

                    <div className="about-values__grid">
                        {values.map((v) => (
                            <div className="about-value-card glass-card" key={v.title}>
                                <span className="about-value-card__icon">{v.icon}</span>
                                <h3 className="about-value-card__title">{v.title}</h3>
                                <p className="about-value-card__desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <Contact
                title="Ready to Discuss Your Project?"
                subtitle="Book a call with our senior engineering team or submit your requirements below."
            />
        </div>
    );
};

export default AboutPage;
