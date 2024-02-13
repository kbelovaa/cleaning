import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { auth } from '../../http/authAPI';
import {
  setCleaningPricingAsync,
  setExtraServicesAsync,
  setPricingAsync,
  setServicesAsync,
  setSqmPricingAsync,
  setTimePricingAsync,
} from '../../store/actions/servicesActions';
import { setIpCountryAction, setIsAuthAction, setUserAction } from '../../store/actions/userActions';
import getCookieToken from '../../utils/cookiesToken';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Booking from '../Booking/Booking';
import Summary from '../Summary/Summary';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Faq from '../Faq/Faq';
import CancellationPolicy from '../CancellationPolicy/CancellationPolicy';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Address from '../Address/Address';
import Addresses from '../Addresses/Addresses';
import Orders from '../Orders/Orders';
import Settings from '../Settings/Settings';
import Password from '../Password/Password';
import '../../utils/i18n';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const token = getCookieToken();

  useEffect(() => {
    const getUserByToken = async () => {
      if (token) {
        const userId = jwtDecode(token).id;
        const result = await auth(userId);

        if (!result.message) {
          dispatch(setIsAuthAction(true));
          dispatch(setUserAction(result));
        }
      }
    };

    getUserByToken();
  }, [token]);

  useEffect(() => {
    dispatch(setServicesAsync());
    dispatch(setExtraServicesAsync());
    dispatch(setPricingAsync());
    dispatch(setTimePricingAsync());
    dispatch(setCleaningPricingAsync());
    dispatch(setSqmPricingAsync());

    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        dispatch(setIpCountryAction(countryCode.toLowerCase()));

        return countryCode.toLowerCase();
      } catch {
        dispatch(setIpCountryAction(''));
      }
    };

    const countryCode = getCountryFromIP();

    const setLang = (lng) => {
      i18n.changeLanguage(lng);
      document.documentElement.lang = lng;
    };

    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
      setLang(storedLanguage);
    } else if (Object.keys(i18n.options.resources).includes(countryCode)) {
      setLang(countryCode);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking/edit/*" element={<Booking />} />
          <Route path="summary" element={<Summary />} />
          <Route path="confirmation" element={<Summary />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="info-price" element={<Services />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="address/new" element={<Address />} />
          <Route path="address/edit/:addressId" element={<Address />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/change-password" element={<Password />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
