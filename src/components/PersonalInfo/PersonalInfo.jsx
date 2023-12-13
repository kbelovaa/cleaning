import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { parsePhoneNumber } from 'react-phone-number-input';
import './PersonalInfo.scss';

const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailUnique, setIsEmailUnique] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const finishFormSending = () => {
    setName('');
    setSurname('');
    setMobile('');
    setIsFormValid(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name && surname && mobile && email && isEmailValid) {
      // отправка запроса
      finishFormSending();
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

  const handleMobileChange = (value) => {
    setMobile(value);
  };

  return (
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
            <label htmlFor="mobile" className="form__label">
              Mobile nr
            </label>
            <PhoneInput
              value={mobile}
              onChange={handleMobileChange}
            />
            <input
              id="mobile"
              type="tel"
              className={`input ${!mobile ? 'invalid-field' : ''}`}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="personal-info__field-wrap">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              id="email"
              type="text"
              className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <p className={isEmailValid ? 'hidden' : 'auth__note'}>Please enter a valid email address.</p>
            <p className={isEmailUnique ? 'auth__note' : 'hidden'}>{isEmailUnique}</p>
          </div>
          <button className="btn personal-info__btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
