import React from "react";
import DeveloperImg from "../../assets/img/developer.png";
import Down_arrow_bl from "../../assets/img/down_arrow_bl.png";
import "./AboutSectionStyle.css";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="section_container">
        <p className="section_title" style={{ marginBottom: "100px" }}>
          {t('about_title')}
        </p>
        <div className="profile_container">
          <ul className="profile">
            <li>
              <img className="progile_img" src={DeveloperImg} alt="" />
            </li>
            {/* <li className="li_profile">
              🚀 Passionate Developer with a Unique Background 🚀
            </li> */}

            <li className="li_profile">
            {t('self_description')}
            </li>
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
