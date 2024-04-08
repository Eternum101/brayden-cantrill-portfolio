import React, { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillSendCheckFill } from "react-icons/bs";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const siteKey = import.meta.env.VITE_APP_SITE_KEY;
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();

      setIsLoading(true);
  
      const formData = {
        firstName,
        email,
        phoneNumber,
        message,
        recaptchaToken,
      };
  
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsLoading(false);
  
      if (response.ok) {
        setShowPopup(true);
        setFirstName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
      }
    };

    useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
    setRecaptchaCompleted(!!value);
  };

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

  const contactInfoVariants = {
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    },
    hidden: { 
      x: -100, 
      opacity: 0 
    }
  };

  const textFieldsVariants = {
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    },
    hidden: { 
      x: 100, 
      opacity: 0 
    }
  };

    return (
      <section id="contact-section" className="contact-section">
        {showPopup && (
        <div className={`popup ${showPopup ? 'show' : ''}`}>
          <BsFillSendCheckFill />
          Your message has been sent!
        </div>
      )}
        <motion.div className="contact-container" ref={ref} variants={contactInfoVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <div className="contact-info">
          <div className="contact-heading">
            <div className="contact-title">Get in Touch</div>
            <p className="contact-description">
            Currently open to new opportunities and eager to connect with like-minded individuals. If you have any questions or wish to discuss a project, don’t hesitate to reach out!
            </p>
          </div>
          <div className="contact-details-container">
            <div className="details">
                <FaPhoneVolume />
              <div className="detail-description">0435 017 722</div>
            </div>
            <div className="details">
                <IoMailSharp />
                <div className="detail-description"> cantrill.brayden@gmail.com</div>
            </div>
            <div className="details">
                <FaLocationArrow />
              <div className="detail-description">Gold Coast, Australia</div>
            </div>
          </div>
        </div>
        <div className="social-container">
        <div className="social-icons" onClick={() => window.open('https://github.com/Eternum101', '_blank')}>
          <FaGithub />
        </div>
        <div className="social-icons">
            <FaLinkedin />
        </div>
        </div>
      </motion.div>
      <motion.div className="text-fields-container" ref={ref} variants={textFieldsVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        {isLoading ? (
          <div className="contact-loader"></div>
        ) : (
      <form onSubmit={handleSubmit} className="text-fields">
          <input placeholder="First name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input placeholder="Phone number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
          <textarea className="textarea-message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
          <button type="submit" className="btn-message" disabled={!recaptchaCompleted}>Send Message</button>
      </form>
    )}
      </motion.div>
    </section>
    )
}