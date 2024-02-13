import $host from './index';

export const getPricing = async () => {
  try {
    const { data } = await $host.get('api/pricing/get_pricing');
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getTimePricing = async () => {
  try {
    const { data } = await $host.get('api/pricing/get_time_pricing');
    return data.timePricing;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getCleaningPricing = async () => {
  try {
    const { data } = await $host.get('api/pricing/get_cleaning_size_pricing');
    return data.cleaningSizePricing;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getSqmPricing = async () => {
  try {
    const { data } = await $host.get('api/pricing/get_sqm_size_pricing');
    return data.sqmSizePricing;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
