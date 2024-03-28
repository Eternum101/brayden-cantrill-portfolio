import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
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

    return (
    <section id="about-section" className="about-section">
        <motion.div className="about-headings" ref={ref}
            animate={animation}
            initial={{ y: 50, opacity: 0}}>
          <div className="about-title">About Me</div>
          <div className="about-description">
            I'm a passionate web developer that specialises in both front-end and back-end development.
            I'm known for writing clean, efficient code and for having an eye for detail whilst being commited to creating
            seamless user experiences on the web.
          </div>
        </motion.div>
        <motion.div className="about-data-container" ref={ref}
            animate={animation}
            initial={{ y: 50, opacity: 0}}>
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
        </motion.div>
        <div className="background-2" />
      </section>
    )
}