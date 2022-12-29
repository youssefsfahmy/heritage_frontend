import React from "react";
import "../../CSS/Partner/PartnerProjects.css";

import ProjectCard from "../Projects/ProjectCard";

import { useNavigate } from "react-router-dom";

export default function PartnerProjects() {
  const navigate = useNavigate();

  return (
    <div className="mainDivProjects reveal" id={"projects"}>
      <div className="cardsDiv">
        <ProjectCard
          name="ALMAZA BAY"
          slogan="Your ultimate sanctuary"
          src1={"https://heritage-eg.s3.amazonaws.com/WebsiteImages/hero.png"}
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(255,255,255,0.3)"}
          onClick={() => {
            navigate("/Project?name=almazabay");
          }}
        />

        <ProjectCard
          name="BELLE VIE"
          slogan="Life is beautiful"
          src1={
            "https://heritage-eg.s3.amazonaws.com/WebsiteImages/Belle-Vie.png"
          }
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(138 117 90 / 33%)"}
          onClick={() => {
            navigate("/Project?name=bellevie");
          }}
        />

        <ProjectCard
          name="JUNE"
          slogan="Where it’s always summer"
          src1={"https://heritage-eg.s3.amazonaws.com/WebsiteImages/june.jpg"}
          color={"rgb(128 110 0 / 50%)"}
          height={"8rem"}
          marginTop={"5rem"}
          onClick={() => {
            navigate("/Project?name=june");
          }}
        />
      </div>

      <br />
      <div className="text2">
        Can't find what you're looking for?
        <div
          onClick={() => {
            navigate("/Contact");
          }}
        >
          <span className="emailme"> &nbsp; Contact us.</span>
        </div>
      </div>
      <br />
    </div>
  );
}
