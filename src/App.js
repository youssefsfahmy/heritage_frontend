import React from "react";
import "./CSS/Pages/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Partner from "./Pages/Partner";
import Projects from "./Pages/Projects";
import Footer from "./Components/General/Footer";
import NavigationBar from "./Components/General/NavigationBar";
import ScrollToTop from "./Components/General/ScrollToTop";
import FloatingActionButton from "./Components/General/FloatingActionButton";
// import Mivida from "./Pages/Projects/Mivida";
function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <FloatingActionButton />
        <ScrollToTop />
        <Routes>
          <Route exact path="/heritage_frontend" element={<Homepage />}></Route>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/About" element={<AboutUs />}></Route>
          <Route exact path="/Contact" element={<ContactUs />}></Route>
          <Route exact path="/Projects" element={<Projects />}></Route>
          <Route exact path="/Project" element={<Partner />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
