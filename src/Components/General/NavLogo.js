import React from "react";
import "../../CSS/General/NavLogo.css";
import { useLocation } from "react-router-dom";

export default function NavLogo() {
  const { pathname } = useLocation();

  function changeCss() {
    var navElement = document.querySelector(".textDiv1");
    var navElement2 = document.querySelector(".imgLogo");
    if (navElement) {
      var changeVal =
        pathname === "/" ? 300 : pathname.includes("/Project/") ? -100 : 100;

      this.scrollY > changeVal
        ? changeCssBottom(navElement)
        : changeCssTop(navElement);
      this.scrollY > changeVal
        ? changeCssBottom(navElement2)
        : changeCssTop1(navElement2);
    }
  }
  function changeCssTop(navElement) {
    navElement.style.height = "1.5rem";
    navElement.style.width = "4rem";
    navElement.style.visibility = "";
  }
  function changeCssTop1(navElement) {
    navElement.style.height = "4rem";
    navElement.style.width = "4rem";
    navElement.style.visibility = "";
  }

  function changeCssBottom(navElement) {
    navElement.style.height = "0";
    navElement.style.width = "2rem";
    navElement.style.visibility = "hidden";
  }
  window.addEventListener("scroll", changeCss, false);

  return (
    <div className="mainDiv">
      <img
        src={"https://heritage-eg.s3.amazonaws.com/WebsiteImages/logo.png"}
        alt="logo"
        className={"imgLogo"}
      ></img>
      <div className="textDiv">
        <div>HERITAGE</div>
        <div className={"textDiv1"}>REAL ESTATE</div>
      </div>
    </div>
  );
}
