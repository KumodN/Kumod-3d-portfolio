import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <a href="/">Visit my blog</a>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-center">
            ©{new Date().getFullYear()} Kumod De Silva | All rights reserved.
          </p>
        </div>

        <div className="socials flex gap-0">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              href={img.url}
              key={img.url}
              rel="noopener noreferrer"
            >
              <img src={img.imgPath} alt="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
