import $host from './index';

export const createCheckoutSession = async (order) => {
  try {
    const { data } = await $host.post('api/payment/create_checkout_session', { ...order });
    return data;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};
