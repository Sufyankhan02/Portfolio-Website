import React from 'react';
import '../styles/Technologies.css';

const Technologies = () => {
    const techs = [
        { id: 1, name: 'React', icon: '⚛️', type: 'react' },
        { id: 2, name: 'Vite', icon: '⚡', type: 'vite' },
        { id: 3, name: 'CSS3', icon: '🛡️', type: 'css' },
        { id: 4, name: 'HTML5', icon: '🌐', type: 'html' },
        { id: 5, name: 'JavaScript', icon: '📜', type: 'js' },
        { id: 6, name: 'Node.js', icon: '🟢', type: 'node' },
        { id: 7, name: 'Git', icon: '🔀', type: 'git' },
        { id: 8, name: 'Figma', icon: '🖌️', type: 'figma' },
    ];

    return (
        <section id="technologies" className="technologies section">
            <div className="container">
                <h2 className="section-title">Technologies Used</h2>
                <div className="tech-grid">
                    {techs.map((tech) => (
                        <div key={tech.id} className={`tech-card ${tech.type}`}>
                            <div className="card-content">
                                <div className="tech-icon">{tech.icon}</div>
                                <div className="tech-name">{tech.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
