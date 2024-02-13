import $host from './index';

export const getOrder = async (orderId) => {
  try {
    const { data } = await $host.get(`api/order/get_order/${orderId}`);
    return data.order;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const getOrders = async (userId) => {
  try {
    const { data } = await $host.get(`api/order/get_client_orders/${userId}`);
    return data.orders;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const getSubscriptions = async (userId) => {
  try {
    const { data } = await $host.get(`api/order/get_client_subscriptions/${userId}`);
    return data.subscriptions;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const createOrder = async (orderObject) => {
  try {
    const data = await $host.post('api/order/create_order', orderObject);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
