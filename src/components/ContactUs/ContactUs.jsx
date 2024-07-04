import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/selectOptions';
import saveContactRequest from '../../http/contactAPI';
import PhoneField from '../PhoneField/PhoneField';
import CustomSelect from '../CustomSelect/CustomSelect';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './ContactUs.scss';

const ContactUs = ({ loading }) => {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [contactForm, setContactForm] = useState('');
  const [language, setLanguage] = useState('English');
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

  useEffect(() => {
    if (contactForm === 'Email' && email === '') {
      setContactForm('');
    }
  }, [email]);

  useEffect(() => {
    if ((contactForm === 'Phone call' || contactForm === 'WhatsApp' || contactForm === 'Viber') && mobile === '') {
      setContactForm('');
    }
  }, [mobile]);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const handleContactFormChange = (contactForm) => {
    if (!user.isAuth && ((contactForm === 'Email' && !email) || (contactForm !== 'Email' && !mobile))) {
      return;
    }

    setContactForm(contactForm);
  };

  const checkIsFormValid = () => {
    if (user.isAuth) {
      if (contactForm) {
        return true;
      }
    } else if (
      name &&
      ((contactForm === 'Email' && email && isEmailValid) ||
        ((contactForm === 'Phone call' || contactForm === 'WhatsApp' || contactForm === 'Viber') &&
          mobile &&
          isMobileValid))
    ) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let result;

    if (user.isAuth) {
      if (checkIsFormValid()) {
        setRequestLoading(true);
        result = await saveContactRequest(user.name, user.email, user.mobile, contactForm, language, text);
      } else {
        setIsFormValid(false);
        return;
      }
    } else if (checkIsFormValid()) {
      setRequestLoading(true);
      result = await saveContactRequest(name, email, mobile, contactForm, language, text);
    } else {
      setIsFormValid(false);
      return;
    }

    if (result.status === 201) {
      setRequestLoading(false);
      setIsConfirmationOpen(true);
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
                className={`input ${mobile === '' && (!email || !isEmailValid) ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              <p className={isEmailValid ? 'hidden' : 'auth__note'}>{t('validEmailMessage')}</p>
            </div>
            <div className={user.isAuth ? 'hidden' : 'form__input-wrap'}>
              <PhoneField
                mobile={mobile}
                setMobile={setMobile}
                isMobileValid={isMobileValid}
                setIsMobileValid={setIsMobileValid}
                isOptional={contactForm === 'Email' && email !== ''}
              />
            </div>
            <div className="form__input-wrap form__input-wrap_contact">
              <span className="form__label">{t('selectContactForm')}</span>
              <div className={`form__contact-options ${contactForm === '' ? 'empty' : ''}`}>
                <span
                  className={`form__contact-option ${
                    !user.isAuth && !email ? 'disabled' : contactForm === 'Email' ? 'checked' : ''
                  }`}
                  onClick={() => handleContactFormChange('Email')}
                >
                  {t('email')}
                </span>
                <span
                  className={`form__contact-option ${
                    !user.isAuth && !mobile ? 'disabled' : contactForm === 'Phone call' ? 'checked' : ''
                  }`}
                  onClick={() => handleContactFormChange('Phone call')}
                >
                  {t('phoneCall')}
                </span>
                <span
                  className={`form__contact-option ${
                    !user.isAuth && !mobile ? 'disabled' : contactForm === 'WhatsApp' ? 'checked' : ''
                  }`}
                  onClick={() => handleContactFormChange('WhatsApp')}
                >
                  WhatsApp
                </span>
                <span
                  className={`form__contact-option ${
                    !user.isAuth && !mobile ? 'disabled' : contactForm === 'Viber' ? 'checked' : ''
                  }`}
                  onClick={() => handleContactFormChange('Viber')}
                >
                  Viber
                </span>
              </div>
            </div>
            <div className="form__input-wrap form__input-wrap_language">
              <span className="form__label">{t('language')}</span>
              <CustomSelect options={languages} selectedOption={language} setSelectedOption={setLanguage} />
            </div>
            <div className="form__input-wrap">
              <label htmlFor="text" className="form__label">
                {t('text')}
              </label>
              <textarea
                id="text"
                rows="1"
                className="input form__message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
              <p
                className={
                  (!isFormValid &&
                    !user.isAuth &&
                    (!name ||
                      !contactForm ||
                      (contactForm === 'Email' && !email) ||
                      ((contactForm === 'Phone call' || contactForm === 'WhatsApp' || contactForm === 'Viber') &&
                        !mobile))) ||
                  (!isFormValid && user.isAuth && !contactForm)
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
      <ConfirmationModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} contactWay={contactForm} />
    </div>
  );
};

export default ContactUs;
