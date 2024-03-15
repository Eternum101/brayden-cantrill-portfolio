import React from "react";
import '../styles/Index.css';
import '../styles/Hero.css'

export function Home() {
    return (
        <>
            <div className="layout">
                <section className="navbar-section">
                    <div className="navbar">
                        <div className="title">
                            <h4>Brayden <span>Cantrill</span></h4>
                        </div>
                        <div className="links">
                            <a>About</a>
                            <a>Skills</a>
                            <a>Portfolio</a>
                            <a>Contact</a>
                        </div>
                        <div className="btn-talk">
                            <button>Let's Talk</button>
                        </div>
                    </div>
                </section>
                <section className="information-layout">
                    <div className="information-container">
                        <div className="column">
                            <div className="left-column">
                                <div className="info-left-column">
                                    <h3>Full Stack Web Developer</h3>
                                    <h4>
                                        Hi There, I'm <br />
                                        <span>Brayden Cantrill</span>
                                    </h4>
                                    <h5>
                                        Welcome to my portfolio of captivating digital experiences.
                                        Explore my work and let's create something extraordinary together.
                                    </h5>
                                    <div className="btn-info-container">
                                        <button>Hire Me</button>
                                        <button>Portfolio</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}