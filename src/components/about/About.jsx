import React from "react";
import "./about.css";
import AboutImg from "../../assets/vedant12.jpg";
import CV from "../../assets/vedant.pdf";
import { FaRegFileLines } from "react-icons/fa6";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info grid">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">Fresher</span>
            </div>
            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">5+ Projects</span>
            </div>
          </div>
          <p className="about__description">
            Excited software engineering intern at NCR Corporation, merging
            technical prowess with a passion for web development. Proficient in
            both frontend and backend technologies, I specialize in crafting
            seamless digital experiences. Transforming ideas into user-centric
            websites is my forte, leaving a lasting impact through innovative
            solutions. Committed to continuous learning and growth in the
            dynamic world of software engineering and web development.
          </p>
          <a download="vedant" href={CV} className="button button--flex">
            Download CV
            <FaRegFileLines fontSize={20} className="file-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
