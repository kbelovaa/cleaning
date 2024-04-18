import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { rateCleaning } from '../../http/notificationsAPI';
import './RateWindow.scss';

const RateWindow = ({ isOpen, setIsOpen, jobId, setNotifications }) => {
  const [rate, setRate] = useState(0);
  const [isHoveredIndex, setIsHoveredIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const modalRef = useRef(null);

  const { t } = useTranslation();

  const closeRateWindow = () => {
    setIsOpen(false);
    setRate(0);
    setIsHoveredIndex(0);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeRateWindow();
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

  const handleMouseOver = (index) => {
    setIsHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setIsHoveredIndex(0);
  };

  const handleRating = async () => {
    if (rate) {
      setLoading(true);
      const result = await rateCleaning(jobId, rate);
      if (result.status === 201) {
        setNotifications((notifications) =>
          notifications.map((elem) => {
            if (elem.jobId === jobId) {
              return { ...elem, isRated: true };
            }
            return elem;
          }),
        );
        setLoading(false);
        closeRateWindow();
      }
    }
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="rate" ref={modalRef}>
        <div className="rate__close" onClick={closeRateWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M22.071 22.0712L7.92886 7.92905" stroke="#268664" strokeLinecap="round" />
            <path d="M22.0711 7.92905L7.929 22.0712" stroke="#268664" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="rate__title">{t('howHappy')}</h3>
        <div className="rate__stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className={`rate__star ${
                isHoveredIndex !== 0 && index + 1 <= isHoveredIndex
                  ? 'hovered'
                  : rate !== 0 && isHoveredIndex === 0 && index + 1 <= rate
                  ? 'selected'
                  : ''
              }`}
              key={index}
              onClick={() => setRate(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseOut={handleMouseOut}
            ></div>
          ))}
        </div>
        {loading ? (
          <div className="spinner spinner_small"></div>
        ) : (
          <button className={`btn btn_solid ${rate ? '' : 'inactive'}`} onClick={handleRating}>
            {t('rateIt')}
          </button>
        )}
      </div>
    </div>
  );
};

export default RateWindow;
