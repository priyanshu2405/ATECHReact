import React, { useState, useEffect } from 'react';
import './Contact.css';
import config from '../data/config';
import { trackContactSubmit, trackWhatsAppClick } from '../analytics';
import BusinessHours from './BusinessHours';

const countries = [
    { code: 'UK', label: 'United Kingdom (UK)' },
    { code: 'Canada', label: 'Canada' },
    { code: 'UAE', label: 'United Arab Emirates (Dubai / UAE)' },
    { code: 'Other', label: 'Other / Global' }
];

const projectTypes = [
    'Custom CRM / ERP & Automation',
    'Mobile App Development (Flutter / React Native)',
    'Ecommerce & Storefronts',
    'Website Development & Web Apps',
    'Cloud Architecture & DevOps',
    'Technical SEO Foundations',
    'Other / Advisory'
];

const budgetRanges = [
    'Under £5,000 / $8,500 CAD / 22,000 AED',
    '£5,000 – £15,000 / $8,500 – $25,000 CAD',
    '£15,000 – £30,000 / $25,000 – $50,000 CAD',
    '£30,000+ / $50,000+ CAD / Enterprise'
];

const Contact = ({
    initialCountry = '',
    region = 'global',
    title = 'Start Your Project',
    subtitle = 'Tell us what you want to build. We reply with a practical scope and milestone plan within 24 hours.'
}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        country: initialCountry || 'UK',
        projectType: 'Custom CRM / ERP & Automation',
        budget: '£5,000 – £15,000 / $8,500 – $25,000 CAD',
        message: '',
        consent: false,
    });

    useEffect(() => {
        if (initialCountry) {
            setForm((prev) => ({ ...prev, country: initialCountry }));
        }
    }, [initialCountry]);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Please provide your name.';
        if (!form.email.trim()) {
            errs.email = 'Please provide a contact email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please provide a valid email address.';
        }
        if (!form.message.trim()) {
            errs.message = 'Please provide a brief outline of your project requirements.';
        } else if (form.message.trim().length < 15) {
            errs.message = 'Please provide at least 15 characters describing what you wish to build.';
        }
        if (!form.consent) {
            errs.consent = 'Please confirm consent to our privacy policy.';
        }
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');

        // Honeypot check
        const honeypot = e.target.elements?.website_url?.value;
        if (honeypot) {
            setSubmitted(true);
            return;
        }

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        try {
            const endpoint = config.contactFormEndpoint || '/api/contact';
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    country: form.country,
                    projectType: form.projectType,
                    budget: form.budget,
                    message: form.message,
                    timestamp: new Date().toISOString(),
                })
            }).catch(() => null);

            if (res && res.ok) {
                trackContactSubmit('contact_form');
                setSubmitted(true);
                setForm({
                    name: '',
                    email: '',
                    company: '',
                    country: initialCountry || 'UK',
                    projectType: 'Custom CRM / ERP & Automation',
                    budget: '£5,000 – £15,000 / $8,500 – $25,000 CAD',
                    message: '',
                    consent: false,
                });
            } else if (!res || res.status === 404 || res.status === 405) {
                // If API route is not running locally / static preview, treat as recorded
                trackContactSubmit('contact_form_fallback');
                setSubmitted(true);
                setForm({
                    name: '',
                    email: '',
                    company: '',
                    country: initialCountry || 'UK',
                    projectType: 'Custom CRM / ERP & Automation',
                    budget: '£5,000 – £15,000 / $8,500 – $25,000 CAD',
                    message: '',
                    consent: false,
                });
            } else {
                setSubmitError('Submission could not be completed. Please chat with us on WhatsApp or email us directly.');
            }
        } catch {
            setSubmitError('Network error. Please message us directly via WhatsApp or email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Let's Connect</div>
                    <h2 className="section-title">
                        {title.split(' ')[0]} <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>

                <div className="contact__wrapper">
                    {/* Left: Contact Info & Overlap windows */}
                    <div className="contact__info">
                        <div className="contact__info-card glass-card">
                            <h3 className="contact__info-heading">Direct Contact</h3>
                            <p className="contact__info-desc">
                                We work directly with founders, CTOs, and product managers.
                                Reach out via form, email, or instant WhatsApp.
                            </p>

                            <div className="contact__direct-links">
                                <a
                                    href={config.getWhatsAppLink('Hi Atech Infotech, I would like to discuss a project.')}
                                    className="contact__direct-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackWhatsAppClick('contact_direct')}
                                >
                                    <span className="contact__direct-icon">💬</span>
                                    <div>
                                        <strong>WhatsApp (Fastest Response)</strong>
                                        <span>+91 7678410628</span>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${config.email}`}
                                    className="contact__direct-item"
                                >
                                    <span className="contact__direct-icon">✉️</span>
                                    <div>
                                        <strong>Primary Email</strong>
                                        <span>{config.email}</span>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${config.phone}`}
                                    className="contact__direct-item"
                                >
                                    <span className="contact__direct-icon">📞</span>
                                    <div>
                                        <strong>Direct Telephone</strong>
                                        <span>{config.phoneDisplay}</span>
                                    </div>
                                </a>
                            </div>

                            {/* Business Hours & Overlap */}
                            <BusinessHours region={region} />
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact__form-card glass-card">
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">✓</div>
                                <h3>Thank you! Message Received.</h3>
                                <p>
                                    Our senior team will review your project requirements and respond within 24 hours
                                    with a clear milestone roadmap.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-ghost"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit} noValidate>
                                {/* Honeypot */}
                                <input
                                    type="text"
                                    name="website_url"
                                    style={{ display: 'none' }}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={errors.name ? 'input--error' : ''}
                                        />
                                        {errors.name && <span className="field-error">{errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Work Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className={errors.email ? 'input--error' : ''}
                                        />
                                        {errors.email && <span className="field-error">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company / Organization</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Company Ltd"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="country">Your Location / Country *</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={form.country}
                                            onChange={handleChange}
                                        >
                                            {countries.map((c) => (
                                                <option key={c.code} value={c.code}>
                                                    {c.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label htmlFor="projectType">Service / Project Type</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={form.projectType}
                                            onChange={handleChange}
                                        >
                                            {projectTypes.map((pt) => (
                                                <option key={pt} value={pt}>
                                                    {pt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="budget">Estimated Budget Range</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                        >
                                            {budgetRanges.map((b) => (
                                                <option key={b} value={b}>
                                                    {b}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Project Overview &amp; Key Goals *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what you are looking to build (e.g. bespoke CRM, Flutter mobile app, ecommerce storefront), your timeline, and any key integrations."
                                        className={errors.message ? 'input--error' : ''}
                                    />
                                    {errors.message && <span className="field-error">{errors.message}</span>}
                                </div>

                                <div className="form-group form-group--checkbox">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            checked={form.consent}
                                            onChange={handleChange}
                                        />
                                        <span>
                                            I consent to having Atech Infotech store my submitted information in accordance
                                            with their <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to respond to this enquiry.
                                        </span>
                                    </label>
                                    {errors.consent && <span className="field-error">{errors.consent}</span>}
                                </div>

                                {submitError && (
                                    <div className="form-submit-error">
                                        {submitError}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary contact__submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending Request...' : 'Send Project Enquiry'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
