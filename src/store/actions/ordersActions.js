import {
  SET_ACTIVE_ORDERS,
  SET_PAST_ORDERS,
  SET_OPENED_SUBSCRIPTION,
  SET_OPENED_ORDER,
  SET_ACTIVE_TAB,
} from '../../constants/actionsRedux';

export const setActiveOrdersAction = (payload) => ({
  type: SET_ACTIVE_ORDERS,
  payload,
});

export const setPastOrdersAction = (payload) => ({
  type: SET_PAST_ORDERS,
  payload,
});

export const setOpenedSubscriptionAction = (payload) => ({
  type: SET_OPENED_SUBSCRIPTION,
  payload,
});

export const setOpenedOrderAction = (payload) => ({
  type: SET_OPENED_ORDER,
  payload,
});

export const setActiveTabAction = (payload) => ({
  type: SET_ACTIVE_TAB,
  payload,
});
