import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import SocialMediaMockup from '../assets/social-media-mockup.png';
import MessagingAppMockup from '../assets/messaging-app-mockup.png';
import PhotoTagMockup from '../assets/photo-tag-mockup.png';
import WeatherAppMockup from '../assets/weather-app-mockup.png';
import ShoppingCartMockup from '../assets/shopping-cart-mockup.png';
import TicTacToeMockup from '../assets/tic-tac-toe-mockup.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animation = useAnimation();

  if (inView) {
    animation.start({
        y: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1 },
    });
  }

  const variants = {
    visible: { 
      scale: [1, 1.05, 1],
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.2
      } 
    },
    hidden: { 
      scale: 1,
      opacity: 0 
    }
  };

    return (
        <section id="portfolio-section" className="portfolio-section">
        <div className="portfolio-container">
          <motion.div className="portfolio-heading" 
            ref={ref}
            animate={animation}
            initial={{ y: 50, opacity: 0}}>
            <div className="portfolio-title">My Portfolio</div>
            <p className="portfolio-description">
              Browse my featured work for a glimpse into my web development expertise.
            </p>
          </motion.div>
        </div>
        <div className="portfolio-cards-container">
          <div className="portfolio-row">
          <a href="https://social-media-app-el95.onrender.com/" target="_blank">
            <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Social Media Application" src={SocialMediaMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Social Media Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                  <p className="portfolio-card-tools">React, JavaScript, Node, Express, MongoDB, Material UI, Redux, Firebase</p>
                </div>
              <a href="https://social-media-app-el95.onrender.com/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
          </a>
          <a href="https://messaging-app-2mr0.onrender.com/" target="_blank">
            <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Messaging Application" src={MessagingAppMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Messaging Application</div>
                  <p className="portfolio-card-sub-title">Web Design / Development</p>
                  <p className="portfolio-card-tools">React, JavaScript, Node, Express, MongoDB</p>
                </div>
              <a href="https://messaging-app-2mr0.onrender.com/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
            </a>
            <a href="https://photo-tagging-app-lzga.onrender.com/" target="_blank">
            <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Photo Tagging Application" src={PhotoTagMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Photo Tagging Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                  <p className="portfolio-card-tools">React, JavaScript, Node, Express, MongoDB</p>
                </div>
              <a href="https://photo-tagging-app-lzga.onrender.com/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
            </a>
          </div>
          <div className="portfolio-row">
        <a href="https://eternum101.github.io/weather-app/" target="_blank">
          <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Weather Application" src={WeatherAppMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Weather Application</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                  <p className="portfolio-card-tools">HTML5, CSS3, JavaScript, Open Weather API</p>
                </div>
              <a href="https://eternum101.github.io/weather-app/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
          </a>
          <a href="https://brayden-shopping-cart.netlify.app/" target="_blank">
            <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Shopping Cart Project" src={ShoppingCartMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Shopping Cart Project</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                  <p className="portfolio-card-tools">React, JavaScript, Node, Vite</p>
                </div>
              <a href="https://brayden-shopping-cart.netlify.app/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
          </a>
          <a href="https://eternum101.github.io/tic-tac-toe/" target="_blank">
            <motion.div className="portfolio-card" variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <img className="portfolio-image" alt="Tic Tac Toe Game" src={TicTacToeMockup} />
              <div className="portfolio-card-desc-container">
                <div className="portfolio-card-desc">
                  <div className="portfolio-card-title">Tic Tac Toe Game</div>
                  <div className="portfolio-card-sub-title">Web Design / Development</div>
                  <p className="portfolio-card-tools">HTML5, CSS3, JavaScript</p>
                </div>
              <a href="https://eternum101.github.io/tic-tac-toe/" target="_blank">
                <button className="portfolio-icon"><BsFillArrowUpRightCircleFill /></button>
              </a>
              </div>
            </motion.div>
          </a>
          </div>
          <div className="github-container">
            View my other projects/repositories here:
            <a href="https://github.com/Eternum101" target="_blank"> 
                <button className="btn-github">
                    <FaGithub /> Brayden Cantrill
                </button>
            </a>
          </div>
        </div>
      </section>
    );
};