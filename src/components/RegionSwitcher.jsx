import React, { useState, useEffect, useRef } from 'react';
import './RegionSwitcher.css';
import { getCookie, setRegionPreference, detectClientRegion, COOKIE_NAME } from '../utils/region';

const regionOptions = [
    { id: 'uk', label: 'United Kingdom', flag: '🇬🇧', currency: 'GBP (£)' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦', currency: 'CAD ($)' },
    { id: 'uae', label: 'Dubai / UAE', flag: '🇦🇪', currency: 'AED (د.إ)' },
    { id: 'india', label: 'India', flag: '🇮🇳', currency: 'INR (₹)' },
    { id: 'global', label: 'Global / Auto-detect', flag: '🌐', currency: 'USD ($)' },
];

const RegionSwitcher = ({ variant = 'header' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeRegion, setActiveRegion] = useState('global');
    const [hasCookieOverride, setHasCookieOverride] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const currentRegion = detectClientRegion();
        setActiveRegion(currentRegion);
        const cookie = getCookie(COOKIE_NAME);
        setHasCookieOverride(Boolean(cookie));
    }, []);

    // Close on outside click or Escape key
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleSelect = (regionId) => {
        setIsOpen(false);
        setRegionPreference(regionId);
    };

    const currentOption = regionOptions.find((r) => r.id === activeRegion) || regionOptions[3];

    return (
        <div className={`region-switcher region-switcher--${variant}`} ref={dropdownRef}>
            <button
                type="button"
                className="region-switcher__btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Select Region and Currency. Currently active: ${currentOption.label}`}
                id={`region-switcher-trigger-${variant}`}
            >
                <span className="region-switcher__flag" aria-hidden="true">{currentOption.flag}</span>
                <span className="region-switcher__code">{currentOption.id.toUpperCase()}</span>
                {hasCookieOverride && <span className="region-switcher__dot" title="Custom region preference active" />}
                <span className="region-switcher__arrow" aria-hidden="true">{isOpen ? '▴' : '▾'}</span>
            </button>

            {isOpen && (
                <ul
                    className="region-switcher__dropdown"
                    role="listbox"
                    aria-labelledby={`region-switcher-trigger-${variant}`}
                >
                    <li className="region-switcher__dropdown-header">
                        Select Region &amp; Currency
                    </li>
                    {regionOptions.map((opt) => {
                        const isSelected = activeRegion === opt.id;
                        return (
                            <li
                                key={opt.id}
                                role="option"
                                aria-selected={isSelected}
                                className={`region-switcher__item ${isSelected ? 'region-switcher__item--active' : ''}`}
                                onClick={() => handleSelect(opt.id)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleSelect(opt.id);
                                    }
                                }}
                                tabIndex={0}
                            >
                                <span className="region-switcher__item-flag" aria-hidden="true">{opt.flag}</span>
                                <div className="region-switcher__item-info">
                                    <span className="region-switcher__item-name">{opt.label}</span>
                                    <span className="region-switcher__item-curr">{opt.currency}</span>
                                </div>
                                {isSelected && <span className="region-switcher__check" aria-hidden="true">✓</span>}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default RegionSwitcher;
