import React from "react";
import "../../CSS/Homepage.css";
import Carousel from "react-material-ui-carousel";
import bck from "../../Images/1.jpg";
import bck1 from "../../Images/4.jpg";
import bck2 from "../../Images/3.jpg";

import { Paper } from "@mui/material";
export default function CarouselHome() {
  return (
    <Carousel height="100vh" autoPlay={false}>
      <Paper>
        <header>
          <img alt="img" src={bck} className="image" />
        </header>
      </Paper>
      <Paper>
        <header>
          <img alt="img" className="image" src={bck1} />
        </header>
      </Paper>
      <Paper>
        <header>
          <img alt="img" className="image" src={bck2} />
        </header>
      </Paper>
    </Carousel>
  );
}
