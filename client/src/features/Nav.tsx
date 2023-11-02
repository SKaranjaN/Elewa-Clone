// This is the nav component, and regards to the MVVM architecture, it acts as the view model, whereas the json data is the model.
// using the useEffect helps in  adding the event listener to achieve the scrolling effect
import React, { useEffect } from 'react';
import navData from '../../src/data/database.json';
import '../../src/style/Nav.css'

// Here we are defining the type for the JSON data directly in the component file
type NavData = {
    "about-page": {
      nav: {
        [key: string]: string | string[];
      };
    };
  };
  
    function Nav() {
        const jsonData: NavData = navData;  // then over here we are explicitly casting the JSON data to the defined type
      
        // this is an iteration that maps the items in the nav object
        const navItems = Object.keys(jsonData['about-page'].nav).map((key) => {
            // here we are creating a condition in order to create an image element that will contain the path to the image and the alt text, in that if the key is "logo", then using dot notation we can access the value and use it as the src to the image
            if (key === 'logo') {
                const [logoSrc, logoAlt] = jsonData['about-page'].nav[key]; // Destructure the array
                return (
                  <li key={key} className="nav-logo">
                    <img src={logoSrc} alt={logoAlt} />
                  </li>
                );
          } else {
            // this will then render the other key values after iterating through them by also using dot notation
            return (
              <li key={key}>
                <a href={key} className="nav-link">{jsonData['about-page'].nav[key]}</a>
              </li>
            );
          }
        });

        useEffect(() => {
            const nav = document.querySelector('.nav-body'); //here we are using DOM to target the element using the className
        
            //then creating a condition if the element we are targeting by className exists, which if it does, the variable prevScrollPos will have an initial position set in reference to the Y axis.
            if (nav) {
              let prevScrollPos = window.pageYOffset;
        
              window.onscroll = function () {
                const currentScrollPos = window.pageYOffset;
        
                if (currentScrollPos > prevScrollPos) {  //now here we set another condition if the current position is greater that the initially set position, it means the user is scrolling down hence adding the styles in the css file under the className stickyNav.
                  nav.classList.add('sticky-nav');
                } else {
                  nav.classList.remove('sticky-nav');
                }
        
                prevScrollPos = currentScrollPos;
              };
            }
          }, []);
        
      
        return (
            // through the variable we earlier defined, we can then use it in our return hence avoiding hardcording our values.
            <>
                <div className="nav-body">
                    <ul className="nav-links">
                        {navItems}
                    </ul>
                </div>
                <hr className="horizontal-line" />
            </>
        );
      }
      
      export default Nav;