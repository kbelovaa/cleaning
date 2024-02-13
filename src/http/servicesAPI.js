import $host from './index';

export const getServices = async () => {
  try {
    const { data } = await $host.get('api/services/get_service_types');
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getExtraServices = async () => {
  try {
    const { data } = await $host.get('api/services/get_extra_services');
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
