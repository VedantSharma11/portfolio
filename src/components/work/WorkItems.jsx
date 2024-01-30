import React from "react";
import { FaCode } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="inner-container">
        <h3 className="work__title">{item.title}</h3>
        <div className="innie">
          <a href={item.codelink} className="work__button1 links">
            <FaCode fontSize={20}/>
          </a>
          <a href={item.deploylink} className="work__button2 links">
            <GrDeploy fontSize={20}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkItems;
