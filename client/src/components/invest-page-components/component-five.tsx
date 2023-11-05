// This is thetFiveth component of the invest page
import React from "react";
import "../../../src/style/invest-comp-5.css"; //this links the css file and the component
import database from "../../../src/data/database.json";

function ComponentFive() {
    const componentFiveData = database["invest-page"]["component-five"];
  
    return (
      <div className="componenttFive">
        <img
          src={componentFiveData.image[0]}
          alt={componentFiveData.image[1]}
          className="component-image"
        />
        <div className="text">
            <h1>{componentFiveData.title}</h1>
            <p>{componentFiveData.p1}</p>
            <p>{componentFiveData.p2}</p>
        </div>
      </div>
    );
  }
  
  export default ComponentFive;
