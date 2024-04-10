import React from "react";
import "./ExperienceSectionStyle.css";
import { useTranslation } from "react-i18next";
import CssImg from "../../assets/img/tech/css.png";
import Github from "../../assets/img/tech/github.png";
import HtmlImg from "../../assets/img/tech/html.png";
import JavaImg from "../../assets/img/tech/java.png";
import JavascriptImg from "../../assets/img/tech/js.png";
import LinuxImg from "../../assets/img/tech/linux.png";
import NodejsImg from "../../assets/img/tech/nodejs.png";
import RaspberryPiImg from "../../assets/img/tech/raspberry.png";
import ReactImg from "../../assets/img/tech/react.png";
import ReactNativeImg from "../../assets/img/tech/reactnative.png";
import PhpImg from "../../assets/img/tech/php.png";
import DownArrow from "../../assets/img/down_arrow_bl.png";

function ExperienceSection() {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <div className="section_container">
        <p className="section_title">{t("EXPERIENCE")}</p>
        <div className="exp_container">
          <p className="section_subtitle">{t("Tech_title")}</p>
          <div className="tab">
            <table>
              <tr>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={HtmlImg} alt="HTML" />
                  <p>HTML 5</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={CssImg} alt="CSS" />
                  <p>Css 3</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={Github} alt="GitHub" />
                  <p>GitHub</p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={JavaImg} alt="JAVA" />
                  <p>Java 8</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img
                    style={{ height: "3em" }}
                    src={JavascriptImg}
                    alt="Javascript"
                  />
                  <p>Javascript</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={LinuxImg} alt="Linux" />
                  <p>Linux</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img
                    style={{ height: "3em" }}
                    src={RaspberryPiImg}
                    alt="Raspberry"
                  />
                  <p>Raspberry Pi 4</p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img
                    style={{ height: "3em" }}
                    src={ReactNativeImg}
                    alt="React Native"
                  />
                  <p>React Native</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={ReactImg} alt="React" />
                  <p>React</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={PhpImg} alt="Php" />
                  <p>Php</p>
                </td>
                <td style={{ textAlign: "center", padding: "0.5em" }}>
                  <img style={{ height: "3em" }} src={NodejsImg} alt="Node" />
                  <p>Node.js</p>
                </td>
              </tr>
            </table>
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
