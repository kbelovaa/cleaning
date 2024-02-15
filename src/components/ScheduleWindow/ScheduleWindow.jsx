import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { roundPrice } from '../../utils/calculatePrice';
import 'react-perfect-scrollbar/dist/css/styles.css';
import formatDate from '../../utils/formatDate';
import './ScheduleWindow.scss';

const ScheduleWindow = ({
  isOpen,
  setIsOpen,
  repeat,
  duration,
  dates,
  time,
  subscriptionPrices,
  selectedCleaning,
  selectedServices,
  cleaningSum,
  selectedSpeed,
  speedSum,
  ivaPercent,
}) => {
  const modalRef = useRef(null);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const isCustom = repeat === 'Custom schedule';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      const scrollbar = document.getElementsByClassName('scrollbar-container')[0];
      scrollbar.scrollTop = 1;
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="schedule" ref={modalRef}>
        <svg
          className="schedule__close"
          onClick={() => setIsOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M23.5425 23.5424L8.45758 8.45746" stroke="#268664" strokeLinecap="round" />
          <path d="M23.5424 8.45746L8.45747 23.5424" stroke="#268664" strokeLinecap="round" />
        </svg>
        <h3 className="schedule__title">{t('schedule')}</h3>
        <PerfectScrollbar
          options={{
            wheelPropagation: false,
            autoHide: false,
          }}
        >
          <div className="schedule__wrap">
            {dates.map((date, index) => (
              <div className="schedule__cleaning" key={index}>
                <span className="schedule__date">
                  {isCustom
                    ? date.date.replace(/\D/g, '').length === 8 &&
                      `${formatDate(date.date)
                        .split(', ')
                        .map((elem, index) => {
                          if (index === 1) {
                            return t(elem).slice(0, 3);
                          }
                          return elem;
                        })
                        .join(', ')}, ${date.time}`
                    : `${formatDate(date)
                        .split(', ')
                        .map((elem, index) => {
                          if (index === 1) {
                            return t(elem).slice(0, 3);
                          }
                          return elem;
                        })
                        .join(', ')}, ${time}`}
                </span>
                <div className="summary__line summary__line_bold">
                  <span className="summary__subtitle">{t(selectedCleaning.type)}</span>
                  <span className="summary__price">{`€${
                    isCustom
                      ? roundPrice(cleaningSum * date.timeCoeff)
                      : subscriptionPrices.length === Number(duration) && Number(duration) !== 0 &&
                        roundPrice(cleaningSum * subscriptionPrices[dates.indexOf(date)].timeCoeff)
                  }`}</span>
                </div>
                <div className={selectedServices.length !== 0 ? 'summary__line summary__line_list' : 'hidden'}>
                  <span className="summary__item">{t('extraServices')}:</span>
                </div>
                <div className={selectedServices.length !== 0 ? 'summary__extras' : 'hidden'}>
                  {selectedServices.map((service, index) => {
                    const serviceNumber = selectedServices.find(
                      (selectedService) => selectedService.type === service.type,
                    ).count;
                    return (
                      <div key={index} className="summary__line summary__line_list">
                        <span className="summary__item">{`${t(service.type)}${
                          serviceNumber > 1 ? ` (x${serviceNumber})` : ''
                        }`}</span>
                        <span className="summary__price">{`€${
                          isCustom
                            ? roundPrice(service.price * serviceNumber * date.timeCoeff)
                            : subscriptionPrices.length === Number(duration) && Number(duration) !== 0 &&
                              roundPrice(
                                service.price * serviceNumber * subscriptionPrices[dates.indexOf(date)].timeCoeff,
                              )
                        }`}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={speedSum !== 0 ? 'summary__line' : 'hidden'}>
                  <span className="summary__item">{`${t('howFast')} (${selectedSpeed})`}</span>
                  <span className="summary__price">{`€${roundPrice(speedSum)}`}</span>
                </div>
                <div className="summary__line summary__line_subtotal">
                  <span className="summary__item">{t('subtotal')}</span>
                  <span className="summary__price">
                    {`€${
                      isCustom
                        ? roundPrice(date.subtotal)
                        : subscriptionPrices.length === Number(duration) && Number(duration) !== 0
                        ? roundPrice(subscriptionPrices[dates.indexOf(date)].subtotal)
                        : 0
                    }`}
                  </span>
                </div>
                <div className="summary__line">
                  <span className="summary__item">{`${t('iva')} ${ivaPercent}%`}</span>
                  <span className="summary__price">
                    {`€${
                      isCustom
                        ? roundPrice(date.iva)
                        : subscriptionPrices.length === Number(duration) && Number(duration) !== 0
                        ? roundPrice(subscriptionPrices[dates.indexOf(date)].iva)
                        : 0
                    }`}
                  </span>
                </div>
                <div className="summary__line summary__line_bold">
                  <span className="summary__subtitle">
                    {t('total')}
                    <span className="link schedule__tariff" onClick={() => navigate('/info-price')}>
                      {`(${t('tariff')} ${
                        isCustom
                          ? date.tariff
                          : subscriptionPrices.length === Number(duration) && Number(duration) !== 0
                          ? subscriptionPrices[dates.indexOf(date)].tariff
                          : 1
                      })`}
                    </span>
                  </span>
                  <span className="summary__price">
                    {`€${
                      isCustom
                        ? roundPrice(date.total)
                        : subscriptionPrices.length === Number(duration) && Number(duration) !== 0
                        ? roundPrice(subscriptionPrices[dates.indexOf(date)].total)
                        : 0
                    }`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default ScheduleWindow;
