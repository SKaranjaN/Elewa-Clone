// this file will contain the components for the social-impact page
import React from "react";
import Nav from "../features/Nav";
import ComponentOne from "../components/social-impact-components/component-one";
import ComponentTwo from "../components/social-impact-components/component-two";
import ComponentThree from "../components/social-impact-components/componet-three";
import ComponentFour from "../components/social-impact-components/component-four";
import ComponentFive from "../components/social-impact-components/component-five";
import ComponentSix from "../components/social-impact-components/component-six";
import ComponentSeven from "../components/social-impact-components/component-seven";
import ComponentEight from "../components/social-impact-components/component-eight";
import Footer from "../features/Footer";

function SocialImpact() {
    return (
        <div>
            <Nav />
            <ComponentOne />
            <ComponentTwo />
            <ComponentThree />
            <ComponentFour />
            <ComponentFive />
            <ComponentSix />
            <ComponentSeven />
            <ComponentEight />
            <Footer />
        </div>
    )
}

export default SocialImpact;