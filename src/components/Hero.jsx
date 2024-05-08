import React, { useState } from "react"
import heroImage from '../assets/hero-image.png';
import { motion } from 'framer-motion';

export function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
    <section className="hero-section">
        <motion.div className="navbar" initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
            <div className="logo" onClick={() => window.scrollTo(0, 0)}>
                Brayden <span>Cantrill</span>
            </div>
        <div className={`links ${menuOpen ? 'open' : ''}`}>
            <a href="#about-section">About</a>
            <a href="#technical-section">Skills</a>
            <a href="#portfolio-section">Portfolio</a>
            <a href="#contact-section">Contact</a>
        </div>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
        </div>
            <button onClick={() => window.location.href = 'mailto:cantrill.brayden@gmail.com'} className="btn-talk">Let's Talk</button>
        </motion.div>
        <div className="information-container">
        <motion.div className="information-header" initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="heading">
            <div className="title">Full Stack Web Developer</div>
            <div className="second-title">
                <span>
                Hi There, I’m <br />
                </span>
                <span>Brayden Cantrill</span>
            </div>
            <p className="description">
                Welcome to my portfolio where each project is designed to engage and inspire. <br/>Explore my work and create with me.
            </p>
            </div>
            <div className="btn-hero-container">
            <a href="#contact-section">
                <button className="btn-hire">Hire Me</button>
            </a>
            <a href="#portfolio-section">
                <button className="btn-portfolio">Portfolio</button>
            </a>
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}>
            <img className="hero-image" src={heroImage} alt="Hero Image"/>
        </motion.div>
    </div>
    <a href="#about-section" className="scroll-down-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
    </a>
</section>
    )
}