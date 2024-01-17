import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowingWays } from '../../constants/selectOptions';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, isLogin, email, setEmail }) => {
  const [knowingWay, setKnowingWay] = useState('');

  const modalRef = useRef(null);

  const { t } = useTranslation();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isConfirmation = pathname === '/confirmation';
  const isContactUs = pathname === '/contact-us';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmail('');
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

  const handleButtonClick = () => {
    // добавить отправку письма
    setIsOpen(false);
    navigate('/');
    setEmail('');
    setKnowingWay('');
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div
        className={`confirmation ${isLogin || isContactUs ? 'login' : isConfirmation ? 'conf' : 'reg'}`}
        ref={modalRef}
      >
        <svg
          className="confirmation__close"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M23.5425 23.5424L8.45758 8.45746" stroke="#268664" strokeLinecap="round" />
          <path d="M23.5424 8.45746L8.45747 23.5424" stroke="#268664" strokeLinecap="round" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#284657" strokeLinecap="round" />
        </svg>
        <h3 className={isConfirmation ? 'hidden' : 'confirmation__title'}>
          {isContactUs ? t('thankYouMessage') : isLogin ? t('logIn') : t('signUp')}
        </h3>
        <p className="confirmation__text">
          {isConfirmation
            ? t('weHaveSentReceipt')
            : isContactUs
            ? t('weWillReplyToEmail')
            : isLogin
            ? t('youAreLoggedIn')
            : t('weHaveSentConfirmation')}
        </p>
        <span className="confirmation__email">{email}</span>
        <div className={!isLogin && !isContactUs && !isConfirmation ? 'confirmation__knowing-way' : 'hidden'}>
          <span className="form__label">{t('howDidYouHearAboutUs')}</span>
          <CustomSelect
            options={knowingWays}
            selectedOption={knowingWay}
            setSelectedOption={setKnowingWay}
            defaultOption={'Select'}
          />
        </div>
        <button className="confirmation__btn btn btn_solid" onClick={handleButtonClick}>
          {isLogin || isContactUs || isConfirmation ? t('ok') : t('goToEmail')}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
