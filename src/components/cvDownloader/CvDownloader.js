import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./CvDownloaderStyle.css";
import cvImg from "../../assets/img/decoration/curriculum.png";
import cvEn from "../../assets/cv/Hermant_Kevin_cv_en.pdf";
import cvFr from "../../assets/cv/Hermant_Kevin_cv_fr.pdf";

function CvDownloader() {
  const { t, i18n } = useTranslation();
  const downloadLink = i18n.language === "fr" ? cvFr : cvEn;

  return (
    <div className="cv_container">
      <div className="popup">
        <p>{t('cv_download')}</p>
      </div>

      <div className="cv_img_container">
        <a href={downloadLink} download>
          <img className="cv_img" src={cvImg} alt="cv" />
        </a>
      </div>
    </div>
  );
}

export default CvDownloader;
