import React from 'react';
import { cleaningTypes } from '../../constants/selectOptions';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.scss';

const Services = () => (
  <div className="container">
    <div className="info-price">
      <h2 className="info-price__title">Services</h2>
      <div className="info-price__cards">
        {cleaningTypes.map((cleaningType, index) => (
          <ServiceCard key={index} cleaningType={cleaningType} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
