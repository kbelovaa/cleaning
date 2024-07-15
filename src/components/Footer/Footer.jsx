import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

const Footer = () => {
  const { pathname } = useLocation();
  const isMain = pathname === '/';
  const isWork = pathname.startsWith('/work');

  const { t } = useTranslation();

  return (
    <footer className={`footer-section ${isMain || isWork ? 'white' : ''}`}>
      <div className="container">
        <div className="footer">
          <p className="footer__text">{t('copyright')}</p>
          <ul className="footer__links">
            <li>
              <a href="/terms-of-use" className="link footer__link">
                {t('termsOfUse')}
              </a>
            </li>
            <li>
              <a href="/cookies" className="link footer__link">
                {t('cookies')}
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="link footer__link">
                {t('privacyPolicy')}
              </a>
            </li>
            <li>
              <a href="/legal-notice" className="link footer__link">
                {t('legalNotice')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
