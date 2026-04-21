import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const NUM_PARTICLES = 80;
        particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.1,
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
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 198, 255, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animFrameRef.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} className="hero__canvas" />

            {/* Background Orbs */}
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />

            <div className="container hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    Trusted by 200+ companies worldwide
                </div>

                <h1 className="hero__title">
                    Transforming Ideas Into
                    <span className="hero__title-highlight">
                        <br />Digital Reality
                    </span>
                </h1>

                <p className="hero__description">
                    Atech Infotech delivers cutting-edge IT solutions — from bespoke software development
                    and cloud infrastructure to AI-powered applications. We engineer the future, today.
                </p>

                <div className="hero__actions">
                    <button className="btn btn-primary hero__btn" onClick={() => scrollToSection('services')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        Explore Services
                    </button>
                    <button className="btn btn-ghost hero__btn" onClick={() => scrollToSection('portfolio')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                        View Our Work
                    </button>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number">200+</span>
                        <span className="hero__stat-label">Projects Delivered</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">50+</span>
                        <span className="hero__stat-label">Expert Engineers</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">99%</span>
                        <span className="hero__stat-label">Client Satisfaction</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">12+</span>
                        <span className="hero__stat-label">Years Experience</span>
                    </div>
                </div>
            </div>

            {/* Floating tech icons */}
            <div className="hero__floating hero__floating--1">
                <div className="hero__floating-card">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00c6ff" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    <span>Web Dev</span>
                </div>
            </div>
            <div className="hero__floating hero__floating--2">
                <div className="hero__floating-card">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7b2ff7" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                    <span>Cloud</span>
                </div>
            </div>
            <div className="hero__floating hero__floating--3">
                <div className="hero__floating-card">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f72585" strokeWidth="1.5"><rect x="2" y="2" width="9" height="11" /><rect x="13" y="2" width="9" height="7" /><rect x="13" y="13" width="9" height="9" /><rect x="2" y="17" width="9" height="5" /></svg>
                    <span>AI &amp; ML</span>
                </div>
            </div>
            <div className="hero__floating hero__floating--4">
                <div className="hero__floating-card">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <span>Security</span>
                </div>
            </div>

            <div className="hero__scroll-indicator" onClick={() => scrollToSection('services')}>
                <span>Scroll</span>
                <div className="hero__scroll-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
