// This is the nav component, and regards to the MVVM architecture, it acts as the view model, whereas the json data is the model.

import navData from '../../src/data/database.json';
import '../../src/style/Nav.css'

// Here we are defining the type for the JSON data directly in the component file
type NavData = {
    "about-page": {
      nav: {
        [key: string]: string;
      };
    };
  };
  
    function Nav() {
        const jsonData: NavData = navData;  // then over here we are explicitly casting the JSON data to the defined type
      
        // this is an iteration that maps the items in the nav object
        const navItems = Object.keys(jsonData['about-page'].nav).map((key) => {
            // here we are creating a condition in order to create an image element that will contain the path to the image and the alt text, in that if the key is "logo", then using dot notation we can access the value and use it as the src to the image
          if (key === 'logo') {
            return (
              <li key={key} className="nav-logo">
                <img src={jsonData['about-page'].nav.logo} alt={jsonData['about-page'].nav['logo-alt']} />
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