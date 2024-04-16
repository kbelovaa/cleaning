import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './ContactUs.scss';

const ContactUs = ({ loading }) => {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [text, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (user.email && user.name) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (user.isAuth) {
      if (text) {
        return true;
      }
    } else if (name && email && isEmailValid && text) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (user.isAuth) {
      if (text) {
        setRequestLoading(true);
        // отправить запрос
        setRequestLoading(false);
        setIsConfirmationOpen(true);
      } else {
        setIsFormValid(false);
      }
    } else if (name && email && isEmailValid && text) {
      setRequestLoading(true);
      // отправить запрос
      setRequestLoading(false);
      setIsConfirmationOpen(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="container">
      <div className="contact-us">
        <h2 className="contact-us__title">{t('contactUs')}</h2>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <form className={`contact-us__form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className={user.isAuth ? 'hidden' : 'form__input-wrap'}>
              <label htmlFor="name" className="form__label">
                {t('name')}
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!name ? 'invalid-field' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={user.isAuth ? 'hidden' : 'form__input-wrap'}>
              <label htmlFor="email" className="form__label">
                {t('email')}
              </label>
              <input
                id="email"
                type="email"
                className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              <p className={isEmailValid ? 'hidden' : 'auth__note'}>{t('validEmailMessage')}</p>
            </div>
            <div className="form__input-wrap">
              <label htmlFor="text" className="form__label">
                {t('text')}
              </label>
              <textarea
                id="text"
                rows="1"
                className={`input form__message ${!text ? 'invalid-field' : ''}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
              <p
                className={
                  (!isFormValid && !user.isAuth && (!name || !email || !text)) || (!isFormValid && user.isAuth && !text)
                    ? 'auth__note'
                    : 'hidden'
                }
              >
                {t('fillInAllFieldsMessage')}
              </p>
            </div>
            {requestLoading ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button className={`btn contact-us__btn ${checkIsFormValid() ? '' : 'inactive'}`}>{t('submit')}</button>
            )}
          </form>
        )}
      </div>
      <ConfirmationModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} email={email} />
    </div>
  );
};

export default ContactUs;
