import React from 'react';
import './BusinessHours.css';
import config from '../data/config';
import { getRegionConfig } from '../data/regions';

const BusinessHours = ({ region = 'global' }) => {
    const regionConfig = getRegionConfig(region);

    return (
        <div className="business-hours-card glass-card">
            <div className="business-hours__header">
                <span className="business-hours__icon">🌐</span>
                <div>
                    <h4 className="business-hours__title">Time-Zone Overlap Windows</h4>
                    <p className="business-hours__sub">Engineered for seamless international collaboration.</p>
                </div>
            </div>

            {region && region !== 'global' && (
                <div className="business-hours__highlight" style={{
                    marginBottom: '14px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(0, 198, 255, 0.1)',
                    border: '1px solid rgba(0, 198, 255, 0.25)',
                    fontSize: '0.85rem',
                    color: '#00c6ff'
                }}>
                    <strong>{regionConfig.flag} Your Region:</strong> {regionConfig.overlapHours}
                </div>
            )}

            <div className="business-hours__grid">
                <div className={`business-hours__item ${region === 'uae' ? 'business-hours__item--active' : ''}`}>
                    <span className="business-hours__flag">🇦🇪</span>
                    <div className="business-hours__info">
                        <strong>UAE (GST):</strong>
                        <span>Full working day overlap (only 1.5h difference)</span>
                    </div>
                </div>

                <div className={`business-hours__item ${region === 'uk' ? 'business-hours__item--active' : ''}`}>
                    <span className="business-hours__flag">🇬🇧</span>
                    <div className="business-hours__info">
                        <strong>UK (GMT/BST):</strong>
                        <span>2:00 PM – 6:00 PM UK time dedicated overlap [TODO: overlap window in UK time]</span>
                    </div>
                </div>

                <div className={`business-hours__item ${region === 'canada' ? 'business-hours__item--active' : ''}`}>
                    <span className="business-hours__flag">🇨🇦</span>
                    <div className="business-hours__info">
                        <strong>Canada (EST/PST):</strong>
                        <span>{config.businessHours.canada}</span>
                    </div>
                </div>

                <div className={`business-hours__item ${region === 'global' ? 'business-hours__item--active' : ''}`}>
                    <span className="business-hours__flag">🇮🇳</span>
                    <div className="business-hours__info">
                        <strong>HQ India (IST):</strong>
                        <span>{config.businessHours.ist}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessHours;
