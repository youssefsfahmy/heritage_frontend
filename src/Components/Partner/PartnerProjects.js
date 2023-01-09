import React from "react";
import "../../CSS/Partner/PartnerProjects.css";

import ProjectCard from "../Projects/ProjectCard";
import projects from "../../Copyrighting/projects.json";

import { useNavigate } from "react-router-dom";

export default function PartnerProjects(props) {
  const navigate = useNavigate();
  var partnerProjects = [];

  for (var key in projects) {
    if (projects[key].developerId === props.id) {
      partnerProjects.push(projects[key]);
    }
  }

  return (
    <div className="mainDivProjects reveal" id={"projects"}>
      <div className="cardsDiv">
        {partnerProjects.map(function (value, key) {
          return (
            <a href={`/Project?name=${value.id}`}>
              <ProjectCard
                name={value.name}
                slogan={value.slogan}
                src1={`https://heritage-eg.s3.amazonaws.com/Heros/${value.id}-hero-thumbnail.jpg`}
                height={"8rem"}
                marginTop={"5rem"}
                color={value.thumbnailShade}
              />
            </a>
          );
        })}{" "}
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
