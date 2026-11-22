import React from 'react';
import './WhyUs.css';

const reasons = [
    {
        icon: '👨‍💻',
        title: 'Senior-Led Delivery (15+ Years)',
        description: 'You work directly with experienced full-stack engineers who bring 15+ years of software delivery leadership to your project.',
        highlight: '15+ Years Experience'
    },
    {
        icon: '🎯',
        title: 'Clear Fixed-Scope Milestones',
        description: 'Every project begins with a well-defined specification and agreed milestones. You pay for agreed working software, with zero budget surprises.',
        highlight: 'Zero Scope Creep'
    },
    {
        icon: '🔐',
        title: 'You Own All Code & IP',
        description: 'Upon milestone completion and final payment, all Git repositories, documentation, and digital assets belong 100% to you. No vendor lock-in, licensing traps, or exit fees.',
        highlight: '100% IP Ownership'
    },
    {
        icon: '💬',
        title: 'Transparent Communication',
        description: 'Weekly recorded video demos, shared project boards (Jira/Trello), and real-time collaboration via Slack, Teams, or WhatsApp during your time zone.',
        highlight: 'Weekly Demos'
    }
];

const WhyUs = () => {
    return (
        <section className="section why-us" id="why-us">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Why Work With Us</div>
                    <h2 className="section-title">
                        Engineered for <span className="gradient-text">Trust &amp; Certainty</span>
                    </h2>
                    <p className="section-subtitle">
                        How we eliminate the usual risks of offshore software development for international clients.
                    </p>
                </div>

                <div className="why-us__grid">
                    {reasons.map((item, index) => (
                        <div className="why-us__card glass-card" key={item.title}>
                            <div className="why-us__top">
                                <span className="why-us__icon">{item.icon}</span>
                                <span className="why-us__index">0{index + 1}</span>
                            </div>
                            <span className="why-us__badge">{item.highlight}</span>
                            <h3 className="why-us__card-title">{item.title}</h3>
                            <p className="why-us__card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
