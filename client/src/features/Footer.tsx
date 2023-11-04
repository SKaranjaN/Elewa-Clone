// This is the footer component and this acts as the view model in regards to the MVVM architecture, whereby the view will be in the other components where it will be rendered
import React from 'react';
import navData from '../../src/data/database.json'
import '../../src/style/Footer.css';


// Here we are defining the type for the JSON data directly in the component file
type FooterData = {
    "about-page": {
      footer: {
        [key: string]: {
          [property: string]: string | string[] | undefined;
        };
      };
    };
  };

function Footer() {
    const jsonData: FooterData = navData;

  // Here in the return we will iterate over the keys and acess the properties in order to get the data value 
  return (
    <div>
      <div>
        <h1>{jsonData['about-page'].footer['headquaters'].h1}</h1>
        <ul>
          {jsonData['about-page'].footer['headquaters'].address?.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
