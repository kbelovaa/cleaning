import React from 'react';
import { useTranslation } from 'react-i18next';

const LegalNotice = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="legals">
        <h2 className="legals__title">{t('legalNotice')}</h2>
        <div className="legals__text-block">
          <p className="legals__text">{t('lastUpdated')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            {t('legalNotice1')}{' '}
            <a className="link" href="/">
              https://www.sdl24.es
            </a>{' '}
            {t('legalNotice2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
