import React from "react";
import "./About.css";
import aboutData from "../data/About.json";
import personData from "../data/AboutPersonal";
import {NavLink} from 'react-router-dom'
function About() {
  return (
    <div className="about-wrapper">
      <div className="about-section-1">
        <div className="about-section-1-left">
          <div className="about-section-1-left-title">
            {aboutData["section-1-title"]}
          </div>
          <div className="about-section-1-left-text">
            {aboutData["section-1-text"]}
          </div>
        </div>
        <div className="about-section-1-right">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/${aboutData["section-1-image"]}`}
            alt="About us"
          />
        </div>
      </div>
      <div className="about-section-2">
        <div className="about-section-2-title">
          {aboutData["section-2-title"]}
        </div>
        <div className="about-section-2-content">
          <div className="about-section-2-text">
            {aboutData["section-2-text"]}
          </div>
          <div className="about-section-2-button-wrapper">
            <NavLink to="/contact">
              <button className="about-section-contact-button">Kontakt</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="about-section-3">
        <div className="about-section-3-title">
          {aboutData["section-3-title"]}
        </div>
        <div className="about-section-3-grid-wrapper">
          {personData.map((person) => {
            return (
              <div className="about-section-3-grid-box">
                <div className="about-grid-box-left-wrapper">
                  <img
                    className="about-grid-box-image"
                    src={`${process.env.PUBLIC_URL}/imgs/${person.image}`}
                    alt={person.name}
                  />
                </div>
                <div className="about-grid-box-right-wrapper">
                  <div className="about-grid-box-right-name">{person.name}</div>
                  <div className="about-grid-box-right-summary">
                    {person.summary}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
