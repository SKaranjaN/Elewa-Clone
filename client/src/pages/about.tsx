// this file will contain the components for the about page
import React from "react";
import Nav from "../features/Nav";
import ComponentOne from "../components/about-page-components/componentOne";
import Footer from "../features/Footer";

function About() {
    return (
        <div>
            <Nav />
            <ComponentOne />
            <Footer />
        </div>
    )
}

export default About;