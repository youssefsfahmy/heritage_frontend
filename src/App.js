import React from "react";
import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Partner from "./Pages/Partner";
import Partners from "./Pages/Partners";
import Footer from "./Components/General/Footer";
import NavigationBar from "./Components/General/NavigationBar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/About" element={<AboutUs />}></Route>
          <Route exact path="/Contact" element={<ContactUs />}></Route>
          <Route exact path="/Partner" element={<Partner />}></Route>
          <Route exact path="/Partners" element={<Partners />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
