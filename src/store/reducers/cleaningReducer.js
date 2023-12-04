import {
  bathrooms,
  bedrooms,
  cleaningTypes,
  frequency,
  kitchens,
  speedOptions,
  times,
} from '../../constants/selectOptions';
import {
  SET_DATE,
  SET_TIME,
  SET_SELECTED_CLEANING,
  SET_SELECTED_SERVICES,
  SET_APARTMENT_SIZE,
  SET_SELECTED_SPEED,
  SET_SELECTED_FREQUENCY,
  SET_BEDROOMS_NUM,
  SET_BATHROOMS_NUM,
  SET_KITCHENS_NUM,
  SET_ADDRESS,
  SET_POSTAL_CODE,
  SET_CITY,
  SET_PROVINCE,
  SET_INSTRUCTIONS,
  SET_SAVING,
  SET_CLEANING_SUM,
  SET_EXTRAS_SUM,
  SET_SPEED_SUM,
  SET_TIME_SUM,
  SET_SUBTOTAL,
  SET_IVA,
  SET_TOTAL,
} from '../../constants/actionsRedux';

const defaultState = {
  date: new Date().toLocaleDateString(),
  time: times[50],
  selectedCleaning: cleaningTypes[0],
  selectedServices: [],
  apartmentSize: '',
  selectedSpeed: speedOptions[0],
  selectedFrequency: frequency[0],
  bedroomsNum: bedrooms[0],
  bathroomsNum: bathrooms[0],
  kitchensNum: kitchens[0],
  address: '',
  postalCode: '',
  city: '',
  province: '',
  instructions: '',
  saving: true,
  cleaningSum: 0,
  extrasSum: 0,
  speedSum: 0,
  timeSum: 0,
  subtotal: 0,
  iva: 0,
  total: 0,
};

const cleaningReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_TIME:
      return { ...state, time: action.payload };
    case SET_SELECTED_CLEANING:
      return { ...state, selectedCleaning: action.payload };
    case SET_SELECTED_SERVICES:
      return { ...state, selectedServices: action.payload };
    case SET_APARTMENT_SIZE:
      return { ...state, apartmentSize: action.payload };
    case SET_SELECTED_SPEED:
      return { ...state, selectedSpeed: action.payload };
    case SET_SELECTED_FREQUENCY:
      return { ...state, selectedFrequency: action.payload };
    case SET_BEDROOMS_NUM:
      return { ...state, bedroomsNum: action.payload };
    case SET_BATHROOMS_NUM:
      return { ...state, bathroomsNum: action.payload };
    case SET_KITCHENS_NUM:
      return { ...state, kitchensNum: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case SET_POSTAL_CODE:
      return { ...state, postalCode: action.payload };
    case SET_CITY:
      return { ...state, city: action.payload };
    case SET_PROVINCE:
      return { ...state, province: action.payload };
    case SET_INSTRUCTIONS:
      return { ...state, instructions: action.payload };
    case SET_SAVING:
      return { ...state, saving: action.payload };
    case SET_CLEANING_SUM:
      return { ...state, cleaningSum: action.payload };
    case SET_EXTRAS_SUM:
      return { ...state, extrasSum: action.payload };
    case SET_SPEED_SUM:
      return { ...state, speedSum: action.payload };
    case SET_TIME_SUM:
      return { ...state, timeSum: action.payload };
    case SET_SUBTOTAL:
      return { ...state, subtotal: action.payload };
    case SET_IVA:
      return { ...state, iva: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default cleaningReducer;
