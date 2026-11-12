import React from 'react';
import './Team.css';

const team = [
    {
        name: 'Priyanshu Dixit',
        role: 'CEO & Co-Founder',
        bio: 'Leads the company and client relationships.',
        avatar: 'PD',
        color: '#00c6ff',
        social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
        name: 'Ajay Rathore',
        role: 'VP of Engineering',
        bio: 'Leads engineering and delivery.',
        avatar: 'AR',
        color: '#f72585',
        social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
        name: 'Komal Dixit',
        role: 'Head of Design',
        bio: 'Leads UI/UX design.',
        avatar: 'KD',
        color: '#4cc9f0',
        social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
        name: 'Rahul Sahu',
        role: 'Head of AI/ML',
        bio: 'Leads AI and data projects.',
        avatar: 'RS',
        color: '#06d6a0',
        social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
        name: 'Ritu Dixit',
        role: 'Head of Sales & BD',
        bio: 'Leads sales and client onboarding.',
        avatar: 'RD',
        color: '#f4a261',
        social: { linkedin: '#', twitter: '#', github: '#' },
    },
];

const Team = () => {
    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Our Team</div>
                    <h2 className="section-title">
                        The Minds Behind <span className="gradient-text">Atech</span>
                    </h2>
                    <p className="section-subtitle">
                        The people you will work with, from the first call to launch.
                    </p>
                </div>

                <div className="team__grid">
                    {team.map((member, i) => (
                        <div className="team-card glass-card" key={member.name} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="team-card__avatar-wrap">
                                <div className="team-card__avatar-ring" style={{ borderColor: `${member.color}60` }}>
                                    <div className="team-card__avatar" style={{ background: `linear-gradient(135deg, ${member.color}60, ${member.color}20)`, color: member.color }}>
                                        {member.avatar}
                                    </div>
                                </div>
                                <div className="team-card__glow-dot" style={{ background: member.color, boxShadow: `0 0 12px ${member.color}` }}></div>
                            </div>
                            <h3 className="team-card__name">{member.name}</h3>
                            <p className="team-card__role" style={{ color: member.color }}>{member.role}</p>
                            <p className="team-card__bio">{member.bio}</p>
                            <div className="team-card__social">
                                {member.social.linkedin !== '#' && (<a href={member.social.linkedin} className="team-card__social-btn" aria-label="LinkedIn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>)}
                                {member.social.twitter !== '#' && (<a href={member.social.twitter} className="team-card__social-btn" aria-label="Twitter">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                </a>)}
                                {member.social.github !== '#' && (<a href={member.social.github} className="team-card__social-btn" aria-label="GitHub">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                </a>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
