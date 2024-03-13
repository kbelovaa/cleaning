import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { roundPrice } from '../../../utils/calculatePrice';
import { formatDate, getDateFromDateObject } from '../../../utils/formatDate';
import edit from '../../../images/edit.png';
import './ScheduleOrder.scss';

const ScheduleOrder = ({ order, isCompleted }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleToggle = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div className={`order-card ${isExpanded ? 'expanded' : ''}`} onClick={handleToggle}>
      <div className="order-card__info">
        <div className="order-card__title">
          <h3 className="order-card__type">
            {!isCompleted && (
              <div className="total-summary__edit-wrap">
                <img className="total-summary__edit" src={edit} alt="Edit" />
              </div>
            )}
            {t(order.serviceType.type)}
          </h3>
          <div className="order-card__price">
            {isExpanded && (
              <span className="order-card__price-sum">{`€${roundPrice(
                order.orderPriceId.cleaningSum * order.orderPriceId.timeCoeff,
              )}`}</span>
            )}
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
          </div>
        </div>
        <div className="order-card__short">
          <p className="order-card__extras">
            {order.extraServices
              .reduce((acc, curr) => acc + `${t(curr.type)}${curr.count > 1 ? ` (x${curr.count})` : ''}, `, '')
              .slice(0, -2)}
          </p>
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
            <span>{t('howFast')}</span>
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
            {isCompleted && (
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
            {isCompleted ? t('paid') : t('total')}
            <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
              {`(${t('tariff')} ${order.orderPriceId.tariffNumber})`}
            </span>
          </span>
          <span className="order-card__value">{`€${roundPrice(order.orderPriceId.totalSum)}`}</span>
        </div>
        <div className="order-card__line">
          <span>
            {formatDate(getDateFromDateObject(order.date))
              .split(', ')
              .map((elem, index) => {
                if (index === 1) {
                  return t(elem).slice(0, 3);
                }
                return elem;
              })
              .join(', ')}
          </span>
          <span>{order.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOrder;
