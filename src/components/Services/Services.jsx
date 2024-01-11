import React from 'react';
import { useTranslation } from 'react-i18next';
import { cleaningTypes } from '../../constants/selectOptions';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.scss';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="info-price">
        <h2 className="info-price__title">{t('services')}</h2>
        <div className="info-price__cards">
          {cleaningTypes.map((cleaningType, index) => (
            <ServiceCard key={index} cleaningType={cleaningType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
