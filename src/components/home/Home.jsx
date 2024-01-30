import React from "react";
import "./home.css";
import { BsMouse } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { TbSend } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/vedantsharma13/"
              className="home__social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/VedantSharma11"
              className="home__social-icon"
            >
              <VscGithubAlt />
            </a>
            <a
              href="https://leetcode.com/VedantSharma11/"
              className="home__social-icon"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://twitter.com/vedants2003/"
              className="home__social-icon"
            >
              <BsTwitterX fontSize={18} />
            </a>
          </div>
          <div className="home__img"></div>
          <div className="home__data">
            <h1 className="home__title">Vedant Sharma 👋🏼</h1>
            <h3 className="home__subtitle">Web Developer</h3>
            <p className="home__description">
              

            Passionate web developer, blending frontend and backend magic to craft digital stories. On a mission to share my love for web development with the world. 🚀
            </p>
            <a href="#contact" className="button button--flex">
              Say Hello
              <TbSend fontSize={21} className="send-icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BsMouse fontSize={30} className="scroll-icon" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
