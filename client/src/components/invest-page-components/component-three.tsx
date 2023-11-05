// This is the second component on the investment page

import React from "react";
import database from "../../../src/data/database.json"; // This line imports the code from the json file
import "../../../src/style/invest-comp-3.css"

function ComponentThree() {
    // Here is how we access the data for ComponentTwo from the JSON file
    const investData = database["invest-page"]["component-two"];

    return (
        <div className="component-two">
            <h1>{investData.title}</h1>
            <p>
                {investData.p.map((paragraph, index) => (
                    <span key={index}>{paragraph}<br /></span>
                ))}
            </p>
            <img src={investData.image[0]} alt={investData.image[1]} />
        </div>
    );
}

export default ComponentTwo;
