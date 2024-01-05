import {
  SET_DATES,
  SET_TIME,
  SET_SELECTED_CLEANING,
  SET_SELECTED_SERVICES,
  SET_APARTMENT_SIZE,
  SET_SELECTED_SPEED,
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
  SET_IVA,
  SET_TOTAL,
} from '../../constants/actionsRedux';

export const setDatesAction = (payload) => ({
  type: SET_DATES,
  payload,
});

export const setTimeAction = (payload) => ({
  type: SET_TIME,
  payload,
});

export const setSelectedCleaningAction = (payload) => ({
  type: SET_SELECTED_CLEANING,
  payload,
});

export const setSelectedServicesAction = (payload) => ({
  type: SET_SELECTED_SERVICES,
  payload,
});

export const setApartmentSizeAction = (payload) => ({
  type: SET_APARTMENT_SIZE,
  payload,
});

export const setSelectedSpeedAction = (payload) => ({
  type: SET_SELECTED_SPEED,
  payload,
});

export const setBedroomsNumAction = (payload) => ({
  type: SET_BEDROOMS_NUM,
  payload,
});

export const setBathroomsNumAction = (payload) => ({
  type: SET_BATHROOMS_NUM,
  payload,
});

export const setKitchensNumAction = (payload) => ({
  type: SET_KITCHENS_NUM,
  payload,
});

export const setAddress1Action = (payload) => ({
  type: SET_ADDRESS1,
  payload,
});

export const setAddress2Action = (payload) => ({
  type: SET_ADDRESS2,
  payload,
});

export const setPostalCodeAction = (payload) => ({
  type: SET_POSTAL_CODE,
  payload,
});

export const setCityAction = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setProvinceAction = (payload) => ({
  type: SET_PROVINCE,
  payload,
});

export const setInstructionsAction = (payload) => ({
  type: SET_INSTRUCTIONS,
  payload,
});

export const setSavingAction = (payload) => ({
  type: SET_SAVING,
  payload,
});

export const setCleaningSumAction = (payload) => ({
  type: SET_CLEANING_SUM,
  payload,
});

export const setExtrasSumAction = (payload) => ({
  type: SET_EXTRAS_SUM,
  payload,
});

export const setSpeedSumAction = (payload) => ({
  type: SET_SPEED_SUM,
  payload,
});

export const setTimeSumAction = (payload) => ({
  type: SET_TIME_SUM,
  payload,
});

export const setSubtotalAction = (payload) => ({
  type: SET_SUBTOTAL,
  payload,
});

export const setIvaAction = (payload) => ({
  type: SET_IVA,
  payload,
});

export const setTotalAction = (payload) => ({
  type: SET_TOTAL,
  payload,
});
