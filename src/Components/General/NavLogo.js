import React from "react";
import logo from "../../Images/logo.png";
import "../../CSS/NavLogo.css";

export default function NavLogo() {
  function changeCss() {
    var navElement = document.querySelector(".textDiv1");
    var navElement2 = document.querySelector(".imgLogo");

    this.scrollY > 300 ? changeCssBottom(navElement) : changeCssTop(navElement);
    this.scrollY > 300
      ? changeCssBottom(navElement2)
      : changeCssTop(navElement2);
  }
  function changeCssTop(navElement) {
    navElement.style.height = "auto";
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
    // <div>
    //   <div style={{ height: "3vw", marginTop: "-2vw" }}>
    //     <img src={logo} style={{ width: "4vw", marginBottom: "-0.5vw" }}></img>

    //     <div>HERITAGE</div>
    //     <div style={{ fontSize: "0.7vw", marginTop: "-0.5vw" }}>
    //       REAL ESTATE
    //     </div>
    //   </div>
    // </div>

    // <div>
    //   {" "}
    //   <div>
    //     <img src={logo} style={{ width: "4vw" }}></img>
    //     HERITAGE
    //   </div>
    // </div>

    <div className="mainDiv">
      <img src={logo} alt="logo" className="imgLogo"></img>
      <div className="textDiv">
        <div>HERITAGE</div>
        <div className="textDiv1">REAL ESTATE</div>
      </div>
    </div>
  );
}
