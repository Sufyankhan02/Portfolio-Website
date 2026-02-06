import React from 'react';
import '../styles/Contact.css'; // Reusing styling for simplicity or could be Footer.css

const Footer = () => {
    return (
        <footer className="footer">
            <p>Designed & Built by <span style={{ color: 'var(--primary)' }}>Sufyan Khan</span></p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
