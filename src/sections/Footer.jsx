import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-0">
        <div className="flex flex-col items-center md:items-start border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-8 md:size-10 cursor-pointer transition-all duration-300 hover:bg-black-50 hover:scale-110 hover:rotate-3;">
          <a
            href="https://kumodcodes.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
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
