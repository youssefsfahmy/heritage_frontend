import React from "react";
import "../../CSS/Homepage/FeaturedProjects.css";
import BelleVie from "../../Images/Belle-Vie.png";
import Owest from "../../Images/Owest.png";
import img1 from "../../Images/bck1.jpg";
import img2 from "../../Images/bck2.jpg";
import FeaturedProjectCard from "./FeaturedProjectCard";
export default function FeaturedProjects() {
  return (
    <div className="FeaturedDiv">
      <FeaturedProjectCard
        reveal={0}
        class="reveal"
        content="toot"
        photo={BelleVie}
        developer="Orascom Deveopement"
        name="BELLE VIE"
        description="The magic Indian is a mysterious spiritual force, and we're going to
            Cathedral Rock, and that's the vortex of the heart."
      />
      <FeaturedProjectCard
        reveal={1}
        photo={Owest}
        developer="Orascom Deveopement"
        name="O WEST"
        description="The magic Indian is a mysterious spiritual force."
      />
      <FeaturedProjectCard
        reveal={2}
        photo={img1}
        developer="Emaar Deveopement"
        name="Mivida"
        description="The magic Indian is a mysterious spiritual force, and we're going to
            Cathedral Rock, and that's the vortex of the heart."
      />
      <FeaturedProjectCard
        reveal={3}
        photo={img2}
        developer="Mountain View Deveopement"
        name="Hydepark"
        description="The magic Indian is a mysterious spiritual force, and we're going
        to Cathedral Rock."
      />
    </div>
  );
}
