import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Headquarters',
        value: '1782 Omaxe city-1 Indore, Madhya pradesh - 452010, India',
        color: '#00c6ff',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.93 3.29 2 2 0 0 1 3.92.7H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        label: 'Phone',
        value: '+91 7678410628',
        color: '#7b2ff7',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'priyanshu.in@gmail.com',
        color: '#f72585',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: 'Business Hours',
        value: 'Mon–Fri: 9:00 AM – 7:00 PM IST',
        color: '#4cc9f0',
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/priyanshu.in@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', service: '', message: '' });
            } else {
                console.error("Form submission failed");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Get In Touch</div>
                    <h2 className="section-title">
                        Let's Build Something <span className="gradient-text">Amazing</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? We'd love to hear about it.
                        Send us a message and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Info Panel */}
                    <div className="contact__info">
                        <div className="contact__info-cards">
                            {contactInfo.map((info) => (
                                <div className="contact__info-card glass-card" key={info.label}>
                                    <div className="contact__info-icon" style={{ color: info.color, background: `${info.color}15`, border: `1px solid ${info.color}30` }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="contact__info-label">{info.label}</p>
                                        <p className="contact__info-value">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__social glass-card">
                            <p className="contact__social-title">Follow Us</p>
                            <div className="contact__social-links">
                                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((s) => (
                                    <a href="#" key={s} className="contact__social-link">
                                        {s}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Panel */}
                    <div className="contact__form-wrap glass-card">
                        <form className="contact__form" action="https://formsubmit.co/priyanshu.in@gmail.com" method="POST">
                            <h3 className="contact__form-title">Send Us a Message</h3>
                            
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                            
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="contact__field">
                                <label htmlFor="service">Service Interested In</label>
                                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                                    <option value="">Select a service...</option>
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Cloud Solutions</option>
                                    <option>AI & Machine Learning</option>
                                    <option>Cybersecurity</option>
                                    <option>Digital Transformation</option>
                                </select>
                            </div>
                            <div className="contact__field">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary contact__submit">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
