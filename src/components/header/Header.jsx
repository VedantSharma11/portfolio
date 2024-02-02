import React, { useState } from "react";
import "./header.css";
import { FiGrid } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { TbPhoto } from "react-icons/tb";
import { LuContact2 } from "react-icons/lu";

function Header() {
  /*====== ======= Change Background Header ======= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*====== ======= Toggle Menu ======= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Vedant
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <BiHomeAlt fontSize={20} className="nav__icon"/>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <IoPersonOutline fontSize={20} className="nav__icon"/>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FiFileText fontSize={20} className="nav__icon"/>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <TbPhoto fontSize={20} className="nav__icon"/>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <LuContact2 fontSize={20} className="nav__icon"/>Contact
              </a>
            </li>
          </ul>

          <IoCloseSharp fontSize={20} className="nav__close" onClick={() => showMenu(!Toggle)}/>
    
        </div>

        {!Toggle && <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <FiGrid/>
        </div>}

      </nav>
    </header>
  );
}

export default Header;
