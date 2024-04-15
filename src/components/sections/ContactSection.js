import React from "react";
import LinkedIn from "../../assets/img/decoration/linkedin_link.png";
import GitHub from "../../assets/img/decoration/github_link.png";
import "./ContactSectionStyle.css";
import sendImg from "../../assets/img/decoration/send.png";
import { useTranslation } from "react-i18next";
import envelopeImg from "../../assets/img/decoration/envelope.png";
import phoneImg from "../../assets/img/decoration/phone.png";

function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div className="section_container">
        <p className="section_title">CONTACT</p>
        <div className="contactContainer">
          <div className="contact">
            <img
              src={sendImg}
              alt=""
              style={{ height: "5em", width: "5em", marginBottom:'15px'}}
            />
            <p>{t("contact_text")}</p>
            <ul className="contact_info">
              <li>
                <img
                  style={{ height: "2em", width: "2em",  marginRight: '5px'}}
                  src={phoneImg}
                  alt=""
                />
                <a href="tel:0471/36.48.06">0471/36.48.06</a>
              </li>
              <li>
                <img
                  src={envelopeImg}
                  alt=""
                  style={{ height: "2em", width: "2em", marginRight: '5px'}}
                />
                <a href="mailto:kevin.hermant@gmail.com">
                  kevin.hermant@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialNetworkContainer">
          <div className="socialNetwork">
            <a
              href="https://www.linkedin.com/in/kevin-hermant-8b969648/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                style={{ height: "3em", margin: "3px" }}
                src={LinkedIn}
                alt=""
              />
            </a>
            <a
              href="https://github.com/Crio-ops/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                style={{ height: "3em", margin: "3px" }}
                src={GitHub}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
