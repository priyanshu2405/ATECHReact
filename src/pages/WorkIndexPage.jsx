import React from 'react';
import './Work.css';
import { getPublishedCaseStudies } from '../data/work';
import Contact from '../components/Contact';

const WorkIndexPage = () => {
    const published = getPublishedCaseStudies();

    return (
        <div className="work-page">
            <section className="work-hero">
                <div className="container">
                    <div className="work-hero__badge">
                        <span>Verified Case Studies · Real Products</span>
                    </div>
                    <h1 className="work-hero__title">
                        Software &amp; Digital Platforms <span className="gradient-text">Shipped for Clients</span>
                    </h1>
                    <p className="work-hero__subtitle">
                        Explore our selected case studies. Each project reflects our commitment to senior engineering,
                        high performance, and measurable business outcomes.
                    </p>
                </div>
            </section>

            <section className="section work-list">
                <div className="container">
                    <div className="work__grid">
                        {published.map((project) => (
                            <div className="work-card glass-card" key={project.slug}>
                                <div className="work-card__badge-row">
                                    <span className="work-card__tag" style={{ color: project.color, borderColor: `${project.color}40` }}>
                                        {project.industry} · {project.country}
                                    </span>
                                    <span className="work-card__emoji">{project.icon}</span>
                                </div>

                                <h2 className="work-card__title">
                                    <a href={`/work/${project.slug}/`}>{project.title}</a>
                                </h2>

                                <p className="work-card__summary">{project.summary}</p>

                                <div className="work-card__features">
                                    <strong>Key Features:</strong>
                                    <ul>
                                        {project.features.slice(0, 3).map((f) => (
                                            <li key={f}>✓ {f}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="work-card__stack">
                                    {project.techStack.map((tech) => (
                                        <span className="work-stack-pill" key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="work-card__footer">
                                    <a href={`/work/${project.slug}/`} className="btn btn-primary work-card__btn">
                                        Read Full Case Study →
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="work-card__live-link"
                                        >
                                            Visit Live Project ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <Contact
                title="Have a Similar Project in Mind?"
                subtitle="Book a call or send your specifications. We'll outline a phased milestone roadmap and fixed quote."
            />
        </div>
    );
};

export default WorkIndexPage;
