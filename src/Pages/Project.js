import React from "react";
import Gallery from "../Components/Project/Gallery";
import "../CSS/Pages/Project.css";
import AmenitiesBar from "../Components/Project/AmenitiesBar";
import ContactUsHome from "../Components/Homepage/ContactUsHome";
import { useSearchParams } from "react-router-dom";
import Copyrighting from "../Copyrighting/projects.json";

export default function Project() {
  const [searchParams] = useSearchParams();
  const CurrentProject = searchParams.get("name");
  return (
    <div>
      <div className="projectMainDiv">
        <div className="backgroundDiv">
          <div
            className="imageDiv"
            style={{
              backgroundImage: `url(https://heritage-eg.s3.amazonaws.com/${CurrentProject}-hero.png)`,
            }}
          ></div>
          <div className="textDiv">
            <div className="name">{Copyrighting[CurrentProject].name}</div>
            <div className="slogan">{Copyrighting[CurrentProject].slogan} </div>
          </div>
        </div>
        <AmenitiesBar Copyrighting={Copyrighting[CurrentProject]} />

        <Gallery Copyrighting={Copyrighting[CurrentProject]} />
        <ContactUsHome reveal={true} />
      </div>
    </div>
  );
}
