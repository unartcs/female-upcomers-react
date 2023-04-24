import React from "react";
import "./Contact.css";
import bgImage from "../data/imgs/about-us-image1.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import {RxLinkedinLogo} from "react-icons/rx"

function Contact() {
  return (
    <div className="contact-us-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-us-container">
        <div className="contact-us-title">Kontakt os</div>
      </div>
      <form className="contact-form">
        <fieldset>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Nav..."
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Emne..."
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Nesked..."
            required
          ></textarea>
          <fieldset className="submit-btn-field">
            <button type="submit" className="submit-btn">
              Send
            </button>
          </fieldset>
        </fieldset>
      </form>
      <div className="contact-us-content">
        <ul className="contact-list">
          <li>
            <FaFacebookSquare size={64} />
          </li>
          <li>
            <FaInstagramSquare size={64} />
          </li>
          <li>
            <FaLinkedin size={64} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
