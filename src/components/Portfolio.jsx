import React from 'react';
import './Portfolio.css';
import { getPublishedCaseStudies } from '../data/work';

const Portfolio = () => {
    const publishedProjects = getPublishedCaseStudies();

    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Proven Results</div>
                    <h2 className="section-title">
                        Selected <span className="gradient-text">Case Studies</span>
                    </h2>
                    <p className="section-subtitle">
                        Real web applications and digital platforms engineered for our clients.
                    </p>
                </div>

                <div className="portfolio__grid">
                    {publishedProjects.map((project, i) => (
                        <div className="portfolio-card glass-card" key={project.slug} style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="portfolio-card__header" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                                <span className="portfolio-card__emoji">{project.icon}</span>
                                <span
                                    className="portfolio-card__category"
                                    style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}15` }}
                                >
                                    {project.industry} · {project.country}
                                </span>
                            </div>

                            <div className="portfolio-card__body">
                                <h3 className="portfolio-card__title">
                                    <a href={`/work/${project.slug}/`}>{project.shortTitle}</a>
                                </h3>
                                <p className="portfolio-card__description">{project.summary}</p>

                                <div className="portfolio-card__tags">
                                    {project.techStack.map((t) => (
                                        <span key={t} className="portfolio-card__tag">{t}</span>
                                    ))}
                                </div>

                                <div className="portfolio-card__actions">
                                    <a
                                        className="btn btn-sm btn-primary portfolio-card__btn"
                                        href={`/work/${project.slug}/`}
                                    >
                                        Read Case Study →
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            className="portfolio-card__live-link"
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Visit Live Site ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="portfolio-card__glow" style={{ background: project.color }} />
                        </div>
                    ))}
                </div>

                <div className="portfolio__cta-row">
                    <a href="/work/" className="btn btn-ghost portfolio__view-all-btn">
                        View All Work &amp; Project Outlines →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
