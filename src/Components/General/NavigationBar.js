import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/General/BurgerMenu.css";
import "../../CSS/General/NavigationBar.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLogo from "./NavLogo";

function NavigationBar() {
  const { pathname } = useLocation();
  const [isActive, setActive] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  function changeCss() {
    var navElement = document.querySelector(".navb");
    var navElement1 = document.querySelector(".projectHeader");

    if (navElement) {
      var changeVal = pathname === "/" ? 300 : 100;
      this.scrollY > changeVal
        ? changeCssBottom(navElement, navElement1)
        : changeCssTop(navElement, navElement1);
    }
  }

  function changeCssTop(navElement, navElement1) {
    navElement.style.backgroundColor = "rgba(43 ,60, 72, 0)";
    navElement.style.borderBottomColor = "rgba(79, 79, 79, 0)";
    navElement1.style.opacity = 0;
    navElement1.style.transitionDelay = "0s";

    // navElement.style.backgroundColor = "rgba(1, 54, 96, 0)";
    // navElement.style.borderBottomColor = "rgba(212, 174, 82, 0)";
    navElement.style.paddingTop = "2rem";
  }

  function changeCssBottom(navElement, navElement1) {
    navElement.style.backgroundColor = "rgba(43 ,60, 72, 1)";
    navElement.style.borderBottomColor = "rgba(79, 79, 79, 1)";
    navElement1.style.transitionDelay = "0.15s";

    navElement1.style.opacity = 1;

    // navElement.style.backgroundColor = "rgba(1, 54, 96, 1)";
    // navElement.style.borderBottomColor = "rgba(212, 174, 82, 1)";
    navElement.style.paddingTop = "0.5rem";
  }

  window.addEventListener("scroll", changeCss, false);
  useEffect(() => {
    if (pathname.includes("/Project/")) {
      if (!isFixed) {
        switch (pathname) {
          case "/Project/almazabay":
            setFixed("ALMAZA BAY");
            break;
          case "/Project/bellevie":
            setFixed("BELLE VIE");
            break;
          case "/Project/june":
            setFixed("JUNE");
            break;
          case "/Project/msquared":
            setFixed("M SQUARED");
            break;
          case "/Project/icity":
            setFixed("I CITY");
            break;
          case "/Project/owest":
            setFixed("O WEST");
            break;
          default:
            break;
        }
      }
    } else {
      setFixed(null);
    }
  }, [pathname, isFixed]);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="sm"
        variant="dark"
        className={"navb"}
        style={{
          backgroundColor: isFixed ? "rgba(1, 54, 96, 1)" : "",
          borderBottomColor: isFixed ? "rgba(212, 174, 82, 1)" : "",
          paddingTop: isFixed ? "0.5rem" : "",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <NavLogo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            style={{ margin: 0 }}
          >
            <svg
              className={isActive ? "ham ham6 active" : "ham ham6"}
              viewBox="0 0 100 100"
              width="80"
              onClick={toggleClass}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
              />
              <path
                className="line middle"
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
              />
              <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            show={isActive}
            style={{
              padding: isActive ? "1rem" : "0",
              transition: isActive ? "0" : "0.5s",
            }}
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            {" "}
            <Offcanvas.Header></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link onClick={isActive ? toggleClass : ""} to="/">
                  Home
                </Link>
                <Link onClick={isActive ? toggleClass : ""} to="/About">
                  About
                </Link>
                <Link onClick={isActive ? toggleClass : ""} to="/Projects">
                  Projects
                </Link>
                <Link onClick={isActive ? toggleClass : ""} to="/Contact">
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>{" "}
        </Container>{" "}
        <div
          className="projectHeader"
          style={{ visibility: isFixed ? "visible" : "hidden" }}
        >
          {" "}
          {isFixed}
          <div className="projectLogo"></div>
        </div>
      </Navbar>
    </>
  );
}

export default NavigationBar;
