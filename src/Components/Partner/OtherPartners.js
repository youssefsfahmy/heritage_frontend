import React from "react";
import "../../CSS/Partner/OtherPartners.css";
import emaar from "../../Images/emaar.png";
import madaar from "../../Images/madaar.png";
import sodic from "../../Images/sodic.png";
import PartnerCard from "../Partners/PartnerCard";

import { useNavigate } from "react-router-dom";

export default function OtherPartners() {
  const navigate = useNavigate();

  return (
    <div className="mainDivOtherPartners reveal" id={"projects"}>
      <div className="cardsDiv">
        <PartnerCard
          name="ALMAZA BAY"
          slogan="Your ultimate sanctuary"
          src1={emaar}
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(255,255,255,0.3)"}
          onClick={() => {
            navigate("/Partner");
          }}
        />

        <PartnerCard
          name="BELLE VIE"
          slogan="Life is beautiful"
          src1={madaar}
          height={"8rem"}
          marginTop={"5rem"}
          color={"rgb(138 117 90 / 33%)"}
          onClick={() => {
            navigate("/Partner");
          }}
        />

        <PartnerCard
          name="JUNE"
          slogan="Where it’s always summer"
          src1={sodic}
          color={"rgb(128 110 0 / 50%)"}
          height={"8rem"}
          marginTop={"5rem"}
          onClick={() => {
            navigate("/Partner");
          }}
        />
        <PartnerCard
          name="JUNE"
          slogan="VIEW ALL &#8594;
          "
          src1={null}
          color={"rgb(128 110 0 / 50%)"}
          height={"8rem"}
          marginTop={"5rem"}
          onClick={() => {
            navigate("/Partners");
          }}
        />
      </div>

      <br />
    </div>
  );
}
