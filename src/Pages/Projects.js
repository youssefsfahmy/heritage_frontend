import React from "react";
import "../CSS/Pages/Projects.css";
import CardsSection from "../Components/Projects/CardsSection";
export default function Projects() {
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
