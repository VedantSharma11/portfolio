import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Node.Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Express.Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
        <div className="skills__group">
          
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">REST-API's</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Authentication/Auth</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
          <PiSealCheckFill/>
            <div>
              <h3 className="skills__name">Middleware/ ErrorHandling</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Backend