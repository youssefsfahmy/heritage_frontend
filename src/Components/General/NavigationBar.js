import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../CSS/NavigationBar.css";
export default function NavigationBar() {
  function changeCss() {
    var navElement = document.querySelector(".navb");

    this.scrollY > 400 && this.scrollY < 500
      ? changeCssBottom(navElement)
      : this.scrollY <= 400
      ? changeCssTop(navElement)
      : changeCssBottom(navElement);
  }

  function changeCssTop(navElement) {
    navElement.style.backgroundColor = "rgba(43 ,60, 72, 0)";
    navElement.style.borderBottomColor = "rgba(79, 79, 79, 0)";
    navElement.style.paddingTop = "2rem";
  }

  // function changeCssMiddle(navElement, scrollY) {
  //   var position = (scrollY - 200) / 300;
  //   navElement.style.backgroundColor = `rgba(43 ,60, 72, ${position}`;
  //   navElement.style.borderBottomColor = `rgba(79, 79, 79, ${position}`;
  //   navElement.style.paddingTop = `${2.5 - position * 2}rem`;
  // }

  function changeCssBottom(navElement) {
    navElement.style.backgroundColor = "rgba(43 ,60, 72, 1)";
    navElement.style.borderBottomColor = "rgba(79, 79, 79, 1)";
    navElement.style.paddingTop = "0.5rem";
  }

  // 1 - (this.scrollY - 100) / 200)
  window.addEventListener("scroll", changeCss, false);
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        //  bg="black"
        variant="dark"
        className="navb"
      >
        <Container>
          <Navbar.Brand href="/">HERITAGE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Partners">Partners</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
