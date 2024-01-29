import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium_title">Preview of Spotify</p>
                <p className="disclaimer-premium_subtitle">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div className="button">
                <button type="button">Sign up free</button>
            </div>
        </footer>
    )
};

export default Footer;