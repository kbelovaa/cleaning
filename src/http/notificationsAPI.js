import $host from './index';

export const getNotifications = async (userId) => {
  try {
    const data = await $host.get(`api/notification/get_notifications_by_customer_id/${userId}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
