import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { roundPrice } from '../../../utils/calculatePrice';
import { formatDate, getDateFromDateObject, getPaymentDate } from '../../../utils/formatDate';
import edit from '../../../images/edit.png';
import './ScheduleOrder.scss';

const ScheduleOrder = ({ order, isCompleted }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActionWindowOpen, setIsActionWindowOpen] = useState(false);

  const windowRef = useRef();
  const ellipsisRef = useRef();

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (windowRef.current && !windowRef.current.contains(e.target) && ellipsisRef.current && !ellipsisRef.current.contains(e.target)) {
        setIsActionWindowOpen(false);
      }
    };

    if (isActionWindowOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActionWindowOpen]);

  const handleToggle = () => {
    setIsExpanded((state) => !state);
  };

  const handleEllipsisClick = (e) => {
    e.stopPropagation();
    setIsActionWindowOpen((state) => !state);
  };

  const handleActionsClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`order-card ${isExpanded ? 'expanded' : ''}`} onClick={handleToggle}>
      <div className="order-card__info">
        <div className="order-card__title">
          <div className="order-card__title-wrap">
            <svg
              className={isExpanded ? 'arrow rotated' : 'arrow'}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M6 10L12 16L18 10" stroke="#000000" strokeLinecap="round" />
            </svg>
            <h3 className="order-card__type">{t(order.serviceType.type)}</h3>
          </div>
          <div className="order-card__price">
            {isExpanded && (
              <span className="order-card__price-sum">{`€${roundPrice(
                order.orderPriceId.cleaningSum * order.orderPriceId.timeCoeff,
              )}`}</span>
            )}
            {!isCompleted && (
              <div className="order-card__actions">
                <div className="ellipsis" ref={ellipsisRef} onClick={handleEllipsisClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                      stroke="#268664"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
                      stroke="#268664"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
                      stroke="#268664"
                    />
                  </svg>
                </div>
                {isActionWindowOpen && (
                  <div ref={windowRef} className="order-card__actions-window" onClick={handleActionsClick}>
                    <span className="order-card__action">
                      <div className="total-summary__edit-wrap">
                        <img className="total-summary__edit" src={edit} alt="Edit" />
                      </div>
                      {t('edit')}
                    </span>
                    <span className="order-card__action">
                      <div className="total-summary__edit-wrap">
                        <svg
                          className="total-summary__edit"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M19 6H5" stroke="#268664" strokeLinecap="round" />
                          <path d="M14 5H10" stroke="#268664" strokeLinecap="round" />
                          <path d="M6 10V21H18C18 20 18 10 18 10" stroke="#268664" strokeLinecap="round" />
                        </svg>
                      </div>
                      {t('cancel')}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <p className="order-card__data">
          {`${formatDate(getDateFromDateObject(order.date))
            .split(', ')
            .map((elem, index) => {
              if (index === 1) {
                return t(elem).slice(0, 3);
              }
              return elem;
            })
            .join(', ')}, ${order.time}`}
        </p>
        <div className="order-card__short">
          <p className="order-card__extras">
            {order.extraServices
              .reduce((acc, curr) => acc + `${t(curr.type)}${curr.count > 1 ? ` (x${curr.count})` : ''}, `, '')
              .slice(0, -2)}
          </p>
        </div>
      </div>
      <div className="order-card__content">
        {order.extraServices.length !== 0 && (
          <div className="order-card__services">
            <span className="order-card__line">{t('extraServices')}:</span>
            <div className="order-card__extras-list">
              {order.extraServices.map((service, index) => (
                <div key={index} className="order-card__line">
                  <span>{`${t(service.type)}${service.count > 1 ? ` (x${service.count})` : ''}`}</span>
                  <span>{`€${roundPrice(service.price * service.count * order.orderPriceId.timeCoeff)}`}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {order.howFast !== 'x1' && (
          <div className="order-card__line">
            <span>{`${t('howFast')} (${order.howFast})`}</span>
            <span>{`€${roundPrice(order.orderPriceId.speedSum)}`}</span>
          </div>
        )}
        {order.specialInstructions && (
          <div className="order-card__line">
            <p className="order-card__instructions">{order.specialInstructions}</p>
          </div>
        )}
        <div className="order-card__line">
          <span>{t('subtotal')}</span>
          <span>{`€${roundPrice(order.orderPriceId.subtotalSum)}`}</span>
        </div>
        <div className="order-card__line">
          <span>{`${t('iva')} ${order.orderPriceId.taxPercent}%`}</span>
          <span>{`€${roundPrice(order.orderPriceId.tax)}`}</span>
        </div>
        <div className="order-card__line">
          <span className="order-card__value">
            {(order.paymentStatus === 'Sum is reserved' || order.paymentStatus === 'Paid') && (
              <svg
                className="total-summary__tick"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20 7L9 18L4 13"
                  stroke="#268664"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="total-summary__status">
              {order.paymentStatus === 'Sum is reserved' || order.paymentStatus === 'Paid'
                ? `${t('paid')}${` (${getDateFromDateObject(order.paymentReservationDate)})`}`
                : t('total')}
              <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
                {`(${t('tariff')} ${order.orderPriceId.tariffNumber})`}
              </span>
            </span>
          </span>
          <span className="order-card__value">{`€${roundPrice(order.orderPriceId.totalSum)}`}</span>
        </div>
        {order.paymentStatus === 'Not paid' && (
          <p className="cleaning__payment">
            {`${t('toBePaid')} ${formatDate(getDateFromDateObject(getPaymentDate(order.date)))
              .split(', ')
              .map((elem, index) => {
                if (index === 1) {
                  return t(elem).slice(0, 3);
                }
                return elem;
              })
              .join(', ')}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default ScheduleOrder;
