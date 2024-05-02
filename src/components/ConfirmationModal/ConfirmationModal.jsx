import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowingWays } from '../../constants/selectOptions';
import { createKnowingWay } from '../../http/profileAPI';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, email, setEmail, isNewEmail, isInvoice, isAwaiting }) => {
  const user = useSelector((state) => state.user);

  const [knowingWay, setKnowingWay] = useState('');

  const modalRef = useRef(null);

  const { t } = useTranslation();

  const { pathname } = useLocation();
  const isReceipt = pathname.startsWith('/receipt');
  const isContactUs = pathname.startsWith('/contact-us');
  const isPersonalInfo = pathname.startsWith('/personal-info');
  const isPassword = pathname.startsWith('/settings/change-password');
  const isConfirmation = pathname.startsWith('/confirmation');
  const isInvoiceReceipt = pathname.startsWith('/invoice-receipt');

  const navigate = useNavigate();

  const handleCloseConfirmation = () => {
    // добавить отправку письма
    if (
      knowingWay &&
      !isContactUs &&
      !isReceipt &&
      !isPersonalInfo &&
      !isConfirmation &&
      !isInvoiceReceipt
    ) {
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

    if (
      !isPersonalInfo &&
      !isContactUs &&
      !isPassword &&
      !isReceipt &&
      !isConfirmation &&
      !isInvoiceReceipt
    ) {
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
        <div className="confirmation__close" onClick={handleCloseConfirmation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M22.0708 22.0709L7.92862 7.92881" stroke="#268664" strokeLinecap="round" />
            <path d="M22.0714 7.92881L7.92925 22.0709" stroke="#268664" strokeLinecap="round" />
          </svg>
        </div>
        <svg
          className={
            isPersonalInfo || isPassword || isReceipt || (isInvoiceReceipt && !isInvoice) ? 'confirmation__tick' : ''
          }
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#268664" strokeLinecap="round" />
        </svg>
        <h3
          className={
            isReceipt || (isInvoiceReceipt && !isInvoice) || isPersonalInfo || isPassword
              ? 'hidden'
              : 'confirmation__title'
          }
        >
          {isContactUs
            ? t('thankYouMessage')
            : (isConfirmation && isAwaiting) || (isInvoiceReceipt && isInvoice)
            ? t('awaitingConfirmation')
            : isConfirmation && !isAwaiting
            ? t('booked')
            : t('signUpSuccess')}
        </h3>
        <p className="confirmation__text">
          {isReceipt || (isInvoiceReceipt && !isInvoice)
            ? t('weHaveSentReceipt')
            : isContactUs
            ? t('weWillReplyToEmail')
            : isPersonalInfo && !isNewEmail
            ? t('personalInfoSaved')
            : isPersonalInfo && isNewEmail
            ? t('changesSaved')
            : isPassword
            ? t('passwordChanged')
            : (isConfirmation && isAwaiting) || (isInvoiceReceipt && isInvoice)
            ? t('weAreLookingForCleaner')
            : isConfirmation && !isAwaiting
            ? t('yourServiceIsBooked')
            : t('confirmationEmailSent')}
        </p>
        <p className={isPersonalInfo && isNewEmail ? 'confirmation__text' : 'hidden'}>{t('verifyNewEmail')}</p>
        <p className={isConfirmation || (isInvoiceReceipt && isInvoice) ? 'confirmation__text' : 'hidden'}>
          {isAwaiting ? t('pleaseAllow15Min') : t('paymentInstructions')}
        </p>
        <span
          className={
            (isPersonalInfo && isNewEmail) || isContactUs || isReceipt || (isInvoiceReceipt && !isInvoice)
              ? 'confirmation__email'
              : 'hidden'
          }
        >
          {email}
        </span>
        <div
          className={
            !isContactUs &&
            !isReceipt &&
            !isPersonalInfo &&
            !isPassword &&
            !isConfirmation &&
            !isInvoiceReceipt
              ? 'confirmation__knowing-way'
              : 'hidden'
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
