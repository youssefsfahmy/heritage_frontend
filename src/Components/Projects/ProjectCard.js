import React from "react";
// import Card from "react-animated-3d-card";
import Card from "@mui/material/Card";

import "../../CSS/Projects/CardsSection.css";

export default function ProjectCard(props) {
  return (
    <Card
      // href="https://web.i12.lirten.com/home"
      style={{
        backgroundImage: `url(${props.src1})`,

        // backgroundColor: "#7510F7",
        // width: "30vw",
        // height: "20vw",
        // cursor: "pointer",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="theCard"
      onClick={() => props.onClick()}
      // shineStrength={0.6}
    >
      <div
        className="divProjectCard"
        style={{ backgroundColor: `${props.color}` }}
      >
        <div className="textDiv">
          <div className="name"> {props.name} </div>
          <div className="slogan">{props.slogan}</div>
        </div>

        {/* <img
          src={props.src}
          alt=""
          style={{
            height: `${props.height}`,
            marginTop: `${props.marginTop}`,
          }}
          className="logoProjectCard"
        /> */}
      </div>
    </Card>
  );
}
