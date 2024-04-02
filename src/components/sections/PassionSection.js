import React from "react";
import "./PassionSectionStyle.css";
import DownArrow from '../../assets/img/down_arrow.png';
import Ui_img from "../../assets/img/ui.png";
import Ux_img from "../../assets/img/ux.png";
import Break_img from "../../assets/img/break.png";
import { useTranslation } from 'react-i18next';

function PassionSection() {
  const { t } = useTranslation();
  return (
    <section id="passion">
      <div className="section_title_container">
        <p className="section_title">{t('passion_title')}</p>
      </div>
      <div className="subsection_container">
        <div className="row_container">
        <div className="row">
          <img src={Ui_img} alt="" style={{ height: "9em", width: "auto", marginBottom : '2vh'  }} />
          <p className="section_title">{t('ui')}</p>
          <p className="row_text">
          {t('ui_text')}
          </p>
          </div>
        </div>
        <div className="row_container">
          <div className="row">
            <img
              src={Ux_img}
              alt=""
              style={{ height: "15vh", width: "auto", marginBottom : '2vh' }}
            />
            <p className="section_title">{t('ux')}</p>

            <p className="row_text">
              {t('ux_text')}
            </p>
          </div>
        </div>
      </div>
      <div className="col_container">
        <div className="column">
        <img src={Break_img} alt=""  style={{ height: "15vh", width: "auto", marginRight : '5vh' }} />
        <div className="text_column">
        <p className="section_title"> {t('afk')}</p>
       <p className="row_text">
       {t('afk_text')}
        </p> 
        </div>
        </div>
      </div>
      <div className="moveto">
            <a href="#experience">
            <img className="arrow" src={DownArrow} alt="" />
          </a>
      </div>
    </section>
  );
}

export default PassionSection;
