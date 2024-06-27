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
          <p className="legals__text">{t('lastUpdated')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            {t('cookie2')}
            <a className="link" href="/">
              https://www.sdl24.es
            </a>
            {t('cookie64')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie3')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie4')}</p>
          <p className="legals__text">{t('cookie5')}</p>
          <p className="legals__text">{t('cookie6')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie7')}</p>
          <p className="legals__text">{t('cookie8')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie9')}</p>
          <p className="legals__text">{t('cookie10')}</p>
          <p className="legals__text">{t('cookie11')}</p>
          <p className="legals__text">{t('cookie12')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie13')}</p>
          <p className="legals__text">{t('cookie14')}</p>
          <p className="legals__text">{t('cookie15')}</p>
          <p className="legals__text">{t('cookie16')}</p>
          <p className="legals__text">{t('cookie17')}</p>
          <p className="legals__text">
            {t('cookie18')}
            <a className="link" href="https://stripe.com/en-nl/privacy">
              {t('cookie65')}
            </a>
          </p>
          <p className="legals__text">{t('cookie19')}</p>
          <p className="legals__text">{t('cookie20')}</p>
          <p className="legals__text">{t('cookie21')}</p>
          <p className="legals__text">{t('cookie22')}</p>
          <p className="legals__text">{t('cookie23')}</p>
          <p className="legals__text">
            {t('cookie24')}
            <a className="link" href="https://stripe.com/en-nl/privacy">
              {t('cookie65')}
            </a>
          </p>
          <p className="legals__text">{t('cookie25')}</p>
          <p className="legals__text">{t('cookie26')}</p>
          <p className="legals__text">{t('cookie27')}</p>
          <p className="legals__text">{t('cookie28')}</p>
          <p className="legals__text">{t('cookie29')}</p>
          <p className="legals__text">
            {t('cookie30')}
            <a className="link" href="https://stripe.com/en-nl/privacy">
              {t('cookie65')}
            </a>
          </p>
          <p className="legals__text">{t('cookie31')}</p>
          <p className="legals__text">{t('cookie32')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie33')}</p>
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
          <p className="legals__text legals__subtitle">{t('cookie43')}</p>
          <p className="legals__text">{t('cookie44')}</p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">
              Chrome
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a
              className="link"
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
            >
              Internet Explorer
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a
              className="link"
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
            >
              Firefox
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
              Safari
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a
              className="link"
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
            >
              Edge
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="https://help.opera.com/en/latest/web-preferences/">
              Opera
            </a>
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('cookie45')}</p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="http://www.aboutads.info/choices/">
              {t('cookie46')}
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="https://youradchoices.ca/">
              {t('cookie47')}
            </a>
          </p>
          <p className="legals__text">
            ·      {' '}
            <a className="link" href="http://www.youronlinechoices.com/">
              {t('cookie48')}
            </a>
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie49')}</p>
          <p className="legals__text">{t('cookie50')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie51')}</p>
          <p className="legals__text">{t('cookie52')}</p>
          <p className="legals__text">
            {t('cookie53')}
            <a
              className="link"
              href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html#_blank"
            >
              {t('cookie66')}
            </a>
            {t('cookie67')}
            <a
              className="link"
              href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html#_blank"
            >
              {t('cookie68')}
            </a>
            {t('cookie69')}
          </p>
          <p className="legals__text">{t('cookie54')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie55')}</p>
          <p className="legals__text">{t('cookie56')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie57')}</p>
          <p className="legals__text">{t('cookie58')}</p>
          <p className="legals__text">{t('cookie59')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('cookie60')}</p>
          <p className="legals__text">{t('cookie61')}</p>
        </div>
        <div className="legals__text-block">
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
          <p className="legals__text">
            {t('cookie63')}
            <a className="link" href="https://termly.io/products/cookie-consent-manager/">
              {t('cookie70')}
            </a>
            {t('cookie71')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
