import React, { useState } from 'react';
import logo from '../assets/new-logo.png';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src={logo} alt="Sufyan Khan" className="logo-img" />
                </a>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </div>

                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#payment" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</a>
                    <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
                    <a href="#payment" className="btn btn-primary" onClick={() => setIsOpen(false)}>Hire Me</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
