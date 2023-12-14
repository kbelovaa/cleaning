import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import 'react-phone-input-2/lib/style.css';
import './PhoneField.scss';

const PhoneField = ({ mobile, setMobile, isMobileValid, setIsMobileValid }) => {
  const [ipCountry, setIpCountry] = useState('');

  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        setIpCountry(countryCode.toLowerCase());
      } catch {
        setIpCountry('');
      }
    };

    getCountryFromIP();
  }, []);

  const handleMobileChange = (value, country) => {
    setMobile(value);
    if (country.countryCode) {
      const phoneNumber = isValidNumber(value, country.countryCode.toUpperCase());
      setIsMobileValid(!!phoneNumber);
    }
  };

  return (
    <div className='phone-field'>
      <label htmlFor="mobile" className="form__label">
        Mobile nr
      </label>
      <PhoneInput
        value={mobile}
        onChange={handleMobileChange}
        country={ipCountry}
        enableSearch={true}
        inputClass={!mobile || !isMobileValid ? 'invalid-field' : ''}
        buttonClass={!mobile || !isMobileValid ? 'invalid-field' : ''}
        autoFormat
      />
      <p className={isMobileValid ? 'hidden' : 'auth__note'}>Please enter a valid mobile number.</p>
    </div>
  );
};

export default PhoneField;
