import React from 'react';
import { useTranslation } from 'react-i18next';
import './Cookies.scss';

const Cookies = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="legals">
        <h2 className="legals__title">{t('cookiePolicy')}</h2>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie1')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie2')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie3')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie4')}</p>
          <p className="legals__text">{t('cookie5')}</p>
          <p className="legals__text">{t('cookie6')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie7')}</p>
          <p className="legals__text">{t('cookie8')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie9')}</p>
          <p className="legals__text">{t('cookie10')}</p>
          <p className="legals__text">{t('cookie11')}</p>
          <p className="legals__text">{t('cookie12')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie13')}</p>
          <p className="legals__text">{t('cookie14')}</p>
          <p className="legals__text">{t('cookie15')}</p>
          <p className="legals__text">{t('cookie16')}</p>
          <p className="legals__text">{t('cookie17')}</p>
          <p className="legals__text">{t('cookie18')}</p>
          <p className="legals__text">{t('cookie19')}</p>
          <p className="legals__text">{t('cookie20')}</p>
          <p className="legals__text">{t('cookie21')}</p>
          <p className="legals__text">{t('cookie22')}</p>
          <p className="legals__text">{t('cookie23')}</p>
          <p className="legals__text">{t('cookie24')}</p>
          <p className="legals__text">{t('cookie25')}</p>
          <p className="legals__text">{t('cookie26')}</p>
          <p className="legals__text">{t('cookie27')}</p>
          <p className="legals__text">{t('cookie28')}</p>
          <p className="legals__text">{t('cookie29')}</p>
          <p className="legals__text">{t('cookie30')}</p>
          <p className="legals__text">{t('cookie31')}</p>
          <p className="legals__text">{t('cookie32')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie33')}</p>
          <p className="legals__text">{t('cookie34')}</p>
          <p className="legals__text">{t('cookie35')}</p>
          <p className="legals__text">{t('cookie36')}</p>
          <p className="legals__text">{t('cookie37')}</p>
          <p className="legals__text">{t('cookie38')}</p>
          <p className="legals__text">{t('cookie39')}</p>
          <p className="legals__text">{t('cookie40')}</p>
          <p className="legals__text">{t('cookie41')}</p>
          <p className="legals__text">{t('cookie42')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie43')}</p>
          <p className="legals__text">{t('cookie44')}</p>
          <p className="legals__text">Chrome</p>
          <p className="legals__text">Internet Explorer</p>
          <p className="legals__text">Firefox</p>
          <p className="legals__text">Safari</p>
          <p className="legals__text">Edge</p>
          <p className="legals__text">Opera</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie45')}</p>
          <p className="legals__text">{t('cookie46')}</p>
          <p className="legals__text">{t('cookie47')}</p>
          <p className="legals__text">{t('cookie48')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie49')}</p>
          <p className="legals__text">{t('cookie50')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie51')}</p>
          <p className="legals__text">{t('cookie52')}</p>
          <p className="legals__text">{t('cookie53')}</p>
          <p className="legals__text">{t('cookie54')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie55')}</p>
          <p className="legals__text">{t('cookie56')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie57')}</p>
          <p className="legals__text">{t('cookie58')}</p>
          <p className="legals__text">{t('cookie59')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie60')}</p>
          <p className="legals__text">{t('cookie61')}</p>
          <p className="legals__text">
            FIRST LUXURY REALTY MARBELLA SL
            <br />
            Carretera de Cadiz, km 176 Centro de Negocios Oasis, local 9<br />
            Marbella, Málaga 29602
            <br />
            {t('cookie62')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie63')}</p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
