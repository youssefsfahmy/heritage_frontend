import React from "react";
import "../../CSS/Partner/AmenitiesSection.css";

export default function AmenitiesSection(props) {
  return (
    <div className="mainAmenitiesDiv">
      <img
        src={
          "https://heritage-eg.s3.amazonaws.com/WebsiteImages/egypt-earth.svg"
        }
        alt="svg"
        className="reveal"
      />{" "}
      <br />
      <div className="selected-country-destination-info reveal">
        <ul>
          <li>
            <span>
              {" "}
              3<sub> projects</sub>
            </span>
            <h3>Across Egypt</h3>
          </li>{" "}
          <li>
            <span>
              {" "}
              13<sub> years</sub>
            </span>
            <h3> Of Experience</h3>
          </li>
          <li>
            <span>
              17.4
              <sub>
                mn m<sub>2</sub>
              </sub>
            </span>
            <h3>Land Bank </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
