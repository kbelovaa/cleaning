import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
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
  setAddress1Action,
  setAddress2Action,
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cleaning = useSelector((state) => state.cleaning);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState(cleaning.date);
  const [time, setTime] = useState(cleaning.time);
  const [selectedCleaning, setSelectedCleaning] = useState(cleaning.selectedCleaning);
  const [selectedServices, setSelectedServices] = useState(cleaning.selectedServices);
  const [apartmentSize, setApartmentSize] = useState(cleaning.apartmentSize);
  const [selectedSpeed, setSelectedSpeed] = useState(cleaning.selectedSpeed);
  const [selectedFrequency, setSelectedFrequency] = useState(cleaning.selectedFrequency);
  const [bedroomsNum, setBedroomsNum] = useState(cleaning.bedroomsNum);
  const [bathroomsNum, setBathroomsNum] = useState(cleaning.bathroomsNum);
  const [kitchensNum, setKitchensNum] = useState(cleaning.kitchensNum);
  const [address1, setAddress1] = useState(cleaning.address1);
  const [address2, setAddress2] = useState(cleaning.address2);
  const [postalCode, setPostalCode] = useState(cleaning.postalCode);
  const [city, setCity] = useState(cleaning.city);
  const [province, setProvince] = useState(cleaning.province);
  const [instructions, setInstructions] = useState(cleaning.instructions);
  const [saving, setSaving] = useState(cleaning.saving);
  const [cleaningSum, setCleaningSum] = useState(cleaning.cleaningSum);
  const [extrasSum, setExtrasSum] = useState(cleaning.extrasSum);
  const [speedSum, setSpeedSum] = useState(cleaning.speedSum);
  const [timeSum, setTimeSum] = useState(cleaning.timeSum);
  const [subtotal, setSubtotal] = useState(cleaning.subtotal);
  const [iva, setIva] = useState(cleaning.iva);
  const [total, setTotal] = useState(cleaning.total);
  const [isSummaryUnderlined, setIsSummaryUnderlined] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = pathname.split('/');

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const addressRef = useRef(null);
  const speedRef = useRef(null);
  const sizeRef = useRef(null);
  const propertyRef = useRef(null);
  const cleaningRef = useRef(null);
  const extrasRef = useRef(null);

  const setIsAuthorizationOpen = useOutletContext();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 490) {
        setIsSummaryUnderlined(true);
      } else if (scrollY > 0) {
        setIsSummaryUnderlined(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let currentRef;
    switch (routes[2]) {
      case 'date':
        currentRef = dateRef;
        break;
      case 'time':
        currentRef = timeRef;
        break;
      case 'address':
        currentRef = addressRef;
        break;
      case 'speed':
        currentRef = speedRef;
        break;
      case 'size':
        currentRef = sizeRef;
        break;
      case 'property':
        currentRef = propertyRef;
        break;
      case 'cleaning':
        currentRef = cleaningRef;
        break;
      case 'extras':
        currentRef = extrasRef;
        break;
      default:
        currentRef = null;
    }
    if (currentRef) {
      const element = currentRef.current;
      const header = document.getElementById('header');
      const y = element.getBoundingClientRect().top - header.clientHeight * 1.5;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const cleaningSum = apartmentSize === ''
      ? 0
      : calculateCleaningTypePrice(selectedCleaning.price, apartmentSize, [
        bedroomsNum,
        bathroomsNum,
        kitchensNum,
      ]);
    setCleaningSum(cleaningSum);
  }, [apartmentSize, bedroomsNum, bathroomsNum, kitchensNum, selectedCleaning,
  ]);

  useEffect(() => {
    const extrasSum = selectedServices.reduce((sum, service) => sum + service.price * service.number, 0);
    setExtrasSum(extrasSum);
  }, [selectedServices]);

  useEffect(() => {
    const totalCleaningSum = cleaningSum + extrasSum;
    const speedSum = totalCleaningSum * (speedCoeff[speedOptions.indexOf(selectedSpeed)] - 1);
    setSpeedSum(speedSum);
    const timeSum = totalCleaningSum * (calculateTimeCoeff(time) - 1);
    setTimeSum(timeSum);
    const subtotal = totalCleaningSum + speedSum + timeSum;
    setSubtotal(subtotal);
    const iva = subtotal * 0.21;
    setIva(iva);
    setTotal(Number(subtotal) + Number(iva));
  }, [cleaningSum, extrasSum, selectedSpeed, time]);

  const handleServicesChange = (service) => {
    if (selectedServices.find((selectedService) => selectedService.name === service.name)) {
      setSelectedServices(selectedServices.filter((elem) => elem.name !== service.name));
    } else {
      setSelectedServices([...selectedServices, { ...service, number: 1 }]);
    }
  };

  const handleServicesNumberChange = (e, service, isMore) => {
    e.stopPropagation();
    const serviceNumber = selectedServices.find(
      (selectedService) => selectedService.name === service.name,
    ).number;
    const oldServices = selectedServices.filter((elem) => elem.name !== service.name);

    if (isMore && serviceNumber < 20) {
      setSelectedServices([...oldServices, { ...service, number: serviceNumber + 1 }]);
    } else if (!isMore && serviceNumber > 1) {
      setSelectedServices([...oldServices, { ...service, number: serviceNumber - 1 }]);
    }
  };

  const generateOptionsBlock = (options, selectedOption, setSelectedOption) => options.map((elem, index) => (
    <div
      key={index}
      onClick={() => setSelectedOption(elem)}
      className={`form__option-variant ${selectedOption === elem ? 'checked' : ''}`}
    >
      <input
        id={elem}
        type="radio"
        value={elem}
        checked={selectedOption === elem}
        onChange={(e) => setSelectedOption(e.target.value)}
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
      `${currentDate.getMonth()}.${currentDate.getFullYear()}` !== `${new Date().getMonth()}.${new Date().getFullYear()}`
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
      dispatch(setDateAction(date));
      dispatch(setTimeAction(time));
      dispatch(setSelectedCleaningAction(selectedCleaning));
      dispatch(setSelectedServicesAction(selectedServices));
      dispatch(setApartmentSizeAction(apartmentSize));
      dispatch(setSelectedSpeedAction(selectedSpeed));
      dispatch(setSelectedFrequencyAction(selectedFrequency));
      dispatch(setBedroomsNumAction(bedroomsNum));
      dispatch(setBathroomsNumAction(bathroomsNum));
      dispatch(setKitchensNumAction(kitchensNum));
      dispatch(setAddress1Action(address1));
      dispatch(setAddress2Action(address2));
      dispatch(setPostalCodeAction(postalCode));
      dispatch(setCityAction(city));
      dispatch(setProvinceAction(province));
      dispatch(setInstructionsAction(instructions));
      dispatch(setSavingAction(saving));
      dispatch(setCleaningSumAction(cleaningSum));
      dispatch(setExtrasSumAction(extrasSum));
      dispatch(setSpeedSumAction(speedSum));
      dispatch(setTimeSumAction(timeSum));
      dispatch(setSubtotalAction(subtotal));
      dispatch(setIvaAction(iva));
      dispatch(setTotalAction(total));
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
                <div className="form__input-wrap" ref={sizeRef}>
                  <label htmlFor="size" className="form__label">
                    Apartment size, m<sup className="top-index">2</sup>
                  </label>
                  <input
                    id="size"
                    type="number"
                    className="input"
                    value={apartmentSize}
                    onChange={(e) => setApartmentSize(e.target.value)}
                  />
                </div>
                <div className="form__properties" ref={propertyRef}>
                  <div className="form__property">
                    <span className="form__label">How many bedrooms?</span>
                    <CustomSelect
                      options={bedrooms}
                      selectedOption={bedroomsNum}
                      setSelectedOption={setBedroomsNum}
                    />
                  </div>
                  <div className="form__property">
                    <span className="form__label">How many bathrooms?</span>
                    <CustomSelect
                      options={bathrooms}
                      selectedOption={bathroomsNum}
                      setSelectedOption={setBathroomsNum}
                    />
                  </div>
                  <div className="form__property">
                    <span className="form__label">How many kitchens?</span>
                    <CustomSelect
                      options={kitchens}
                      selectedOption={kitchensNum}
                      setSelectedOption={setKitchensNum}
                    />
                  </div>
                </div>
              </div>
              <div className="form__section" ref={cleaningRef}>
                <h3 className="form__title">Service type</h3>
                <p className="form__text">
                  Prices have a fixed and a variable rate based on m<sup className="top-index top-index_little">2</sup>.
                  If you add extra services, the price will update automatically.
                </p>
                <div className="form__radios">
                  {cleaningTypes.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCleaning(elem)}
                      className={`form__radio ${selectedCleaning.type === elem.type ? 'checked' : ''}`}
                    >
                      <div className="form__radio-value">
                        <input
                          id={elem.type.split(' ').join('')}
                          type="radio"
                          value={elem.type}
                          checked={selectedCleaning.type === elem.type}
                          onChange={(e) => setSelectedCleaning(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="form__radio-checker"
                        />
                        <svg
                          className="form__radio-checked"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                            fill="#E8E7E7"
                          />
                          <path
                            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                            fill="transparent"
                          />
                        </svg>
                        <label htmlFor={elem.type.split(' ').join('')} className="form__radio-label">
                          {elem.type}
                        </label>
                      </div>
                      <span className="form__radio-price">
                        {apartmentSize === ''
                          ? '€-'
                          : `€${roundPrice(
                            calculateCleaningTypePrice(elem.price, apartmentSize, [
                              bedroomsNum,
                              bathroomsNum,
                              kitchensNum,
                            ]),
                          )}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form__section" ref={extrasRef}>
                <h3 className="form__title">Extra services</h3>
                <div className="form__services">
                  {extraServices.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => handleServicesChange(elem)}
                      className={`form__service ${
                        selectedServices.find((selectedService) => selectedService.name === elem.name)
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
                      <div
                        className={
                          selectedServices.find((selectedService) => selectedService.name === elem.name)
                            ? 'form__service-number'
                            : 'hidden'
                        }
                      >
                        <svg
                          className="form__service-sign"
                          onClick={(e) => handleServicesNumberChange(e, elem, false)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M17 12H7" stroke="#E8E7E7" strokeLinecap="round" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#E8E7E7"
                          />
                        </svg>
                        <span className="form__service-quantity">
                          {selectedServices.find((selectedService) => selectedService.name === elem.name)?.number}
                        </span>
                        <svg
                          className="form__service-sign"
                          onClick={(e) => handleServicesNumberChange(e, elem, true)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M17 12H7" stroke="#E8E7E7" strokeLinecap="round" />
                          <path d="M12 17V7" stroke="#E8E7E7" strokeLinecap="round" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#E8E7E7"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form__section" ref={speedRef}>
                <h3 className="form__title">How fast?</h3>
                <p className="form__text">
                  For a faster clean, select '2x' to reduce a 6-hour clean to 3 hours with two cleaners, or '3x' to
                  reduce it to 2 hours with three cleaners. Subject to availability.
                </p>
                <div className="form__option">
                  {generateOptionsBlock(speedOptions, selectedSpeed, setSelectedSpeed)}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">When?</h3>
                <div className="form__input-wrap form__time" ref={timeRef}>
                  <span className="form__label">Time</span>
                  <CustomSelect options={times} selectedOption={time} setSelectedOption={setTime} />
                </div>
                <span className="form__label" ref={dateRef}>Date</span>
                <div className="form__date">
                  <div className="form__date-group">
                    <div className="form__date-input">
                      <CustomSelect
                        options={months}
                        selectedOption={months[currentDate.getMonth()]}
                        setSelectedOption={handleMonthChange}
                      />
                      <span className="form__year">{currentDate.getFullYear()}</span>
                    </div>
                    <div className="form__arrows">
                      <svg
                        className={`form__arrow ${`${currentDate.getMonth()}.${currentDate.getFullYear()}` !== `${new Date().getMonth()}.${new Date().getFullYear()}` ? '' : 'unactive'}`}
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
                            `${currentDate.getMonth()}.${currentDate.getFullYear()}` !== `${new Date().getMonth()}.${new Date().getFullYear()}`
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
                            `${currentDate.getMonth()}.${currentDate.getFullYear()}` !== `${new Date().getMonth()}.${new Date().getFullYear()}`
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
                    selectedDay={date}
                    setSelectedDay={setDate}
                  />
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">How often?</h3>
                <div className="form__option">
                  {generateOptionsBlock(frequency, selectedFrequency, setSelectedFrequency)}
                </div>
              </div>
              <div className="form__section" ref={addressRef}>
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
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
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
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
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
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight + 2}px`;
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="checkbox">
                <input
                  id="save"
                  type="checkbox"
                  checked={saving}
                  onChange={() => (setSaving(!saving))}
                />
                <div className="checkbox__tick" onClick={() => setSaving(!saving)}>
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
                  Save information for future
                </label>
              </div>
              <button className="btn form__btn form__btn" type="submit">
                {routes[1] ? 'Save' : 'Next'}
              </button>
            </form>
          </div>
          <div className="book__summary">
            <div className={`summary ${isSummaryUnderlined ? 'underlined' : ''}`}>
              <h2 className="summary__title">Summary</h2>
              <div className="summary__line summary__line_bold">
                <h3 className="summary__subtitle">{selectedCleaning.type}</h3>
                <span className="summary__price">{`€${roundPrice(cleaningSum)}`}</span>
              </div>
              <div className={selectedServices.length !== 0 ? 'summary__line summary__line_list' : 'hidden'}>
                <span className="summary__item">Extra services</span>
                <span className="summary__price">{`€${roundPrice(extrasSum)}`}</span>
              </div>
              <div className="summary__extras">
                {selectedServices.map((service, index) => {
                  const serviceNumber = selectedServices.find(
                    (selectedService) => selectedService.name === service.name,
                  ).number;
                  return (
                    <div key={index} className="summary__line summary__line_list">
                      <span className="summary__item">{`${service.name}${
                        serviceNumber > 1 ? ` (x${serviceNumber})` : ''
                      }`}</span>
                      <span className="summary__price">{`€${roundPrice(service.price * serviceNumber)}`}</span>
                    </div>
                  );
                })}
              </div>
              <div className={selectedSpeed !== 'x1' ? 'summary__line' : 'hidden'}>
                <span className="summary__item">How fast</span>
                <span className="summary__price">{`€${roundPrice(speedSum)}`}</span>
              </div>
              <div className={timeSum !== 0 ? 'summary__line' : 'hidden'}>
                <span className="summary__item">Off-peak hours</span>
                <span className="summary__price">{`€${roundPrice(timeSum)}`}</span>
              </div>
              <div className="summary__subtotal">
                <div className="summary__line">
                  <span className="summary__item">Subtotal</span>
                  <span className="summary__price">{`€${roundPrice(subtotal)}`}</span>
                </div>
                <div className="summary__line">
                  <span className="summary__item">IVA 21%</span>
                  <span className="summary__price">{`€${roundPrice(iva)}`}</span>
                </div>
              </div>
              <div className="summary__line summary__line_bold">
                <span className="summary__subtitle">Total</span>
                <span className="summary__price">{`€${roundPrice(total)}`}</span>
              </div>
              <button className="btn form__btn summary__btn" type="submit">
                {routes[1] ? 'Save' : 'Next'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Booking;
