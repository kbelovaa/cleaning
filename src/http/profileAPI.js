import $host from './index';

export const createKnowingWay = async (userId, knowingWay) => {
  try {
    const { data } = await $host.post('api/knowingWay/create_knowing_way', { userId, knowingWay });
    return data;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const updateInfo = async (id, name, surname, mobile, email) => {
  try {
    const data = await $host.put('api/profile/update_info', { id, name, surname, mobile, email });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const changePassword = async (id, currentPassword, newPassword) => {
  try {
    const data = await $host.put('api/profile/change_password', { id, currentPassword, newPassword });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
