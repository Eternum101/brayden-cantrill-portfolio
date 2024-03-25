import React from "react";

export function About() {
    return (
    <section id="about-section" className="about-section">
        <div className="about-headings">
          <div className="about-title">About Me</div>
          <div className="about-description">
            I'm a passionate web developer that specialises in both front-end and back-end development.
            I'm known for writing clean, efficient code and for having an eye for detail whilst being commited to creating
            seamless user experiences on the web.
          </div>
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
            <div className="about-data-title three">695+</div>
            <div>
              <div className="about-data-description">Total Contributions</div>
            </div>
          </div>
        </div>
        <div className="background-2" />
      </section>
    )
}