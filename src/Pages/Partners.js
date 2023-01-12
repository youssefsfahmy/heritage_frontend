import React from "react";
import "../CSS/Pages/Partners.css";
import CardsSection from "../Components/Partners/CardsSection";
import ReactGA from "react-ga4";

export default function Partners() {
  ReactGA.send("pageview");

  return (
    <div>
      {" "}
      <div className="partnersMainDiv">
        <div className="imageDiv">PARTNERS</div>
        <CardsSection />
      </div>
    </div>
  );
}
