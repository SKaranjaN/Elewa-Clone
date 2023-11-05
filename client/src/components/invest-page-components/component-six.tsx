// This is thetSixth component of the invest page
import React from "react";
import "../../../src/style/invest-comp-6.css"; //this links the css file and the component
import database from "../../../src/data/database.json";

function ComponentSix() {
    const componentSixData = database["invest-page"]["component-six"];
  
    return (
        <div className="componentSix">
          <div className="text">
            <h1>{componentSixData.title}</h1>
            <p>{componentSixData.p}</p>
          </div>
          <img
            src={componentSixData.image[0]}
            alt={componentSixData.image[1]}
            className="component-image"
          />
          <div className="button">
              <a href="your-link-here">
                <div></div>
                {componentSixData.button.text}
              </a>
            </div>
        </div>
      );
    }
    
    export default ComponentSix;
