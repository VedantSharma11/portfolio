import React, { useState } from "react";
import "./qualification.css";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

function Qualification() {
  const [Toggle, setToggle] = useState(1);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              Toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggle(1)}
          >
            <LuGraduationCap fontSize={27} className="ex-icons"/>
            Education
          </div>
          <div
            className={
              Toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggle(2)}
          >
            <PiShoppingBagOpenBold fontSize={24} className="ex-icons"/>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              Toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech. CSE</h3>
                <span className="qualification__subtitle">Galgotias University</span>
                <span className="qualification__subtitle">
                  CGPA: 9
                </span>
                <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>  2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  Green Fileds School (CBSE)
                </span>
                <span className="qualification__subtitle">
                  Percentage: 89.2 %
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary</h3>
                <span className="qualification__subtitle">
                Green Fileds School (CBSE)
                </span>
                <span className="qualification__subtitle">
                  Percentage: 87.6 %
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          
          </div>

          <div className={
              Toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer intern</h3>
                <span className="qualification__subtitle">NCR Corporation</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 (Feb) - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web developer intern</h3>
                <span className="qualification__subtitle">Dezainahub</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov - Dec (2023)
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Google Cloud Arcade Facilitator</h3>
                <span className="qualification__subtitle">Google</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul - Sept (2023)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
