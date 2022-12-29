import React from "react";
import "../../CSS/Partner/AmenitiesSection.css";

import svg from "../../Images/egypt-earth.svg";

export default function AmenitiesSection(props) {
  return (
    <div className="mainAmenitiesDiv">
      <img src={svg} alt="svg" className="reveal" /> <br />
      <div className="selected-country-destination-info reveal">
        <ul>
          <li>
            <span>
              {" "}
              50.25{" "}
              <sub>
                mn m<sub>2</sub>
              </sub>
            </span>
            <h3> Total Land Bank</h3>
          </li>
          <li>
            <span>
              {" "}
              13.85{" "}
              <sub>
                mn m<sub>2</sub>
              </sub>
            </span>
            <h3> Completed area</h3>
          </li>
          <li>
            <span>
              {" "}
              7.93{" "}
              <sub>
                mn m<sub>2</sub>
              </sub>
            </span>
            <h3>Under Construction </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
