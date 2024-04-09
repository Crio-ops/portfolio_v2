import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import "./WorkSectionStyle.css";
import magnifer from '../../assets/img/loupe _white.png'
// Importez votre fichier JSON correctement structuré ici
const projectsArray = require("../../assets/work/projects.json").projects;

function WorkSection() {
  const { t, i18n  } = useTranslation();

  return (
    <section id="work">
      <div className="section_container">
        <p className="section_title">{t("work_title")}</p>
        <div className="card_container">
          {projectsArray.map((project, index) => (
            <Card key={index} className="card">
              <a href="#about"><img src={magnifer} alt=""/></a>
              <Card.Img variant="top" src={require(`../../assets/img/${project.img}`)} className="card_img" />
              <Card.ImgOverlay>
                <div className="card_description">
                <Card.Title>{i18n.language === 'fr' ? project.title_fr : project.title_eng}</Card.Title>
                  <Card.Text>{i18n.language === 'fr' ? project.desc_fr : project.desc_eng}</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
