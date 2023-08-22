import React from "react";
import Gallery from "../Components/Project/Gallery";
import "../CSS/Pages/Project.css";
import AmenitiesBar from "../Components/Project/AmenitiesBar";
import ContactUsHome from "../Components/Homepage/ContactUsHome";
import { useSearchParams } from "react-router-dom";
import Copyrighting from "../Copyrighting/projects.json";
import ReactGA from "react-ga4";

export default function Project() {
  ReactGA.send("pageview");

  const [searchParams] = useSearchParams();
  const CurrentProject = searchParams.get("name");
  return (
    <div>
      <div className="projectMainDiv">
        <div className="backgroundDiv">
          <div
            className="imageDiv"
            style={{
              backgroundImage: `url(https://heritage-eg.s3.amazonaws.com/Heros/${CurrentProject}-hero${CurrentProject==="baghush"?'.gif':'.png'})`,
            }}
          ></div>
          <div className="textDiv">
            <div className="name">{Copyrighting[CurrentProject].name}</div>
            <div className="slogan">{Copyrighting[CurrentProject].slogan} </div>
          </div>
        </div>
        <AmenitiesBar Copyrighting={Copyrighting[CurrentProject]} />

        <Gallery Copyrighting={Copyrighting[CurrentProject]} />
        <ContactUsHome
          reveal={true}
          project={true}
          Copyrighting={Copyrighting[CurrentProject]}
        />
      </div>
    </div>
  );
}
