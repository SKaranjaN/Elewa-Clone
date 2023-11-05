// this file will contain the components for the invest page
import React from "react";
import Nav from "../features/Nav";
import ComponentOne from "../components/invest-page-components/component-one";
import ComponentTwo from "../components/invest-page-components/component-two";
import ComponentThree from "../components/invest-page-components/component-three";
import ComponentFour from "../components/invest-page-components/component-four";
import ComponentFive from "../components/invest-page-components/component-five";
import ComponentSix from "../components/invest-page-components/component-six";
import ComponentSeven from "../components/invest-page-components/component-seven";
import Footer from "../features/Footer";

function Invest() {
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
            <Footer />
        </div>
    )
}

export default Invest