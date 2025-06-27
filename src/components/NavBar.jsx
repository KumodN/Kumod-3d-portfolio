import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Kumod De Silva
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white glassCard border border-white rounded-md card hover:text-white"
            href="/documents/KumodDeSilva-CV.pdf"
            download
          >
            <div className="inner">
              <span>Download CV</span>
            </div>
          </a>

          <a className="contact-btn group" href="#contact">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
