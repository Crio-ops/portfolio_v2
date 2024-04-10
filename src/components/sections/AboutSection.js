import React from "react";
import DeveloperImg from "../../assets/img/developer.jpg";
import Down_arrow_bl from "../../assets/img/down_arrow_bl.png";
import "./AboutSectionStyle.css";
import { useTranslation } from "react-i18next";
import { InView } from "react-intersection-observer";

function AboutSection() {
  const [inView, setInView] = React.useState(false);
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="section_container">
        <p className="section_title" style={{ marginBottom: "1em" }}>
          {t("about_title")}
        </p>
        <div className="profile_container">
          <ul className="profile">
            <div className="profile_img_container">
              <img className="profile_img" src={DeveloperImg} alt="" />
            </div>
            {/* <li className="li_profile">
              🚀 Passionate Developer with a Unique Background 🚀
            </li> */}

            <li className="li_profile">{t("self_description")}</li>
            <li>
              <a href="#passion">
                <img className="arrow" src={Down_arrow_bl} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
