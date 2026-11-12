import React, { useState } from 'react';
import './Portfolio.css';

const categories = ['All', 'Web', 'Mobile'];

const projects = [
    {
        title: 'Futura Kitchen Sinks',
        category: 'Web',
        url: 'https://futurasink.com/',
        tags: ['React.js', 'Node.js', 'WhatsApp enquiries'],
        description: 'Product catalogue website for a kitchen sink and fittings manufacturer, with catalogue download and WhatsApp enquiry forms.',
        color: '#ec2027',
        icon: '🚰',
    },
    {
        title: 'UniCou Exam Vouchers',
        category: 'Web',
        url: 'https://unicouuk.janshaurya.org/',
        tags: ['Voucher platform', 'Agent accounts', 'Bulk vouchers'],
        description: 'Exam voucher platform for students, education agents and institutions, with agent accounts and bulk voucher access.',
        color: '#06d6a0',
        icon: '🎓',
    },
    {
        title: 'Multi-Tenant CRM Platform',
        category: 'Web',
        tags: ['Node.js', 'React', 'REST API'],
        description: 'A standalone CRM that serves multiple businesses, with a generic integration API so it can connect to other platforms.',
        color: '#00c6ff',
        icon: '📊',
    },
    {
        title: 'Flutter App with Laravel Backend',
        category: 'Mobile',
        tags: ['Flutter', 'Laravel', 'REST API'],
        description: 'Android and iOS app that shares a backend API with its Laravel website.',
        color: '#7b2ff7',
        icon: '📱',
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
                        A selection of products we have built. Ask us for details on a call.
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
                                {project.url && (
                                    <a className="portfolio-card__link" href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: project.color }}>
                                        Visit live site
                                    </a>
                                )}

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
