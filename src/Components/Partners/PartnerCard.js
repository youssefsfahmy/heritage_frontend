import React from "react";
import "atropos/css";
import Card from "@mui/material/Card";
import "../../CSS/Partners/CardsSection.css";
import Atropos from "atropos/react";

export default function PartnerCard(props) {
  return (
    <Atropos
      className="my-atropos"
      activeOffset={10}
      rotateXMax={10}
      rotateYMax={10}
      shadowScale={0.85}
      alwaysActive={true}
      shadowOffset={82}
      onEnter={() => {
        console.log("enter");
      }}
      onLeave={() => {
        console.log("enter");
      }}
      onDrag={() => {
        console.log("drag");
      }}
    >
      {" "}
      <Card
        style={{
          // backgroundColor: "#c8cbcd",
          backgroundColor: "rgb(226 229 231)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="theCard"
        onClick={() => props.onClick()}
      >
        <div
          className="divPartnerCard"
          // style={{ backgroundColor: `${props.color}` }}
        >
          <div className="textDiv">
            <div className="name">
              {props.src1 ? (
                <img src={props.src1} alt="logo" />
              ) : (
                <div className="viewAll">{props.slogan}</div>
              )}{" "}
            </div>
          </div>
        </div>
      </Card>
    </Atropos>
  );
}
