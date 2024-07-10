import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import screen1En from '../../images/cleaners/screen1_en.png';
import screen2En from '../../images/cleaners/screen2_en.png';
import screen3En from '../../images/cleaners/screen3_en.png';
import screen1Es from '../../images/cleaners/screen1_es.png';
import screen2Es from '../../images/cleaners/screen2_es.png';
import screen3Es from '../../images/cleaners/screen3_es.png';
import './CleanerPresentation.scss';

const CleanerPresentation = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const containerRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      const newIndex = currentItemIndex + delta;

      if (newIndex >= 0 && newIndex < 3 && newIndex !== currentItemIndex) {
        container.scrollTo({
          top: newIndex * container.clientHeight,
          behavior: 'smooth',
        });

        setFadeOut(true);
        setTimeout(() => {
          setCurrentItemIndex(newIndex);
          setFadeOut(false);
        }, 300);
      }
    };

    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [currentItemIndex]);

  return (
    <div className="main cleaner">
      <section className="intro-section">
        <div className="container">
          <div className="intro">
            <div className="intro__wrap">
              <div className="intro__info">
                <h1 className="intro__title">Sdl</h1>
                <h2 className="intro__subtitle">Servicio de limpieza</h2>
                <p className="intro__text">{t('introText')}</p>
              </div>
              {language === 'en' ? (
                <div className="intro__images">
                  <img className="intro__img" src={screen2En} alt="Request screen" />
                  <img className="intro__img" src={screen3En} alt="Payment screen" />
                </div>
              ) : (
                <div className="intro__images">
                  <img className="intro__img" src={screen2Es} alt="Request screen" />
                  <img className="intro__img" src={screen3Es} alt="Payment screen" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="description-section">
        <div className="container">
          <div className="description">
            <h2 className={`title description__title ${language}`}>{t('welcome')}</h2>
            <p className="description__text">{t('about')}</p>
            <a className="btn" href="/work/survey">
              {t('join')}
            </a>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="container">
          <div className="system">
            <h2 className="title system__title">{t('howSystemWorks')}</h2>
            <div className="feedback__indicator">
              <div className={`feedback__dot ${currentItemIndex === 0 ? 'feedback__dot_1' : ''}`}></div>
              <div className={`feedback__dot ${currentItemIndex === 1 ? 'feedback__dot_1' : ''}`}></div>
              <div className={`feedback__dot ${currentItemIndex === 2 ? 'feedback__dot_1' : ''}`}></div>
            </div>
            <h3 className={`system__stage-title ${fadeOut ? 'invisible' : ''}`}>
              {currentItemIndex === 0 ? t('notification') : currentItemIndex === 1 ? t('accept') : t('instantPayments')}
            </h3>
            <div className="system__img-wrap"></div>
            <div className="system__stages" ref={containerRef}>
              <motion.div
                className="system__stage"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {language === 'en' ? (
                    <img className="system__img" src={screen1En} alt="Notification screen" />
                  ) : (
                    <img className="system__img" src={screen1Es} alt="Notification screen" />
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className={`system__text ${fadeOut ? 'invisible' : ''}`}>{t('notificationDescription')}</p>
                </motion.div>
              </motion.div>
              <motion.div
                className="system__stage"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {language === 'en' ? (
                    <img className="system__img" src={screen2En} alt="Request screen" />
                  ) : (
                    <img className="system__img" src={screen2Es} alt="Request screen" />
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={`system__text ${fadeOut ? 'invisible' : ''}`}>{t('acceptDescription')}</p>
                </motion.div>
              </motion.div>
              <motion.div
                className="system__stage"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {language === 'en' ? (
                    <img className="system__img" src={screen3En} alt="Payment screen" />
                  ) : (
                    <img className="system__img" src={screen3Es} alt="Payment screen" />
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={`system__text ${fadeOut ? 'invisible' : ''}`}>{t('instantPaymentsDescription')}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join">
            <h2 className="title">{t('whyJoinUs')}</h2>
            <div className="join__reasons">
              <div className="join__reason">
                <h4 className="join__subtitle">{t('flexible')}</h4>
                <p className="join__text">{t('flexibleDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('technology')}</h4>
                <p className="join__text">{t('technologyDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('payment')}</h4>
                <p className="join__text">{t('paymentDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('potential')}</h4>
                <p className="join__text">{t('potentialDescription')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('complianceAndSecurity')}</h4>
                <p className="join__text">{t('complianceAndSecurityDescription')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
      </section>
      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us">
            <h2 className="title contact-us__title">{t('joinUs')}</h2>
            <a className="btn" href="/work/survey">
              {t('join')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleanerPresentation;
