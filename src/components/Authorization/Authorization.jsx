import React, { useEffect, useRef, useState } from 'react';
import googleImg from '../../images/google.png';
import appleImg from '../../images/apple.png';
import './Authorization.scss';

const Authorization = ({ isOpen, setIsOpen, isLogin, setIsLogin }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
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

  const handleAuthorization = () => {};

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className={`auth ${isLogin ? 'login' : 'reg'}`} ref={modalRef}>
        <h2 className="auth__title">{isLogin ? 'Log in' : 'Sign up'}</h2>
        <form className="form auth-form" onSubmit={handleAuthorization}>
          <div className="form__fields">
            <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input form__auth-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
              <label htmlFor="surname" className="form__label">
                Surname
              </label>
              <input
                id="surname"
                type="text"
                className="input form__auth-field"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="email" className="form__label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="input form__auth-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={isLogin ? 'hidden' : 'form__field-wrap'}>
              <label htmlFor="mobile" className="form__label">
                Mobile nr
              </label>
              <input
                id="mobile"
                type="tel"
                className="input form__auth-field"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="input form__auth-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <p className={isLogin ? 'hidden' : 'auth__note'}>
                The password must contain at least 6 characters. Use only Latin alphabet and numbers
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
              <label htmlFor="passwordconf" className="form__label">
                Confirm password
              </label>
              <input
                id="passwordconf"
                type={showPasswordConf ? 'text' : 'password'}
                className="input form__auth-field"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
                autoComplete="off"
              />
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
            Create an account
          </button>
        </form>
        <div className="auth__details">
          <p className="auth__note auth__note_socials">
            {isLogin ? 'Or log in via' : 'Or sign up via'}
          </p>
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
  );
};

export default Authorization;
