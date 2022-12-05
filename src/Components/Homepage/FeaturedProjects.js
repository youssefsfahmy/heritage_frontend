import React from "react";
import "../../CSS/Homepage/FeaturedProjects.css";
import BelleVie from "../../Images/Belle-Vie.png";
import Owest from "../../Images/Owest.png";
import img1 from "../../Images/june.jpg";
import img2 from "../../Images/icity.jpg";
import FeaturedProjectCard from "./FeaturedProjectCard";
export default function FeaturedProjects() {
  return (
    <div className="FeaturedDiv">
      <FeaturedProjectCard
        reveal={0}
        class="reveal"
        content="toot"
        photo={BelleVie}
        developer="Emaar Deveopement"
        name="BELLE VIE"
        description="Meticulously designed to create a joie de vivre experience that lives up to its name the beautiful life in French."
        link="/Project?name=bellevie"
      />
      <FeaturedProjectCard
        reveal={1}
        photo={Owest}
        developer="Orascom Deveopement"
        name="O WEST"
        description="O West is set to rise as a beacon of integrated living, a true wholesome town experience."
        link="/Project?name=bellevie"
      />
      <FeaturedProjectCard
        reveal={2}
        photo={img1}
        developer="Sodic Deveopement"
        name="June"
        description="The Miami-inspired June offers a wide range of neighborhoods, Where it’s always summer."
        link="/Project?name=bellevie"
      />
      <FeaturedProjectCard
        reveal={3}
        photo={img2}
        developer="Mountain View Deveopement"
        name="I City"
        description="A stress-free zone with a unique lagoon beach park living experience."
        link="/Project?name=bellevie"
      />
    </div>
  );
}
