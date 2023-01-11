import React from "react";
import "../CSS/Pages/Partners.css";
import CardsSection from "../Components/Partners/CardsSection";
export default function Partners() {
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
