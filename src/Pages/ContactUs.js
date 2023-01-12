import React from "react";
import ContactUsHome from "../Components/Homepage/ContactUsHome";
import "../CSS/Pages/ContactUs.css";
import ReactGA from "react-ga4";

export default function ContactUs() {
  ReactGA.send("pageview");

  return (
    <div>
      {" "}
      <div className="contactUsMainDiv">
        <div className="imageDiv">CONTACT US</div> <ContactUsHome />
      </div>
    </div>
  );
}
