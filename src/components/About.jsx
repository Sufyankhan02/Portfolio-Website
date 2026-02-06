import React from 'react';
import '../styles/About.css';
import { portfolioData } from '../models/portfolioData';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>{portfolioData.bio}</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className="skills-list">
                            {portfolioData.skills.map((skill, index) => (
                                <li key={index} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
