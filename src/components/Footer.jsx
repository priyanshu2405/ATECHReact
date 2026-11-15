import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__top-inner">
                    <p className="footer__cta-label">Ready to build something great?</p>
                    <h2 className="footer__cta-title">
                        Start Your <span className="gradient-text">Project Today</span>
                    </h2>
                    <button className="btn btn-primary footer__cta-btn" onClick={() => scrollTo('contact')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        Get a Free Consultation
                    </button>
                </div>
            </div>

            <div className="container footer__main">
                <div className="footer__brand">
                    <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                        <div className="logo-icon"><span>A</span></div>
                        <div className="logo-text">
                            <span className="logo-name">Atech</span>
                            <span className="logo-tagline">Infotech</span>
                        </div>
                    </a>
                    <p className="footer__brand-desc">
                        Web apps, mobile apps and custom software for startups and growing businesses.
                        Based in Indore, India, since 2024.
                    </p>
                    <div className="footer__certifications">
                        {/* {['ISO 9001', 'ISO 27001', 'AWS Partner', 'Google Cloud'].map((c) => (
                            <span key={c} className="footer__cert-badge">{c}</span>
                        ))} */}
                    </div>
                </div>

                <div className="footer__links-group">
                    <h4>Services</h4>
                    <ul>
                        {[['Website Development', 'website-development'], ['Mobile App Development', 'mobile-app-development'], ['Ecommerce Development', 'ecommerce-development'], ['Custom CRM & ERP', 'crm-erp-development'], ['Cloud & DevOps', 'cloud-devops'], ['SEO & Digital Marketing', 'seo-digital-marketing']].map(([label, slug]) => (
                            <li key={slug}><a href={`/services/${slug}/`}>{label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4>Company</h4>
                    <ul>
                        {[['About Us', 'about'], ['Portfolio', 'portfolio'], ['Our Team', 'team'], ['Contact', 'contact']].map(([label, id]) => (
                            <li key={label}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
                        ))}
                        <li><a href="/blog/">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4>Technologies</h4>
                    <ul>
                        {['React.js', 'Node.js', 'Laravel', 'Flutter'].map((t) => (
                            <li key={t}><a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo('technologies'); }}>{t}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container footer__bottom">
                <p>&copy; {new Date().getFullYear()} Atech Infotech. All rights reserved.</p>
                
                <div className="footer__bottom-flag">
                    Made with ❤️ in India 🇮🇳
                </div>
            </div>
        </footer>
    );
};

export default Footer;
