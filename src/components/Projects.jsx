import React from 'react';
import '../styles/Projects.css';
import { portfolioData } from '../models/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Some Things I've Built</h2>
                <div className="projects-grid">
                    {portfolioData.projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-header">
                                <div className="folder-icon">📂</div>
                                <a href={project.link} className="external-link" target="_blank" rel="noopener noreferrer">
                                    🔗
                                </a>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
