import React from "react";
import LinkedIn from "../../assets/img/linkedin_link.png";
import GitHub from "../../assets/img/github_link.png";
import "./ContactSectionStyle.css";

function ContactSection() {
  return (
    <section id="contact">
      <div className="section_container">
        <p className="section_title">CONTACT</p>
        <p>
        If you need any further information, please feel free to contact me by phone :
          0471/36.48.06
        </p>
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
