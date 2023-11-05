// This is the third component of the invest page
import React from "react";
import "../../../src/style/invest-comp-3.css";
import database from "../../../src/data/database.json"; //here is how we link the component to the json file

function ComponentThree() {
    // here is where we access the data from the json file
  const componentThreeData = database["invest-page"]["component-three"];

  return (
    <div className="component-three">
      <h1>{componentThreeData.title}</h1>
      <div className="cards-container">
        {/* here we are iterating over the cards in order to render them all */}
        {Object.entries(componentThreeData.cards).map(([, cardData], index) => (
          <div className="card" key={index}>
            <p className="number">{cardData.number}</p>
            <p className="description">{cardData.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentThree;
