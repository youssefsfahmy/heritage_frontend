import React from "react";
import ContactUsHome from "../Components/Homepage/ContactUsHome";
import "../CSS/Pages/ContactUs.css";
export default function ContactUs() {
  return (
    <div>
      {" "}
      <div className="contactUsMainDiv">
        <div className="imageDiv">CONTACT US</div> <ContactUsHome />
      </div>
    </div>
  );
}
