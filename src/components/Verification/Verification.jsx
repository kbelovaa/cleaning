import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { verifyEmail } from '../../http/authAPI';
import './Verification.scss';

const Verification = () => {
  const [message, setMessage] = useState('');
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const device = queryParams.get('device');

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const checkEmail = async () => {
      const response = await verifyEmail(token.replace(/~/g, '.'));

      if (response.status === 200) {
        setMessage(response.data.message);
        setIsSuccessfully(true);
        if (device === 'web') {
          navigate(`/password/${response.data.unverifiedUserId}`);
        }
      } else {
        setMessage(response.message);
        setIsSuccessfully(false);
      }

      setLoading(false);
    };

    checkEmail();
  }, [token]);

  return (
    <div className="container">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="verification">
          <svg
            className={isSuccessfully ? 'verification__tick' : 'hidden'}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path d="M10 32.5L22.5 45L50 17.5" stroke="#268664" strokeLinecap="round" />
          </svg>
          <h2 className="verification__title">
            {isSuccessfully
              ? t('yourEmailConfirmed')
              : message === 'Link has already been used'
              ? t('emailWasVerified')
              : t('yourEmailNotConfirmed')}
          </h2>
          <p className={isSuccessfully ? 'hidden' : 'verification__text'}>
            {message === 'Link has already been used' ? t('pleseContactSupport') : t(message)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Verification;
