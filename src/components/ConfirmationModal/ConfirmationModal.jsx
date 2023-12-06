import React, { useState } from 'react';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ isOpen, setIsOpen, isLogin }) => {
  const [knowingWay, setKnowingWay] = useState();

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      
    </div>
  );
};

export default ConfirmationModal;
