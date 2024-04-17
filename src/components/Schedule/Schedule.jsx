import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSubscription } from '../../http/orderAPI';
import { findActiveOrders, findPastOrders } from '../../utils/ordersFunctions';
import { setOpenedSubscriptionAction } from '../../store/actions/ordersActions';
import { formatDate, getDateFromDateObject, getPaymentDate } from '../../utils/formatDate';
import { roundPrice } from '../../utils/calculatePrice';
import edit from '../../images/edit.png';
import ScheduleOrder from './ScheduleOrder/ScheduleOrder';
import './Schedule.scss';

const Schedule = () => {
  const subscription = useSelector((state) => state.orders.openedSubscription);

  const [activeOrders, setActiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { subscriptionId } = useParams();

  const { t } = useTranslation();

  const parseSubscription = (subscription) => {
    const activeOrders = findActiveOrders(subscription).sort(
      (order1, order2) => new Date(order1.date) - new Date(order2.date),
    );
    setActiveOrders(activeOrders);
    const pastOrders = findPastOrders(subscription.orders).sort(
      (order1, order2) => new Date(order2.date) - new Date(order1.date),
    );
    setPastOrders(pastOrders);
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      const subscription = await getSubscription(subscriptionId);
      dispatch(setOpenedSubscriptionAction(subscription));
      parseSubscription(subscription);
    };

    if (subscription._id === subscriptionId) {
      parseSubscription(subscription);
    } else if (subscriptionId) {
      getData();
    }
  }, []);

  return (
    <div className="container">
      <div className="subscription-wrap">
        <h2 className="subscription__title">{t('schedule')}</h2>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {subscription.subscriptionType !== 'One-time' && (
              <div className="subscription__wrap">
                <p className="subscription__next-cleaning">{t('nextCleaning')}</p>
                <div className="subscription__active-orders">
                  {activeOrders.map((order, index) => (
                    <ScheduleOrder order={order} isCompleted={false} key={index} />
                  ))}
                </div>
                {pastOrders.length !== 0 && <p className="subscription__next-cleaning past">{t('past')}</p>}
                <div className="subscription__past-orders">
                  {pastOrders.map((order, index) => (
                    <ScheduleOrder order={order} isCompleted={true} key={index} />
                  ))}
                </div>
              </div>
            )}
            {subscription.subscriptionType === 'One-time' && (
              <div className="cleaning">
                <div className="cleaning__line">
                  <h3 className="cleaning__date">
                    {`${formatDate(getDateFromDateObject(activeOrders[0].date))
                      .split(', ')
                      .map((elem, index) => {
                        if (index === 1) {
                          return t(elem).slice(0, 3);
                        }
                        return elem;
                      })
                      .join(', ')}, ${activeOrders[0].time}`}
                  </h3>
                  <div className="total-summary__edit-wrap">
                    <img className="total-summary__edit" src={edit} alt="Edit" />
                  </div>
                </div>
                {activeOrders[0].specialInstructions && (
                  <p className="cleaning__instructions">{activeOrders[0].specialInstructions}</p>
                )}
                <div className="cleaning__line">
                  <span>{t(activeOrders[0].serviceType.type)}</span>
                  <span>{`€${roundPrice(
                    activeOrders[0].orderPriceId.cleaningSum * activeOrders[0].orderPriceId.timeCoeff,
                  )}`}</span>
                </div>
                {activeOrders[0].extraServices.length !== 0 && (
                  <div className="cleaning__services">
                    <span className="cleaning__line">{t('extraServices')}:</span>
                    <div className="cleaning__extras-list">
                      {activeOrders[0].extraServices.map((service, index) => (
                        <div key={index} className="cleaning__line">
                          <span>{`${t(service.type)}${service.count > 1 ? ` (x${service.count})` : ''}`}</span>
                          <span>{`€${roundPrice(
                            service.price * service.count * activeOrders[0].orderPriceId.timeCoeff,
                          )}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeOrders[0].howFast !== 'x1' && (
                  <div className="cleaning__line">
                    <span>{`${t('howFast')} (${activeOrders[0].howFast})`}</span>
                    <span>{`€${roundPrice(activeOrders[0].orderPriceId.speedSum)}`}</span>
                  </div>
                )}
                <div className="cleaning__line">
                  <span>{t('subtotal')}</span>
                  <span>{`€${roundPrice(activeOrders[0].orderPriceId.subtotalSum)}`}</span>
                </div>
                <div className="cleaning__line">
                  <span>{`${t('iva')} ${activeOrders[0].orderPriceId.taxPercent}%`}</span>
                  <span>{`€${roundPrice(activeOrders[0].orderPriceId.tax)}`}</span>
                </div>
                <div className="cleaning__line">
                  <span className="cleaning__value">
                    {activeOrders[0].paymentStatus === 'Sum is reserved' && (
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
                      {activeOrders[0].paymentStatus === 'Sum is reserved'
                        ? `${t('paid')}${` (${getDateFromDateObject(activeOrders[0].paymentReservationDate)})`}`
                        : t('total')}
                      <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
                        {`(${t('tariff')} ${activeOrders[0].orderPriceId.tariffNumber})`}
                      </span>
                    </span>
                  </span>
                  <span className="cleaning__value">{`€${roundPrice(activeOrders[0].orderPriceId.totalSum)}`}</span>
                </div>
                {activeOrders[0].paymentStatus === 'Not paid' && (
                  <p className="cleaning__payment">
                    {`${t('toBePaid')} ${formatDate(getDateFromDateObject(getPaymentDate(activeOrders[0].date)))
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
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;
