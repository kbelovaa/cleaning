import {
  bathrooms,
  bedrooms,
  kitchens,
  speedOptions,
  repeats,
  times,
  livingRooms,
} from '../../constants/selectOptions';
import {
  SET_DEFAULT_ADDRESS_ID,
  SET_CLEANING,
  SET_REPEAT,
  SET_DATE,
  SET_TIME,
  SET_DATES,
  SET_ADD_EXCLUDED_DATES,
  SET_EXCLUDED_DATES,
  SET_CUSTOM_SCHEDULE,
  SET_DURATION,
  SET_START_DATE,
  SET_LAST_DATE,
  SET_SELECTED_CLEANING,
  SET_SELECTED_SERVICES,
  SET_ADDRESS_ID,
  SET_APARTMENT_SIZE,
  SET_SELECTED_SPEED,
  SET_LIVING_ROOMS_NUM,
  SET_BEDROOMS_NUM,
  SET_BATHROOMS_NUM,
  SET_KITCHENS_NUM,
  SET_ADDRESS1,
  SET_ADDRESS2,
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
  SET_IVA_PERCENT,
  SET_IVA,
  SET_TOTAL,
} from '../../constants/actionsRedux';

export const defaultState = {
  currentDate: new Date(),
  repeat: repeats[0],
  date: '',
  isDateValid: true,
  time: times[24],
  dates: [],
  subscriptionPrices: [],
  addExcludedDates: false,
  excludedDates: [{ date: '', isDateValid: true, isDateActive: false, isDateUnique: true }],
  customSchedule: [
    {
      time: times[24],
      date: '',
      timeCoeff: 1,
      timeSum: 0,
      subtotal: 0,
      iva: 0,
      total: 0,
      tariff: 1,
      isDateValid: true,
      isDateActive: false,
      isDateUnique: true,
    },
  ],
  duration: '',
  startDate: '',
  isStartDateValid: true,
  lastDate: '',
  isLastDateValid: true,
  selectedCleaning: {},
  selectedServices: [],
  defaultAddressId: '',
  apartmentSize: '',
  selectedSpeed: speedOptions[0],
  livingRoomsNum: livingRooms[0],
  bedroomsNum: bedrooms[0],
  bathroomsNum: bathrooms[0],
  kitchensNum: kitchens[0],
  address1: '',
  address2: '',
  postalCode: '',
  city: '',
  province: '',
  instructions: '',
  saving: true,
  cleaningSum: 0,
  extrasSum: 0,
  speedSum: 0,
  timeCoeff: 1,
  timeSum: 0,
  subtotal: 0,
  ivaPercent: 0,
  iva: 0,
  total: 0,
  tariff: 1,
  paymentStatus: 'Not paid',
};

const cleaningReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DEFAULT_ADDRESS_ID:
      return { ...state, defaultAddressId: action.payload };
    case SET_CLEANING:
      return action.payload;
    case SET_REPEAT:
      return { ...state, repeat: action.payload };
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_TIME:
      return { ...state, time: action.payload };
    case SET_DATES:
      return { ...state, dates: action.payload };
    case SET_ADD_EXCLUDED_DATES:
      return { ...state, addExcludedDates: action.payload };
    case SET_EXCLUDED_DATES:
      return { ...state, excludedDates: action.payload };
    case SET_CUSTOM_SCHEDULE:
      return { ...state, customSchedule: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    case SET_START_DATE:
      return { ...state, startDate: action.payload };
    case SET_LAST_DATE:
      return { ...state, lastDatez: action.payload };
    case SET_SELECTED_CLEANING:
      return { ...state, selectedCleaning: action.payload };
    case SET_SELECTED_SERVICES:
      return { ...state, selectedServices: action.payload };
    case SET_ADDRESS_ID:
      return { ...state, addressId: action.payload };
    case SET_APARTMENT_SIZE:
      return { ...state, apartmentSize: action.payload };
    case SET_SELECTED_SPEED:
      return { ...state, selectedSpeed: action.payload };
    case SET_LIVING_ROOMS_NUM:
      return { ...state, livingRooms: action.payload };
    case SET_BEDROOMS_NUM:
      return { ...state, bedroomsNum: action.payload };
    case SET_BATHROOMS_NUM:
      return { ...state, bathroomsNum: action.payload };
    case SET_KITCHENS_NUM:
      return { ...state, kitchensNum: action.payload };
    case SET_ADDRESS1:
      return { ...state, address1: action.payload };
    case SET_ADDRESS2:
      return { ...state, address2: action.payload };
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
    case SET_IVA_PERCENT:
      return { ...state, ivaPercent: action.payload };
    case SET_IVA:
      return { ...state, iva: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default cleaningReducer;
