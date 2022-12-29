import React from "react";
import "../../CSS/Partner/PartnerDetails.css";
import ReadMoreReact from "read-more-react";

export default function PartnerDetails() {
  const text =
    "It all began with a simple idea: to create a little piece of paradise near the Red Sea. Today, Orascom Development Egypt, is the largest subsidiary under Orascom Development Holding (ODH); a leading developer of fully integrated towns with thriving communities. At Orascom Development Egypt, we have been building world-class destinations for more than 30 years. In that time, we have become experts in developing new communities from the ground up. Our integrated approach to development combines picturesque residences, splendid hotels, and magnificent commercial and leisure amenities– including golf courses, marinas, sports facilities, retail and restaurants. A broad array of essential infrastructure forms the foundation of our communities, and our residents and visitors are at the center of everything we do. We have secured more than 50 million square meters of land in Egypt across El Gouna, Makadi, O-west, Taba Heights, and Byoum. We have already developed more than 14 million sq. m. of that land, with many advanced plans.";
  return (
    <div className="mainPartnerDetailsDiv reveal">
      <span className="title">ABOUT ORASCOM DEVELOPMENTS</span> <br />
      <br />
      <ReadMoreReact
        text={text}
        min={300}
        ideal={300}
        max={300}
        readMoreText="Read more"
      />{" "}
      <br /> <br />
      We currently have 5 destinations across Egypt enriching the lives of our
      residents and welcoming guests from around the world. These are: <br />
      <br />• El Gouna <br />• Taba Heights <br />• Makadi Heights <br /> •
      Byoum <br />
      • O-west
      <br />
    </div>
  );
}
