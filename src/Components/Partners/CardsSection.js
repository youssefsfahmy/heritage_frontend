import React from "react";
import "../../CSS/Partners/CardsSection.css";

import PartnerCard from "./PartnerCard";

import { useNavigate } from "react-router-dom";

export default function CardsSection() {
  const navigate = useNavigate();

  return (
    <div className="mainDivPartners" id={"projects"}>
      <div className="text">
        <hr />
        We are proud to announce that <b>Heritage</b> signed a partnership as an
        official seller with <b>luxury</b> real estate developers across Egypt
        offering you <b>exclusive</b> deals only through <b>Heritage</b> real
        estate
        {/* Heritage partners with prestigious developers all around Egypt. Here is
        a list of our partnered projects. */}
        <hr />
      </div>
      <div className="cardsDiv">
        <a href="/Partner?name=emaar">
          <PartnerCard
            name="ALMAZA BAY"
            slogan="Your ultimate sanctuary"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/emaar.png"}
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(255,255,255,0.3)"}
          />
        </a>
        <a href="/Partner?name=orascom">
          <PartnerCard
            name="BELLE VIE"
            slogan="Life is beautiful"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/orascom.png"}
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(138 117 90 / 33%)"}
          />
        </a>
        <a href="/Partner?name=sodic">
          <PartnerCard
            name="JUNE"
            slogan="Where it’s always summer"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/sodic.png"}
            color={"rgb(128 110 0 / 50%)"}
            height={"8rem"}
            marginTop={"5rem"}
          />
        </a>
      </div>
      <div className="cardsDiv">
        <a href="/Partner?name=madaar">
          <PartnerCard
            name="Trio"
            slogan="Inspiration That Changes Perceptions"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/madaar.png"}
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(100,100,35,0.3)"}
          />
        </a>
        <a href="/Partner?name=msquared">
          <PartnerCard
            name="O WEST"
            slogan="A true wholesome town experience"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/msquared.png"}
            height={"8rem"}
            marginTop={"5rem"}
            color={"rgb(40 68 60 / 25%)"}
          />
        </a>
        <a href="/Partner?name=hassanallam">
          <PartnerCard
            name="MOUNTAIN VIEW ICITY"
            slogan="A City Within A City"
            src1={"https://heritage-eg.s3.amazonaws.com/Logos/hassanallam.png"}
            color={"rgb(79 110 191 / 50%)"}
            height={"8rem"}
            marginTop={"4rem"}
          />
        </a>
      </div>
      <br />
      <div className="text2">
        Can't find what you're looking for?
        <div
          onClick={() => {
            navigate("/Contact");
          }}
        >
          <span className="emailme"> &nbsp; Contact us.</span>
        </div>
      </div>
      <br />
    </div>
  );
}
