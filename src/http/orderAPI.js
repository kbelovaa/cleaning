import $host from './index';

export const getOrder = async (orderId) => {
  try {
    const { data } = await $host.get(`api/order/get_order/${orderId}`);
    return data;
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

export const getSubscription = async (subscriptionId) => {
  try {
    const { data } = await $host.get(`api/order/get_client_subscription/${subscriptionId}`);
    return data.subscription;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const saveOrder = async (userId, temporaryOrderJson) => {
  try {
    const data = await $host.post('api/order/save_order', { userId, temporaryOrderJson });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const createOrder = async (orderObj) => {
  try {
    const data = await $host.post('api/order/create_order', orderObj);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
