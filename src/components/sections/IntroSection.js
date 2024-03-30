import React from 'react';
import DownArrow from '../../assets/img/down_arrow.png';

function IntroSection() {
  return (
    <section id="intro">
      <div className="title_container">
        <div className="font_box">
          <p className="title_text_lg">HI, I'M KEVIN</p>
          <p className="title_text_sm">Enthusiastic developer</p>
          <a href="#about">
            <img className="arrow" src={DownArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;