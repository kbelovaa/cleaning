import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { bathrooms, bedrooms, kitchens, livingRooms } from '../../constants/selectOptions';
import './AddressSelect.scss';

const AddressSelect = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();

  useEffect(() => {
    if (options.length !== 0) {
      if (selectedOption) {
        const address = options.find((elem) => elem._id === selectedOption);

        if (address) {
          setSelectedAddress(address);
        } else {
          setSelectedAddress(options[0]);
        }
      } else {
        setSelectedAddress(options[0]);
      }
    }
  }, [selectedOption]);

  const selectRef = useRef(null);

  const { t } = useTranslation();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    if (isOpen) {
      const scrollbar = document.getElementsByClassName('scrollbar-container')[0];
      scrollbar.scrollTop = 1;
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="custom-select address-select" ref={selectRef}>
      {selectedAddress && (
        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-option__value">
            <span className="selected-option__name">
              {`${selectedAddress.address}${
                selectedAddress.secondAddress ? `, ${selectedAddress.secondAddress}` : ''
              }, ${selectedAddress.postalCode}, ${selectedAddress.city}, ${selectedAddress.province}`}
            </span>
            <span className="selected-option__info">
              {`${selectedAddress.size} m`}
              <sup className="top-index top-index_little">2</sup>
              {` - ${t(livingRooms.find((elem) => Number(elem.split(' ')[0]) === selectedAddress.livingRooms))} - ${t(
                bedrooms.find((elem) => Number(elem.split(' ')[0]) === selectedAddress.bedrooms),
              )} - ${t(
                bathrooms.find((elem) => Number(elem.split(' ')[0]) === selectedAddress.bathrooms),
              )} - ${kitchens.find((elem) => Number(elem.split(' ')[0]) === selectedAddress.kitchens)}`}
            </span>
          </div>
          <svg
            className={`arrow ${isOpen ? 'rotated' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 10L12 16L18 10" stroke="#000000" strokeLinecap="round" />
          </svg>
        </div>
      )}
      {isOpen && (
        <div
          className={`options-wrapper ${
            options.length === 1 ? 's' : options.length === 2 ? 'm' : options.length === 3 ? 'l' : ''
          }`}
        >
          <PerfectScrollbar
            options={{
              wheelPropagation: false,
              autoHide: false,
            }}
          >
            <ul className="options-list">
              {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionSelect(option._id)}>
                  {`${option.address}${option.secondAddress ? `, ${option.secondAddress}` : ''}, ${
                    option.postalCode
                  }, ${option.city}, ${option.province}`}
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </div>
      )}
    </div>
  );
};

export default AddressSelect;
