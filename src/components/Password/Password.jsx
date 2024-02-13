import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changePassword } from '../../http/profileAPI';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Password.scss';

const Password = () => {
  const user = useSelector((state) => state.user);

  const [currentPassword, setCurrentPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [isCurrentPasswordCorrect, setIsCurrentPasswordCorrect] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [confPassword, setConfPassword] = useState('');
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [isConfPasswordValid, setIsConfPasswordValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleCurrentPasswordChange = (password) => {
    setIsCurrentPasswordCorrect('');
    setCurrentPassword(password);
  };

  const handleNewPasswordChange = (password) => {
    setNewPassword(password);

    const isPasswordValid = password === '' || /^[A-Za-z0-9]{6,}$/.test(password);
    setIsNewPasswordValid(isPasswordValid);

    const isPasswordConfValid = confPassword === '' || confPassword === password;
    setIsConfPasswordValid(isPasswordConfValid);
  };

  const handleConfPasswordChange = (passwordConf) => {
    setConfPassword(passwordConf);

    const isPasswordConfValid = passwordConf === '' || passwordConf === newPassword;
    setIsConfPasswordValid(isPasswordConfValid);
  };

  const checkIsFormValid = () => {
    if (
      currentPassword &&
      !isCurrentPasswordCorrect &&
      newPassword &&
      isNewPasswordValid &&
      confPassword &&
      isConfPasswordValid
    ) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setLoading(true);
      const result = await changePassword(user.id, currentPassword, newPassword);
      if (result.message) {
        setLoading(false);
        setIsCurrentPasswordCorrect(result.message);
        setIsFormValid(false);
      } else if (result.status === 201) {
        setLoading(false);
        setIsConfirmationOpen(true);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="password">
          <h2 className="password__title">Settings</h2>
          <form className={`password__form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="form__field-wrap">
              <label htmlFor="current-password" className="form__label">
                Current password
              </label>
              <input
                id="current-password"
                type={showCurrentPassword ? 'text' : 'password'}
                className={`input ${!currentPassword || isCurrentPasswordCorrect ? 'invalid-field' : ''}`}
                value={currentPassword}
                onChange={(e) => handleCurrentPasswordChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isCurrentPasswordCorrect ? 'auth__note' : 'hidden'}>{isCurrentPasswordCorrect}</p>
              <span
                className={showCurrentPassword ? 'hidden' : 'form__eye'}
                onClick={() => setShowCurrentPassword(true)}
              >
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
              <span
                className={showCurrentPassword ? 'form__eye' : 'hidden'}
                onClick={() => setShowCurrentPassword(false)}
              >
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
              <label htmlFor="new-password" className="form__label">
                New password
              </label>
              <input
                id="new-password"
                type={showNewPassword ? 'text' : 'password'}
                className={`input ${!newPassword || !isNewPasswordValid ? 'invalid-field' : ''}`}
                value={newPassword}
                onChange={(e) => handleNewPasswordChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isNewPasswordValid ? 'hidden' : 'auth__note'}>{t('passwordRequirements')}</p>
              <span className={showNewPassword ? 'hidden' : 'form__eye'} onClick={() => setShowNewPassword(true)}>
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
              <span className={showNewPassword ? 'form__eye' : 'hidden'} onClick={() => setShowNewPassword(false)}>
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
              <label htmlFor="conf-password" className="form__label">
                Confirm new password
              </label>
              <input
                id="conf-password"
                type={showConfPassword ? 'text' : 'password'}
                className={`input ${!confPassword || !isConfPasswordValid ? 'invalid-field' : ''}`}
                value={confPassword}
                onChange={(e) => handleConfPasswordChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isConfPasswordValid ? 'hidden' : 'auth__note'}>{t('confPasswordMessage')}</p>
              <span className={showConfPassword ? 'hidden' : 'form__eye'} onClick={() => setShowConfPassword(true)}>
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
              <span className={showConfPassword ? 'form__eye' : 'hidden'} onClick={() => setShowConfPassword(false)}>
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
              <p
                className={
                  !isFormValid && (!currentPassword || !newPassword || !confPassword) ? 'auth__note' : 'hidden'
                }
              >
                {t('fillInAllFieldsMessage')}
              </p>
            </div>
          </form>
          {loading ? (
            <div className="spinner spinner_small"></div>
          ) : (
            <button className={`btn password__btn ${checkIsFormValid() ? '' : 'inactive'}`} onClick={handleFormSubmit}>
              {t('save')}
            </button>
          )}
        </div>
      </div>
      <ConfirmationModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} isLogin={false} />
    </>
  );
};

export default Password;
