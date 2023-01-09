import React from "react";

import "../../CSS/General/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  /* eslint-disable */

  return (
    <div className="Main-Div-Footer">
      <div className="Upper-Div">
        <div className="Col1-Div">
          <img
            src={
              "https://heritage-eg.s3.amazonaws.com/WebsiteImages/LogoWhite.png"
            }
            alt="logo"
            className="Logo-Image"
          />
          <div>
            <section className="mb-4">
              <a
                href="https://www.facebook.com/people/Heritage-Real-Estate/100078710004322/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <IconButton className="m-1">
                  <FacebookIcon className="icon" />
                </IconButton>
              </a>
              <a
                href="//api.whatsapp.com/send?phone=00201282041766&text=I would like to enquire about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className="m-1">
                  <WhatsAppIcon className="icon" />
                </IconButton>
              </a>
              <a
                href="https://maps.app.goo.gl/M2kZJuzLsM9pwc1q8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className="m-1">
                  <GoogleIcon className="icon" />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/heritagereinvestments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className="m-1">
                  <InstagramIcon className="icon" />
                </IconButton>{" "}
              </a>
              <a
                href="https://www.instagram.com/heritagereinvestments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className="m-1">
                  <LinkedInIcon className="icon" />
                </IconButton>
              </a>
            </section>
          </div>
        </div>
        <div className="Col2-Div">
          <div className="Row-Header">Quick Link</div>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="/" className="text-white">
                Home{" "}
              </a>
            </li>
            <li>
              <a href="/About" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/Projects" className="text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/Contact" className="text-white">
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
              <a
                href={"mailto:sales@heritage-egypt.com"}
                className="text-white"
              >
                Sales@heritage-egypt.com
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  window.open(
                    "//api.whatsapp.com/send?phone=00201282041766&text=I would like to enquire about"
                  );
                  navigator.clipboard.writeText("01282041766");
                }}
                className="text-white"
              >
                +201282041766
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/M2kZJuzLsM9pwc1q8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                10 Abu Bakr El Sedik, Heliopolis, Cairo
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
            <a href="/" className="text-white ">
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
