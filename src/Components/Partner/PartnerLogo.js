import React from "react";
import Fab from "@mui/material/Fab";
import "../../CSS/Partner/PartnerLogo.css";
import img from "../../Images/orascom.png";
export default function PartnerLogo() {
  function changeCss() {
    var navElement = document.querySelector(".partnerLogoMain");
    var navElement1 = document.querySelector(".fabEdit");

    this.scrollY > 100
      ? changeCssBottom(navElement, navElement1)
      : changeCssTop(navElement, navElement1);
  }
  function changeCssTop(navElement, navElement1) {
    navElement1.style.height = "7rem";
    navElement1.style.width = "7rem";
    navElement1.style.marginTop = "-3.5rem";
    navElement.style.position = "inherit";
    navElement.style.top = "none";
  }

  function changeCssBottom(navElement, navElement1) {
    navElement1.style.height = "5rem";
    navElement1.style.width = "5rem";
    navElement1.style.marginTop = "-4.5rem";
    navElement.style.position = "fixed";
    navElement.style.top = "5rem";
  }

  window.addEventListener("scroll", changeCss, false);

  return (
    <div className="partnerLogoMain">
      {" "}
      <Fab
        size="large"
        color="white"
        aria-label="add"
        className="fabEdit"
        disabled={true}
      >
        <img src={img} alt="logo" />
      </Fab>
    </div>
  );
}
