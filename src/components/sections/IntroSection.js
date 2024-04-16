import React, { useEffect } from 'react';
import DownArrow from '../../assets/img/decoration/down_arrow.png';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';

function IntroSection() {
  const { t } = useTranslation();

  useEffect(() => {
    // Cette fonction d'effet ne dépend d'aucune variable, donc elle s'exécutera une seule fois après le premier rendu.
  }, []); 

  const lgSpringProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: 'translateY(0%)',
    config: { duration: 900 },
  });

  const smSpringProps = useSpring({
    opacity: 0.7,
    from: { opacity: 0 },
    transform: 'translateY(0%)',
    config: { duration: 900 },
  });

  return (
    <section id="intro">
      <div className="title_container">
        <div className="font_box">
          <animated.p className="title_text_lg" style={lgSpringProps}>
            {t('welcome')}
          </animated.p>
          <animated.p className="title_text_sm" style={smSpringProps}>
            {t('developer')}
          </animated.p>
          <div className='moveto'>
            <a href="#about">
              <img className="arrow" src={DownArrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
