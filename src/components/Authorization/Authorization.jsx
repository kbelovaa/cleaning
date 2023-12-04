import React, { useEffect, useRef, useState } from 'react';
import './Authorization.scss';

const Authorization = ({ isOpen, setIsOpen }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  const handleRegistration = () => {};

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="registration" ref={modalRef}>
        <h2 className="registration__title">Registration</h2>
        <form className="form reg-form" onSubmit={handleRegistration}>
          <div className="form__fields">
            <div className="form__field-wrap">
              <label htmlFor="firstname" className="form__label">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                className="input form__reg-field"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="lastname" className="form__label">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                className="input form__reg-field"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="email" className="form__label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="input form__reg-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="mobile" className="form__label">
                Mobile nr
              </label>
              <input
                id="mobile"
                type="tel"
                className="input form__reg-field"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="input form__reg-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
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
            <div className="form__field-wrap">
              <label htmlFor="passwordconf" className="form__label">
                Confirm password
              </label>
              <input
                id="passwordconf"
                type={showPasswordConf ? 'text' : 'password'}
                className="input form__reg-field"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
                autoComplete="off"
                required
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
      </div>
    </div>
  );
};

export default Authorization;
