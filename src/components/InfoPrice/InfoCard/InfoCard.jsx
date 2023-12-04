import React from 'react';
import './InfoCard.scss';

const InfoCard = ({ cleaningType }) => (
  <div className="card">
    <h3 className="card__title">{cleaningType.type}</h3>
    <p className="card__text">{cleaningType.description}</p>
    <span className="card__time">{`Minimun ${cleaningType.duration} hours`}</span>
  </div>
);

export default InfoCard;
