import React from 'react';
import config from '../data/config';

/**
 * Trust Profiles Component (Clutch / GoodFirms / Upwork)
 * HARD RULE 1 & TASK 2:
 * Rendered ONLY when verified URLs are configured in src/data/config.js.
 * Never displays fake badges or invented review ratings.
 */
const TrustSection = () => {
    const { clutch, goodfirms, upwork } = config.trustProfiles || {};
    const hasAnyProfile = Boolean(clutch || goodfirms || upwork);

    if (!hasAnyProfile) {
        return null;
    }

    return (
        <section className="section trust-section" style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                    Verified Industry Profiles
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    {clutch && (
                        <a href={clutch} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.9rem' }}>
                            View on Clutch ↗
                        </a>
                    )}
                    {goodfirms && (
                        <a href={goodfirms} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.9rem' }}>
                            View on GoodFirms ↗
                        </a>
                    )}
                    {upwork && (
                        <a href={upwork} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.9rem' }}>
                            View on Upwork ↗
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
