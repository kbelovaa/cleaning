import { SET_IS_AUTH, SET_IP_COUNTRY } from '../../constants/actionsRedux';

export const setIsAuthAction = (payload) => ({
  type: SET_IS_AUTH,
  payload,
});

export const setIpCountryAction = (payload) => ({
  type: SET_IP_COUNTRY,
  payload,
});
