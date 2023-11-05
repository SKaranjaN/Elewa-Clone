// this is the second component in the social impact page 
import React from "react";
import "../../../src/style/soc-imp-2.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentTwo() {
    // here we are accessing the data from the JSON file
    const componentData = database["social-impact-page"]["component-2"];
  
    return (
        <div className="componentTwo">
        <div>
          {Object.entries(componentData).map(([cardKey, cardData]) => (
            <div key={cardKey} className="card">
              <p className="number">{cardData.number}</p>
              <p className="description">{cardData.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ComponentTwo;
