// this is the second component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-3.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentThree() {
    // here we are accessing the data from the JSON file
    const componentThreeData = database["social-impact-page"]["component-3"];
  
    return (
        <div className="component-Three">
          <img
            src={componentThreeData.image[0]}
            className="component-image"
          />
          <div className="text">
              <h1>{componentThreeData.title}</h1>
              <p>{componentThreeData.p}</p>
          </div>
        </div>
      );
    }
  
  export default ComponentThree;
