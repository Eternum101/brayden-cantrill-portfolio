import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export function Portfolio() {
    return (
        <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-heading">
            <div className="portfolio-title">My Portfolio</div>
            <p className="portfolio-description">
              Explore my design services, from user interface and experience to prototyping and testing. Let&#39;s craft
              exceptional digital experiences together.
            </p>
          </div>
        </div>
        <div className="portfolio-cards-container">
          <div className="portfolio-row">
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image.png" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Social Media Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image.svg" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Messaging Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image-2.png" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Photo Tagging Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
          </div>
          <div className="portfolio-row">
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image-2.svg" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Weather Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image-3.png" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Shopping Cart Project</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Image" src="image-4.png" />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Tic Tac Toe Game</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </div>
            </div>
          </div>
          <div className="github-container">
            View my other projects/repositories here:
            <a href="https://github.com/Eternum101"> 
                <button className="btn-github">
                    <FaGithub /> Brayden Cantrill
                </button>
            </a>
          </div>
        </div>
      </section>
    );
};