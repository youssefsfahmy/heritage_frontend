import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import "../../CSS/Footer.css";
import logo from "../../Images/LogoWhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="Main-Div">
      <div className="Upper-Div">
        <div className="Col1-Div">
          <img src={logo} alt="logo" className="Logo-Image" />
          <div>
            {" "}
            <section className="mb-4">
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <FacebookIcon className="icon" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <TwitterIcon className="icon" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <GoogleIcon className="icon" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <InstagramIcon className="icon" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <LinkedInIcon className="icon" />
              </MDBBtn>
            </section>
          </div>
        </div>
        <div className="Col2-Div">
          <div className="Row-Header">Quick Link</div>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Partners
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="Col3-Div">
          {" "}
          <div className="Row-Header">Contact info</div>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">
                Heritage@info.com{" "}
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                +201287666533
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                14 new mango, new cairo, Egypt
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Lower-Div">
        <hr></hr>
        <div className="copyprivacy">
          <div className="copyright">
            {" "}
            <a href="#!" className="text-white ">
              Heritage© 2022 All Rights Reserved
            </a>
          </div>
          <div className="privacy">
            {" "}
            <span className="text-white ">Privacy policy</span>
          </div>
          <div className="term">
            {" "}
            <span className="text-white ">Terms of us </span>
          </div>
        </div>
      </div>
    </div>
  );
}
