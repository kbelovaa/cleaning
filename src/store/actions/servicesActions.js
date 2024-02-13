import {
  SET_SERVICES,
  SET_EXTRA_SERVICES,
  SET_PRICING,
  SET_TIME_PRICING,
  SET_CLEANING_PRICING,
  SET_SQM_PRICING,
} from '../../constants/actionsRedux';
import { getPricing, getCleaningPricing, getSqmPricing, getTimePricing } from '../../http/pricingAPI';
import { getExtraServices, getServices } from '../../http/servicesAPI';

export const setServicesAction = (payload) => ({
  type: SET_SERVICES,
  payload,
});

export const setExtraServicesAction = (payload) => ({
  type: SET_EXTRA_SERVICES,
  payload,
});

export const setPricingAction = (payload) => ({
  type: SET_PRICING,
  payload,
});

export const setTimePricingAction = (payload) => ({
  type: SET_TIME_PRICING,
  payload,
});

export const setCleaningPricingAction = (payload) => ({
  type: SET_CLEANING_PRICING,
  payload,
});

export const setSqmPricingAction = (payload) => ({
  type: SET_SQM_PRICING,
  payload,
});

export const setServicesAsync = () => (dispatch) => {
  getServices().then((data) => dispatch(setServicesAction(data.serviceTypes)));
};

export const setExtraServicesAsync = () => (dispatch) => {
  getExtraServices().then((data) => dispatch(setExtraServicesAction(data.extraServices)));
};

export const setPricingAsync = () => (dispatch) => {
  getPricing().then((data) => dispatch(setPricingAction(data.pricing[0])));
};

export const setTimePricingAsync = () => (dispatch) => {
  getTimePricing().then((data) => dispatch(setTimePricingAction(data)));
};

export const setCleaningPricingAsync = () => (dispatch) => {
  getCleaningPricing().then((data) => dispatch(setCleaningPricingAction(data)));
};

export const setSqmPricingAsync = () => (dispatch) => {
  getSqmPricing().then((data) => dispatch(setSqmPricingAction(data)));
};
