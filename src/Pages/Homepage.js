import React from "react";
import "../CSS/Homepage.css";
import Followus from "../Components/General/Followus";

import CarouselHome from "../Components/Homepage/CarouselHome";

export default function Homepage() {
  return (
    <div>
      <CarouselHome />
      <div style={{ color: "white", fontSize: "5vw", position: "fixed" }}>
        Homepage
      </div>
      <Followus />
    </div>
  );
}
