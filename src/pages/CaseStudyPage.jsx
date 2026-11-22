import React from 'react';
import './Work.css';
import { getCaseStudyBySlug } from '../data/work';
import Contact from '../components/Contact';

const CaseStudyPage = ({ slug }) => {
    // If slug not passed as prop, retrieve from URL
    const effectiveSlug = slug || window.location.pathname.replace('/work/', '').replace('/', '');
    const project = getCaseStudyBySlug(effectiveSlug);

    if (!project) {
        return (
            <div className="work-page" style={{ padding: '120px 20px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Case Study Not Found</h1>
                    <p style={{ margin: '20px 0', color: 'var(--text-secondary)' }}>The project you requested does not exist or has not been published yet.</p>
                    <a href="/work/" className="btn btn-primary">Back to All Case Studies</a>
                </div>
            </div>
        );
    }

    return (
        <div className="work-page">
            {/* Case Study Hero */}
            <section className="cs-hero">
                <div className="container">
                    <nav className="cs-breadcrumb" aria-label="Breadcrumb">
                        <a href="/">Home</a> / <a href="/work/">Case Studies</a> / <span>{project.shortTitle}</span>
                    </nav>

                    <div className="cs-hero__meta">
                        <span className="cs-meta-tag" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}15` }}>
                            {project.industry}
                        </span>
                        <span className="cs-meta-tag">
                            📍 {project.country}
                        </span>
                        <span className="cs-meta-tag">
                            Client Type: {project.clientType}
                        </span>
                    </div>

                    <h1 className="cs-hero__title">{project.title}</h1>
                    <p className="cs-hero__lead">{project.summary}</p>

                    {project.liveUrl ? (
                        <div className="cs-hero__cta-row">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Visit Live Website ↗
                            </a>
                        </div>
                    ) : (
                        <div className="cs-hero__cta-row" style={{ marginTop: '16px' }}>
                            <span className="badge" style={{ fontSize: '0.85rem', padding: '8px 16px', background: 'rgba(0, 198, 255, 0.12)', border: '1px solid rgba(0, 198, 255, 0.25)', color: '#00c6ff' }}>
                                🔒 {project.badgeText}
                            </span>
                        </div>
                    )}
                </div>
            </section>

            {/* Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
                <section className="cs-metrics-section">
                    <div className="container">
                        <div className="cs-metrics-grid glass-card">
                            {project.metrics.map((m, idx) => (
                                <div className="cs-metric-item" key={idx}>
                                    <span className="cs-metric-val">{m.value}</span>
                                    <span className="cs-metric-lbl">{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Core Narrative: Problem & Solution */}
            <section className="section cs-body">
                <div className="container cs-body__container">
                    <div className="cs-body__main">
                        <div className="cs-block glass-card">
                            <div className="cs-block__header">
                                <span className="cs-block__icon">⚠️</span>
                                <h2>The Problem &amp; Challenge</h2>
                            </div>
                            <p>{project.problem}</p>
                        </div>

                        <div className="cs-block glass-card">
                            <div className="cs-block__header">
                                <span className="cs-block__icon">💡</span>
                                <h2>The Solution &amp; Technical Approach</h2>
                            </div>
                            <p>{project.solution}</p>
                        </div>

                        <div className="cs-block glass-card">
                            <div className="cs-block__header">
                                <span className="cs-block__icon">⚙️</span>
                                <h2>Features &amp; Capabilities Built</h2>
                            </div>
                            <ul className="cs-features-list">
                                {project.features.map((feat) => (
                                    <li key={feat}>
                                        <span className="cs-check" style={{ color: project.color }}>✓</span>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="cs-block glass-card">
                            <div className="cs-block__header">
                                <span className="cs-block__icon">📈</span>
                                <h2>Results &amp; Verification</h2>
                            </div>
                            <ul className="cs-results-list">
                                {project.results.map((res, i) => (
                                    <li key={i}>
                                        <strong>•</strong> {res}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Optional Testimonial if verified */}
                        {project.testimonial && (
                            <div className="cs-testimonial glass-card">
                                <blockquote>"{project.testimonial.quote}"</blockquote>
                                <cite>— {project.testimonial.author}, {project.testimonial.role}</cite>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Tech Stack & Overview */}
                    <aside className="cs-body__sidebar">
                        <div className="cs-sidebar-card glass-card">
                            <h3 className="cs-sidebar-title">Tech Stack</h3>
                            <div className="cs-stack-pills">
                                {project.techStack.map((tech) => (
                                    <span className="cs-stack-pill" key={tech}>{tech}</span>
                                ))}
                            </div>

                            <hr className="cs-divider" />

                            <h3 className="cs-sidebar-title">Project Details</h3>
                            <div className="cs-meta-list">
                                <div>
                                    <strong>Target Region:</strong>
                                    <span>{project.country}</span>
                                </div>
                                <div>
                                    <strong>Architecture:</strong>
                                    <span>Senior Full-Stack</span>
                                </div>
                                <div>
                                    <strong>Code Ownership:</strong>
                                    <span>100% Client Owned</span>
                                </div>
                            </div>

                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost cs-sidebar-btn"
                                >
                                    Open Project URL ↗
                                </a>
                            ) : (
                                <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    {project.badgeText}
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </section>

            {/* Contact CTA */}
            <Contact
                title="Planning a Similar Digital Platform?"
                subtitle="Discuss your architecture requirements with our senior engineers and get a fixed milestone scope."
            />
        </div>
    );
};

export default CaseStudyPage;
