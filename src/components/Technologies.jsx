import React from 'react';
import './Technologies.css';

const techGroups = [
    { category: 'Frontend', color: '#00c6ff', techs: [{ name: 'React', logo: '⚛️' }, { name: 'Next.js', logo: '▲' }, { name: 'TypeScript', logo: '🔷' }] },
    { category: 'Backend', color: '#7b2ff7', techs: [{ name: 'Node.js', logo: '🟢' }, { name: 'Laravel', logo: '🔺' }, { name: 'Python', logo: '🐍' }] },
    { category: 'Mobile', color: '#f72585', techs: [{ name: 'Flutter', logo: '🦋' }, { name: 'React Native', logo: '📱' }] },
    { category: 'Databases', color: '#06d6a0', techs: [{ name: 'MySQL', logo: '🗄️' }, { name: 'MongoDB', logo: '🍃' }, { name: 'PostgreSQL', logo: '🐘' }] },
    { category: 'DevOps', color: '#4cc9f0', techs: [{ name: 'Docker', logo: '🐳' }, { name: 'AWS', logo: '☁️' }] },
];

const Technologies = () => {
    return (
        <section className="section technologies" id="technologies">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Tech Stack</div>
                    <h2 className="section-title">
                        Tools We <span className="gradient-text">Build With</span>
                    </h2>
                    <p className="section-subtitle">
                        The stacks we use day to day to build and ship products.
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
