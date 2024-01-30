import React from "react";
import { PiSealCheckFill } from "react-icons/pi";


function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

        </div>
        <div className="skills__group">
          
          <div className="skills__data">
            <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Tailwind/Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">React.Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Frontend;
