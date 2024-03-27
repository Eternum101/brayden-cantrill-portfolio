import React from "react"
import heroImage from '../assets/hero-image.png';

export function Hero() {
    return (
    <section className="hero-section">
        <div className="navbar">
            <div className="background" />
            <div className="logo">
                Brayden <span>Cantrill</span>
            </div>
        <div className="links">
            <a href="#about-section">About</a>
            <a href="#technical-section">Skills</a>
            <a href="#portfolio-section">Portfolio</a>
            <a href="#contact-section">Contact</a>
        </div>
        <button className="btn-talk">Let's Talk</button>
        </div>
        <div className="information-container">
        <div className="information-header">
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
                <button>Hire Me</button>
                <button>Portfolio</button>
            </div>
        </div>
        <div>
            <img className="hero-image" src={heroImage} alt="Hero Image"/>
        </div>
    </div>
    <a href="#about-section" className="scroll-down-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
    </a>
</section>
    )
}