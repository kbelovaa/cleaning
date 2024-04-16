import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setIsAuthAction, setUserAction } from '../../store/actions/userActions';
import { signIn, signUp } from '../../http/authAPI';
import googleImg from '../../images/google.png';
import appleImg from '../../images/apple.png';
import PhoneField from '../PhoneField/PhoneField';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Authorization.scss';

const Authorization = ({ isOpen, setIsOpen, isLogin, setIsLogin }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailUnique, setIsEmailUnique] = useState('');
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordConf, setPasswordConf] = useState('');
  const [isPasswordConfValid, setIsPasswordConfValid] = useState(true);
  const [areCredentialsValid, setAreCredentialsValid] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);

  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const closeModal = () => {
    setIsOpen(false);
    setIsFormValid(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
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

  const finishFormSending = () => {
    setIsOpen(false);
    setName('');
    setSurname('');
    setEmail('');
    setIsEmailValid(true);
    setIsEmailUnique('');
    setMobile('');
    setIsMobileValid(true);
    setPassword('');
    setIsPasswordValid(false);
    setPasswordConf('');
    setIsPasswordConfValid(true);
    setAreCredentialsValid('');
    setIsFormValid(true);
  };

  const handleAuth = (result) => {
    finishFormSending();
    dispatch(setIsAuthAction(true));
    dispatch(setUserAction(result));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (email && password) {
        setLoading(true);
        const result = await signIn(email.toLowerCase(), password);
        if (result.message) {
          setAreCredentialsValid(result.message);
          setIsFormValid(false);
          setLoading(false);
        } else {
          setLoading(false);
          handleAuth(result);
        }
      } else {
        setIsFormValid(false);
      }
    } else if (
      name &&
      surname &&
      email &&
      isEmailValid &&
      mobile &&
      isMobileValid &&
      password &&
      isPasswordValid &&
      passwordConf &&
      isPasswordConfValid
    ) {
      setLoading(true);
      const result = await signUp(name, surname, email.toLowerCase(), mobile, password);
      if (result.message && result.error) {
        setIsEmailUnique(result.message);
        setIsFormValid(false);
        setLoading(false);
      } else {
        setLoading(false);
        handleAuth(result);
        setIsConfirmationOpen(true);
      }
    } else {
      setIsFormValid(false);
    }
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    setIsEmailUnique('');
    setAreCredentialsValid('');

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    setAreCredentialsValid('');

    const isPasswordValid = password === '' || /^[A-Za-z0-9]{6,}$/.test(password);
    setIsPasswordValid(isPasswordValid);

    const isPasswordConfValid = passwordConf === '' || passwordConf === password;
    setIsPasswordConfValid(isPasswordConfValid);
  };

  const handlePasswordConfChange = (passwordConf) => {
    setPasswordConf(passwordConf);

    const isPasswordConfValid = passwordConf === '' || passwordConf === password;
    setIsPasswordConfValid(isPasswordConfValid);
  };

  const checkIsFormValid = () => {
    if (isLogin) {
      if (email && password) {
        return true;
      }
    } else if (
      name &&
      surname &&
      email &&
      isEmailValid &&
      mobile &&
      isMobileValid &&
      password &&
      isPasswordValid &&
      passwordConf &&
      isPasswordConfValid
    ) {
      return true;
    }

    return false;
  };

  const switchAuth = (value) => {
    setIsLogin(value);
    setIsFormValid(true);
    setIsEmailUnique('');
  };

  return (
    <>
      <div className={`modal ${isOpen ? 'active' : ''}`}>
        <div className={`auth ${isLogin ? 'login' : 'reg'}`} ref={modalRef}>
          <svg
            className="auth__close"
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path d="M22.0712 22.0709L7.9291 7.92881" stroke="#268664" strokeLinecap="round" />
            <path d="M22.0709 7.92881L7.92876 22.0709" stroke="#268664" strokeLinecap="round" />
          </svg>
          <h2 className="auth__title">{isLogin ? t('logIn') : t('signUp')}</h2>
          <form className={`form auth-form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="form__fields">
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <label htmlFor="auth-name" className="form__label">
                  {t('name')}
                </label>
                <input
                  id="auth-name"
                  type="text"
                  className={`input ${!name ? 'invalid-field' : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <label htmlFor="auth-surname" className="form__label">
                  {t('surname')}
                </label>
                <input
                  id="auth-surname"
                  type="text"
                  className={`input ${!surname ? 'invalid-field' : ''}`}
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="form__field-wrap">
                <label htmlFor="auth-email" className="form__label">
                  {t('email')}
                </label>
                <input
                  id="auth-email"
                  type="text"
                  className={`input ${
                    !email ||
                    (!isLogin && !isEmailValid) ||
                    isEmailUnique ||
                    (areCredentialsValid !== '' && areCredentialsValid !== 'Incorrect password')
                      ? 'invalid-field'
                      : ''
                  }`}
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isLogin ? 'hidden' : isEmailValid ? 'hidden' : 'auth__note'}>{t('validEmailMessage')}</p>
                {isEmailUnique && (
                  <p className="auth__note">{`${t('userWithEmail')} ${email} ${t(
                    isEmailUnique.split(email)[1].trim(),
                  )}`}</p>
                )}
              </div>
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <PhoneField
                  mobile={mobile}
                  setMobile={setMobile}
                  isMobileValid={isMobileValid}
                  setIsMobileValid={setIsMobileValid}
                />
              </div>
              <div className="form__field-wrap">
                <label htmlFor="auth-password" className="form__label">
                  {t('password')}
                </label>
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  className={`input ${
                    !password || (!isLogin && !isPasswordValid) || areCredentialsValid === 'Incorrect password'
                      ? 'invalid-field'
                      : ''
                  }`}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isLogin ? 'hidden' : isPasswordValid ? 'hidden' : 'auth__note'}>
                  {t('passwordRequirements')}
                </p>
                {areCredentialsValid && (
                  <p className={!isLogin ? 'hidden' : 'auth__note'}>
                    {areCredentialsValid === 'Incorrect password'
                      ? t('incorrectPassword')
                      : `${t('userWithEmail')} ${email} ${t(areCredentialsValid.split(email)[1].trim())}`}
                  </p>
                )}
                <span className={showPassword ? 'hidden' : 'form__eye'} onClick={() => setShowPassword(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                      stroke="#3A3A3A"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                    <path d="M3 21L20 4" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={showPassword ? 'form__eye' : 'hidden'} onClick={() => setShowPassword(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                      stroke="#3A3A3A"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <label htmlFor="auth-passwordconf" className="form__label">
                  {t('confPassword')}
                </label>
                <input
                  id="auth-passwordconf"
                  type={showPasswordConf ? 'text' : 'password'}
                  className={`input ${!passwordConf || !isPasswordConfValid ? 'invalid-field' : ''}`}
                  value={passwordConf}
                  onChange={(e) => handlePasswordConfChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isPasswordConfValid ? 'hidden' : 'auth__note'}>{t('confPasswordMessage')}</p>
                <span className={showPasswordConf ? 'hidden' : 'form__eye'} onClick={() => setShowPasswordConf(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                      stroke="#3A3A3A"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                    <path d="M3 21L20 4" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={showPasswordConf ? 'form__eye' : 'hidden'} onClick={() => setShowPasswordConf(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"
                      stroke="#3A3A3A"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#3A3A3A" strokeOpacity="0.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
            <p
              className={
                !isFormValid &&
                ((!isLogin && (!name || !surname || !email || !mobile || !password || !passwordConf)) ||
                  (isLogin && (!email || !password)))
                  ? 'auth__note auth__fill'
                  : 'hidden'
              }
            >
              {t('fillInAllFieldsMessage')}
            </p>
            {loading ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button className={`btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                {isLogin ? t('logIn') : t('createAccount')}
              </button>
            )}
          </form>
          <div className="auth__details">
            <p className="auth__note auth__note_socials">{isLogin ? t('orLogInVia') : t('orSignUpVia')}</p>
            <div className="auth__socials">
              <img src={googleImg} alt="Google" className="auth__social" />
              <img src={appleImg} alt="Apple" className="auth__social" />
            </div>
            {isLogin ? (
              <p className="auth__note auth__note_account">
                {t('iDontHaveAccount')} <a onClick={() => switchAuth(false)}>{t('signUp')}</a>
              </p>
            ) : (
              <p className="auth__note auth__note_account">
                {t('iHaveAccount')} <a onClick={() => switchAuth(true)}>{t('logIn')}</a>
              </p>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        setIsOpen={setIsConfirmationOpen}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default Authorization;
