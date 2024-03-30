import React from 'react';
import DeveloperImg from '../../assets/img/developer.png';
import Down_arrow_bl from "../../assets/img/down_arrow_bl.png";
import './AboutSectionStyle.css'

function AboutSection() {
  return (
    <section id="about">
      <div className="section_container">
      <p className="section_title" style={{ marginBottom: "100px" }}>
              A LITTLE BIT ABOUT ME
            </p>
            <div className="profile_container">
              <ul className="profile">
                <li>
                  <img className="progile_img" src={DeveloperImg} alt="" />
                </li>
                <li className="li_profile">
                  🚀 Passionate Developer with a Unique Background 🚀
                </li>

                <li className="li_profile">
                  👋 Hi there! I'm Kevin, a dynamic professional venturing into
                  computer science after 33 years of diverse life experiences.
                  Transitioning from a successful Horeca career, I pivoted
                  towards my true passion – technology. Despite balancing a
                  full-time job, I earned a Bachelor's degree in “Informatique
                  de Gestion” with Distinction (in December 2023), fueling my enthusiasm for tech's
                  endless possibilities. Curiosity and Creativity drive me; I
                  thrive in innovative, problem-solving environments. I value
                  collaboration, eager to learn from seasoned professionals
                  while sharing my insights. Currently seeking software
                  development opportunities, I aim to leverage my diverse
                  background and passion for technology to make meaningful
                  contributions to a forward-thinking company.
                </li>
                <li><a href="#passion"><img className="arrow" src={Down_arrow_bl} alt="" /></a></li>
              </ul>
            </div>
      </div>
    </section>
  );
}

export default AboutSection;