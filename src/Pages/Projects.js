import React from "react";
import "../CSS/Pages/Projects.css";
import CardsSection from "../Components/Projects/CardsSection";
import ReactGA from "react-ga4";

export default function Projects() {
  ReactGA.send("pageview");

  return (
    <div>
      {" "}
      <div className="projectsMainDiv">
        <div className="imageDiv">PROJECTS</div>
        <CardsSection />
      </div>
    </div>
  );
}
