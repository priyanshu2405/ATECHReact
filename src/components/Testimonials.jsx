import React from 'react';
import testimonials from '../data/testimonials';

/**
 * Testimonials Component
 * HARD RULE 1 & TASK 1:
 * Renders ONLY if genuine testimonial data exists in src/data/testimonials.js.
 * If the array is empty or undefined, it renders null (no empty box, no fake reviews).
 */
const Testimonials = () => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Client Feedback</div>
                    <h2 className="section-title">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                </div>

                <div className="testimonials__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {testimonials.map((t, idx) => (
                        <div className="glass-card" key={idx} style={{ padding: '32px', borderRadius: '16px' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-secondary)' }}>"{t.quote}"</p>
                            <div>
                                <h4 style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{t.author}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}, {t.company} ({t.country})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
