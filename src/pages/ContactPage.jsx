import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            <section style={{ padding: '60px 0 20px', textAlign: 'center' }}>
                <div className="container">
                    <div className="about-hero__badge" style={{ marginBottom: '20px' }}>
                        <span>Senior Engineering Delivery · 24-Hour Proposal Turnaround</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, marginBottom: '18px' }}>
                        Let's Plan Your <span className="gradient-text">Next Software Milestone</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
                        Direct access to senior software architects. Complete the brief below or contact us via WhatsApp for instant scheduling.
                    </p>
                </div>
            </section>

            <Contact
                title="Send a Project Brief"
                subtitle="Whether you need a custom CRM, a mobile app, or a full ecommerce platform, we'll outline a phased scope and fixed quote."
            />
        </div>
    );
};

export default ContactPage;
