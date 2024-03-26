import love from "../assets/img/heart.svg";
import portfolioImg from "../assets/img/logok.png"
import React,  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarStyle.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      if (!isTop && !scrolled) {
        setScrolled(true);
      } else if (isTop && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to handle scrolling to a section with an offset
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section with an offset of -100px
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      window.scrollBy(0, -200); // Apply additional offset
    }
  };

  return (
    <div className={`navContainer ${scrolled ? 'scrolled' : ''}`}>
      <div className="navMenu">
        <img className="logo" style={{ margin: "5px 10px"}} src={portfolioImg} alt="Portfolio" />
        <a href="#intro" className="navItems">
          <p className="navItems"> KEVIN HERMANT</p>
        </a>
      </div>

      <div className="navLinkContainer">
        <a className="navLink" href="#about">
          ABOUT
        </a>
        <a className="navLink" href="#passion">
          PASSION
        </a>
        <a className="navLink" href="#experience">
          EXPERIENCE
        </a>
        <a className="navLink" href="#work">
          WORK
        </a>
        <a className="navLink" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Navbar;
