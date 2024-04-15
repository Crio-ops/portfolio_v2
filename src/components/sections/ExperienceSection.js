import React, { useEffect } from "react";
import "./ExperienceSectionStyle.css";
import { useTranslation } from "react-i18next";
import DownArrow from "../../assets/img/decoration/down_arrow_bl.png";
import { useInView, animated, useSprings } from "@react-spring/web";

const technoImage = require("../../assets/techno/techno.json").techno;

function ExperienceSection() {
  const { t,i18n } = useTranslation();
  const springs = useSprings(
    technoImage.length,
    technoImage.map(() => ({
      from: { opacity: 0, x: 100 },
      to: { opacity: 1, x: 0 },
      config: { mass: 1, tension: 100 },
    }))
  );
  const [ref, inView] = useInView (
  )


  return (
    <section id="experience">
      <div className="section_container">
        <p className="section_title">{t("EXPERIENCE")}</p>
        <div className="exp_container">
          {/* <p className="section_subtitle">{t("Tech_title")}</p> */}
          <div className="techno_card_container" >
            {springs.map((animation, index) => (
              <animated.div key={index} style={animation} className="techno_card">
                <img src={require(`../../assets/img/tech/${technoImage[index].image}`)} className="techno_img" alt="techno" />
                <div className="techno_card_description">
                  <p className="techno_text">{technoImage[index].name}</p>
                </div>
              </animated.div>
            ))}
          </div>
          <div className="moveto">
            <a href="#work">
              <img className="arrow" src={DownArrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
