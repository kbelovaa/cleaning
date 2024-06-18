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
      </div>
    </div>
  );
};

export default Schedule;
