import React, { useState, useEffect } from 'react';
import './Navbar.css';
import config from '../data/config';
import { trackBookingClick } from '../analytics';
import SuggestionBanner from './SuggestionBanner';
import RegionSwitcher from './RegionSwitcher';
import { detectClientRegion } from '../utils/region';

const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/work/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/#contact' },
];

const marketLinks = [
    { label: 'United Kingdom (UK)', href: '/uk/', flag: '🇬🇧' },
    { label: 'Canada', href: '/canada/', flag: '🇨🇦' },
    { label: 'Dubai / UAE', href: '/dubai-uae/', flag: '🇦🇪' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [marketsOpen, setMarketsOpen] = useState(false);
    const [activeRegion, setActiveRegion] = useState('global');

    useEffect(() => {
        setActiveRegion(detectClientRegion());
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Close on Escape or screen resize to desktop
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                setMarketsOpen(false);
            }
        };
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
                setMarketsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (href) => {
        setMenuOpen(false);
        setMarketsOpen(false);
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            if (window.location.pathname === '/' || window.location.pathname === '') {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }
            window.location.href = href;
        } else {
            window.location.href = href;
        }
    };

    const handleBooking = () => {
        trackBookingClick('navbar');
        if (config.bookingUrl) {
            window.open(config.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
            handleLinkClick('/#contact');
        }
    };

    return (
        <header className="navbar-fixed-header">
            {/* Country Personalisation Suggestion Banner */}
            <SuggestionBanner region={activeRegion} />

            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="container navbar__inner">
                    {/* Logo */}
                    <a href="/" className="navbar__logo">
                        <div className="logo-icon">
                            <span>A</span>
                        </div>
                        <div className="logo-text">
                            <span className="logo-name">Atech</span>
                            <span className="logo-tagline">Infotech</span>
                        </div>
                    </a>

                    {/* Mobile Backdrop */}
                    <div
                        className={`navbar__backdrop ${menuOpen ? 'navbar__backdrop--open' : ''}`}
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Links */}
                    <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} id="mobile-nav">
                        {/* Markets Dropdown */}
                        <li className="navbar__dropdown-wrapper">
                            <button
                                type="button"
                                className="navbar__link navbar__dropdown-toggle"
                                onClick={() => setMarketsOpen(!marketsOpen)}
                                aria-expanded={marketsOpen}
                            >
                                <span>Markets</span>
                                <span className="navbar__dropdown-arrow">▾</span>
                            </button>
                            <div className={`navbar__dropdown-menu ${marketsOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                                {marketLinks.map((m) => (
                                    <a
                                        key={m.href}
                                        href={m.href}
                                        className="navbar__dropdown-item"
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(m.href); }}
                                    >
                                        <span className="navbar__market-flag">{m.flag}</span>
                                        <span>{m.label}</span>
                                    </a>
                                ))}
                            </div>
                        </li>

                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="navbar__link"
                                    onClick={(e) => {
                                        if (item.href.startsWith('/#')) {
                                            e.preventDefault();
                                        }
                                        handleLinkClick(item.href);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        {/* Mobile Region Switcher */}
                        <li className="navbar__switcher-mobile">
                            <span className="navbar__switcher-mobile-label">Active Region:</span>
                            <RegionSwitcher variant="mobile" />
                        </li>

                        <li className="navbar__cta-mobile">
                            <button className="btn btn-primary" onClick={handleBooking}>
                                Book a 30-min call
                            </button>
                        </li>
                    </ul>

                    {/* Actions on Desktop */}
                    <div className="navbar__actions">
                        <RegionSwitcher variant="header" />
                        <button className="btn btn-primary navbar__cta" onClick={handleBooking}>
                            Book a 30-min call
                        </button>
                        <button
                            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
