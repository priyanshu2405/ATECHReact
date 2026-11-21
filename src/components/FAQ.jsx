import React, { useState } from 'react';
import './FAQ.css';
import homepageFaqs from '../data/faqs';

const FAQ = ({ items = homepageFaqs, title = 'Frequently Asked Questions', subtitle = 'Clear answers about collaborating with our senior engineering team.' }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
            }
        }))
    };

    return (
        <section className="section faq-section" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Got Questions?</div>
                    <h2 className="section-title">
                        {title.split(' ')[0]} <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>

                <div className="faq__container">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                className={`faq-item glass-card ${isOpen ? 'faq-item--open' : ''}`}
                                key={item.q}
                            >
                                <button
                                    type="button"
                                    className="faq-item__question"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.q}</span>
                                    <span className="faq-item__toggle-icon">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="faq-item__answer">
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
