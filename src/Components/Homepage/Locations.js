import React from "react";
import "../../CSS/Homepage/Locations.css";
import alamein from "../../Images/alamein.png";
import adminstartive from "../../Images/adminstartive.jpg";
import newcairo from "../../Images/newcairo.jpg";
import sokhna from "../../Images/sokhna.jpg";
import northCoast from "../../Images/northcoast.jpg";
import october from "../../Images/october.jpg";
import { useNavigate } from "react-router-dom";

export default function Locations() {
  const navigate = useNavigate();

  function activate() {
    var reveals = document.querySelectorAll(".activate");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;

      // var elementVisible = 250;
      if (
        elementTop < (windowHeight * 1.5) / 3 &&
        elementBottom > (windowHeight * 1.5) / 3
      ) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", activate);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
        rel="stylesheet"
      />

      <div className="gallery reveal">
        <div className="gallery__row">
          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                console.log("toot");
                navigate("/Projects");
              }}
            >
              <img
                src={alamein}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                New Alamein City{" "}
              </figcaption>
            </figure>
          </a>
          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              <img
                src={northCoast}
                alt="Portrait by Jessica Felicio"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">North Coast</figcaption>
            </figure>
          </a>
          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              <img
                src={adminstartive}
                alt="Portrait by Alex Perez"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                New Administrative Capital
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="gallery__row">
          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              <img
                src={october}
                alt="Portrait by Noah Buscher"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                6th of October City
              </figcaption>
            </figure>
          </a>

          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              <img
                src={newcairo}
                alt="Portrait by Ivana Cajina"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">New Cairo</figcaption>
            </figure>
          </a>

          <a className="gallery__link">
            <figure
              className="gallery__thumb"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              <img
                src={sokhna}
                alt="Portrait by Sam Burriss"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                Ain El Sokhna
              </figcaption>
            </figure>
          </a>
        </div>

        {/* <div className="gallery__row">
          <a
            href="https://unsplash.com/@frxgui"
            
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                alt="Portrait by Guilian Fremaux"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                Portrait by Guilian Fremaux
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@majestical_jasmin"
            
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                alt="Portrait by Jasmin Chew"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                Portrait by Jasmin Chew
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@dimadallacqua"
            
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                alt="Portrait by Dima DallAcqua"
                className="gallery__image activate"
              />
              <figcaption className="gallery__caption">
                Portrait by Dima DallAcqua
              </figcaption>
            </figure>
          </a>
        </div> */}
      </div>
    </div>
  );
}
