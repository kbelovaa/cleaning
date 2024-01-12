import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import screensGroup from '../../images/screens_group.png';
import requestImg from '../../images/request_img.png';
import confirmationImg from '../../images/confirmation_img.png';
import payImg from '../../images/pay_img.png';
import enjoyImg from '../../images/enjoy_img.png';
import './Main.scss';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stagesRefs = useRef(Array.from({ length: 4 }, () => React.createRef()));
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const newIndex = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth);
        setCurrentIndex(newIndex);
      }
    }, 100);
  };

  const scrollToStage = (direction) => {
    const nextIndex = currentIndex + direction;
    const nextStageRef = stagesRefs.current[nextIndex];

    if (nextStageRef && nextStageRef.current) {
      const scrollContainer = nextStageRef.current.parentElement;

      if (scrollContainer) {
        const scrollWidth = nextStageRef.current.offsetWidth;

        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + direction * scrollWidth,
          behavior: 'smooth',
        });
      }
    }

    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="main">
      <section className="general-section">
        <div className="container">
          <div className="general">
            <div className="general__info">
              <h1 className="general__title">Sdl</h1>
              <h3 className="general__subtitle">Servicio de limpieza</h3>
              <div className="general__text">{t('whatIsSdl')}</div>
            </div>
            <img className="general__img" src={screensGroup} alt="Screens" />
          </div>
        </div>
      </section>
      <section className="description-section">
        <div className="container">
          <div className="description">
            <h3 className="description__title">{t('timeIsInvaluable')}</h3>
            <p className="description__text">
              {t('wellMainrainedHome')}
              <br />
              {t('weDeliverCare')}
            </p>
            <button className="btn description__btn" onClick={() => navigate('/booking')}>
              {t('bookNow')}
              <svg
                className="btn__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path d="M3 12.5L21 12.5" stroke="white" strokeLinecap="round" />
                <path d="M15 18.5L21 12.5L15 6.5" stroke="white" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="container">
          <div className="system">
            <h2 className="title system__title">{t('howtheSystemWorks')}</h2>
            <div className="system__stages-wrap">
              <div className="system__stages" ref={scrollContainerRef}>
                <div className="system__stage" ref={stagesRefs.current[0]}>
                  <h3 className="system__subtitle">1. {t('sendRequest')}</h3>
                  <p className="system__text">{t('requestCleaning')}</p>
                  <img className="system__img" src={requestImg} alt="Request screen" />
                </div>
                <div className="system__stage" ref={stagesRefs.current[1]}>
                  <h3 className="system__subtitle">2. {t('receiveConf')}</h3>
                  <p className="system__text">{t('receiveConfIn15Min')}</p>
                  <img className="system__img" src={confirmationImg} alt="Confirmation screen" />
                </div>
                <div className="system__stage" ref={stagesRefs.current[2]}>
                  <h3 className="system__subtitle">3. {t('pay')}</h3>
                  <p className="system__text">{t('securelyPay')}</p>
                  <img className="system__img" src={payImg} alt="Pay screen" />
                </div>
                <div className="system__stage" ref={stagesRefs.current[3]}>
                  <h3 className="system__subtitle">4. {t('enjoy')}</h3>
                  <p className="system__text">{t('enjoyCleanedHome')}</p>
                  <img className="system__img" src={enjoyImg} alt="Enjoy screen" />
                </div>
              </div>
              <div
                className={currentIndex === 0 ? 'hidden' : 'system__arrow system__arrow_prev'}
                onClick={() => scrollToStage(-1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M19 6.00195L1 6.00195" stroke="#268664" strokeWidth="0.872414" strokeLinecap="round" />
                  <path
                    d="M6.38928 11L1.00006 6L6.38928 1"
                    stroke="#268664"
                    strokeWidth="0.872414"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                className={currentIndex === 3 ? 'hidden' : 'system__arrow system__arrow_next'}
                onClick={() => scrollToStage(1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 6.00195L19 6.00195" stroke="#268664" strokeWidth="0.872414" strokeLinecap="round" />
                  <path
                    d="M13.6107 11L18.9999 6L13.6107 1"
                    stroke="#268664"
                    strokeWidth="0.872414"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join">
            <h2 className="join__title">{t('whyWeStandOut')}</h2>
            <div className="join__reasons">
              <div className="join__reason">
                <h4 className="join__subtitle">{t('convenient')}</h4>
                <p className="join__text">{t('convenientDescr')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('timeSaving')}</h4>
                <p className="join__text">{t('timeSavingDescr')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('professional')}</h4>
                <p className="join__text">{t('professionalDescr')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('compliant')}</h4>
                <p className="join__text">{t('compliantDescr')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('reliable')}</h4>
                <p className="join__text">{t('reliableDescr')}</p>
              </div>
              <div className="join__reason">
                <h4 className="join__subtitle">{t('trusted')}</h4>
                <p className="join__text">{t('trustedDescr')}</p>
              </div>
            </div>
            <span className="join__note">+ {t('returningToCleanHome')}</span>
          </div>
        </div>
        <div className="background"></div>
      </section>
      <section className="start-section">
        <div className="container">
          <div className="start">
            <h2 className="start__title">{t('start')}</h2>
            <p className="start__text">{t('hereYouCanCustomizeOrder')}</p>
            <button className="btn start__btn" onClick={() => navigate('/booking')}>
              {t('bookNow')}
              <svg
                className="btn__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path d="M3 12.5L21 12.5" stroke="white" strokeLinecap="round" />
                <path d="M15 18.5L21 12.5L15 6.5" stroke="white" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
