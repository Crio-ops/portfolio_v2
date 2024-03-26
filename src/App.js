import React from "react";
import Love from "./assets/img/heart.svg";
import Down_arrow from "./assets/img/down_arrow.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <section id="intro">
          <div className="title_container">
            <div className="font_box">
              <p className="title_text_lg">HI, I'M KEVIN</p>
              <p className="title_text_sm">Enthusiastic developer</p>
              <a href="#about">
                <img className="arrow" src={Down_arrow} alt="" />
              </a>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="section_container">
            <p className="section_title">A LITTLE BIT ABOUT ME</p>
          </div>
        </section>
        <section id="passion">
          <div className="section_container">
            <p className="section_title">WHAT I DO</p>
          </div>
        </section>
        <section id="experience">
          <div className="section_container">
            <p className="section_title">EXPERIENCE</p>
          </div>
        </section>
        <section id="work">
          <div className="section_container">
            <p className="section_title">WHAT I'VE DONE</p>
          </div>
        </section>
        <section id="contact">
          <div className="section_container">
            <p className="section_title">CONTACT</p>
          </div>
        </section>
      </div>

      {/* <div className="footer">
        <p className="footer_text">Made with</p>
        <img src={Love} alt="Logo" />
        <p className="footer_text">by Hermant Kevin</p>
      </div> */}
    </div>
  );
}

export default App;
