import React, { useState, useEffect } from 'react';
import DownArrow from '../../assets/img/decoration/down_arrow.png';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';

function IntroSection() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    // Vérifie si la largeur de l'écran est supérieure à 768 pixels (non mobile)
    if (window.innerWidth > 1000) {
      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    } else {
      // Si la largeur de l'écran est inférieure à 768 pixels (mobile), 
      // définissez directement l'état "loaded" sur true
      setLoaded(true);
    }
  }, []);

  const lgSpringProps = useSpring({
    opacity: loaded ? 1 : 0,
    from: { opacity: 0 },
    transform: loaded ? 'translateY(0%)' : 'translateY(-60%)',
    config: { duration: 900 },
  });

  const smSpringProps = useSpring({
    opacity: loaded ? 0.7 : 0,
    from: { opacity: 0 },
    transform: loaded ? 'translateY(0%)' : 'translateY(110%)',
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
