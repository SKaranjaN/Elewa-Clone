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
    <div className="footer-container-1">
        <div className="footer-container-2">
            <hr className="horizontal-line" />
            <div className="footer-content">
                <div>
                    <h1>{jsonData['about-page'].footer['headquaters'].h1}</h1>
                    <ul>
                    {Array.isArray(jsonData['about-page'].footer['headquaters'].address)
                        ? jsonData['about-page'].footer['headquaters'].address.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))
                        : null}
                    </ul>
                </div>
                <div>
                    <h1>{jsonData['about-page'].footer['navigation'].h1}</h1>
                    <p>{jsonData['about-page'].footer['navigation']['about']}</p>
                    <p>{jsonData['about-page'].footer['navigation']['social']}</p>
                    <p>{jsonData['about-page'].footer['navigation']['invest']}</p>
                    <p>{jsonData['about-page'].footer['navigation']['news']}</p>
                    <p>{jsonData['about-page'].footer['navigation']['contact']}</p>
                </div>

                <div>
                    <h1>{jsonData['about-page'].footer['brands'].h1}</h1>
                    {Array.isArray(jsonData['about-page'].footer['brands']['brands']) ? (
                    <p>{jsonData['about-page'].footer['brands']['brands'].join(', ')}</p>
                    ) : null}
                </div>

                <div>
                    <h1>{jsonData['about-page'].footer['privacy'].h1}</h1>
                    <p>{jsonData['about-page'].footer['privacy']['terms']}</p>
                    <p>{jsonData['about-page'].footer['privacy']['cookies']}</p>
                </div>

                <div>
                    <h1>Icons</h1>
                    {Object.keys(jsonData['about-page']?.footer?.icons ?? {}).map((icon, index) => (
                        <div key={index}>
                        {Array.isArray(jsonData['about-page']?.footer?.icons?.[icon]) ? (
                            <>
                            <a
                                href={jsonData['about-page']?.footer?.icons?.[icon]?.[1] || ''}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                key={icon}
                                src={jsonData['about-page']?.footer?.icons?.[icon]?.[0] || ''}
                                alt={icon}
                                />
                            </a>
                            </>
                        ) : (
                            <a
                            href={jsonData['about-page']?.footer?.icons?.[icon]?.[2] || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                key={icon}
                                src={jsonData['about-page']?.footer?.icons?.[icon] as string}
                                alt={icon}
                            />
                            </a>
                        )}
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
  );
}

export default Footer;
