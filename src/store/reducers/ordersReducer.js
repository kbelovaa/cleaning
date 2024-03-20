import {
  SET_ACTIVE_ORDERS,
  SET_PAST_ORDERS,
  SET_OPENED_SUBSCRIPTION,
  SET_OPENED_ORDER,
  SET_ACTIVE_TAB,
} from '../../constants/actionsRedux';

const defaultState = {
  activeOrders: [],
  pastOrders: [],
  openedSubscription: {},
  openedOrder: {},
  activeTab: 0,
};

const ordersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ORDERS:
      return { ...state, activeOrders: action.payload };
    case SET_PAST_ORDERS:
      return { ...state, pastOrders: action.payload };
    case SET_OPENED_SUBSCRIPTION:
      return { ...state, openedSubscription: action.payload };
    case SET_OPENED_ORDER:
      return { ...state, openedOrder: action.payload };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
