import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../../http/orderAPI';
import './Orders.scss';

const Orders = () => {
  const user = useSelector((state) => state.user);

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      // const result = await getOrders(user.id);
      // console.log(result)
      // const  = result.map((order) => {
      //   if (order.dates.length > 1) {
      //     const sortedDates = order.dates.sort((date1, date2) => new Date(date1) - new Date(date2));
      //     return { ...order, dates: sortedDates };
      //   }
      //   return order;
      // });
      const sortedOrders = orders.sort((order1, order2) => {
        const date1 = order1.startDate ? order1.startDate : order1.dates[0];
        const date2 = order2.startDate ? order2.startDate : order2.dates[0];
        return new Date(date1) - new Date(date2);
      });
      setOrders(sortedOrders);
    };

    if (user.id) {
      getData();
    }
  }, [user]);

  return (
    <div className="container">
      <div className="orders">
        <h2 className="orders__title">Orders</h2>
        {orders.length === 0 ? (
          <p className="orders__no-data">You don't have any orders yet</p>
        ) : (
          <div className="orders__wrap"></div>
        )}
      </div>
    </div>
  );
};

export default Orders;
