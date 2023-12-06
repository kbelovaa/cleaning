import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Booking from '../Booking/Booking';
import Summary from '../Summary/Summary';
import ContactUs from '../ContactUs/ContactUs';
import InfoPrice from '../InfoPrice/InfoPrice';
import Faq from '../Faq/Faq';
import CancellationPolicy from '../CancellationPolicy/CancellationPolicy';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Booking />} />
        <Route path="summary" element={<Summary />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="info-price" element={<InfoPrice />} />
        <Route path="faq" element={<Faq />} />
        <Route path="cancellation-policy" element={<CancellationPolicy />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
