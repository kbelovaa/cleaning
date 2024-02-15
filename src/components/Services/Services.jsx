import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard/ServiceCard';
import TariffCard from './TariffCard/TariffCard';
import './Services.scss';

const Services = () => {
  const cleaningTypes = useSelector((state) => state.services.serviceTypes);
  const timePricing = useSelector((state) => state.services.timePricing);

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
        <div className="info-price__tariff-cards">
          {timePricing.map((pricing, index) => (
            <TariffCard key={index} pricing={pricing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
