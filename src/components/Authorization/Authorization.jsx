import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthAction } from '../../store/actions/userActions';
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

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);

  const modalRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsFormValid(true);
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
    setIsConfirmationOpen(true);
    setName('');
    setSurname('');
    setMobile('');
    setPassword('');
    setIsPasswordValid(false);
    setPasswordConf('');
    setIsFormValid(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (email && password) {
        // const result = await login(email, password);
        // if (result.error) {
        //   setAreCredentialsValid(result.error.message);
        //   setIsFormValid(false);
        // } else {
        //   setIsModalOpen(true);
        //   handleAuth();
        // }
        finishFormSending();
        dispatch(setIsAuthAction(true));
      } else {
        setIsFormValid(false);
      }
    } else if (
      name &&
      surname &&
      email &&
      isEmailValid &&
      mobile &&
      password &&
      isPasswordValid &&
      passwordConf &&
      isPasswordConfValid
    ) {
      // const result = await registration(name, surname, email, mobile, password);
      // if (result.error) {
      //   setIsEmailUnique(result.error.message);
      //   setIsFormValid(false);
      // } else {
      //   setIsModalOpen(true);
      //   handleAuth();
      // }
      finishFormSending();
      dispatch(setIsAuthAction(true));
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

    const isPasswordValid = /^[A-Za-z0-9]{6,}$/.test(password);
    setIsPasswordValid(isPasswordValid);

    const isPasswordConfValid = passwordConf === '' || passwordConf === password;
    setIsPasswordConfValid(isPasswordConfValid);
  };

  const handlePasswordConfChange = (passwordConf) => {
    setPasswordConf(passwordConf);

    const isPasswordConfValid = passwordConf === '' || passwordConf === password;
    setIsPasswordConfValid(isPasswordConfValid);
  };

  return (
    <>
      <div className={`modal ${isOpen ? 'active' : ''}`}>
        <div className={`auth ${isLogin ? 'login' : 'reg'}`} ref={modalRef}>
          <h2 className="auth__title">{isLogin ? 'Log in' : 'Sign up'}</h2>
          <form className={`form auth-form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="form__fields">
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <label htmlFor="auth-name" className="form__label">
                  Name
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
                  Surname
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
                  Email address
                </label>
                <input
                  id="auth-email"
                  type="text"
                  className={`input ${!email || !isEmailValid || isEmailUnique ? 'invalid-field' : ''}`}
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isLogin ? 'hidden' : isEmailValid ? 'hidden' : 'auth__note'}>
                  Please enter a valid email address.
                </p>
                <p className={isEmailUnique ? 'auth__note' : 'hidden'}>{isEmailUnique}</p>
              </div>
              <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
                <PhoneField mobile={mobile} setMobile={setMobile} isMobileValid={isMobileValid} setIsMobileValid={setIsMobileValid} />
              </div>
              <div className="form__field-wrap">
                <label htmlFor="auth-password" className="form__label">
                  Password
                </label>
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  className={`input ${!password || !isPasswordValid ? 'invalid-field' : ''}`}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isLogin ? 'hidden' : isPasswordValid ? 'hidden' : 'auth__note'}>
                  The password must contain at least 6 characters. Use only Latin alphabet and numbers
                </p>
                <p className={!isLogin ? 'hidden' : areCredentialsValid ? 'auth__note' : 'hidden'}>
                  {areCredentialsValid}
                </p>
                <p
                  className={
                    !isFormValid && (!name || !surname || !email || !mobile || !password || !passwordConf)
                      ? 'auth__note'
                      : 'hidden'
                  }
                >
                  Please fill in all fields
                </p>
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
                  Confirm password
                </label>
                <input
                  id="auth-passwordconf"
                  type={showPasswordConf ? 'text' : 'password'}
                  className={`input ${!passwordConf || !isPasswordConfValid ? 'invalid-field' : ''}`}
                  value={passwordConf}
                  onChange={(e) => handlePasswordConfChange(e.target.value)}
                  autoComplete="off"
                />
                <p className={isPasswordConfValid ? 'hidden' : 'auth__note'}>
                  Password and Confirm Password must match.
                </p>
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
            <button className="btn" type="submit">
              {isLogin ? 'Log in' : 'Create an account'}
            </button>
          </form>
          <div className="auth__details">
            <p className="auth__note auth__note_socials">{isLogin ? 'Or log in via' : 'Or sign up via'}</p>
            <div className="auth__socials">
              <img src={googleImg} alt="Google" className="auth__social" />
              <img src={appleImg} alt="Apple" className="auth__social" />
            </div>
            {isLogin ? (
              <p className="auth__note auth__note_account">
                I do not have an account. Go to <a onClick={() => setIsLogin(false)}>Sign up</a>
              </p>
            ) : (
              <p className="auth__note auth__note_account">
                I have an account. Go to <a onClick={() => setIsLogin(true)}>Log in</a>
              </p>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        setIsOpen={setIsConfirmationOpen}
        isLogin={isLogin}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default Authorization;
