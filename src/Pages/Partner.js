import React from "react";
import "../CSS/Pages/Partner.css";
import PartnerLogo from "../Components/Partner/PartnerLogo";
import { useSearchParams } from "react-router-dom";

import PartnerDetails from "../Components/Partner/PartnerDetails";
import AmenitiesSection from "../Components/Partner/AmenitiesSection";
import PartnerProjects from "../Components/Partner/PartnerProjects";
import OtherPartners from "../Components/Partner/OtherPartners";
import Copyrighting from "../Copyrighting/partners.json";

export default function Partner() {
  const [searchParams] = useSearchParams();
  const CurrentProject = searchParams.get("name");
  return (
    <div>
      <div className="partnerMainDiv">
        <div className="imageDiv">OUR PARTNER</div>
        <PartnerLogo id={Copyrighting[CurrentProject].id} />
        <div className="partnerSecondaryDiv">
          <AmenitiesSection Copyrighting={Copyrighting[CurrentProject]} />
          <PartnerDetails Copyrighting={Copyrighting[CurrentProject]} />
        </div>
        <div className="sectiontitle">PROJECTS</div>

        <PartnerProjects id={Copyrighting[CurrentProject].id} />
        <div className="sectiontitle">OTHER PARTNERS</div>

        <OtherPartners id={Copyrighting[CurrentProject].id} />
      </div>
    </div>
  );
}
