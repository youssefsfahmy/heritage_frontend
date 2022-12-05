import React from "react";
import "../../CSS/Projects/CardsSection.css";

import ProjectCard from "./ProjectCard";

import { useNavigate } from "react-router-dom";
import img1 from "../../Images/hero.png";
import img2 from "../../Images/Belle-Vie.png";
import img3 from "../../Images/june.jpg";
import img4 from "../../Images/trio.jpg";
import img5 from "../../Images/O-West-Cairo.jpg";
import img6 from "../../Images/icity.jpg";
// import logo2 from "../../Images/LogoWhite.png";
// import logo3 from "../../Images/LogoWhite.png";

export default function CardsSection() {
  const navigate = useNavigate();

  return (
    <div className="mainDivProjects" id={"projects"}>
      <br /> <br />
      <span className="text">
        Heritage partners with prestigious developers all arround egypt. Here is
        a list of our partnered projects.
      </span>
      <div className="cardsDiv">
        <ProjectCard
          name="ALMAZA BAY"
          slogan="Your ultimate sanctuary"
          src1={img1}
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
          src1={img2}
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(250,158,35,0.4)"}
          onClick={() => {
            navigate("/Project?name=bellevie");
          }}
        />

        <ProjectCard
          name="JUNE"
          slogan="Where it’s always summer"
          src1={img3}
          color={"rgb(128 110 0 / 50%)"}
          height={"8rem"}
          marginTop={"5rem"}
          onClick={() => {
            navigate("/Project?name=june");
          }}
        />
      </div>
      <div className="cardsDiv">
        <ProjectCard
          name="Trio"
          slogan="Inspiration That Changes Perceptions"
          src1={img4}
          height={"8rem"}
          marginTop={"5rem"}
          onClick={() => {
            navigate("/Project?name=trio");
          }}
          color={"rgb(100,100,35,0.3)"}
        />

        <ProjectCard
          name="O WEST"
          slogan="A true wholesome town experience"
          src1={img5}
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(40 68 60 / 25%)"}
          onClick={() => {
            navigate("/Project?name=owest");
          }}
        />

        <ProjectCard
          name="MOUNTAIN VIEW ICITY"
          slogan="A City Within A City"
          src1={img6}
          color={"rgb(79 110 191 / 50%)"}
          height={"8rem"}
          marginTop={"4rem"}
          onClick={() => {
            navigate("/Project?name=icity");
          }}
        />
      </div>
      <br />
      <span className="text">
        Can't find what you're looking for?
        <a
          onClick={() => {
            navigate("/Contact");
          }}
        >
          <span className="emailme">Contact us.</span>
        </a>
      </span>
      <br />
    </div>
  );
}
