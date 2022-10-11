import React from "react";
import "../../CSS/Homepage/AboutUsHome.css";
import aboutUsImg from "../../Images/aboutus.png";

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
        <img src={aboutUsImg} alt="alt" />{" "}
      </div>
      <div className="right">
        <div className="follow">
          <div className="body1">
            Heritage is the foundation of good business, and we value it above
            all.
          </div>
          <br />
          <div className="body2">
            In our name, you’ll find our ethos. Heritage represents our
            strength, discipline & experience—while it represents our fluidity,
            creativity, and drive to continually innovate. It’s the rare
            combination of these elements that defines Heritage and the
            partnerships we forge.
          </div>
        </div>
      </div>
    </div>
  );
}
