// This is the fourth component of the invest page
import React from "react";
import "../../../src/style/invest-comp-4.css"; //this links the css file and the component
import database from "../../../src/data/database.json";

function ComponentFour() {
    const componentFourData = database["invest-page"]["component-four"];
  
    return (
      <div className="component-four">
        <img
          src={componentFourData.image[0]}
          alt={componentFourData.image[1]}
          className="component-image"
        />
        <div className="text-a">
            <h1>{componentFourData.title}</h1>
            <p>{componentFourData.p1}</p>
            <p>{componentFourData.p2}</p>
        </div>
      </div>
    );
  }
  
  export default ComponentFour;
