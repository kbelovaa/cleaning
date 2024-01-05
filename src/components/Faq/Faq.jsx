import React from 'react';
import { NavLink } from 'react-router-dom';
import { faq } from '../../constants/selectOptions';
import FaqCard from './FaqCard/FaqCard';
import './Faq.scss';

const Faq = () => (
  <div className="faq-wrap">
    <div className="container">
      <div className="faq">
        <h2 className="faq__title">Faq</h2>
        <div className="faq__cards">
          <div className="faq__column">
            {faq.slice(0, 8).map((elem, index) => (
              <FaqCard key={index} question={elem.question} answer={elem.answer} />
            ))}
          </div>
          <div className="faq__column">
            {faq.slice(8, 16).map((elem, index) => (
              <FaqCard key={index} question={elem.question} answer={elem.answer} />
            ))}
          </div>
        </div>
        <div className="faq__contact-us">
          <p className="faq__text">Did not find what you are looking for?</p>
          <NavLink className="faq__text faq__link" to="/contact-us">
            Contact us here
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
