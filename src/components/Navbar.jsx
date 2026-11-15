import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Technologies', href: '#technologies' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
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
            if (e.key === 'Escape') setMenuOpen(false);
        };
        const handleResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
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

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} id="mobile-nav">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/blog/" className="navbar__link">Blog</a>
                    </li>
                    <li className="navbar__cta-mobile">
                        <button className="btn btn-primary" onClick={() => handleNavClick('#contact')}>
                            Get Started
                        </button>
                    </li>
                </ul>

                <div className="navbar__actions">
                    <button className="btn btn-primary navbar__cta" onClick={() => handleNavClick('#contact')}>
                        Get Started
                    </button>
                    <button
                        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
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
    );
};

export default Navbar;
