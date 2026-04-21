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
                        Engineering the digital future with innovation, expertise, and a passion for excellence.
                        Your trusted technology partner since 2012.
                    </p>
                    <div className="footer__certifications">
                        {['ISO 9001', 'ISO 27001', 'AWS Partner', 'Google Cloud'].map((c) => (
                            <span key={c} className="footer__cert-badge">{c}</span>
                        ))}
                    </div>
                </div>

                <div className="footer__links-group">
                    <h4>Services</h4>
                    <ul>
                        {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'Cybersecurity', 'Digital Transformation'].map((s) => (
                            <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>{s}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4>Company</h4>
                    <ul>
                        {[['About Us', 'about'], ['Portfolio', 'portfolio'], ['Our Team', 'team'], ['Careers', 'contact'], ['Blog', 'contact'], ['Contact', 'contact']].map(([label, id]) => (
                            <li key={label}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__links-group">
                    <h4>Technologies</h4>
                    <ul>
                        {['React.js', 'Node.js', 'Python', 'AWS Cloud', 'Kubernetes', 'TensorFlow'].map((t) => (
                            <li key={t}><a href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo('technologies'); }}>{t}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container footer__bottom">
                <p>&copy; {new Date().getFullYear()} Atech Infotech Pvt. Ltd. All rights reserved.</p>
                <div className="footer__bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div className="footer__bottom-flag">
                    Made with ❤️ in India 🇮🇳
                </div>
            </div>
        </footer>
    );
};

export default Footer;
