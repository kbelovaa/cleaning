import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  setApartmentSizeAction,
  setBathroomsNumAction,
  setBedroomsNumAction,
  setCityAction,
  setCleaningSumAction,
  setDateAction,
  setExtrasSumAction,
  setInstructionsAction,
  setSavingAction,
  setIvaAction,
  setKitchensNumAction,
  setPostalCodeAction,
  setProvinceAction,
  setSelectedCleaningAction,
  setSelectedFrequencyAction,
  setSelectedServicesAction,
  setSelectedSpeedAction,
  setSubtotalAction,
  setTimeAction,
  setTotalAction,
  setSpeedSumAction,
  setTimeSumAction,
  setAddress1Action,
  setAddress2Action,
} from '../../store/actions/cleaningActions';
import { bathrooms, bedrooms, cleaningTypes, frequency, kitchens, speedOptions, times } from '../../constants/selectOptions';
import formatDate from '../../utils/formatDate';
import { roundPrice } from '../../utils/calculatePrice';
import edit from '../../images/edit.png';
import './Summary.scss';

const Summary = () => {
  const dispatch = useDispatch();
  const cleaning = useSelector((state) => state.cleaning);
  const [policyAccepting, setPolicyAccepting] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const handlePayment = () => {
    if (policyAccepting) {
      //оплата
      dispatch(setDateAction(new Date().toLocaleDateString()));
      dispatch(setTimeAction(times[50]));
      dispatch(setSelectedCleaningAction(cleaningTypes[0]));
      dispatch(setSelectedServicesAction([]));
      dispatch(setApartmentSizeAction(''));
      dispatch(setSelectedSpeedAction(speedOptions[0]));
      dispatch(setSelectedFrequencyAction(frequency[0]));
      dispatch(setBedroomsNumAction(bedrooms[0]));
      dispatch(setBathroomsNumAction(bathrooms[0]));
      dispatch(setKitchensNumAction(kitchens[0]));
      dispatch(setAddress1Action(''));
      dispatch(setAddress2Action(''));
      dispatch(setPostalCodeAction(''));
      dispatch(setCityAction(''));
      dispatch(setProvinceAction(''));
      dispatch(setInstructionsAction(''));
      dispatch(setSavingAction(true));
      dispatch(setCleaningSumAction(0));
      dispatch(setExtrasSumAction(0));
      dispatch(setSpeedSumAction(0));
      dispatch(setTimeSumAction(0));
      dispatch(setSubtotalAction(0));
      dispatch(setIvaAction(0));
      dispatch(setTotalAction(0));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <div className="total-summary">
        <h1 className="total-summary__title">Summary</h1>
        <div className="total-summary__data">
          <div className="total-summary__line total-summary__line_important">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className="total-summary__edit" onClick={() => navigate('/edit/date')} src={edit} alt="Edit" />
              Date
            </span>
            <span className="total-summary__value">{formatDate(cleaning.date)}</span>
          </div>
          <div className="total-summary__line total-summary__line_important">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className='total-summary__edit' onClick={() => navigate('/edit/time')} src={edit} alt="Edit" />
              Time
            </span>
            <span className="total-summary__value">{cleaning.time}</span>
          </div>
          <p className={`total-summary__address total-summary__line_important ${editMode ? 'edit' : ''}`}>
            <img className='total-summary__edit' onClick={() => navigate('/edit/address')} src={edit} alt="Edit" />
            {`${cleaning.address1}${cleaning.address2 ? `, ${cleaning.address2}` : ''}, ${cleaning.city}, ${cleaning.province}, ${cleaning.postalCode}`}
          </p>
          <div className="total-summary__line">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className='total-summary__edit' onClick={() => navigate('/edit/speed')} src={edit} alt="Edit" />
              How fast
            </span>
            <span className="total-summary__value">{cleaning.selectedSpeed}</span>
          </div>
          <div className="total-summary__line">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className='total-summary__edit' onClick={() => navigate('/edit/size')} src={edit} alt="Edit" />
              Apartment size, m<sup className="top-index">2</sup>
            </span>
            <span className="total-summary__value">{cleaning.apartmentSize}</span>
          </div>
          <div className="total-summary__line">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className='total-summary__edit' onClick={() => navigate('/edit/property')} src={edit} alt="Edit" />
              Property information
            </span>
            <div className="total-summary__list">
              <span className="total-summary__list-item">{cleaning.bedroomsNum}</span>
              <span className="total-summary__list-item">{cleaning.bathroomsNum}</span>
              <span className="total-summary__list-item">{cleaning.kitchensNum}</span>
            </div>
          </div>
          <div className="total-summary__line">
            <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
              <img className='total-summary__edit' onClick={() => navigate('/edit/cleaning')} src={edit} alt="Edit" />
              {cleaning.selectedCleaning.type}
            </span>
            <span className="total-summary__value">{`€${roundPrice(cleaning.cleaningSum)}`}</span>
          </div>
          {cleaning.selectedServices.length !== 0 && (
            <div className="total-summary__extras">
              <span className={`total-summary__line ${editMode ? 'edit' : ''}`}>
                <img className='total-summary__edit' onClick={() => navigate('/edit/extras')} src={edit} alt="Edit" />
                Extra services:
              </span>
              <div className="total-summary__extras-list">
                {cleaning.selectedServices.map((service, index) => (
                  <div key={index} className="total-summary__line">
                    <span className="total-summary__name">
                      {`${service.name}${service.number > 1 ? ` (x${service.number})` : ''}`}
                    </span>
                    <span className="total-summary__value">
                      {`€${roundPrice(service.price * service.number)}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {cleaning.selectedSpeed !== 'x1' && (
            <div className="total-summary__line">
              <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                <img className='total-summary__edit' onClick={() => navigate('/edit/speed')} src={edit} alt="Edit" />
                How fast
              </span>
              <span className="total-summary__value">{`€${roundPrice(cleaning.speedSum)}`}</span>
            </div>
          )}
          {cleaning.timeSum !== 0 && (
            <div className="total-summary__line">
              <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                <img className='total-summary__edit' onClick={() => navigate('/edit/time')} src={edit} alt="Edit" />
                Off-peak hours
              </span>
              <span className="total-summary__value">{`€${roundPrice(cleaning.timeSum)}`}</span>
            </div>
          )}
          <div className="total-summary__line">
            <span className="total-summary__name">Subtotal</span>
            <span className="total-summary__value">{`€${roundPrice(cleaning.subtotal)}`}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">IVA 21%</span>
            <span className="total-summary__value">{`€${roundPrice(cleaning.iva)}`}</span>
          </div>
          <div className="total-summary__line">
            <span className="total-summary__name">Total</span>
            <span className="total-summary__value">{`€${roundPrice(cleaning.total)}`}</span>
          </div>
        </div>
        <div className={editMode ? 'hidden' : 'checkbox'}>
          <input
            id="save"
            type="checkbox"
            checked={policyAccepting}
            onChange={() => setPolicyAccepting((state) => !state)}
          />
          <div className="checkbox__tick" onClick={() => setPolicyAccepting((state) => !state)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path
                d="M11.6667 3.96484L5.25 10.3815L2.33333 7.46484"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <label htmlFor="save" className="checkbox__label">
            I understand and accept <NavLink to='/cancellation-policy' className="checkbox__link">The Cancellation Policy</NavLink>*
          </label>
        </div>
        <div className="total-summary__buttons">
          <button className={`btn total-summary__btn ${editMode ? 'edit' : 'btn_light'}`} onClick={() => setEditMode((state) => !state)}>
            <img className={editMode ? 'hidden' : 'total-summary__edit'} src={edit} alt="Edit" />
            {editMode ? 'Save' : 'Edit'}
          </button>
          <button className={`btn total-summary__btn ${policyAccepting ? '' : 'inactive'} ${editMode ? 'hidden' : ''}`} onClick={handlePayment}>
            Pay
          </button>
        </div>
        <p className={editMode ? 'hidden' : 'total-summary__text'}>
          We strive to reply within 15 minutes between 06:00 and 00:00
        </p>
      </div>
    </div>
  );
};

export default Summary;
