import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
    return (
        <section className="contact-section">
        <div className="contact-container">
        <div className="contact-info">
          <div className="contact-heading">
            <div className="contact-title">Get in Touch</div>
            <p className="contact-description">
              Have a question or a project in mind? I&#39;d love to hear from you. Let&#39;s chat and make something
              amazing together.
            </p>
          </div>
          <div className="contact-details-container">
            <div className="details">
                <FaPhoneVolume />
              <div className="detail-description">+1205 5872 321</div>
            </div>
            <div className="details">
                <IoMailSharp />
                <div className="detail-description"> contact@sarajonesdesign.com</div>
            </div>
            <div className="details">
                <FaLocationArrow />
              <div className="detail-description">1234 Design Street,Creativeville, Webland,Imaginary State, 98765</div>
            </div>
          </div>
        </div>
        <div className="social-container">
        <div className="social-icons">
            <FaGithub />
        </div>
        <div className="social-icons">
            <FaLinkedin />
        </div>
        </div>
      </div>
      <div className="text-fields-container">
        <div className="text-fields">
          <input placeholder="First name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Phone number" type="tel" />
          <textarea className="textarea-message" placeholder="Your message" />
        </div>
        <button className="btn-message">Send Message</button>
      </div>
    </section>
    )
}