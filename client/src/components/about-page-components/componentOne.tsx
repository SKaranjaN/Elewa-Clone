// This will be the first component on the about page
import React from "react";
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file
import "../../../src/style/abt-comp-1.css"

function ComponentOne() {
    // here we are getting the data from the JSON file
    const aboutData = database["about-page"]["component-1"];

    return (
        <div className="component-one-4">
            <p className="tag">{aboutData.tag}</p>
            <h1 className="title">{aboutData.title}</h1>
            <p className="tag">{aboutData.tag2}</p>
            
        </div>
    );
}

export default ComponentOne;