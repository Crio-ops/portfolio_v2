import React, { useEffect } from "react";
import "./ExperienceSectionStyle.css";
import { useTranslation } from "react-i18next";
import DownArrow from "../../assets/img/decoration/down_arrow_bl.png";
import { useInView, animated } from "@react-spring/web";

const technoImage = require("../../assets/techno/techno.json").techno;

function ExperienceSection() {
  const { t } = useTranslation();
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
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
    <section id="experience">
      <div className="section_container">
        <p className="section_title">{t("EXPERIENCE")}</p>
        <div className="exp_container">
          <p className="section_subtitle">{t("Tech_title")}</p>
          <animated.div className="tab" ref={ref} style={springs}>
            <table>
              {[...Array(Math.ceil(technoImage.length / 4)).keys()].map(
                (row) => (
                  <tr key={row}>
                    {technoImage
                      .slice(row * 4, (row + 1) * 4)
                      .map((techno, key) => (
                        <td
                          key={key}
                          style={{ textAlign: "center", padding: "0.5em" }}
                        >
                          <div className="tech_img">
                            <p className="tech_text">{techno.name}</p>
                            <img
                              className="img"
                              src={require(`../../assets/img/tech/${techno.image}`)}
                              alt={techno.name}
                            />
                          </div>
                        </td>
                      ))}
                  </tr>
                )
              )}
            </table>
          </animated.div>
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
