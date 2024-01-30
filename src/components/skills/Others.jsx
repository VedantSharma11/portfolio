import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";

const Others = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Other Tools/Technologies</h3>
    <div className="skills__box">
      <div className="skills__group">
        
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">Git</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">Github</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">Linux</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>

      </div>
      <div className="skills__group">
        
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">C++</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">Postman</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
        <div className="skills__data">
        <PiSealCheckFill/>
          <div>
            <h3 className="skills__name">SQL</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Others





