import React from 'react';
import './Footer.css';
import config from '../data/config';
import services from '../data/services';
import markets from '../data/markets';
import { trackWhatsAppClick } from '../analytics';
import RegionSwitcher from './RegionSwitcher';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__main">
                {/* Brand & International Overview */}
                <div className="footer__brand">
                    <a href="/" className="footer__logo">
                        <div className="logo-icon"><span>A</span></div>
                        <div className="logo-text">
                            <span className="logo-name">Atech</span>
                            <span className="logo-tagline">Infotech</span>
                        </div>
                    </a>
                    <p className="footer__brand-desc">
                        Bespoke web applications, cross-platform mobile apps, and custom CRM/ERP platforms
                        for growing businesses in the UK, Canada, UAE, India, and worldwide.
                    </p>
                    <p className="footer__address-line">
                        <strong>Headquarters:</strong> {config.address.fullFormatted}
                    </p>
                    <div className="footer__contact-direct">
                        <a href={`mailto:${config.email}`} className="footer__contact-link">
                            ✉️ {config.email}
                        </a>
                        <a href={`tel:${config.phone}`} className="footer__contact-link">
                            📞 {config.phoneDisplay}
                        </a>
                        <a
                            href={config.getWhatsAppLink()}
                            className="footer__contact-link footer__contact-link--wa"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick('footer')}
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Services Column */}
                <div className="footer__links-group">
                    <h4>Services</h4>
                    <ul>
                        {services.map((s) => (
                            <li key={s.slug}>
                                <a href={`/services/${s.slug}/`}>{s.shortTitle || s.nav}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* International Markets */}
                <div className="footer__links-group">
                    <h4>Target Markets</h4>
                    <ul>
                        {markets.filter(m => m.slug !== 'india').map((m) => (
                            <li key={m.slug}>
                                <a href={m.path}>
                                    <span style={{ marginRight: '6px' }}>{m.slug === 'uk' ? '🇬🇧' : m.slug === 'canada' ? '🇨🇦' : '🇦🇪'}</span>
                                    {m.countryName}
                                </a>
                            </li>
                        ))}
                        <li><a href="/work/">Case Studies (/work)</a></li>
                        <li><a href="/pricing/">Pricing &amp; Rates</a></li>
                        <li><a href="/blog/">Guides &amp; Articles</a></li>
                    </ul>
                </div>

                {/* Company & Legal */}
                <div className="footer__links-group">
                    <h4>Company &amp; Legal</h4>
                    <ul>
                        <li><a href="/about/">About Us</a></li>
                        <li><a href="/contact/">Contact Us</a></li>
                        <li><a href="/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="/terms/">Terms of Service</a></li>
                    </ul>

                    {/* Socials if configured */}
                    <div className="footer__socials-note">
                        <small style={{ color: 'var(--text-muted)' }}>15+ Years Senior Engineering</small>
                    </div>
                </div>
            </div>

            <div className="container footer__bottom">
                <p>&copy; {new Date().getFullYear()} Atech Infotech. All rights reserved. Built with senior engineers in India, serving clients in the UK, Canada, UAE &amp; India.</p>
                <div className="footer__bottom-right">
                    <RegionSwitcher variant="footer" />
                    <div className="footer__bottom-flag">
                        🇬🇧 UK &middot; 🇨🇦 Canada &middot; 🇦🇪 UAE &middot; 🇮🇳 India
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
