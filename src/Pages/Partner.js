import React from "react";
import "../CSS/Pages/Partner.css";
import PartnerLogo from "../Components/Partner/PartnerLogo";

import PartnerDetails from "../Components/Partner/PartnerDetails";
import AmenitiesSection from "../Components/Partner/AmenitiesSection";
import PartnerProjects from "../Components/Partner/PartnerProjects";
import OtherPartners from "../Components/Partner/OtherPartners";

export default function Partner() {
  return (
    <div>
      <div className="partnerMainDiv">
        <div className="imageDiv">OUR PARTNER</div>
        <PartnerLogo />
        <div className="partnerSecondaryDiv">
          <AmenitiesSection />
          <PartnerDetails />
        </div>
        <div className="sectiontitle">PROJECTS</div>

        <PartnerProjects />
        <div className="sectiontitle">OTHER PARTNERS</div>

        <OtherPartners />
      </div>
    </div>
  );
}
