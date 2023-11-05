// This will be the first component on the invest page
import React from "react";
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file
import "../../../src/style/invest-comp-1.css"

function ComponentOne() {
    // here we are getting the data from the JSON file
    const investData = database["invest-page"]["component-one"];

    return (
        <div className="component-one">
            <p className="tag">{investData.tag}</p>
            <h1 className="title">{investData.title[0]}</h1>
            <h1 className="title">{investData.title[1]}</h1>
            
        </div>
    );
}

export default ComponentOne;
