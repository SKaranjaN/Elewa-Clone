// this is the Fiveth component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-5.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentFive() {
    // here we are accessing the data from the JSON file
    const componentFiveData = database["social-impact-page"]["component-5"];
  
    return (
        <div className="component-Five">
            <img
                src={componentFiveData.image[0]}
                className="component-image"
            />
          <div className="text">
              <h1>{componentFiveData.title}</h1>
              <p>{componentFiveData.p1}</p>
              <p>{componentFiveData.p2}</p>
              <p>{componentFiveData.p3}</p>
          </div>
        </div>
      );
    }
  
  export default ComponentFive;