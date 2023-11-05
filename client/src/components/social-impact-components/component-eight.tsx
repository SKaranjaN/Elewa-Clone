// this is the eighth component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-8.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentEight() {
    // here we are accessing the data from the JSON file
    const componentEightData = database["social-impact-page"]["component-8"];
  
    return (
        <div className="component-Eight">
          <div className="text-3">
              <h1>{componentEightData.title}</h1>
          </div>
        </div>
      );
    }
  
  export default ComponentEight;