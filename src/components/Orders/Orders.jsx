import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSubscriptions, getAllJobs, getOrders } from '../../http/orderAPI';
import { months } from '../../constants/selectOptions';
import { formatDate, getDateFromDateObject } from '../../utils/formatDate';
import { findActiveOrders, findPastOrders } from '../../utils/ordersFunctions';
import './Orders.scss';

const Orders = () => {
  const user = useSelector((state) => state.user);

  const [activeOrders, setActiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      const subscriptions = await getSubscriptions(user.id);
      const { jobs } = await getAllJobs();
      setJobs(jobs);
      let filteredSubscriptions = subscriptions.filter((subscription) =>
        subscription.orders.some((order) => {
          const orderJob = jobs.find((job) => job.orderId._id === order._id);
          if (orderJob) {
            return orderJob.status !== 'completed';
          }
        }),
      );
      filteredSubscriptions = filteredSubscriptions.map((subscription) => {
        if (subscription.orders.length > 1) {
          const sortedOrders = subscription.orders.sort(
            (order1, order2) => new Date(order1.date) - new Date(order2.date),
          );
          return { ...subscription, orders: sortedOrders };
        }
        return subscription;
      });
      const sortedSubscriptions = filteredSubscriptions.sort((subscription1, subscription2) => {
        const date1 = findActiveOrders(subscription1, jobs)[0].date;
        const date2 = findActiveOrders(subscription2, jobs)[0].date;
        return new Date(date1) - new Date(date2);
      });
      setActiveOrders(sortedSubscriptions);

      const orders = await getOrders(user.id);
      const pastOrders = findPastOrders(orders, jobs).sort(
        (order1, order2) => new Date(order2.date) - new Date(order1.date),
      );
      setPastOrders(pastOrders);
      setLoading(false);
    };

    if (user.id) {
      getData();
    }
  }, [user]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="orders">
        <h2 className="orders__title">{t('orders')}</h2>
        <div className="orders__wrap">
          <div className="orders__tabs">
            <div className={`orders__tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
              {t('current')}
            </div>
            <div className={`orders__tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
              {t('past')}
            </div>
          </div>
          {loading ? (
            <div className="spinner spinner_small"></div>
          ) : (
            <div className="orders__content">
              <div className={`orders__tab-content ${activeTab === 0 ? 'active' : ''}`}>
                {activeOrders.length === 0 ? (
                  <p className="orders__no-data">{t('noCurrentOrdersYet')}</p>
                ) : (
                  <>
                    <p className="orders__month">{t(months[new Date(activeOrders[0].orders[0].date).getMonth()])}</p>
                    {activeOrders.map((order, index) => (
                      <div key={index}>
                        {index !== 0 &&
                          new Date(findActiveOrders(order, jobs)[0].date).getMonth() !==
                            new Date(findActiveOrders(activeOrders[index - 1], jobs)[0].date).getMonth() && (
                            <p className="orders__month">
                              {t(months[new Date(findActiveOrders(order, jobs)[0].date).getMonth()])}
                            </p>
                          )}
                        <div className="order" onClick={() => navigate(`/schedule/${order._id}`)}>
                          <div className="order__info">
                            <div className="order__title">
                              <h3 className="order__type">
                                {order.subscriptionType === 'One-time'
                                  ? t(order.orders[0].serviceType.type)
                                  : order.subscriptionType === 'Custom schedule'
                                  ? t('custom')
                                  : t(order.subscriptionType)}
                              </h3>
                              {!findActiveOrders(order, jobs)[0].isConfirmed && (
                                <div className="order__label">{t('awaitingConfirmation')}</div>
                              )}
                            </div>
                            <p className="order__address">
                              {`${order.orders[0].address.address}${
                                order.orders[0].address.secondAddress
                                  ? `, ${order.orders[0].address.secondAddress}`
                                  : ''
                              }, ${order.orders[0].address.postalCode}, ${order.orders[0].address.city}, ${
                                order.orders[0].address.province
                              }`}
                            </p>
                            <div className="order__date">
                              {`${formatDate(getDateFromDateObject(findActiveOrders(order, jobs)[0].date))
                                .split(', ')
                                .map((elem, index) => {
                                  if (index === 1) {
                                    return t(elem).slice(0, 3);
                                  }
                                  return elem;
                                })
                                .join(', ')}, ${findActiveOrders(order, jobs)[0].time}`}
                            </div>
                            {order.subscriptionType !== 'One-time' && (
                              <p className="order__duration">{`${t('duration')}: ${
                                findPastOrders(order.orders, jobs).length
                              }/${order.orders.length}`}</p>
                            )}
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path d="M9 5.5L15 11.5L9 17.5" stroke="black" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className={`orders__tab-content ${activeTab === 1 ? 'active' : ''}`}>
                {pastOrders.length === 0 ? (
                  <p className="orders__no-data">{t('noPastOrdersYet')}</p>
                ) : (
                  <>
                    <p className="orders__month">{t(months[new Date(pastOrders[0].date).getMonth()])}</p>
                    {pastOrders.map((order, index) => (
                      <div key={index}>
                        {index !== 0 &&
                          new Date(order.date).getMonth() !== new Date(pastOrders[index - 1].date).getMonth() && (
                            <p className="orders__month">{t(months[new Date(order.date).getMonth()])}</p>
                          )}
                        <div className="order" onClick={() => navigate(`/receipt/${order._id}`)}>
                          <div className="order__info">
                            <div className="order__title">
                              <h3 className="order__type">{t(order.serviceType.type)}</h3>
                            </div>
                            <p className="order__address">
                              {`${order.address.address}${
                                order.address.secondAddress ? `, ${order.address.secondAddress}` : ''
                              }, ${order.address.postalCode}, ${order.address.city}, ${order.address.province}`}
                            </p>
                            <div className="order__date">
                              {`${formatDate(getDateFromDateObject(order.date))
                                .split(', ')
                                .map((elem, index) => {
                                  if (index === 1) {
                                    return t(elem).slice(0, 3);
                                  }
                                  return elem;
                                })
                                .join(', ')}, ${order.time}`}
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path d="M9 5.5L15 11.5L9 17.5" stroke="black" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
