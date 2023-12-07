import React, { useEffect, useRef, useState } from 'react';
import './ConfirmationModal.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ isOpen, setIsOpen, isLogin, email }) => {
  const [knowingWay, setKnowingWay] = useState();

  const modalRef = useRef(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isConfirmation = pathname === '/confirmation';
  const isContactUs = pathname === '/contact-us';

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

  const handleButtonClick = () => {
    if (isLogin || isContactUs || isConfirmation) {
      setIsOpen(false);
      navigate('/');
    }
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className={`confirmation ${isLogin || isContactUs ? 'login' : isConfirmation ? 'conf' : 'reg'}`} ref={modalRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#284657" strokeLinecap="round"/>
        </svg>
        <h3 className={isConfirmation ? 'hidden' : 'confirmation__title'}>{isContactUs ? 'Thank you for your message' : isLogin ? 'Log in' : 'Sign up'}</h3>
        <p className="confirmation__text">
          {isConfirmation ? 'We have sent a Receipt to your email' : isContactUs ? 'We will reply to your email' : isLogin ? 'You are logged in with Google' : 'We have sent a confirmation to your email'}
        </p>
        <span className='confirmation__email'>{email}</span>
        {/* <div className={!isLogin && !isContactUs && !isConfirmation ? 'form__property' : 'hidden'}>
          <span className="form__label">How many bedrooms?</span>
          <CustomSelect
            options={bedrooms}
            selectedOption={cleaning.bedroomsNum}
            setSelectedOption={setBedroomsNumAction}
          />
        </div> */}
        <button className='confirmation__btn btn btn_solid' onClick={handleButtonClick}>{isLogin || isContactUs || isConfirmation ? 'Ok' : 'Go to Email'}</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
