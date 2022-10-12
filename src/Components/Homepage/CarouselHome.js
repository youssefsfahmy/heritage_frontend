import React from "react";
import "../../CSS/Homepage/HomeCarousel.css";
import Carousel from "react-material-ui-carousel";
import bck1 from "../../Images/bck1.jpg";
import bck2 from "../../Images/bck6.jpg";
import bck3 from "../../Images/bck3.jpg";
import Animation from "./Animation";

import { Paper } from "@mui/material";
export default function CarouselHome() {
  return (
    <div>
      {" "}
      <div className="AnimationDiv">
        <Animation />
      </div>
      <Carousel height="100vh" autoPlay={true} interval={7000} duration={1000}>
        <Paper>
          <header>
            <img alt="img" className="image1" src={bck1} />
          </header>
        </Paper>
        <Paper>
          <header>
            <img alt="img" className="image2" src={bck2} />
          </header>
        </Paper>
        <Paper>
          <header>
            <img alt="img" className="image3" src={bck3} />
          </header>
        </Paper>
      </Carousel>
    </div>
  );
}
