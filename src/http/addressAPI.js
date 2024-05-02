import $host from './index';

export const getAddress = async (addressId) => {
  try {
    const data = await $host.get(`api/address/get_address/${addressId}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getAddresses = async (userId) => {
  try {
    const { data } = await $host.get(`api/address/get_addresses/${userId}`);
    return data.addresses;
  } catch (error) {
    return { error: 'Unexpected error' };
  }
};

export const saveDefaultAddress = async (addressId) => {
  try {
    const { data } = await $host.put(`api/address/set_default_address/${addressId}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const createAddress = async (
  userId,
  address,
  secondAddress,
  postalCode,
  city,
  province,
  size,
  livingRooms,
  bedrooms,
  bathrooms,
  kitchens,
) => {
  try {
    const data = await $host.post('api/address/create_address', {
      userId,
      address,
      secondAddress,
      postalCode,
      city,
      province,
      size,
      livingRooms,
      bedrooms,
      bathrooms,
      kitchens,
      isSaved: true
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const updateAddress = async (
  id,
  address,
  secondAddress,
  postalCode,
  city,
  province,
  size,
  livingRooms,
  bedrooms,
  bathrooms,
  kitchens,
) => {
  try {
    const data = await $host.put('api/address/update_address', {
      id,
      address,
      secondAddress,
      postalCode,
      city,
      province,
      size,
      livingRooms,
      bedrooms,
      bathrooms,
      kitchens,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const deleteAddress = async (addressId) => {
  try {
    const { data } = await $host.delete(`api/address/delete_address/${addressId}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
