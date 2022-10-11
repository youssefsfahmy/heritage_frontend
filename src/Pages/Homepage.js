import React from "react";
import "../CSS/Homepage.css";

import CarouselHome from "../Components/Homepage/CarouselHome";
import AboutUsHome from "../Components/Homepage/AboutUsHome";
import FeaturedProjects from "../Components/Homepage/FeaturedProjects";
import Locations from "../Components/Homepage/Locations";
import ContactUsHome from "../Components/Homepage/ContactUsHome1";

export default function Homepage() {
  return (
    <div>
      <CarouselHome />
      <div className="sectiontitle">FEATURED PROJECTS</div>
      <FeaturedProjects /> <div className="sectiontitle">WHO WE ARE</div>
      <AboutUsHome />
      <div className="sectiontitle">LOCATIONS</div>
      <Locations />
      <div className="sectiontitle">CONTACT US</div>
      <ContactUsHome />
    </div>
  );
}
