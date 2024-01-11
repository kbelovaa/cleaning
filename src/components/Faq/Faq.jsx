import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FaqCard from './FaqCard/FaqCard';
import './Faq.scss';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="faq-wrap">
      <div className="container">
        <div className="faq">
          <h2 className="faq__title">{t('faq')}</h2>
          <div className="faq__cards">
            <div className="faq__column">
              {Array.from({ length: 8 }, (_, index) => (
                <FaqCard key={index} question={t(`question${index}`)} answer={t(`answer${index}`)} />
              ))}
            </div>
            <div className="faq__column">
              {Array.from({ length: 8 }, (_, index) => (
                <FaqCard key={index + 8} question={t(`question${index + 8}`)} answer={t(`answer${index + 8}`)} />
              ))}
            </div>
          </div>
          <div className="faq__contact-us">
            <p className="faq__text">{t('didntFindQuestion')}</p>
            <NavLink className="faq__text faq__link" to="/contact-us">
              {t('contactUsHere')}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
