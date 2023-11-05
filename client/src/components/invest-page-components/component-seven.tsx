// This is thetSeventh component of the invest page
import React from "react";
import "../../../src/style/invest-comp-7.css"; //this links the css file and the component
import database from "../../../src/data/database.json";

function ComponentSeven() {
    const componentSevenData = database["invest-page"]["compoenent-seven"];
  
    return (
        <div className="componentSeven">
            <h1>{componentSevenData.title}</h1>
        </div>
      );
    }
    
    export default ComponentSeven;