import {
  SET_SERVICES,
  SET_EXTRA_SERVICES,
  SET_PRICING,
  SET_TIME_PRICING,
  SET_CLEANING_PRICING,
  SET_SQM_PRICING,
} from '../../constants/actionsRedux';

const defaultState = {
  serviceTypes: [],
  extraServices: [],
  pricing: {},
  timePricing: [],
  cleaningPricing: [],
  sqmPricing: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return {
        ...state,
        serviceTypes: action.payload.map((service) => ({
          ...service,
          description: `${service.type.replace(/[/\s]/g, '')}CleaningInfo`,
        })),
      };
    case SET_EXTRA_SERVICES:
      return { ...state, extraServices: action.payload };
    case SET_PRICING:
      return { ...state, pricing: action.payload };
    case SET_TIME_PRICING:
      return { ...state, timePricing: action.payload };
    case SET_CLEANING_PRICING:
      return { ...state, cleaningPricing: action.payload };
    case SET_SQM_PRICING:
      return { ...state, sqmPricing: action.payload };
    default:
      return state;
  }
};

export default userReducer;
