import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-greeting">Hi, my name is</div>
                    <h1 className="hero-title">Sufyan Khan.</h1>
                    <h2 className="hero-subtitle">I build things for the web.</h2>
                    <p className="hero-description">
                        I'm a software engineer specializing in building (and occasionally designing)
                        exceptional digital experiences. Currently, I'm focused on building accessible,
                        human-centered products.
                    </p>
                    <div className="hero-buttons">
                        <a href="https://github.com/Sufyankhan02?tab=repositories" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Check out my work!</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
