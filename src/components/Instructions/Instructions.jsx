import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../../images/instructions/img1.png';
import img1es from '../../images/instructions/img1_es.png';
import img2 from '../../images/instructions/img2.png';
import img2es from '../../images/instructions/img2_es.png';
import img3 from '../../images/instructions/img3.png';
import img3es from '../../images/instructions/img3_es.png';
import img4 from '../../images/instructions/img4.png';
import img4es from '../../images/instructions/img4_es.png';
import img5 from '../../images/instructions/img5.png';
import img5es from '../../images/instructions/img5_es.png';
import img6 from '../../images/instructions/img6.png';
import img6es from '../../images/instructions/img6_es.png';
import img7 from '../../images/instructions/img7.png';
import img7es from '../../images/instructions/img7_es.png';
import img8 from '../../images/instructions/img8.png';
import img8es from '../../images/instructions/img8_es.png';
import img9 from '../../images/instructions/img9.png';
import img9es from '../../images/instructions/img9_es.png';
import img10 from '../../images/instructions/img10.png';
import img10es from '../../images/instructions/img10_es.png';
import img11 from '../../images/instructions/img11.png';
import img11es from '../../images/instructions/img11_es.png';
import img12 from '../../images/instructions/img12.png';
import img12es from '../../images/instructions/img12_es.png';
import img13 from '../../images/instructions/img13.png';
import img13es from '../../images/instructions/img13_es.png';
import img14 from '../../images/instructions/img14.png';
import img14es from '../../images/instructions/img14_es.png';
import img15 from '../../images/instructions/img15.png';
import img15es from '../../images/instructions/img15_es.png';
import img16 from '../../images/instructions/img16.png';
import img16es from '../../images/instructions/img16_es.png';
import img17 from '../../images/instructions/img17.png';
import img17es from '../../images/instructions/img17_es.png';
import img18 from '../../images/instructions/img18.png';
import img18es from '../../images/instructions/img18_es.png';
import img19 from '../../images/instructions/img19.png';
import img19es from '../../images/instructions/img19_es.png';
import img20 from '../../images/instructions/img20.png';
import img20es from '../../images/instructions/img20_es.png';
import img21 from '../../images/instructions/img21.png';
import img21es from '../../images/instructions/img21_es.png';
import img22 from '../../images/instructions/img22.png';
import img22es from '../../images/instructions/img22_es.png';
import img23 from '../../images/instructions/img23.png';
import img23es from '../../images/instructions/img23_es.png';
import img24 from '../../images/instructions/img24.png';
import img24es from '../../images/instructions/img24_es.png';
import img25 from '../../images/instructions/img25.png';
import './Instructions.scss';

const Instructions = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div className="main instructions">
      <div className="container">
        <h1 className="main-title">{t('intro')}</h1>
        <section className="section work">
          <h2 className="section__title">{t('wantToWorkWithUs')}</h2>
          <p className="section__text">{t('workWithUsText1')}</p>
          <p className="section__text">{t('workWithUsText2')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('whoWeAreLookingFor')}</h2>
          <p className="section__text">{t('weAreLookingForText1')}</p>
          <p className="section__text">{t('weAreLookingForText2')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('salary')}</h2>
          <p className="section__text">{t('salaryText')}</p>
        </section>
        <h1 className="main-title">{t('onboarding')}</h1>
        <section className="section work">
          <h2 className="section__title">{t('interview')}</h2>
          <p className="section__text">{t('interviewText')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('training')}</h2>
          <p className="section__text">{t('trainingText')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('levels')}</h2>
          <p className="section__text">{t('levelsText1')}</p>
          <p className="section__text">{t('levelsText2')}</p>
          <p className="section__text">{t('levelsText3')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('contract')}</h2>
          <p className="section__text">{t('contractText')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('tech')}</h2>
          <p className="section__text">{t('techText')}</p>
        </section>
        <section className="section work">
          <h2 className="section__title">{t('app')}</h2>
          <p className="section__text">{t('appText1')}</p>
          <p className="section__text">{t('appText2')}</p>
          <p className="section__text">{t('appText3')}</p>
        </section>
        <h1 className="main-title">{t('howItWorks')}</h1>
        <section className="section system">
          <h2 className="section__title">{t('system')}</h2>
          <p className="section__text">{t('systemText')}</p>
          <div className="system__images">
            <div className="system__img-wrap">
              {language === 'en' ? (
                <img className="system__img_1" src={img1} alt="Mobile+Web Customer" />
              ) : (
                <img className="system__img_1" src={img1es} alt="Mobile+Web Customer" />
              )}
              <span className="system__img-label">{t('mobileWeb')}</span>
            </div>
            <div className="system__img-wrap">
              {language === 'en' ? (
                <img className="system__img_2" src={img2} alt="Mobile Cleaner " />
              ) : (
                <img className="system__img_2" src={img2es} alt="Mobile Cleaner " />
              )}
              <span className="system__img-label">{t('mobileCleaner')}</span>
            </div>
            <div className="system__img-wrap">
              {language === 'en' ? (
                <img className="system__img_3" src={img3} alt="Admin panel" />
              ) : (
                <img className="system__img_3" src={img3es} alt="Admin panel" />
              )}
              <span className="system__img-label">{t('admin')}</span>
            </div>
          </div>
        </section>
        <section className="section how-it-works">
          <h2 className="section__title">{t('theFlow')}</h2>
          <p className="section__text">{t('theFlowText')}</p>
          <div className="how-it-works__images">
            {language === 'en' ? (
              <img className="how-it-works__img img" src={img4} alt="Requests list" />
            ) : (
              <img className="how-it-works__img img" src={img4es} alt="Requests list" />
            )}
            {language === 'en' ? (
              <img className="how-it-works__img img" src={img5} alt="Requests map" />
            ) : (
              <img className="how-it-works__img img" src={img5es} alt="Requests map" />
            )}
          </div>
        </section>
        <section className="section app">
          <h2 className="section__title">{t('mobileApp')}</h2>
          <p className="section__text">{t('mobileAppText')}</p>
          <div className="app__images">
            {language === 'en' ? (
              <img className="app__img img" src={img6} alt="Push notification" />
            ) : (
              <img className="app__img img" src={img6es} alt="Push notification" />
            )}
            {language === 'en' ? (
              <img className="app__img img" src={img7} alt="App notification" />
            ) : (
              <img className="app__img img" src={img7es} alt="App notification" />
            )}
          </div>
        </section>
        <section className="section menu">
          <h2 className="section__title">{t('menuBar')}</h2>
          <p className="section__text">{t('menuBarText1')}</p>
          <p className="section__text">{t('menuBarText2')}</p>
          <div className="menu__images">
            <div className="menu__img-wrap">
              {language === 'en' ? (
                <img className="menu__img_1 img" src={img8} alt="Tab bar" />
              ) : (
                <img className="menu__img_1 img" src={img8es} alt="Tab bar" />
              )}
              <div className="menu__img-border_1 border"></div>
            </div>
            <svg
              className="menu__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="menu__img-wrap">
              {language === 'en' ? (
                <img className="menu__img_2 img" src={img9} alt="Profile screen" />
              ) : (
                <img className="menu__img_2 img" src={img9es} alt="Profile screen" />
              )}
              <div className="menu__img-border_2 border"></div>
            </div>
          </div>
        </section>
        <section className="section hours">
          <h2 className="section__title">{t('workingHours')}</h2>
          <p className="section__text">{t('workingHoursText1')}</p>
          <p className="section__text">{t('workingHoursText2')}</p>
          <div className="hours__images">
            <div className="hours__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img10} alt="Working hours" />
              ) : (
                <img className="img" src={img10es} alt="Working hours" />
              )}
              <div className="hours__img-border_1 border"></div>
            </div>
            <svg
              className="hours__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="hours__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img11} alt="Working hours" />
              ) : (
                <img className="img" src={img11es} alt="Working hours" />
              )}
              <div className="hours__img-border_2 border"></div>
            </div>
            <svg
              className="hours__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {language === 'en' ? (
              <img className="img" src={img12} alt="Working hours" />
            ) : (
              <img className="img" src={img12es} alt="Working hours" />
            )}
          </div>
        </section>
        <section className="section radius">
          <h2 className="section__title">{t('workingRadius')}</h2>
          <p className="section__text">{t('workingRadiusText1')}</p>
          <p className="section__text">{t('workingRadiusText2')}</p>
          <p className="section__text">{t('workingRadiusText3')}</p>
          <p className="section__text">{t('workingRadiusText4')}</p>
          <div className="radius__images">
            <div className="radius__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img9} alt="Working radius" />
              ) : (
                <img className="img" src={img9es} alt="Working radius" />
              )}
              <div className="radius__img-border_1 border"></div>
            </div>
            <svg
              className="radius__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="radius__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img13} alt="Working radius" />
              ) : (
                <img className="img" src={img13es} alt="Working radius" />
              )}
              <div className="radius__img-border_2 border"></div>
            </div>
            <svg
              className="radius__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="radius__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img14} alt="Working radius" />
              ) : (
                <img className="img" src={img14es} alt="Working radius" />
              )}
              <div className="radius__img-border_3 border"></div>
            </div>
          </div>
        </section>
        <section className="section status">
          <h2 className="section__title">{t('status')}</h2>
          <p className="section__text">{t('statusText1')}</p>
          <p className="section__text">{t('statusText2')}</p>
          <p className="section__text">{t('statusText3')}</p>
          <p className="section__text">{t('statusText4')}</p>
          <p className="section__text">{t('statusText5')}</p>
          <div className="status__images">
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img15} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img15es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img16} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img16es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
            <div className="status__img-wrap">
              {language === 'en' ? (
                <img className="status__img img" src={img17} alt="Profile status" />
              ) : (
                <img className="status__img img" src={img17es} alt="Profile status" />
              )}
              <div className="status__img-border border"></div>
            </div>
          </div>
        </section>
        <section className="section request">
          <h2 className="section__title">{t('request')}</h2>
          <p className="section__text">{t('requestText')}</p>
          <div className="request__images">
            {language === 'en' ? (
              <img className="request__img img" src={img18} alt="Requests list" />
            ) : (
              <img className="request__img img" src={img18es} alt="Requests list" />
            )}
            {language === 'en' ? (
              <img className="request__img img" src={img19} alt="Requests map" />
            ) : (
              <img className="request__img img" src={img19es} alt="Requests map" />
            )}
          </div>
        </section>
        <section className="section schedule-block">
          <h2 className="section__title">{t('schedule')}</h2>
          <p className="section__text">{t('scheduleText')}</p>
          <div className="schedule-block__images">
            <div className="schedule-block__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img20} alt="Schedule" />
              ) : (
                <img className="img" src={img20es} alt="Schedule" />
              )}
              <div className="schedule-block__img-border_1 border"></div>
            </div>
            <svg
              className="schedule-block__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="schedule-block__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img21} alt="Job details" />
              ) : (
                <img className="img" src={img21es} alt="Job details" />
              )}
              <div className="schedule-block__img-border_2 border"></div>
            </div>
          </div>
        </section>
        <section className="section notifications-block">
          <h2 className="section__title">{t('notifications')}</h2>
          <p className="section__text">{t('notificationsText')}</p>
          <div className="notifications-block__images">
            <div className="notifications-block__img-wrap">
              {language === 'en' ? (
                <img className="notifications-block__img_1 img" src={img22} alt="Notifications" />
              ) : (
                <img className="notifications-block__img_1 img" src={img22es} alt="Notifications" />
              )}
              <div className="notifications-block__img-border_1 border"></div>
            </div>
            <svg
              className="notifications-block__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="notifications-block__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img23} alt="Notifications" />
              ) : (
                <img className="img" src={img23es} alt="Notifications" />
              )}
              <div className="notifications-block__img-border_2 border"></div>
            </div>
            <svg
              className="notifications-block__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                d="M21.667 28.8159L30.0003 20.4826L21.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11.667 28.8159L20.0003 20.4826L11.667 12.1493"
                stroke="#268664"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="notifications-block__img-wrap">
              {language === 'en' ? (
                <img className="img" src={img24} alt="Notification" />
              ) : (
                <img className="img" src={img24es} alt="Notification" />
              )}
              <div className="notifications-block__img-border_3 border"></div>
            </div>
          </div>
        </section>
        <section className="section bonuses">
          <h2 className="section__title">{t('bonuses')}</h2>
          <p className="section__text">{t('bonusesText1')}</p>
          <p className="section__text">{t('bonusesText2')}</p>
          <p className="section__text">{t('bonusesText3')}</p>
          <p className="section__text">{t('bonusesText4')}</p>
          <img className="bonuses__img" src={img25} alt="Percent" />
        </section>
        <section className="section usp">
          <h2 className="section__title">{t('usp')}</h2>
          <p className="section__text">{t('uspText1')}</p>
          <p className="section__text">
            {t('uspText2')}
            <br />
            {t('uspText3')}
            <br />
            {t('uspText4')}
          </p>
          <p className="section__text">{t('uspText5')}</p>
        </section>
        <section className="section customer">
          <h2 className="section__title">{t('targetCustomer')}</h2>
          <p className="section__text">{t('targetCustomerText')}</p>
        </section>
      </div>
    </div>
  );
};

export default Instructions;
