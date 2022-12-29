import React from "react";
// import Card from "react-animated-3d-card";
import Card from "@mui/material/Card";
import Atropos from "atropos/react";
import "atropos/css";

import "../../CSS/Projects/CardsSection.css";

export default function ProjectCard(props) {
  return (
    <Atropos
      className="my-atropos"
      activeOffset={10}
      rotateXMax={10}
      rotateYMax={10}
      shadowScale={0.85}
      rotateTouch={false}
    >
      <Card
        style={{
          backgroundImage: `url(${props.src1})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="theCard"
        onClick={() => props.onClick()}
      >
        <div
          className="divProjectCard"
          style={{ backgroundColor: `${props.color}` }}
        >
          <div className="textDiv">
            <div className="name"> {props.name} </div>
            <div className="slogan">{props.slogan}</div>
          </div>
        </div>
      </Card>
    </Atropos>
  );
}
