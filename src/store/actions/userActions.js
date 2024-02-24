import {
  SET_IS_AUTH,
  SET_IP_COUNTRY,
  SET_USER,
  SET_ADDRESSES,
  SET_UPDATED_ADDRESSES,
} from '../../constants/actionsRedux';

export const setIsAuthAction = (payload) => ({
  type: SET_IS_AUTH,
  payload,
});

export const setIpCountryAction = (payload) => ({
  type: SET_IP_COUNTRY,
  payload,
});

export const setUserAction = (payload) => ({
  type: SET_USER,
  payload,
});

export const setAddressesAction = (payload) => ({
  type: SET_ADDRESSES,
  payload,
});

export const setUpdatedAddressesAction = (payload) => ({
  type: SET_UPDATED_ADDRESSES,
  payload,
});
