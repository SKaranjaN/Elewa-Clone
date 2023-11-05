// this is the seventh component in the social impact page
import React from 'react'; 
import "../../../src/style/soc-imp-7.css"
import database from "../../../src/data/database.json"; // this where we are linking the component to the database file

function ComponentSeven() {
    const componentSevenData = database['social-impact-page']['component-7']; //this allows us to access the data from the json file
    const carouselImages = Object.values(componentSevenData.carousel);
  
    return (
      <div className="component-Seven">
        <h1 className="text-4">{componentSevenData.title}</h1>
        <div className="carousel-container">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image[0]}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default ComponentSeven;