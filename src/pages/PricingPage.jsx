import React from 'react';
import EngagementModels from '../components/EngagementModels';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const pricingFaqs = [
    {
        q: 'How are project quotes calculated?',
        a: 'We evaluate the technical specification, user roles, API integrations, and database architecture. Every quote is delivered as a fixed-milestone contract with defined deliverables and sign-off criteria.'
    },
    {
        q: 'Why do prices show "Request a quote"?',
        a: 'Because every software architecture is unique. Rather than displaying deceptive ballpark numbers that change later, we scope your actual requirements and provide a firm, itemized milestone commitment.'
    },
    {
        q: 'Which currencies can we be invoiced in?',
        a: 'We invoice directly in British Pounds (GBP), Canadian Dollars (CAD), UAE Dirhams (AED), or US Dollars (USD). There are zero currency conversion surcharges.'
    },
    {
        q: 'Are there any recurring license fees or hidden costs?',
        a: 'Zero. You own 100% of the intellectual property, database schema, and source code. There are no per-user license fees, seat fees, or vendor exit charges.'
    }
];

const PricingPage = () => {
    return (
        <div className="pricing-page" style={{ paddingTop: '80px' }}>
            <section className="pricing-hero" style={{ padding: '80px 0 20px', textAlign: 'center' }}>
                <div className="container">
                    <div className="about-hero__badge" style={{ marginBottom: '20px' }}>
                        <span>Transparent Milestone Pricing · Zero Hidden Overruns</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, marginBottom: '18px' }}>
                        Predictable Software Investment for <span className="gradient-text">Global Growth</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '760px', margin: '0 auto 30px', lineHeight: 1.6 }}>
                        Senior full-stack developers on fixed milestones or dedicated monthly retainers.
                        Select your preferred currency below to view indicative rates.
                    </p>
                </div>
            </section>

            {/* Engagement Models Component with Currency Toggle */}
            <EngagementModels showServicesList={true} />

            {/* Pricing FAQ */}
            <FAQ
                items={pricingFaqs}
                title="Pricing & Invoicing FAQ"
                subtitle="Everything you need to know about milestone billing, multi-currency invoicing, and IP transfer."
            />

            {/* Contact CTA */}
            <Contact
                title="Request a Custom Project Estimate"
                subtitle="Share your requirements and we will reply within 1 business day with an itemized milestone breakdown."
            />
        </div>
    );
};

export default PricingPage;
