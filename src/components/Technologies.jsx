import React from 'react';
import './Technologies.css';

const techGroups = [
    {
        category: 'Frontend',
        color: '#00c6ff',
        techs: [
            { name: 'React', logo: '⚛️' },
            { name: 'Next.js', logo: '▲' },
            { name: 'Vue.js', logo: '💚' },
            { name: 'TypeScript', logo: '🔷' },
            { name: 'Angular', logo: '🅰️' },
        ],
    },
    {
        category: 'Backend',
        color: '#7b2ff7',
        techs: [
            { name: 'Node.js', logo: '🟢' },
            { name: 'Python', logo: '🐍' },
            { name: 'Java', logo: '☕' },
            { name: 'Go', logo: '🐹' },
            { name: 'Django', logo: '🎸' },
        ],
    },
    {
        category: 'Mobile',
        color: '#f72585',
        techs: [
            { name: 'React Native', logo: '📱' },
            { name: 'Flutter', logo: '🦋' },
            { name: 'Swift', logo: '🐦' },
            { name: 'Kotlin', logo: '🎯' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        color: '#4cc9f0',
        techs: [
            { name: 'AWS', logo: '☁️' },
            { name: 'Azure', logo: '🔵' },
            { name: 'GCP', logo: '🌐' },
            { name: 'Docker', logo: '🐳' },
            { name: 'Kubernetes', logo: '⚙️' },
        ],
    },
    {
        category: 'Databases',
        color: '#06d6a0',
        techs: [
            { name: 'PostgreSQL', logo: '🐘' },
            { name: 'MongoDB', logo: '🍃' },
            { name: 'Redis', logo: '🔴' },
            { name: 'MySQL', logo: '🗄️' },
        ],
    },
    {
        category: 'AI & Data',
        color: '#f4a261',
        techs: [
            { name: 'TensorFlow', logo: '🧠' },
            { name: 'PyTorch', logo: '🔥' },
            { name: 'OpenAI', logo: '🤖' },
            { name: 'Pandas', logo: '🐼' },
        ],
    },
];

const Technologies = () => {
    return (
        <section className="section technologies" id="technologies">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Tech Stack</div>
                    <h2 className="section-title">
                        Technologies We <span className="gradient-text">Master</span>
                    </h2>
                    <p className="section-subtitle">
                        We leverage the most powerful and proven technologies to build
                        solutions that scale, perform, and endure.
                    </p>
                </div>

                <div className="tech__grid">
                    {techGroups.map((group) => (
                        <div className="tech-group glass-card" key={group.category}>
                            <div className="tech-group__header">
                                <span className="tech-group__dot" style={{ background: group.color, boxShadow: `0 0 12px ${group.color}` }}></span>
                                <h3 className="tech-group__title" style={{ color: group.color }}>{group.category}</h3>
                            </div>
                            <div className="tech-group__items">
                                {group.techs.map((tech) => (
                                    <div className="tech-item" key={tech.name}>
                                        <span className="tech-item__logo">{tech.logo}</span>
                                        <span className="tech-item__name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Marquee */}
                <div className="tech__marquee-wrapper">
                    <div className="tech__marquee">
                        {[...techGroups.flatMap(g => g.techs), ...techGroups.flatMap(g => g.techs)].map((t, i) => (
                            <div className="tech__marquee-item" key={`${t.name}-${i}`}>
                                <span>{t.logo}</span>
                                <span>{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
