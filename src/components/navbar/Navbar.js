import portfolioImg from "../../assets/img/decoration/logok.png";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import "./NavbarStyle.css";
import LanguageSelector from "../languageSelector/LanguageSelector.js";
import { useTranslation } from 'react-i18next';
import Menu_bar from '../../assets/img/decoration/menu-bar.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // // Function to handle scrolling to a section with an offset
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     // Scroll to the section with an offset of -100px
  //     section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  //     window.scrollBy(0, -200); // Apply additional offset
  //   }
  // };

  return (
    <div className={`navContainer ${scrolled ? 'scrolled' : ''}`}>
      <div className="navMenu">
        <img className="logo" src={portfolioImg} alt="Portfolio" />
        <a href="#intro" className="navItems">
          <p className="navItems"> KEVIN HERMANT</p>
        </a>
      </div>

      {isMobile ? (
        <div className="navLinkContainer">
         <Dropdown>
         <Dropdown.Toggle variant="" id="dropdown" size="sm">
            <img src={Menu_bar} style={{height:"1.5em"}} alt=""/>
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
           <Dropdown.Item href="#about">{t('ABOUT')}</Dropdown.Item>
           <Dropdown.Item href="#passion">{t('PASSION')}</Dropdown.Item>
           <Dropdown.Item href="#experience">{t('EXPERIENCE')}</Dropdown.Item>
           <Dropdown.Item href="#work">{t('WORK')}</Dropdown.Item>
           <Dropdown.Item href="#contact">{t('CONTACT')}</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
       <LanguageSelector/>
        </div>
      ) : (
        <div className="navLinkContainer">
          <a className="navLink" href="#about">
            {t('ABOUT')}
          </a>
          <a className="navLink" href="#passion">
            {t('PASSION')}
          </a>
          <a className="navLink" href="#experience">
            {t('EXPERIENCE')}
          </a>
          <a className="navLink" href="#work">
            {t('WORK')}
          </a>
          <a className="navLink" href="#contact">
            {t('CONTACT')}
          </a>
          <LanguageSelector/>
        </div>
      )}
    </div>
  );
}

export default Navbar;
