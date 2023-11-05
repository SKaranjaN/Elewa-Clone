// this is the fourth component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-4.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentFour() {
    // here we are accessing the data from the JSON file
    const componentFourData = database["social-impact-page"]["component-4"];
  
    return (
        <div className="component-Four">
          <div className="text">
              <h1>{componentFourData.title}</h1>
              <p>{componentFourData.p}</p>
          </div>
          <img
            src={componentFourData.image[0]}
            className="component-image"
          />
        </div>
      );
    }
  
  export default ComponentFour;