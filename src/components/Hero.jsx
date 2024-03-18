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
            <a>About</a>
            <a>Skills</a>
            <a>Portfolio</a>
            <a>Contact</a>
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
                Welcome to my portfolio of captivating digital experiences. <br/>Explore my work and let&#39;s create
                something extraordinary together.
            </p>
            </div>
            <div className="btn-hero-container">
            <button>Hire Me</button>
            <button>Portfolio</button>
            </div>
        </div>
        <img src={heroImage} alt="Hero Image"/>
        </div>
    </section>
    )
}