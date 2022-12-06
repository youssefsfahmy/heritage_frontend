import React from "react";
import "../../CSS/Homepage/HomeCarousel.css";
import Carousel from "react-material-ui-carousel";

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
            <img
              alt="img"
              className="image1"
              src={
                "https://heritage-eg.s3.amazonaws.com/WebsiteImages/bck1.jpg"
              }
            />
          </header>
        </Paper>
        <Paper>
          <header>
            <img
              alt="img"
              className="image2"
              src={
                "https://heritage-eg.s3.amazonaws.com/WebsiteImages/bck6.jpg"
              }
            />
          </header>
        </Paper>
        <Paper>
          <header>
            <img
              alt="img"
              className="image3"
              src={
                "https://heritage-eg.s3.amazonaws.com/WebsiteImages/bck3.jpg"
              }
            />
          </header>
        </Paper>
      </Carousel>
    </div>
  );
}
