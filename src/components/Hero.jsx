import React from "react"
import heroImage from '../assets/hero-image.png';
import { motion } from 'framer-motion';

export function Hero() {
    return (
    <section className="hero-section">
        <motion.div className="navbar" initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
            <div className="logo">
                Brayden <span>Cantrill</span>
            </div>
        <div className="links">
            <a href="#about-section">About</a>
            <a href="#technical-section">Skills</a>
            <a href="#portfolio-section">Portfolio</a>
            <a href="#contact-section">Contact</a>
        </div>
        <a href="#contact-section">
            <button className="btn-talk">Let's Talk</button>
        </a>
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
                Welcome to my portfolio where each project is designed to engage and inspire. <br/>Explore my work and innovate with me.
            </p>
            </div>
            <div className="btn-hero-container">
                <button className="btn-hire">Hire Me</button>
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