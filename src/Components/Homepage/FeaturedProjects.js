import React from "react";
import "../../CSS/Homepage/FeaturedProjects.css";

import FeaturedProjectCard from "./FeaturedProjectCard";
export default function FeaturedProjects() {
  return (
    <div className="FeaturedDiv">
      <FeaturedProjectCard
        reveal={0}
        class="reveal"
        content="toot"
        photo={
          "https://heritage-eg.s3.amazonaws.com/Heros/bellevie-hero-thumbnail.jpg"
        }
        developer="Emaar Developement"
        name="BELLE VIE"
        description="Meticulously designed to create a joie de vivre experience that lives up to its name the beautiful life in French."
        link="/Project?name=bellevie"
      />
      <FeaturedProjectCard
        reveal={1}
        photo={
          "https://heritage-eg.s3.amazonaws.com/Heros/owest-hero-thumbnail.jpg"
        }
        developer="Orascom Developement"
        name="O WEST"
        description="O West is set to rise as a beacon of integrated living, a true wholesome town experience."
        link="/Project?name=owest"
      />
      <FeaturedProjectCard
        reveal={2}
        photo={
          "https://heritage-eg.s3.amazonaws.com/Heros/june-hero-thumbnail.jpg"
        }
        developer="Sodic Developement"
        name="June"
        description="The Miami-inspired June offers a wide range of neighborhoods, Where it’s always summer."
        link="/Project?name=june"
      />
      <FeaturedProjectCard
        reveal={3}
        photo={
          "https://heritage-eg.s3.amazonaws.com/Heros/icity-hero-thumbnail.jpg"
        }
        developer="Mountain View Developement"
        name="I City"
        description="A stress-free zone with a unique lagoon beach park living experience."
        link="/Project?name=icity"
      />
    </div>
  );
}
