import React from "react";
import "../../CSS/Homepage/AboutUsHome.css";

export default function AboutUsHome() {
  function follow() {
    var reveals = document.querySelectorAll(".follow");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", follow);
  return (
    <div className="mainAboutHome">
      {" "}
      <div className="left">
        <img
          src={"https://heritage-eg.s3.amazonaws.com/WebsiteImages/aboutus.png"}
          alt="alt"
        />{" "}
      </div>
      <div className="right">
        <div className="follow">
          <div className="body1">
            Heritage is the foundation of good business, and we value it above
            all.
          </div>
          <br />
          <div className="body2">
            Heritage was founded on the grounds of honesty and integrity
            ensuring that each client gets a very customized experience from the
            minute they inquire to the minute they receive their keys to their
            dream home. We combine a wide range of diverse services with unique
            know-how to develop unparalleled outcomes.
          </div>
        </div>
      </div>
    </div>
  );
}
