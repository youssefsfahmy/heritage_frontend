import React from "react";
import "../../CSS/Partner/OtherPartners.css";

import PartnerCard from "../Partners/PartnerCard";

import { useNavigate } from "react-router-dom";
import partners from "../../Copyrighting/partners.json";

export default function OtherPartners(props) {
  const navigate = useNavigate();
  var otherPartners = [];
  var c = 0;
  for (var key in partners) {
    if (partners[key].id !== props.id && c < 3) {
      otherPartners.push(partners[key]);
      c += 1;
    }
  }
  return (
    <div className="mainDivOtherPartners reveal" id={"projects"}>
      <div className="cardsDiv">
        {otherPartners.map(function (value, key) {
          return (
            <a href={`/Partner?name=${value.id}`}>
              <PartnerCard
                name={value.name}
                slogan={value.slogan}
                src1={`https://heritage-eg.s3.amazonaws.com/Logos/${value.id}.png`}
                height={"8rem"}
                marginTop={"5rem"}
                color={value.thumbnailShade}
              />
            </a>
          );
        })}
        <a href={`/Partner`}>
          <PartnerCard
            name="JUNE"
            slogan="VIEW ALL &#8594;
          "
            src1={null}
            color={"rgb(128 110 0 / 50%)"}
            height={"8rem"}
            marginTop={"5rem"}
          />{" "}
        </a>
      </div>
      <br />
    </div>
  );
}
