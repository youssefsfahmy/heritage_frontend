import React from "react";
import CarouselProject from "../../Components/Project/CarouselProject";
import Gallery from "../../Components/Project/Gallery";
import mainImg from "../../Images/hero.png";
import "../../CSS/Pages/Project.css";
import AmenitiesBar from "../../Components/Project/AmenitiesBar";
import ContactUsHome from "../../Components/Homepage/ContactUsHome";
// import pdf from "../../docs/Bayhomes.pdf";

export default function Mivida() {
  return (
    <div>
      <div className="projectMainDiv">
        <div className="backgroundDiv">
          <div
            className="imageDiv"
            style={{ backgroundImage: `url(${mainImg})` }}
          ></div>
          <div className="textDiv">
            <div className="name"> Almaza Bay</div>
            <div className="slogan"> Your Ultimate Sanctuary</div>
          </div>
        </div>
        <AmenitiesBar />

        <Gallery pdf={pdf} name="Almaza Bay" />
        <ContactUsHome />
      </div>
    </div>
  );
}
