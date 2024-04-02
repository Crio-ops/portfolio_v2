import React from 'react';
import DownArrow from '../../assets/img/down_arrow.png';
import { useTranslation } from 'react-i18next';

function IntroSection() {
  const { t } = useTranslation();
  return (
    <section id="intro">
      <div className="title_container">
        <div className="font_box">
          <p className="title_text_lg">{t('welcome')}</p>
          <p className="title_text_sm">{t('developer')}</p>
          <a href="#about">
            <img className="arrow" src={DownArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;