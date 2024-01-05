import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { setIpCountryAction } from '../../store/actions/userActions';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Booking from '../Booking/Booking';
import Summary from '../Summary/Summary';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Faq from '../Faq/Faq';
import CancellationPolicy from '../CancellationPolicy/CancellationPolicy';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Addresses from '../Addresses/Addresses';
import Orders from '../Orders/Orders';
import Settings from '../Settings/Settings';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        dispatch(setIpCountryAction(countryCode.toLowerCase()));
      } catch {
        dispatch(setIpCountryAction(''));
      }
    };

    getCountryFromIP();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Booking />} />
          <Route path="edit/*" element={<Booking />} />
          <Route path="summary" element={<Summary />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="info-price" element={<Services />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
