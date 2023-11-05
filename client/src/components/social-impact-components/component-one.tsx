// This is first component after the nav in the social impact page 
import React from "react";
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file
import "../../../src/style/soc-imp-1.css"

function ComponentOne() {
    // here we are getting the data from the JSON file
    const socialData = database["social-impact-page"]["component-1"];

    return (
        <div className="component-one">
            <p className="tag">{socialData.tag}</p>
            <h1 className="title">{socialData.title}</h1>
            
        </div>
    );
}

export default ComponentOne;
