import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./WorkSectionStyle.css";
import magnifer from "../../assets/img/decoration/loupe _white.png";
// Importez votre fichier JSON correctement structuré ici
const projectsArray = require("../../assets/work/projects.json").projects;

function WorkSection() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [triggeredProject, setTriggeredProject] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setTriggeredProject(project);
    setShow(true);
  };

  const getLanguageText = (project, field) => {
    if (!project) return "";
    return i18n.language === "fr"
      ? project.modal_description_fr[0][field]
      : project.modal_description_en[0][field];
  };

  return (
    <section id="work">
      <div className="section_container">
        <p className="section_title" style={{ marginBottom: "3em" }}>
          {t("work_title")}
        </p>
        <div className="card_container">
          {projectsArray.map((project, index) => (
            <Card key={index} className="card">
              <a className="magniferContainer" href="#work">
                <img
                  src={magnifer}
                  onClick={() => handleShow(project)}
                  alt=""
                />
              </a>
              <Card.Img
                variant="top"
                src={require(`../../assets/img/decoration/${project.img}`)}
                className="card_img"
              />
              <Card.ImgOverlay>
                <div className="card_description">
                  <Card.Title>
                    {i18n.language === "fr"
                      ? project.title_fr
                      : project.title_eng}
                  </Card.Title>
                  <Card.Text>
                    {i18n.language === "fr"
                      ? project.desc_fr
                      : project.desc_eng}
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {triggeredProject &&
                (i18n.language === "fr"
                  ? triggeredProject.title_fr
                  : triggeredProject.title_eng)}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {triggeredProject && (
              <div>
                <h4 className="modal_title">
                  {getLanguageText(triggeredProject, "platform_title")}
                </h4>
                <p className="modal_text">
                  {getLanguageText(triggeredProject, "platform_text")}
                </p>
                <h4 className="modal_title">
                  {getLanguageText(triggeredProject, "objective_title")}
                </h4>
                <p className="modal_text">
                  {getLanguageText(triggeredProject, "objective_text")}
                </p>
                <h4 className="modal_title">
                  {getLanguageText(
                    triggeredProject,
                    "technicalImplementation_title"
                  )}
                </h4>
                <ul>
                  {Object.keys(triggeredProject.modal_description_fr[0])
                    .filter((key) => key.startsWith("technicalImp_text_"))
                    .map((key) => (
                      <li
                        className="modal_text"
                        style={{ marginLeft: "6em" }}
                        key={key}
                      >
                        {getLanguageText(triggeredProject, key)}
                      </li>
                    ))}
                </ul>
                <h4 className="modal_title">
                  {getLanguageText(triggeredProject, "needAndStructure_title")}
                </h4>
                <ul>
                  {Object.keys(triggeredProject.modal_description_fr[0])
                    .filter((subkey) => subkey.startsWith("need_subtitle"))
                    .map((subkey) => (
                      <li className="modal_subtitle" key={subkey}>
                        {getLanguageText(triggeredProject, subkey)}
                        <ul>
                          {Object.keys(triggeredProject.modal_description_fr[0])
                            .filter((key) =>
                              // console.log(`need_sub_${subkey.replace(/\D/g, '')}_text_`)
                              key.startsWith(
                                `need_sub_${subkey.replace(/\D/g, "")}_text_`
                              )
                            )
                            .map((key) => (
                              <li className="modal_text" key={key}>
                                {getLanguageText(triggeredProject, key)}
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <a
              className="modal_sourcecode_button"
              href={triggeredProject && triggeredProject.link}
              target="_blank"
              rel="noreferrer"
            >
              {t("source_code_button")}
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default WorkSection;
