import React from 'react';
import './Process.css';

const steps = [
    {
        num: '01',
        title: 'Discovery Call',
        desc: 'A focused 30-minute discussion to understand your business objectives, target users, and technical prerequisites.'
    },
    {
        num: '02',
        title: 'Scope & Fixed Quote',
        desc: 'We deliver a written technical specification, architecture outline, transparent milestone quote, and firm delivery timeline.'
    },
    {
        num: '03',
        title: 'Design & Milestones',
        desc: 'Interactive wireframes, user journeys, and database models mapped out into sprint milestones for clear sign-off.'
    },
    {
        num: '04',
        title: 'Build with Weekly Demos',
        desc: 'Active engineering with continuous integration, weekly recorded video walkthroughs, and direct Slack/Teams feedback.'
    },
    {
        num: '05',
        title: 'Launch & Support',
        desc: 'Production deployment, rigorous UAT, complete IP handover, and an included 30-day post-launch warranty window.'
    }
];

const Process = () => {
    return (
        <section className="section process-section" id="process">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">How We Work</div>
                    <h2 className="section-title">
                        A Transparent <span className="gradient-text">5-Step Delivery</span> Model
                    </h2>
                    <p className="section-subtitle">
                        From initial brief to production launch: predictable, milestone-driven, and collaborative.
                    </p>
                </div>

                <div className="process__grid">
                    {steps.map((step) => (
                        <div className="process-card glass-card" key={step.num}>
                            <div className="process-card__number">{step.num}</div>
                            <h3 className="process-card__title">{step.title}</h3>
                            <p className="process-card__desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
