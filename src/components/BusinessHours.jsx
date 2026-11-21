import React from 'react';
import './BusinessHours.css';
import config from '../data/config';

const BusinessHours = () => {
    return (
        <div className="business-hours-card glass-card">
            <div className="business-hours__header">
                <span className="business-hours__icon">🌐</span>
                <div>
                    <h4 className="business-hours__title">Time-Zone Overlap Windows</h4>
                    <p className="business-hours__sub">Engineered for seamless international collaboration.</p>
                </div>
            </div>

            <div className="business-hours__grid">
                <div className="business-hours__item">
                    <span className="business-hours__flag">🇦🇪</span>
                    <div className="business-hours__info">
                        <strong>UAE (GST):</strong>
                        <span>Full working day overlap (only 1.5h difference)</span>
                    </div>
                </div>

                <div className="business-hours__item">
                    <span className="business-hours__flag">🇬🇧</span>
                    <div className="business-hours__info">
                        <strong>UK (GMT/BST):</strong>
                        <span>2:00 PM – 6:00 PM UK time dedicated overlap</span>
                    </div>
                </div>

                <div className="business-hours__item">
                    <span className="business-hours__flag">🇨🇦</span>
                    <div className="business-hours__info">
                        <strong>Canada (EST/PST):</strong>
                        <span>{config.businessHours.canada}</span>
                    </div>
                </div>

                <div className="business-hours__item">
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
