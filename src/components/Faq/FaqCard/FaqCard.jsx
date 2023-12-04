import React, { useState } from 'react';
import './FaqCard.scss';

const FaqCard = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div className={`faq-card ${isExpanded ? 'expanded' : ''}`} onClick={handleToggle}>
      <div className="faq-card__line">
        <h3 className="faq-card__question">{question}</h3>
        <svg
          className={isExpanded ? 'arrow rotated' : 'arrow'}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 10L12 16L18 10" stroke="#000000" strokeLinecap="round" />
        </svg>
      </div>
      <div className="faq-card__content">
        <p className="faq-card__answer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
