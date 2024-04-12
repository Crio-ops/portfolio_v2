import React from "react";
import "./PassionSectionStyle.css";
import DownArrow from '../../assets/img/decoration/down_arrow.png';
import Front_img from "../../assets/img/decoration/front.png";
import Back_img from "../../assets/img/decoration/back.png";
import { useInView, useSpring, animated } from "@react-spring/web";
import { useTranslation } from 'react-i18next';

function PassionSection() {
  const { t } = useTranslation();

  const [rightRef, rightSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: {
        mass: 1,
        tension: 100,

      },
    }),
    {}
  );

  const [leftRef, leftSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: {
        mass: 1,
        tension: 100,
      },
    }),
    {}
  );

  const [bottomRef, bottomSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 200, 
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        mass: 1,
        tension: 100,
      },
    }),
    {}
  );


  return (
    <section id="passion">
      <div className="section_title_container">
        <p className="section_title">{t('passion_title')}</p>
      </div>
      <div className="subsection_container">
        <animated.div className="row_container" ref={leftRef} style={leftSprings}>
        <div className="row">
          <img src={Front_img} alt="" style={{ height: "10vh", width: "auto", marginBottom : '2vh'  }} />
          <p className="section_title">{t('front')}</p>
          <p className="row_text">
          {t('front_desc')}
          </p>
          </div>
        </animated.div >
        <animated.div className="row_container" ref={rightRef} style={rightSprings}>
          <div className="row">
            <img
              src={Back_img}
              alt=""
              style={{ height: "10vh", width: "auto", marginBottom : '2vh' }}
            />
            <p className="section_title">{t('back')}</p>

            <p className="row_text">
              {t('back_desc')}
            </p>
          </div>
        </animated.div>
      </div>
      <animated.div className="col_container" ref={bottomRef} style={bottomSprings}>
        <div className="column" >
        <div className="text_column">
        <p className="section_title"> {t('afk')}</p>
       <p className="row_text">
       {t('afk_text')}
        </p> 
        </div>
        </div>
      </animated.div>
      <div className="moveto">
            <a href="#experience">
            <img className="arrow" src={DownArrow} alt="" />
          </a>
      </div>
    </section>
  );
}

export default PassionSection;
