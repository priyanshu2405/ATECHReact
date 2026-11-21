import React, { useEffect, useRef } from 'react';
import './Hero.css';
import config from '../data/config';
import { getRegionConfig } from '../data/regions';
import { detectClientRegion } from '../utils/region';
import { trackWhatsAppClick, trackBookingClick } from '../analytics';

const Hero = ({ region }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animFrameRef = useRef(null);

    const activeRegion = region || detectClientRegion();
    const configRegion = getRegionConfig(activeRegion);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let width, height;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize);

        const NUM_PARTICLES = window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 35 : 50;
        particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.5 ? '0, 198, 255' : '123, 47, 247',
        }));

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            const particles = particlesRef.current;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 198, 255, ${0.06 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animFrameRef.current = requestAnimationFrame(draw);
        };

        if (reducedMotion) {
            ctx.clearRect(0, 0, width, height);
            particlesRef.current.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();
            });
        } else {
            draw();
        }

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleBookingClick = () => {
        trackBookingClick('hero');
        if (config.bookingUrl) {
            window.open(config.bookingUrl, '_blank', 'noopener,noreferrer');
        } else {
            scrollToContact();
        }
    };

    const handleWhatsAppClick = () => {
        trackWhatsAppClick('hero');
        window.open(
            config.getWhatsAppLink(`Hi Atech Infotech, I would like to discuss a software project for ${configRegion.name || 'my business'}.`),
            '_blank',
            'noopener,noreferrer'
        );
    };

    const isWhatsAppPrimary = configRegion.ctaOrder && configRegion.ctaOrder[0] === 'whatsapp';

    const renderBookingCTA = (isPrimary) => (
        <button
            key="booking"
            type="button"
            className={`btn ${isPrimary ? 'btn-primary' : 'btn-ghost'} hero__btn hero__btn--primary`}
            onClick={handleBookingClick}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Free 30-Min Call
        </button>
    );

    const renderWhatsAppCTA = (isPrimary) => (
        <button
            key="whatsapp"
            type="button"
            className={`btn ${isPrimary ? 'btn-primary' : 'btn-ghost'} hero__btn hero__btn--whatsapp`}
            onClick={handleWhatsAppClick}
        >
            <span className="hero__wa-icon" aria-hidden="true">💬</span>
            WhatsApp Us
        </button>
    );

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} className="hero__canvas" />

            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />

            <div className="container hero__container">
                <div className="hero__content">
                    {/* Eyebrow */}
                    <div className="hero__badge">
                        <span className="hero__badge-pulse" />
                        <span className="hero__badge-text">
                            Software development company · India · Serving the UK, Canada &amp; UAE
                        </span>
                    </div>

                    {/* H1 */}
                    <h1 className="hero__title">
                        Custom Web &amp; Mobile Apps for{' '}
                        <span className="gradient-text">Growing Businesses</span>{' '}
                        in the UK, Canada &amp; UAE
                    </h1>

                    {/* Sub-headline (Tailored per region) */}
                    <p className="hero__subtitle">
                        {configRegion.heroSubheadline}
                    </p>

                    {/* CTAs (Tailored priority: UAE puts WhatsApp first; others put Booking first) */}
                    <div className="hero__actions">
                        {isWhatsAppPrimary ? (
                            <>
                                {renderWhatsAppCTA(true)}
                                {renderBookingCTA(false)}
                            </>
                        ) : (
                            <>
                                {renderBookingCTA(true)}
                                {renderWhatsAppCTA(false)}
                            </>
                        )}
                    </div>

                    {/* Badge Row of Real Facts Only */}
                    <div className="hero__facts-row">
                        <div className="hero__fact-item">
                            <span className="hero__fact-icon" aria-hidden="true">⭐</span>
                            <span className="hero__fact-text">15+ years of experience</span>
                        </div>
                        <div className="hero__fact-item">
                            <span className="hero__fact-icon" aria-hidden="true">📜</span>
                            <span className="hero__fact-text">Full IP &amp; source code ownership</span>
                        </div>
                        <div className="hero__fact-item">
                            <span className="hero__fact-icon" aria-hidden="true">🔒</span>
                            <span className="hero__fact-text">NDA on request</span>
                        </div>
                        <div className="hero__fact-item">
                            <span className="hero__fact-icon" aria-hidden="true">🌐</span>
                            <span className="hero__fact-text">Overlap hours for UK / UAE / Canada</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
