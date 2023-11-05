// This will be the first component on the invest page
import React from "react";
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentOne() {
    // here we are getting the data from the JSON file
    const investData = database["invest-page"]["component-one"];

    return (
        <div className="component-one">
            <img src={investData.image[0]} alt={investData.image[1]} />
            <h1 className="title">{investData.title[0]}</h1>
            <h2 className="subtitle">{investData.title[1]}</h2>
            <p className="tag">{investData.tag}</p>
        </div>
    );
}

export default ComponentOne;
