import $host from './index';

export const createCheckoutSession = async (order) => {
  try {
    const { data } = await $host.post('api/payment/create_checkout_session', { ...order });
    return data;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

// export const createAccount = async () => {
//   try {
//     const { data } = await $host.get('api/payment/create-connected-account/65bcada67461422b1161244c');
//     return data;
//   } catch (error) {
//     return { error: 'Unexpected error' };
//   }
// };

// export const createPayout = async () => {
//   try {
//     const { data } = await $host.get('api/payment/create-payout');
//     return data;
//   } catch (error) {
//     return { error: 'Unexpected error' };
//   }
// };
