import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowingWays } from '../../constants/selectOptions';
import { createKnowingWay } from '../../http/profileAPI';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, email, setEmail, isNewEmail }) => {
  const user = useSelector((state) => state.user);

  const [knowingWay, setKnowingWay] = useState('');

  const modalRef = useRef(null);

  const { t } = useTranslation();

  const { pathname } = useLocation();
  const isReceipt = pathname === '/receipt';
  const isContactUs = pathname === '/contact-us';
  const isPersonalInfo = pathname === '/personal-info';
  const isPassword = pathname === '/settings/change-password';

  const navigate = useNavigate();

  const handleCloseConfirmation = () => {
    // добавить отправку письма
    if (knowingWay && !isContactUs && !isReceipt && !isPersonalInfo) {
      createKnowingWay(user.id, knowingWay);
    }
    setIsOpen(false);
    setKnowingWay('');

    if (isContactUs) {
      navigate('/');
    }

    if (isPassword) {
      navigate('/settings');
    }

    if (!isPersonalInfo && !isContactUs && !isPassword) {
      setEmail('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseConfirmation();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="confirmation" ref={modalRef}>
        <svg
          className="confirmation__close"
          onClick={handleCloseConfirmation}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M23.5425 23.5424L8.45758 8.45746" stroke="#268664" strokeLinecap="round" />
          <path d="M23.5424 8.45746L8.45747 23.5424" stroke="#268664" strokeLinecap="round" />
        </svg>
        <svg
          className={isPersonalInfo || isPassword ? 'confirmation__tick' : ''}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#284657" strokeLinecap="round" />
        </svg>
        <h3 className={isReceipt || isPersonalInfo || isPassword ? 'hidden' : 'confirmation__title'}>
          {isContactUs ? t('thankYouMessage') : t('signUpSuccess')}
        </h3>
        <p className="confirmation__text">
          {isReceipt
            ? t('weHaveSentReceipt')
            : isContactUs
            ? t('weWillReplyToEmail')
            : isPersonalInfo && !isNewEmail
            ? t('personalInfoSaved')
            : isPersonalInfo && isNewEmail
            ? t('changesSaved')
            : isPassword
            ? t('passwordChanged')
            : t('confirmationEmailSent')}
        </p>
        <p className={isPersonalInfo && isNewEmail ? 'confirmation__text' : 'hidden'}>{t('verifyNewEmail')}</p>
        <span className={(isPersonalInfo && isNewEmail) || isContactUs ? 'confirmation__email' : 'hidden'}>
          {email}
        </span>
        <div
          className={
            !isContactUs && !isReceipt && !isPersonalInfo && !isPassword ? 'confirmation__knowing-way' : 'hidden'
          }
        >
          <span className="form__label">{t('howDidYouHearAboutUs')}</span>
          <CustomSelect
            options={knowingWays}
            selectedOption={knowingWay}
            setSelectedOption={setKnowingWay}
            defaultOption={'Select'}
          />
        </div>
        <button className="confirmation__btn btn btn_solid" onClick={handleCloseConfirmation}>
          {t('ok')}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
