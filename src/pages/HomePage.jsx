import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import EngagementModels from '../components/EngagementModels';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import TrustSection from '../components/TrustSection';
import homepageFaqs from '../data/faqs';
import { getRegionConfig } from '../data/regions';
import { detectClientRegion } from '../utils/region';

const HomePage = ({ region: propRegion }) => {
    const activeRegion = propRegion || detectClientRegion();
    const regionConfig = getRegionConfig(activeRegion);

    const initialCountry = activeRegion === 'uk' ? 'UK'
        : activeRegion === 'canada' ? 'Canada'
        : activeRegion === 'uae' ? 'UAE'
        : activeRegion === 'india' ? 'India'
        : 'Other';

    return (
        <div className="homepage" data-region={activeRegion}>
            {/* Hero with Outcome-Focused Messaging & Real Facts Badges */}
            <Hero region={activeRegion} />

            {/* 1. Core Services (CRM/ERP, Mobile App, Ecommerce leading) */}
            <Services />

            {/* 2. Why Work With Us (Senior-led, fixed scope, IP ownership, transparent) */}
            <WhyUs />

            {/* 3. How We Work (5-step process) */}
            <Process />

            {/* 4. Selected Work (Case studies linking to /work/[slug]) */}
            <Portfolio />

            {/* 5. Engagement Models & Starting Prices (Currency tailored to region) */}
            <EngagementModels showServicesList={true} defaultCurrency={regionConfig.currency} />

            {/* 6. Testimonials (Only renders if real entries exist in data file) */}
            <Testimonials />

            {/* Optional Trust Section (Only renders if Clutch/GoodFirms/Upwork URLs set) */}
            <TrustSection />

            {/* 7. FAQ (8 core questions + FAQPage Schema) */}
            <FAQ items={homepageFaqs} />

            {/* 8. Final CTA & Full Contact Form */}
            <Contact
                title="Start Your Project Today"
                subtitle="Book a 30-min call or send your requirements. We respond with a fixed milestone proposal within 1 business day."
                region={activeRegion}
                initialCountry={initialCountry}
            />
        </div>
    );
};

export default HomePage;
