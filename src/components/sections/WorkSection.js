import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./WorkSectionStyle.css";
import magnifer from '../../assets/img/decoration/loupe _white.png'
// Importez votre fichier JSON correctement structuré ici
const projectsArray = require("../../assets/work/projects.json").projects;

function WorkSection() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [triggeredProject, setTriggeredProject] = useState(null); // initialisez triggeredProject à null
  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setTriggeredProject(project);
    setShow(true);
  }

  return (
    <section id="work">
      <div className="section_container">
        <p className="section_title" style={{marginBottom:'3em'}}>{t("work_title")}</p>
        <div className="card_container">
          {projectsArray.map((project, index) => (
            <Card key={index} className="card">
              <a href="#work"><img src={magnifer} onClick={() => handleShow(project)} alt="" /></a>
              <Card.Img variant="top" src={require(`../../assets/img/decoration/${project.img}`)} className="card_img" />
              <Card.ImgOverlay>
                <div className="card_description">
                  <Card.Title>{i18n.language === 'fr' ? project.title_fr : project.title_eng}</Card.Title>
                  <Card.Text>{i18n.language === 'fr' ? project.desc_fr : project.desc_eng}</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{triggeredProject && (i18n.language === 'fr' ? triggeredProject.title_fr : triggeredProject.title_eng)}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{triggeredProject && (i18n.language === 'fr' ? triggeredProject.desc_fr : triggeredProject.desc_eng)}</Modal.Body>
          <Modal.Footer>
          <a href={triggeredProject && triggeredProject.link} target="_blank" rel="noreferrer">Voir le code source</a>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default WorkSection;
