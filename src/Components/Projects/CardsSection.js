import React from "react";
import "../../CSS/Projects/CardsSection.css";

import ProjectCard from "./ProjectCard";

export default function CardsSection() {
  return (
    <div className="mainDivProjects" id={"projects"}>
      <div className="text">
        <hr />
        We are proud to announce that <b>Heritage</b> signed a partnership as an
        official seller with <b>luxury</b> real estate developers across Egypt
        offering you <b>exclusive</b> deals only through <b>Heritage</b> real
        estate
        {/* Heritage partners with prestigious developers all around Egypt. Here is
        a list of our partnered projects. */}
        <hr />
      </div>
      <div className="cardsDiv">
        <a href="/Project?name=almazabay">
          <ProjectCard
            name="ALMAZA BAY"
            slogan="Your ultimate sanctuary"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/almazabay-hero-thumbnail.jpg"
            }
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(255,255,255,0.3)"}
            // onClick={() => {
            //   navigate("/Project?name=almazabay");
            // }}
          />
        </a>
        <a href="/Project?name=bellevie">
          <ProjectCard
            name="BELLE VIE"
            slogan="Life is beautiful"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/bellevie-hero-thumbnail.jpg"
            }
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(138 117 90 / 33%)"}
          />
        </a>

        <a href="/Project?name=june">
          <ProjectCard
            name="JUNE"
            slogan="Where it’s always summer"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/june-hero-thumbnail.jpg"
            }
            color={"rgb(128 110 0 / 50%)"}
            height={"8rem"}
            marginTop={"5rem"}
          />
        </a>
        <a href="/Project?name=trio">
          <ProjectCard
            name="Trio"
            slogan="Inspiration That Changes Perceptions"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/trio-hero-thumbnail.jpg"
            }
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(100,100,35,0.3)"}
          />
        </a>
        <a href="/Project?name=owest">
          <ProjectCard
            name="O WEST"
            slogan="A true wholesome town experience"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/owest-hero-thumbnail.jpg"
            }
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(40 68 60 / 25%)"}
          />
        </a>
        <a href="/Project?name=icity">
          <ProjectCard
            name="MOUNTAIN VIEW ICITY"
            slogan="A City Within A City"
            src1={
              "https://heritage-eg.s3.amazonaws.com/Heros/icity-hero-thumbnail.jpg"
            }
            color={"rgb(79 110 191 / 50%)"}
            height={"8rem"}
            marginTop={"4rem"}
          />
        </a>
      </div>
      <br />
      <div className="text2">
        Can't find what you're looking for?
        <a href="/Contact">
          <div>
            <span className="emailme"> &nbsp; Contact us.</span>
          </div>{" "}
        </a>
      </div>
      <br />
    </div>
  );
}
