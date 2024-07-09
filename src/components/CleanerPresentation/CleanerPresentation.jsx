import React from 'react';
import { useTranslation } from 'react-i18next';
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
        <div className="system">
          <h2 className="title system__title">{t('howSystemWorks')}</h2>
          <div className="system__stages">
            <div className="system__stage">
              <h3 className="system__subtitle">1. {t('notification')}</h3>
              <p className="system__text">{t('notificationDescription')}</p>
              {language === 'en' ? (
                <img className="system__img" src={screen1En} alt="Notification screen" />
              ) : (
                <img className="system__img" src={screen1Es} alt="Notification screen" />
              )}
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">2. {t('accept')}</h3>
              <p className="system__text">{t('acceptDescription')}</p>
              {language === 'en' ? (
                <img className="system__img" src={screen2En} alt="Request screen" />
              ) : (
                <img className="system__img" src={screen2Es} alt="Request screen" />
              )}
            </div>
            <div className="system__stage">
              <h3 className="system__subtitle">3. {t('instantPayments')}</h3>
              <p className="system__text">{t('instantPaymentsDescription')}</p>
              {language === 'en' ? (
                <img className="system__img" src={screen3En} alt="Payment screen" />
              ) : (
                <img className="system__img" src={screen3Es} alt="Payment screen" />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="join">
            <h2 className="title">{t('whyJoinUs')}</h2>
            <div className="join__reasons">
              <div className="join__reasons-col">
                <div className="join__reason">
                  <h4 className="join__subtitle">{t('flexible')}</h4>
                  <p className="join__text">{t('flexibleDescription')}</p>
                </div>
                <div className="join__reason">
                  <h4 className="join__subtitle">{t('technology')}</h4>
                  <p className="join__text">{t('technologyDescription')}</p>
                </div>
              </div>
              <div className="join__reasons-col">
                <div className="join__reason">
                  <h4 className="join__subtitle">{t('payment')}</h4>
                  <p className="join__text">{t('paymentDescription')}</p>
                </div>
                <div className="join__reason">
                  <h4 className="join__subtitle">{t('potential')}</h4>
                  <p className="join__text">{t('potentialDescription')}</p>
                </div>
              </div>
              <div className="join__reasons-col">
                <div className="join__reason">
                  <h4 className="join__subtitle">{t('complianceAndSecurity')}</h4>
                  <p className="join__text">{t('complianceAndSecurityDescription')}</p>
                </div>
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
