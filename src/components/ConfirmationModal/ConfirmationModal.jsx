import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { knowingWays } from '../../constants/selectOptions';
import { createKnowingWay } from '../../http/profileAPI';
import CustomSelect from '../CustomSelect/CustomSelect';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, email, setEmail, isNewEmail, isInvoice }) => {
  const user = useSelector((state) => state.user);

  const [knowingWay, setKnowingWay] = useState('');

  const modalRef = useRef(null);

  const { t } = useTranslation();

  const { pathname } = useLocation();
  const isReceipt = pathname.startsWith('/receipt');
  const isContactUs = pathname.startsWith('/contact-us');
  const isPersonalInfo = pathname.startsWith('/personal-info');
  const isPassword = pathname.startsWith('/settings/change-password');
  const isSummary = pathname.startsWith('/summary');
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
      !isSummary &&
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

    if (isSummary) {
      navigate('/');
    }

    if (
      !isPersonalInfo &&
      !isContactUs &&
      !isPassword &&
      !isReceipt &&
      !isSummary &&
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
        <svg
          className="confirmation__close"
          onClick={handleCloseConfirmation}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path d="M22.0708 22.0709L7.92862 7.92881" stroke="#268664" strokeLinecap="round" />
          <path d="M22.0714 7.92881L7.92925 22.0709" stroke="#268664" strokeLinecap="round" />
        </svg>
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
            : isSummary
            ? t('booked')
            : isConfirmation || (isInvoiceReceipt && isInvoice)
            ? t('awaitingConfirmation')
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
            : isSummary
            ? t('paymentInstructions')
            : isConfirmation || (isInvoiceReceipt && isInvoice)
            ? t('weAreLookingForCleaner')
            : t('confirmationEmailSent')}
        </p>
        <p className={isPersonalInfo && isNewEmail ? 'confirmation__text' : 'hidden'}>{t('verifyNewEmail')}</p>
        <p className={isConfirmation || (isInvoiceReceipt && isInvoice) ? 'confirmation__text' : 'hidden'}>
          {t('pleaseAllow15Min')}
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
            !isSummary &&
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
