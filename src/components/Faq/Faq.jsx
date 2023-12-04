import React from 'react';
import { faq } from '../../constants/selectOptions';
import FaqCard from './FaqCard/FaqCard';
import ContactUs from '../ContactUs/ContactUs';
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
      </div>
    </div>
    <ContactUs />
  </div>
);

export default Faq;
