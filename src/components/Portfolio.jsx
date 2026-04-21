import React, { useState } from 'react';
import './Portfolio.css';

const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

const projects = [
    {
        title: 'FinTrack Pro',
        category: 'Web',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        description: 'A comprehensive financial tracking dashboard with real-time analytics, automated reports, and AI-powered insights.',
        color: '#00c6ff',
        icon: '📊',
        metrics: ['2M+ Users', '99.9% Uptime'],
    },
    {
        title: 'MediCare Connect',
        category: 'Mobile',
        tags: ['React Native', 'Firebase'],
        description: 'Telehealth platform connecting patients with doctors, featuring video consultations and prescription management.',
        color: '#7b2ff7',
        icon: '🏥',
        metrics: ['500K Downloads', '4.8 ★ Rating'],
    },
    {
        title: 'CloudVault Platform',
        category: 'Cloud',
        tags: ['AWS', 'Kubernetes', 'Terraform'],
        description: 'Enterprise cloud infrastructure platform providing automated scaling, monitoring, and cost optimization.',
        color: '#4cc9f0',
        icon: '☁️',
        metrics: ['99.99% SLA', '60% Cost Saved'],
    },
    {
        title: 'RetailAI Engine',
        category: 'AI',
        tags: ['Python', 'TensorFlow', 'FastAPI'],
        description: 'Machine learning system for retail giants providing demand forecasting, inventory optimization, and customer personalization.',
        color: '#f72585',
        icon: '🤖',
        metrics: ['35% Revenue Boost', '150+ Retailers'],
    },
    {
        title: 'EduLearn Platform',
        category: 'Web',
        tags: ['Next.js', 'Django', 'Redis'],
        description: 'Next-gen e-learning platform with live classes, AI tutoring, gamification, and real-time progress analytics.',
        color: '#06d6a0',
        icon: '🎓',
        metrics: ['1M+ Students', '50K+ Courses'],
    },
    {
        title: 'DeliverFast App',
        category: 'Mobile',
        tags: ['Flutter', 'Google Maps API'],
        description: 'Last-mile delivery app with real-time tracking, smart route optimization, and driver performance analytics.',
        color: '#f4a261',
        icon: '🚀',
        metrics: ['10M+ Deliveries', '5 Countries'],
    },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = projects.filter(
        (p) => activeCategory === 'All' || p.category === activeCategory
    );

    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Our Work</div>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Real solutions for real businesses. Explore our portfolio of high-impact projects
                        delivered across diverse industries.
                    </p>
                </div>

                <div className="portfolio__filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`portfolio__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio__grid">
                    {filtered.map((project, i) => (
                        <div className="portfolio-card glass-card" key={project.title} style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="portfolio-card__header" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                                <span className="portfolio-card__emoji">{project.icon}</span>
                                <span className="portfolio-card__category" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}15` }}>
                                    {project.category}
                                </span>
                            </div>
                            <div className="portfolio-card__body">
                                <h3 className="portfolio-card__title">{project.title}</h3>
                                <p className="portfolio-card__description">{project.description}</p>

                                <div className="portfolio-card__metrics">
                                    {project.metrics.map((m) => (
                                        <div key={m} className="portfolio-card__metric" style={{ borderColor: `${project.color}30`, background: `${project.color}10` }}>
                                            <span style={{ color: project.color }}>{m}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="portfolio-card__tags">
                                    {project.tags.map((t) => (
                                        <span key={t} className="portfolio-card__tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="portfolio-card__glow" style={{ background: project.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
