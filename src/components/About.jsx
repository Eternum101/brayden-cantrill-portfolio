import React from "react";

export function About() {
    return (
    <section className="about-section">
        <div className="about-headings">
          <div className="about-title">About Me</div>
          <div className="about-description">Text Here</div>
        </div>
        <div className="about-data-container">
          <div className="about-data-info">
            <div className="about-data-title">35</div>
            <div>
              <div className="about-data-description">Projects Done</div>
            </div>
          </div>
          <div className="about-data-info">
            <div className="about-data-title two">3+</div>
            <div>
              <div className="about-data-description">Years of Experience</div>
            </div>
          </div>
          <div className="about-data-info">
            <div className="about-data-title three">273+</div>
            <div>
              <div className="about-data-description">Commits Made</div>
            </div>
          </div>
        </div>
        <div className="background-2" />
      </section>
    )
}