import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cleaningImg from '../../images/cleaning.png';
import cleaningImg1440 from '../../images/cleaning-1440.png';
import cleaningImg1024 from '../../images/cleaning-1024.png';
import cleaningImg390 from '../../images/cleaning-390.png';
import stageImg1440 from '../../images/stageImg1440.png';
import stageImg1024 from '../../images/stageImg1024.png';
import stageImg744 from '../../images/stageImg744.png';
import stageImg390 from '../../images/stageImg390.png';
import qrCode from '../../images/qr-code.png';
import appleIcon from '../../images/apple.png';
import googlePlayIcon from '../../images/google-play.png';
import Feedback from '../Feedback/Feedback';
import './Main.scss';

const Main = ({ password }) => {
  const [stageImg, setStageImg] = useState(stageImg1440);
  const [windowWidth, setWindowWidth] = useState();

  const { t } = useTranslation();

  const setIsAuthorizationOpen = useOutletContext();

  useEffect(() => {
    const handleResize = () => {
      const { width } = window.screen;
      setWindowWidth(width);

      switch (true) {
        case width <= 566:
          setStageImg(stageImg390);
          break;
        case width <= 1024:
          setStageImg(stageImg744);
          break;
        case width <= 1440:
          setStageImg(stageImg1024);
          break;
        default:
          setStageImg(stageImg1440);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (password) {
      setIsAuthorizationOpen(true);
    }
  }, [password]);

  return (
    <div className="main">
      <section className="general-section">
        <div className="container">
          <div className="general">
            <div className="general__info">
              <h1 className="general__title">Sdl</h1>
              <h3 className="general__subtitle">Servicio de limpieza</h3>
              <div className="general__text">{t('whatIsSdl')}</div>
              <a className="btn general__btn main__btn" href="/booking">
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
              </a>
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
            <a className="btn main__btn" href="/booking">
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
            </a>
          </div>
        </div>
      </section>
      <section className="system-section">
        <div className="container">
          <div className="system">
            <h2 className="system__title">{t('howItWorks')}</h2>
            <div className="system__stages-wrap">
              <div className="system__stage">
                <img className="system__stage-background" src={stageImg} alt="Stage" />
                <span className="system__stage-number">01</span>
                <div className="system__stage-info">
                  <h3 className="system__stage-subtitle">{t('request')}</h3>
                  <p className="system__stage-text">
                    {`${t('requestCleaning')} `}
                    {windowWidth > 1024 && <br />}
                    {t('withClicks')}
                  </p>
                </div>
              </div>
              <div className="system__stage">
                <img className="system__stage-background" src={stageImg} alt="Stage" />
                <span className="system__stage-number">02</span>
                <div className="system__stage-info">
                  <h3 className="system__stage-subtitle">{t('confirmation')}</h3>
                  <p className="system__stage-text">{t('receiveConfIn15Min')}</p>
                </div>
              </div>
              <div className="system__stage">
                <img className="system__stage-background" src={stageImg} alt="Stage" />
                <span className="system__stage-number">03</span>
                <div className="system__stage-info">
                  <h3 className="system__stage-subtitle">{t('enjoy')}</h3>
                  <p className="system__stage-text">{t('spendYourTime')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="materials-section">
        <div className="container">
          <div className="materials">
            <h2 className="materials__title">{t('materials')}</h2>
            <p className="materials__text">{t('materialsText')}</p>
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
            <p className="join__note">{`${t('returningToCleanHome')}...`}</p>
          </div>
        </div>
      </section>
      <section className="start-section">
        <div className="container">
          <div className="start">
            <h2 className="start__title">{t('start')}</h2>
            <p className="start__text">{t('hereYouCanCustomizeOrder')}</p>
            <a className="btn main__btn start__btn" href="/booking">
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
            </a>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="container">
          <div className="reviews">
            <h2 className="start__title">{t('testimonials')}</h2>
            <div className="reviews__blocks">
              <div className="reviews__block">
                <h5 className="reviews__subtitle">{t('happyUsers')}</h5>
                <span className="reviews__text">{'97+'}</span>
              </div>
              <div className="reviews__block">
                <h5 className="reviews__subtitle">{t('service')}</h5>
                <div className="reviews__stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9996 17.8441L6.18281 20.9021L7.29371 14.4251L2.58786 9.838L9.09119 8.89301L11.9996 3L14.9079 8.89301L21.4113 9.838L16.7054 14.4251L17.8163 20.9021L11.9996 17.8441Z"
                        fill="#268664"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="reviews__block">
                <h5 className="reviews__subtitle">{t('paySecure')}</h5>
                <span className="reviews__text">{t('withStripe')}</span>
              </div>
            </div>
          </div>
          {/* <div
            class="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6671478562cbe355c286fafb"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a href="https://www.trustpilot.com/review/sdl24.es" target="_blank" rel="noopener">
              Trustpilot
            </a>
          </div> */}
        </div>
        <Feedback />
      </section>
      {/* <section className="mobile-section">
        <div className="container">
          <div className="mobile">
            <h3 className="mobile__title">{t('downloadMobile')}</h3>
            <img className="mobile__qr" src={qrCode} alt="QR code" />
            <p className="mobile__text">{t('scanQr')}</p>
            <div className="mobile__social">
              <img src={appleIcon} alt="Apple" className="mobile__icon" />
              <span className="mobile__label">App Store</span>
            </div>
            <div className="mobile__social">
              <img src={googlePlayIcon} alt="Google Play" className="mobile__icon" />
              <span className="mobile__label">Google Play</span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="cleaners-section">
        <div className="container">
          <div className="cleaners">
            <h2 className="cleaners__title">{t('wantToWorkWithUs')}</h2>
            <p className="cleaners__text">{t('weAreLookingForCleaners')}</p>
            <p className="cleaners__text">{t('sdlServiceDescription')}</p>
            <a className="btn main__btn cleaners__btn" href="/work">
              {t('seeDetails')}
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
