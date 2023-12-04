import React from 'react';
import { useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';
import './Summary.scss';

const Summary = () => {
  const cleaning = useSelector((state) => state.cleaning);

  return (
    <div className="container">
      <div className="total-summary">
        <h1 className="total-summary__title">Summary</h1>
        <div className="total-summary__data">
          <div className="total-summary__line total-summary__line_important">
            <span className="total-summary__name">Date</span>
            <span className="total-summary__value">{formatDate(cleaning.date)}</span>
          </div>
          <div className="total-summary__line  total-summary__line_important">
            <span className="total-summary__name">Time</span>
            <span className="total-summary__value">{cleaning.time}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Service type</span>
            <span className="total-summary__value">{cleaning.selectedCleaning.type}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">How fast</span>
            <span className="total-summary__value">{cleaning.selectedSpeed}</span>
          </div>
          {cleaning.selectedServices.length !== 0 && (
            <div className="total-summary__line">
              <span className="total-summary__name">Extra services</span>
              <div className="total-summary__list">
                {cleaning.selectedServices.map((service, index) => (
                  <span key={index} className="total-summary__list-item">
                    {service.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="total-summary__line">
            <span className="total-summary__name">
              Apartment size, m<sup className="top-index">2</sup>
            </span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Property information</span>
            <div className="total-summary__list">
              <span className="total-summary__list-item">{cleaning.bedroomsNum}</span>
              <span className="total-summary__list-item">{cleaning.bathroomsNum}</span>
              <span className="total-summary__list-item">{cleaning.kitchensNum}</span>
            </div>
          </div>
          <p className="total-summary__address total-summary__line_important">{`${cleaning.address} address`}</p>
          <div className="total-summary__line">
            <span className="total-summary__name">{`${cleaning.selectedCleaning.type} (${cleaning.selectedFrequency}, ${cleaning.selectedCleaning.duration} hours)`}</span>
            <span className="total-summary__value">{`€${
              cleaning.selectedCleaning.duration * cleaning.selectedCleaning.price
            }`}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Extra services</span>
            <span className="total-summary__value">{`€${cleaning.selectedServices.reduce(
              (sum, service) => sum + service.price,
              0,
            )}`}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">How fast</span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Subtotal</span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">IVA 21%</span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Total</span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
        </div>
        <div className="total-summary__buttons">
          <button className="btn total-summary__btn">Edit</button>
          <button className="btn total-summary__btn">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
