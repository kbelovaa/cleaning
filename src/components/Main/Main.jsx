import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cleaningImg from '../../images/cleaning.png';
import cleaningImg1440 from '../../images/cleaning-1440.png';
import cleaningImg1024 from '../../images/cleaning-1024.png';
import cleaningImg390 from '../../images/cleaning-390.png';
import './Main.scss';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stagesRefs = useRef(Array.from({ length: 3 }, () => React.createRef()));
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
              <button className="btn general__btn main__btn" onClick={() => navigate('/booking')}>
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
            <img className="general__img" src={cleaningImg} alt="Cleaning" />
            <img className="general__img_1440" src={cleaningImg1440} alt="Cleaning" />
          </div>
        </div>
        <img className="general__img_1024" src={cleaningImg1024} alt="Cleaning" />
        <img className="general__img_390" src={cleaningImg390} alt="Cleaning" />
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
            <button className="btn main__btn" onClick={() => navigate('/booking')}>
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
            <h2 className="title system__title">{t('cleanHomeIn3Steps')}</h2>
            <div className="system__stages-wrap">
              <div className="system__stages" ref={scrollContainerRef}>
                <div className="system__stage" ref={stagesRefs.current[0]}>
                  <h3 className="system__subtitle">{t('sendRequest')}</h3>
                  <p className="system__text">{t('requestCleaning')}</p>
                </div>
                <div className="system__stage" ref={stagesRefs.current[1]}>
                  <h3 className="system__subtitle">{t('receiveConf')}</h3>
                  <p className="system__text">{t('receiveConfIn15Min')}</p>
                </div>
                <div className="system__stage" ref={stagesRefs.current[2]}>
                  <h3 className="system__subtitle">{t('pay')}</h3>
                  <p className="system__text">{t('securelyPay')}</p>
                </div>
              </div>
              <div
                className={currentIndex === 0 ? 'hidden' : 'system__arrow system__arrow_prev'}
                onClick={() => scrollToStage(-1)}
              >
                <svg
                  className="system__arrow-sign"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path d="M4 15.9993L28 15.9993" stroke="#268664" strokeLinecap="round" />
                  <path d="M20 8L28 16L20 24" stroke="#268664" strokeLinecap="round" />
                </svg>
              </div>
              <div
                className={currentIndex === 2 ? 'hidden' : 'system__arrow system__arrow_next'}
                onClick={() => scrollToStage(1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 15.9993L28 15.9993" stroke="#268664" strokeLinecap="round" />
                  <path d="M20 8L28 16L20 24" stroke="#268664" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="system__dots">
              <div className={`system__dot ${currentIndex === 0 ? 'system__dot_active' : ''}`}></div>
              <div className={`system__dot ${currentIndex === 1 ? 'system__dot_active' : ''}`}></div>
              <div className={`system__dot ${currentIndex === 2 ? 'system__dot_active' : ''}`}></div>
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
            <div className="join__note">
              <div className="join__note-check">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12.5L8.25 18.75L22 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="join__note-text">{t('returningToCleanHome')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="start-section">
        <div className="container">
          <div className="start">
            <h2 className="start__title">{t('start')}</h2>
            <p className="start__text">{t('hereYouCanCustomizeOrder')}</p>
            <button className="btn main__btn" onClick={() => navigate('/booking')}>
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
