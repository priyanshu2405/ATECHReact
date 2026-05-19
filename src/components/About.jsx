import React from 'react';
import './About.css';

const milestones = [
    { year: '2024', event: 'Founded in Indore, India' },
    { year: '2024', event: 'Expanded to cloud services' },
    { year: '2026', event: '10+ successful projects' },
    { year: '2026', event: 'Launched AI division' },

];

const values = [
    {
        icon: '🚀',
        title: 'Innovation First',
        desc: 'We stay ahead of the curve by embracing cutting-edge technologies and creative approaches.',
    },
    {
        icon: '🤝',
        title: 'Client Partnership',
        desc: 'We treat each client as a long-term partner, not just a project — your success is our success.',
    },
    {
        icon: '⚡',
        title: 'Agile Excellence',
        desc: 'Fast, iterative delivery with continuous improvement to meet evolving business needs.',
    },
    {
        icon: '🔒',
        title: 'Security & Trust',
        desc: 'Security is built into everything we create — from code to infrastructure to processes.',
    },
];

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about__grid">
                    {/* Left Column */}
                    <div className="about__content">
                        <div className="section-tag">Who We Are</div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                            Building the Digital <span className="gradient-text">Future Together</span>
                        </h2>
                        <p className="about__text">
                            Atech Infotech is a premier IT solutions company founded in 2012, headquartered in Pune, India.
                            With over a decade of experience, we have built a reputation for delivering robust, scalable,
                            and innovative technology solutions to clients across the globe.
                        </p>
                        <p className="about__text">
                            Our team of 50+ seasoned engineers, designers, and strategists work collaboratively to
                            transform complex business challenges into elegant digital solutions. From startups to Fortune 500
                            companies, we empower organizations at every scale.
                        </p>

                        <div className="about__values">
                            {values.map((v) => (
                                <div className="about__value-card glass-card" key={v.title}>
                                    <span className="about__value-icon">{v.icon}</span>
                                    <div>
                                        <h4 className="about__value-title">{v.title}</h4>
                                        <p className="about__value-desc">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="about__visual">
                        <div className="about__card-stack">
                            <div className="about__main-card glass-card">
                                <div className="about__card-header">
                                    <div className="about__avatar-group">
                                        {['A', 'B', 'C', 'D'].map((l, i) => (
                                            <div key={l} className="about__avatar" style={{ '--i': i }}>{l}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="about__card-title">Global Team</p>
                                        <p className="about__card-sub">50+ Expert Engineers</p>
                                    </div>
                                </div>
                                <div className="about__metrics">
                                    <div className="about__metric">
                                        <div className="about__metric-bar">
                                            <div className="about__metric-fill" style={{ width: '97%', background: 'var(--gradient-primary)' }}></div>
                                        </div>
                                        <div className="about__metric-label">
                                            <span>Client Satisfaction</span><span>97%</span>
                                        </div>
                                    </div>
                                    <div className="about__metric">
                                        <div className="about__metric-bar">
                                            <div className="about__metric-fill" style={{ width: '92%', background: 'var(--gradient-accent)' }}></div>
                                        </div>
                                        <div className="about__metric-label">
                                            <span>On-Time Delivery</span><span>92%</span>
                                        </div>
                                    </div>
                                    <div className="about__metric">
                                        <div className="about__metric-bar">
                                            <div className="about__metric-fill" style={{ width: '88%', background: 'linear-gradient(135deg, #06d6a0, #4cc9f0)' }}></div>
                                        </div>
                                        <div className="about__metric-label">
                                            <span>Client Retention</span><span>88%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Milestone Timeline */}
                            <div className="about__timeline glass-card">
                                <h4 className="about__timeline-title">Our Journey</h4>
                                <div className="about__milestones">
                                    {milestones.map((m, i) => (
                                        <div className="about__milestone" key={m.year}>
                                            <div className="about__milestone-year">{m.year}</div>
                                            <div className="about__milestone-line">
                                                <div className="about__milestone-dot"></div>
                                                {i < milestones.length - 1 && <div className="about__milestone-connector"></div>}
                                            </div>
                                            <div className="about__milestone-event">{m.event}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
