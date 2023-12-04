import React from 'react';
import { cleaningTypes } from '../../constants/selectOptions';
import InfoCard from './InfoCard/InfoCard';
import './InfoPrice.scss';

const InfoPrice = () => (
  <div className="container">
    <div className="info-price">
      <h2 className="info-price__title">Info/Price</h2>
      <div className="info-price__cards">
        {cleaningTypes.map((cleaningType, index) => (
          <InfoCard key={index} cleaningType={cleaningType} />
        ))}
      </div>
    </div>
  </div>
);

export default InfoPrice;
