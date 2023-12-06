import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMonths, subMonths } from 'date-fns';
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
} from '../../store/actions/cleaningActions';
import {
  months,
  cleaningTypes,
  bedrooms,
  bathrooms,
  kitchens,
  extraServices,
  speedOptions,
  speedCoeff,
  times,
  frequency,
} from '../../constants/selectOptions';
import { calculateCleaningTypePrice, calculateTimeCoeff, roundPrice } from '../../utils/calculatePrice';
import CustomSelect from '../CustomSelect/CustomSelect';
import Calendar from '../Calendar/Calendar';
import './Booking.scss';

const Booking = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cleaning = useSelector((state) => state.cleaning);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const setIsAuthorizationOpen = useOutletContext();

  useEffect(() => {
    const cleaningSum =
      cleaning.apartmentSize === ''
        ? 0
        : calculateCleaningTypePrice(cleaning.selectedCleaning.price, cleaning.apartmentSize, [
            cleaning.bedroomsNum,
            cleaning.bathroomsNum,
            cleaning.kitchensNum,
          ]);
    dispatch(setCleaningSumAction(cleaningSum));
  }, [
    cleaning.apartmentSize,
    cleaning.bedroomsNum,
    cleaning.bathroomsNum,
    cleaning.kitchensNum,
    cleaning.selectedCleaning,
  ]);

  useEffect(() => {
    const extrasSum = cleaning.selectedServices.reduce((sum, service) => sum + service.price * service.number, 0);
    dispatch(setExtrasSumAction(extrasSum));
  }, [cleaning.selectedServices]);

  useEffect(() => {
    const totalCleaningSum = cleaning.cleaningSum + cleaning.extrasSum;
    const speedSum = totalCleaningSum * (speedCoeff[speedOptions.indexOf(cleaning.selectedSpeed)] - 1);
    dispatch(setSpeedSumAction(speedSum));
    const timeSum = totalCleaningSum * (calculateTimeCoeff(cleaning.time) - 1);
    dispatch(setTimeSumAction(timeSum));
    const subtotal = totalCleaningSum + speedSum + timeSum;
    dispatch(setSubtotalAction(subtotal));
    const iva = subtotal * 0.21;
    dispatch(setIvaAction(iva));
    dispatch(setTotalAction(Number(subtotal) + Number(iva)));
  }, [cleaning.cleaningSum, cleaning.extrasSum, cleaning.selectedSpeed, cleaning.time]);

  const handleServicesChange = (service) => {
    if (cleaning.selectedServices.find((selectedService) => selectedService.name === service.name)) {
      dispatch(setSelectedServicesAction(cleaning.selectedServices.filter((elem) => elem.name !== service.name)));
    } else {
      dispatch(setSelectedServicesAction([...cleaning.selectedServices, { ...service, number: 1 }]));
    }
  };

  const handleServicesNumberChange = (e, service, isMore) => {
    e.stopPropagation();
    const serviceNumber = cleaning.selectedServices.find((selectedService) => selectedService.name === service.name).number;
    const oldServices = cleaning.selectedServices.filter((elem) => elem.name !== service.name);

    if (isMore && serviceNumber < 20) {
      dispatch(setSelectedServicesAction([...oldServices, { ...service, number: serviceNumber + 1 }]));
    } else if (!isMore && serviceNumber > 1) {
      dispatch(setSelectedServicesAction([...oldServices, { ...service, number: serviceNumber - 1 }]));
    }
  };

  const generateOptionsBlock = (options, selectedOption, setSelectedOption) =>
    options.map((elem, index) => (
      <div
        key={index}
        onClick={() => dispatch(setSelectedOption(elem))}
        className={`form__option-variant ${selectedOption === elem ? 'checked' : ''}`}
      >
        <input
          id={elem}
          type="radio"
          value={elem}
          checked={selectedOption === elem}
          onChange={(e) => dispatch(setSelectedOption(e.target.value))}
          onClick={(e) => e.stopPropagation()}
          className="form__option-checker"
        />
        <label htmlFor={elem} className="form__option-label">
          {elem}
        </label>
      </div>
    ));

  const handleMonthChange = (month) => {
    const selectedMonth = months.indexOf(month);
    const monthDiff = new Date().getMonth() - selectedMonth;
    if (monthDiff > 0) {
      setCurrentDate(new Date(new Date().getFullYear() + 1, selectedMonth, 1));
    } else {
      setCurrentDate(new Date(new Date().getFullYear(), selectedMonth, 1));
    }
  };

  const prevMonth = () => {
    if (
      `${currentDate.getMonth()}.${currentDate.getFullYear()}` !==
      `${new Date().getMonth()}.${new Date().getFullYear()}`
    ) {
      setCurrentDate(subMonths(currentDate, 1));
    }
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //form validation
    if (user.isAuth) {
      navigate('/summary');
    } else {
      setIsAuthorizationOpen(true);
    }
  };

  return (
    <div className="booking">
      <section className="slide-wrap">
        <div className="container">
          <div className="slide">
            <h1 className="slide__title">
              Maid <br /> for perfection
            </h1>
            <p className="slide__text">Professional cleaning 7 days a week starting at € 10/hour</p>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="book">
          <div className="book__form">
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="form__section">
                <h3 className="form__title">Property information</h3>
                <div className="form__input-wrap">
                  <label htmlFor="size" className="form__label">
                    Apartment size, m<sup className="top-index">2</sup>
                  </label>
                  <input
                    id="size"
                    type="number"
                    className="input"
                    value={cleaning.apartmentSize}
                    onChange={(e) => dispatch(setApartmentSizeAction(e.target.value))}
                  />
                </div>
                <div className="form__properties">
                  <div className="form__property">
                    <span className="form__label">How many bedrooms?</span>
                    <CustomSelect
                      options={bedrooms}
                      selectedOption={cleaning.bedroomsNum}
                      setSelectedOption={setBedroomsNumAction}
                    />
                  </div>
                  <div className="form__property">
                    <span className="form__label">How many bathrooms?</span>
                    <CustomSelect
                      options={bathrooms}
                      selectedOption={cleaning.bathroomsNum}
                      setSelectedOption={setBathroomsNumAction}
                    />
                  </div>
                  <div className="form__property">
                    <span className="form__label">How many kitchens?</span>
                    <CustomSelect
                      options={kitchens}
                      selectedOption={cleaning.kitchensNum}
                      setSelectedOption={setKitchensNumAction}
                    />
                  </div>
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">Service type</h3>
                <p className="form__text">
                  Prices have a fixed and a variable rate based on m<sup className="top-index top-index_little">2</sup>.
                  If you add extra services, the price will update automatically.
                </p>
                <div className="form__radios">
                  {cleaningTypes.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => dispatch(setSelectedCleaningAction(elem))}
                      className={`form__radio ${cleaning.selectedCleaning.type === elem.type ? 'checked' : ''}`}
                    >
                      <div className="form__radio-value">
                        <input
                          id={elem.type.split(' ').join('')}
                          type="radio"
                          value={elem.type}
                          checked={cleaning.selectedCleaning.type === elem.type}
                          onChange={(e) => dispatch(setSelectedCleaningAction(e.target.value))}
                          onClick={(e) => e.stopPropagation()}
                          className="form__radio-checker"
                        />
                        <svg className='form__radio-checked' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#E8E7E7"/>
                          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="transparent"/>
                        </svg>
                        <label htmlFor={elem.type.split(' ').join('')} className="form__radio-label">
                          {elem.type}
                        </label>
                      </div>
                      <span className="form__radio-price">
                        {cleaning.apartmentSize === ''
                          ? '-'
                          : `€${roundPrice(
                              calculateCleaningTypePrice(elem.price, cleaning.apartmentSize, [
                                cleaning.bedroomsNum,
                                cleaning.bathroomsNum,
                                cleaning.kitchensNum,
                              ]),
                            )}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">Extra services</h3>
                <div className="form__services">
                  {extraServices.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => handleServicesChange(elem)}
                      className={`form__service ${
                        cleaning.selectedServices.find((selectedService) => selectedService.name === elem.name)
                          ? 'checked'
                          : ''
                      }`}
                    >
                      <div className="form__service-value">
                        <svg
                          className="form__service-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.50013 13.4749L4.02513 9.99987L2.8418 11.1749L7.50013 15.8332L17.5001 5.8332L16.3251 4.6582L7.50013 13.4749Z"
                            fill="white"
                          />
                        </svg>
                        <span className="form__service-label">{elem.name}</span>
                      </div>
                      <div className={cleaning.selectedServices.find((selectedService) => selectedService.name === elem.name) ? 'form__service-number' : 'hidden'}>
                        <svg className='form__service-sign' onClick={(e) => handleServicesNumberChange(e, elem, false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M17 12H7" stroke="#E8E7E7" strokeLinecap="round"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E8E7E7"/>
                        </svg>
                        <span className="form__service-quantity">
                          {cleaning.selectedServices.find((selectedService) => selectedService.name === elem.name)?.number}
                        </span>
                        <svg className='form__service-sign' onClick={(e) => handleServicesNumberChange(e, elem, true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M17 12H7" stroke="#E8E7E7" strokeLinecap="round"/>
                          <path d="M12 17V7" stroke="#E8E7E7" strokeLinecap="round"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E8E7E7"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">How fast?</h3>
                <p className="form__text">
                  For a faster clean, select '2x' to reduce a 6-hour clean to 3 hours with two cleaners, or '3x' to
                  reduce it to 2 hours with three cleaners. Subject to availability.
                </p>
                <div className="form__option">
                  {generateOptionsBlock(speedOptions, cleaning.selectedSpeed, setSelectedSpeedAction)}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">When?</h3>
                <div className="form__input-wrap form__time">
                  <span className="form__label">Time</span>
                  <CustomSelect options={times} selectedOption={cleaning.time} setSelectedOption={setTimeAction} />
                </div>
                <span className="form__label">Date</span>
                <div className="form__date">
                  <div className="form__date-group">
                    <div className="form__date-input">
                      <CustomSelect
                        options={months}
                        selectedOption={months[currentDate.getMonth()]}
                        setSelectedOption={handleMonthChange}
                        isStateFunction={true}
                      />
                      <span className="form__year">{currentDate.getFullYear()}</span>
                    </div>
                    <div className="form__arrows">
                      <svg
                        className="form__arrow"
                        onClick={prevMonth}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                      >
                        <path
                          className="form__arrow-line"
                          d="M19.7812 6.17188L1.56961 6.17188"
                          stroke={
                            `${currentDate.getMonth()}.${currentDate.getFullYear()}` !==
                            `${new Date().getMonth()}.${new Date().getFullYear()}`
                              ? '#000'
                              : '#6D6D6D'
                          }
                          strokeWidth="0.872414"
                          strokeLinecap="round"
                        />
                        <path
                          className="form__arrow-line"
                          d="M7.02197 11.623L1.56939 6.17046L7.02197 0.717875"
                          stroke={
                            `${currentDate.getMonth()}.${currentDate.getFullYear()}` !==
                            `${new Date().getMonth()}.${new Date().getFullYear()}`
                              ? '#000'
                              : '#6D6D6D'
                          }
                          strokeWidth="0.872414"
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        className="form__arrow"
                        onClick={nextMonth}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="13"
                        viewBox="0 0 20 13"
                        fill="none"
                      >
                        <path
                          d="M0.936035 6.17188L19.1477 6.17188"
                          stroke="#000"
                          strokeWidth="0.872414"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.6953 11.623L19.1479 6.17046L13.6953 0.717875"
                          stroke="#000"
                          strokeWidth="0.872414"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <Calendar
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}
                    selectedDay={cleaning.date}
                    setSelectedDay={setDateAction}
                  />
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">How often?</h3>
                <div className="form__option">
                  {generateOptionsBlock(frequency, cleaning.selectedFrequency, setSelectedFrequencyAction)}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">Property address</h3>
                <div className="form__input-wrap">
                  <label htmlFor="address1" className="form__label">
                    Address
                  </label>
                  <input
                    id="address1"
                    type="text"
                    className="input form__address"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                  <input
                    id="address2"
                    type="text"
                    className="input form__address"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div className="form__city">
                  <div className="form__input-wrap form__code">
                    <label htmlFor="code" className="form__label">
                      Postal code
                    </label>
                    <input
                      id="code"
                      type="number"
                      className="input form__address"
                      value={cleaning.postalCode}
                      onChange={(e) => dispatch(setPostalCodeAction(e.target.value))}
                    />
                  </div>
                  <div className="form__input-wrap form__city-name">
                    <label htmlFor="city" className="form__label">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="input form__address"
                      value={cleaning.city}
                      onChange={(e) => dispatch(setCityAction(e.target.value))}
                    />
                  </div>
                </div>
                <div className="form__input-wrap">
                  <label htmlFor="province" className="form__label">
                    Province
                  </label>
                  <input
                    id="province"
                    type="text"
                    className="input form__address"
                    value={cleaning.province}
                    onChange={(e) => dispatch(setProvinceAction(e.target.value))}
                  />
                </div>
                <div className="form__input-wrap">
                  <label htmlFor="instructions" className="form__label">
                    Special Instructions
                  </label>
                  <textarea
                    id="instructions"
                    rows="1"
                    className="input form__instructions"
                    value={cleaning.instructions}
                    onChange={(e) => dispatch(setInstructionsAction(e.target.value))}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight + 2}px`;
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="form__saving">
                <input
                  id='save'
                  type="checkbox"
                  checked={cleaning.saving}
                  onChange={() => dispatch(setSavingAction(!cleaning.saving))}
                  className="form__saving-checker"
                />
                <div className="form__saving-tick" onClick={() => dispatch(setSavingAction(!cleaning.saving))}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M11.6667 3.96484L5.25 10.3815L2.33333 7.46484" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor='save' className="form__saving-label">
                  Save information for future
                </label>
              </div>
              <button className="btn form__btn form__btn" type="submit">
                Next
              </button>
            </form>
          </div>
          <div className="book__summary">
            <div className="summary">
              <h2 className="summary__title">Summary</h2>
              <div className="summary__line summary__line_bold">
                <h3 className="summary__subtitle">{cleaning.selectedCleaning.type}</h3>
                <span className="summary__price">{`€${roundPrice(cleaning.cleaningSum)}`}</span>
              </div>
              <div className={cleaning.selectedServices.length !== 0 ? 'summary__line summary__line_list' : 'hidden'}>
                <span className="summary__item">Extra services</span>
                <span className="summary__price">{`€${roundPrice(cleaning.extrasSum)}`}</span>
              </div>
              <div className="summary__extras">
                {cleaning.selectedServices.map((service, index) => {
                  const serviceNumber = cleaning.selectedServices.find((selectedService) => selectedService.name === service.name).number;
                  return (
                    <div key={index} className="summary__line summary__line_list">
                      <span className="summary__item">{`${service.name}${serviceNumber > 1 ? ` (x${serviceNumber})` : ''}`}</span>
                      <span className="summary__price">{`€${roundPrice(service.price * serviceNumber)}`}</span>
                    </div>
                  );
                })}
              </div>
              <div className={cleaning.selectedSpeed !== 'x1' ? 'summary__line' : 'hidden'}>
                <span className="summary__item">How fast</span>
                <span className="summary__price">{`€${roundPrice(cleaning.speedSum)}`}</span>
              </div>
              <div className={cleaning.timeSum !== 0 ? 'summary__line' : 'hidden'}>
                <span className="summary__item">Off-peak hours</span>
                <span className="summary__price">{`€${roundPrice(cleaning.timeSum)}`}</span>
              </div>
              <div className="summary__subtotal">
                <div className="summary__line">
                  <span className="summary__item">Subtotal</span>
                  <span className="summary__price">{`€${roundPrice(cleaning.subtotal)}`}</span>
                </div>
                <div className="summary__line">
                  <span className="summary__item">IVA 21%</span>
                  <span className="summary__price">{`€${roundPrice(cleaning.iva)}`}</span>
                </div>
              </div>
              <div className="summary__line summary__line_bold">
                <span className="summary__subtitle">Total</span>
                <span className="summary__price">{`€${roundPrice(cleaning.total)}`}</span>
              </div>
              <button className="btn form__btn summary__btn" type="submit">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Booking;
