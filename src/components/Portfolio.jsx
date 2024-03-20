import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import SocialMediaMockup from '../assets/social-media-mockup.png';
import MessagingAppMockup from '../assets/messaging-app-mockup.png';
import PhotoTagMockup from '../assets/photo-tag-mockup.png';
import WeatherAppMockup from '../assets/weather-app-mockup.png';
import ShoppingCartMockup from '../assets/shopping-cart-mockup.png';
import TicTacToeMockup from '../assets/tic-tac-toe-mockup.png';

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
              <img className="portfolio-image" alt="Social Media Application" src={SocialMediaMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Social Media Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                </div>
              <a href="https://social-media-app-el95.onrender.com/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Messaging Application" src={MessagingAppMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Messaging Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                </div>
              <a href="https://messaging-app-2mr0.onrender.com/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Photo Tagging Application" src={PhotoTagMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Photo Tagging Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
              <a href="https://photo-tagging-app-lzga.onrender.com/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </div>
          </div>
          <div className="portfolio-row">
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Weather Application" src={WeatherAppMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Weather Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
              <a href="https://eternum101.github.io/weather-app/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Shopping Cart Project" src={ShoppingCartMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Shopping Cart Project</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
              <a href="https://brayden-shopping-cart.netlify.app/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </div>
            <div className="portfolio-card">
              <img className="portfolio-image" alt="Tic Tac Toe Game" src={TicTacToeMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Tic Tac Toe Game</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                </div>
              <a href="https://eternum101.github.io/tic-tac-toe/">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
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