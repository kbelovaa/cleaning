import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Settings.scss';

const Settings = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="settings">
        <h2 className="settings__title">{t('settings')}</h2>
        <div className="settings__password" onClick={() => navigate('change-password')}>
          <span className="settings__label">{t('changePassword')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L15 11L9 17" stroke="black" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Settings;
