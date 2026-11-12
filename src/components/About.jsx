import React from 'react';
import './About.css';

const milestones = [
    { year: '2024', event: 'Founded in Indore, India' },
    { year: '2026', event: '10+ projects delivered' },
];

const process = [
    { title: 'Discovery call', desc: 'We learn what you want to build and who it is for.' },
    { title: 'Scope and proposal', desc: 'A written scope, price and timeline before work starts.' },
    { title: 'Build in milestones', desc: 'You see working software at each milestone.' },
    { title: 'Launch and support', desc: 'We deploy it and stay available after release.' },
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
                        <h2 className="section-title about__title">
                            Software Built <span className="gradient-text">Around Your Business</span>
                        </h2>
                        <p className="about__text">
                            Atech Infotech is a software development company based in Indore, India, founded in 2024. We build web apps, mobile apps and custom business software for startups and growing businesses.
                        </p>
                        <p className="about__text">
                            We work in small, focused teams. You get a clear scope, regular milestones and a direct line to the people building your product.
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
                                <h4 className="about__timeline-title">How we work</h4>
                                <ol className="about__process">
                                    {process.map((s) => (
                                        <li key={s.title}><strong>{s.title}</strong><span>{s.desc}</span></li>
                                    ))}
                                </ol>
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
