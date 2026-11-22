import React from 'react';
import './LegalPage.css';
import config from '../data/config';

export const PrivacyPolicyPage = () => {
    return (
        <div className="legal-page">
            <div className="container legal-page__container">
                <nav className="cs-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a> / <span>Privacy Policy</span>
                </nav>

                <div className="legal-notice-banner glass-card">
                    <strong>Notice:</strong> This privacy policy template describes our general data handling practices
                    designed with UK/EU GDPR and Canadian PIPEDA principles in mind. It should be reviewed by a qualified legal professional
                    for your specific jurisdiction.
                </div>

                <h1>Privacy Policy</h1>
                <p className="legal-meta">Last Updated: November 2026</p>

                <div className="legal-content">
                    <h2>1. Overview</h2>
                    <p>
                        Atech Infotech ("we", "our", "us") respects your privacy and is committed to protecting the personal data
                        of visitors to {config.baseUrl} and our clients. This policy explains how we collect, store, and process
                        information when you interact with our website or engage our software development services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>We may collect and process the following information:</p>
                    <ul>
                        <li><strong>Contact Details:</strong> Your name, work email address, company name, phone number, and country when submitted through our contact enquiry forms or booking schedulers.</li>
                        <li><strong>Project Specifications:</strong> Technical briefs, user stories, and requirements voluntarily shared with us to prepare quotes or deliver contracts.</li>
                        <li><strong>Technical &amp; Usage Data:</strong> Anonymized IP addresses, browser types, referral paths, and pages visited, collected via cookies and privacy-friendly Google Tag Manager analytics.</li>
                    </ul>

                    <h2>3. Purpose of Processing</h2>
                    <p>We use your information solely to:</p>
                    <ul>
                        <li>Evaluate project requirements and respond with technical proposals and milestone quotes.</li>
                        <li>Communicate regarding ongoing client software development contracts and scheduled video demos.</li>
                        <li>Maintain website security, prevent spam via honeypot filtering, and optimize page performance.</li>
                    </ul>

                    <h2>4. Legal Bases &amp; International Standards</h2>
                    <p>
                        We process personal data based on legitimate business interest (responding to commercial enquiries)
                        and performance of a contract (delivering software services). We structure our infrastructure and database
                        practices with UK GDPR, EU GDPR, and Canadian PIPEDA principles in mind.
                    </p>

                    <h2>5. Data Retention &amp; Security</h2>
                    <p>
                        We do not sell, rent, or trade your personal information. We employ industry-standard TLS/SSL encryption
                        in transit, strong access controls, and encrypted storage. Data is retained only as long as necessary
                        for business and accounting purposes.
                    </p>

                    <h2>6. Functional Cookies &amp; Regional Preferences</h2>
                    <p>
                        We use functional cookies to provide an optimized regional experience:
                    </p>
                    <ul>
                        <li>
                            <strong><code>atech_region</code></strong>: A functional preference cookie stored for up to 180 days (SameSite=Lax) when you manually select a regional currency or market (UK, Canada, UAE, India, Global). It stores zero personal data or identifying information and is used strictly to display relevant regional currency and time-zone overlap information.
                        </li>
                        <li>
                            <strong><code>atech_banner_dismissed_[region]</code></strong>: A functional cookie stored for up to 180 days to remember that you dismissed a country recommendation banner, avoiding repetitive notices.
                        </li>
                    </ul>
                    <p>
                        We do not log, persist, or store your IP address. Geolocation detection is performed in real-time at the edge (via Vercel Edge Middleware) solely to deliver the appropriate regional variant with zero tracking.
                    </p>

                    <h2>7. Your Rights</h2>
                    <p>
                        Depending on your location (including the UK, Canada, and EU), you may have the right to request access to,
                        rectification of, or deletion of your personal data held by us.
                    </p>

                    <h2>8. Contact Information</h2>
                    <p>
                        For any questions regarding this Privacy Policy or our data practices, please contact us at:
                        <br />
                        <strong>Email:</strong> {config.email}
                        <br />
                        <strong>Address:</strong> {config.address.fullFormatted}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const TermsPage = () => {
    return (
        <div className="legal-page">
            <div className="container legal-page__container">
                <nav className="cs-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a> / <span>Terms of Service</span>
                </nav>

                <div className="legal-notice-banner glass-card">
                    <strong>Notice:</strong> These terms of service constitute a general professional engagement template
                    and should be reviewed by a qualified legal professional before commercial execution.
                </div>

                <h1>Terms of Service</h1>
                <p className="legal-meta">Last Updated: November 2026</p>

                <div className="legal-content">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing {config.baseUrl} or engaging Atech Infotech for custom software development,
                        you agree to be bound by these Terms of Service and any project-specific Statement of Work (SOW).
                    </p>

                    <h2>2. Services &amp; Milestone Delivery</h2>
                    <p>
                        We provide software architecture, website development, mobile application engineering, and custom CRM/ERP
                        development. Every custom project is governed by an agreed written Statement of Work detailing scope,
                        milestone deliverables, acceptance criteria, and payment terms.
                    </p>

                    <h2>3. Intellectual Property &amp; Code Ownership</h2>
                    <p>
                        Unless expressly agreed otherwise in writing: upon receipt of full payment for an agreed milestone or project,
                        all custom source code, documentation, and digital assets developed specifically for the client are assigned
                        100% to the client. Atech Infotech retains no proprietary lock-in.
                    </p>

                    <h2>4. Confidentiality &amp; Non-Disclosure</h2>
                    <p>
                        Both parties agree to treat all commercial, technical, and architectural information as strictly confidential.
                        We are happy to sign an NDA before you share confidential requirements.
                    </p>

                    <h2>5. Invoicing &amp; Payment Terms</h2>
                    <p>
                        Invoices are issued in the currency agreed upon in the Statement of Work (GBP, CAD, AED, or USD). Milestone
                        payments are released upon client verification of milestone deliverables.
                    </p>

                    <h2>6. Post-Launch Support &amp; Limitation of Liability</h2>
                    <p>
                        We provide an agreed post-launch support window on fixed-price projects to resolve defects in agreed scope.
                        To the maximum extent permitted by law, our liability is limited to the amounts paid under the relevant Statement of Work.
                    </p>

                    <h2>7. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of India, or as mutually stipulated
                        within individual client master services agreements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default { PrivacyPolicyPage, TermsPage };
