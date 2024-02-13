import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateInfo } from '../../http/profileAPI';
import PhoneField from '../PhoneField/PhoneField';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './PersonalInfo.scss';

const PersonalInfo = () => {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailUnique, setIsEmailUnique] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.name) {
      setName(user.name);
      setSurname(user.surname);
      setMobile(`+${user.mobile}`);
      setEmail(user.email);
    }
  }, [user]);

  const checkIsFormValid = () => {
    if (name && surname && mobile && isMobileValid && email && isEmailValid && !isEmailUnique) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setLoading(true);
      const result = await updateInfo(user.id, name, surname, mobile, email);
      if (result.status === 201) {
        setLoading(false);
        setIsFormValid(true);
        setIsConfirmationOpen(true);
      } else if (result.message) {
        setLoading(false);
        setIsFormValid(false);
        setIsEmailUnique(result.message);
      }
    } else {
      setIsFormValid(false);
    }
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    setIsEmailUnique('');

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  return (
    <>
      <div className="container">
        <div className="profile">
          <h2 className="profile__title">Personal info</h2>
          <form className={`personal-info__form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="personal-info__field-wrap">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!name ? 'invalid-field' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="personal-info__field-wrap">
              <label htmlFor="surname" className="form__label">
                Surname
              </label>
              <input
                id="surname"
                type="text"
                className={`input ${!surname ? 'invalid-field' : ''}`}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="personal-info__field-wrap">
              <PhoneField
                mobile={mobile}
                setMobile={setMobile}
                isMobileValid={isMobileValid}
                setIsMobileValid={setIsMobileValid}
              />
              <p className={!isFormValid && (!name || !surname || !email || !mobile) ? 'auth__note' : 'hidden'}>
                Please fill in all fields
              </p>
            </div>
            <div className="personal-info__field-wrap">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                id="email"
                type="text"
                className={`input ${!email || !isEmailValid || isEmailUnique ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              <p className={isEmailValid ? 'hidden' : 'auth__note'}>Please enter a valid email address.</p>
              <p className={isEmailUnique ? 'auth__note' : 'hidden'}>{isEmailUnique}</p>
            </div>
            {loading ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button className={`btn personal-info__btn ${checkIsFormValid() ? '' : 'inactive'}`}>Save</button>
            )}
          </form>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        setIsOpen={setIsConfirmationOpen}
        isLogin={false}
        email={email}
        isNewEmail={email !== user.email}
      />
    </>
  );
};

export default PersonalInfo;
