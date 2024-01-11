import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServiceCard.scss';

const ServiceCard = ({ cleaningType }) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <h3 className="card__title">{t(cleaningType.type)}</h3>
      <p className="card__text">{t(cleaningType.description)}</p>
    </div>
  );
};

export default ServiceCard;
