import React from 'react';
import './ServiceCard.scss';

const ServiceCard = ({ cleaningType }) => (
  <div className="card">
    <h3 className="card__title">{cleaningType.type}</h3>
    <p className="card__text">{cleaningType.description}</p>
  </div>
);

export default ServiceCard;
