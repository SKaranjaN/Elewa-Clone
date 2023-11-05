// this is the sixth component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-6.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentSix() {
    // here we are accessing the data from the JSON file
    const componentSixData = database["social-impact-page"]["component-6"];
  
    return (
        <div className="component-Six">
          <div className="text">
              <h1>{componentSixData.title}</h1>
              <p>{componentSixData.p1}</p>
              <p>{componentSixData.p1}</p>
          </div>
          <img
            src={componentSixData.image[0]}
            className="component-image"
          />
        </div>
      );
    }
  
  export default ComponentSix;