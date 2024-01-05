import React from 'react';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import 'react-phone-input-2/lib/style.css';
import './PhoneField.scss';

const PhoneField = ({ mobile, setMobile, isMobileValid, setIsMobileValid }) => {
  const ipCountry = useSelector((state) => state.user.ipCountry);

  const handleMobileChange = (value, country) => {
    setMobile(value);
    if (country.countryCode) {
      const phoneNumber = value === '' || isValidNumber(value, country.countryCode.toUpperCase());
      setIsMobileValid(!!phoneNumber);
    }
  };

  return (
    <div className="phone-field">
      <label htmlFor="mobile" className="form__label">
        Mobile nr
      </label>
      <PhoneInput
        value={mobile}
        onChange={handleMobileChange}
        country={ipCountry}
        enableSearch={true}
        inputClass={`${!ipCountry && !mobile ? 'default' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        buttonClass={`${!ipCountry && !mobile ? 'hidden' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        autoFormat
      />
      <p className={isMobileValid ? 'hidden' : 'auth__note'}>Please enter a valid mobile number.</p>
    </div>
  );
};

export default PhoneField;
