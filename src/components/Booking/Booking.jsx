import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import {
  parse,
  differenceInMonths,
  differenceInWeeks,
  addMonths,
  subMonths,
  addWeeks,
  startOfDay,
  isBefore,
  differenceInDays,
  format,
} from 'date-fns';
import {
  setApartmentSizeAction,
  setBathroomsNumAction,
  setBedroomsNumAction,
  setCityAction,
  setCleaningSumAction,
  setDatesAction,
  setExtrasSumAction,
  setInstructionsAction,
  setSavingAction,
  setIvaAction,
  setKitchensNumAction,
  setPostalCodeAction,
  setProvinceAction,
  setSelectedCleaningAction,
  setSelectedServicesAction,
  setSelectedSpeedAction,
  setSubtotalAction,
  setTimeAction,
  setTotalAction,
  setSpeedSumAction,
  setTimeSumAction,
  setAddress1Action,
  setAddress2Action,
  setRepeatAction,
  setDateAction,
  setCustomScheduleAction,
  setStartDateAction,
  setLastDateAction,
  setDurationAction,
  setAddExcludedDatesAction,
  setExcludedDatesAction,
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
  repeats,
  times,
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
  const [repeat, setRepeat] = useState(cleaning.repeat);
  const [date, setDate] = useState(cleaning.date);
  const [isDateValid, setIsDateValid] = useState(true);
  const [time, setTime] = useState(cleaning.time);
  const [dates, setDates] = useState(cleaning.dates);
  const [addExcludedDates, setAddExcludedDates] = useState(cleaning.addExcludedDates);
  const [excludedDates, setExcludedDates] = useState(cleaning.excludedDates);
  const [customSchedule, setCustomSchedule] = useState(cleaning.customSchedule);
  const [duration, setDuration] = useState(cleaning.duration);
  const [startDate, setStartDate] = useState(cleaning.startDate);
  const [isStartDateValid, setIsStartDateValid] = useState(true);
  const [isStartDateActive, setIsStartDateActive] = useState(false);
  const [lastDate, setLastDate] = useState(cleaning.lastDate);
  const [isLastDateValid, setIsLastDateValid] = useState(true);
  const [isLastDateActive, setIsLastDateActive] = useState(false);
  const [isAutoUpdate, setIsAutoUpdate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedCleaning, setSelectedCleaning] = useState(cleaning.selectedCleaning);
  const [selectedServices, setSelectedServices] = useState(cleaning.selectedServices);
  const [apartmentSize, setApartmentSize] = useState(cleaning.apartmentSize);
  const [isApartmentSizeValid, setIsApartmentSizeValid] = useState(true);
  const [selectedSpeed, setSelectedSpeed] = useState(cleaning.selectedSpeed);
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
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = pathname.split('/');

  const customScheduleRefs = useRef([]);
  const excludedDateRefs = useRef([]);
  const dateTimeRef = useRef(null);
  const addressRef = useRef(null);
  const speedRef = useRef(null);
  const sizeRef = useRef(null);
  const propertyRef = useRef(null);
  const cleaningRef = useRef(null);
  const extrasRef = useRef(null);
  const calendarRef = useRef(null);
  const startDateRef = useRef(null);
  const lastDateRef = useRef(null);

  const setIsAuthorizationOpen = useOutletContext();

  const { t } = useTranslation();

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
    switch (routes[3]) {
      case 'date-time':
        currentRef = dateTimeRef;
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

  const checkClickOutside = (ref, isActive, setIsActive) => {
    const handleClickOutside = (e) => {
      if (
        ref.current &&
        calendarRef.current &&
        !ref.current.contains(e.target) &&
        !calendarRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  };

  useEffect(() => checkClickOutside(startDateRef, isStartDateActive, setIsStartDateActive), [isStartDateActive]);
  useEffect(() => checkClickOutside(lastDateRef, isLastDateActive, setIsLastDateActive), [isLastDateActive]);

  const handleDatesArrUpdate = (setValue, value, key, index) =>
    setValue((prevArr) => {
      const newData = [...prevArr];
      if (newData[index]) {
        newData[index] = { ...newData[index], [key]: value };
      }
      return newData;
    });

  const customScheduleIsDateActives = useMemo(() => customSchedule.map((elem) => elem.isDateActive), [customSchedule]);

  useEffect(() => {
    customSchedule.forEach((elem, index) =>
      checkClickOutside(customScheduleRefs.current[index], elem.isDateActive, (value) =>
        handleDatesArrUpdate(setCustomSchedule, value, 'isDateActive', index),
      ),
    );
  }, [customScheduleIsDateActives]);

  const isExcludedDateActives = useMemo(() => excludedDates.map((elem) => elem.isDateActive), [excludedDates]);

  useEffect(() => {
    excludedDates.forEach((elem, index) =>
      checkClickOutside(excludedDateRefs.current[index], elem.isDateActive, (value) =>
        handleDatesArrUpdate(setExcludedDates, value, 'isDateActive', index),
      ),
    );
  }, [isExcludedDateActives]);

  const createRefs = (array, refsArray) => {
    refsArray.current = Array(array.length)
      .fill()
      .map((_, i) => refsArray.current[i] || React.createRef());
  };

  useEffect(() => {
    createRefs(customSchedule, customScheduleRefs);
  }, [customSchedule.length]);

  useEffect(() => {
    createRefs(excludedDates, excludedDateRefs);

    if (excludedDates.length === 0) {
      setAddExcludedDates(false);
    }
  }, [excludedDates.length]);

  const checkForDuplicates = (array, setArray) => {
    array
      .slice()
      .reverse()
      .forEach((elem, index, arr) => {
        const hasDuplicate = arr.slice(index + 1).some((otherElem) => elem.date === otherElem.date);
        const reversedIndex = array.length - 1 - index;

        if (elem.date !== '' && hasDuplicate && array[reversedIndex].isDateUnique) {
          handleDatesArrUpdate(setArray, false, 'isDateUnique', reversedIndex);
        } else if (elem.date !== '' && !hasDuplicate && !array[reversedIndex].isDateUnique) {
          handleDatesArrUpdate(setArray, true, 'isDateUnique', reversedIndex);
        }
      });
  };

  const customScheduleDates = useMemo(() => customSchedule.map((elem) => elem.date), [customSchedule]);

  useEffect(() => {
    if (repeat === 'Custom schedule') {
      checkForDuplicates(customSchedule, setCustomSchedule);
    }
  }, [customScheduleDates]);

  const excludedDateDays = useMemo(() => excludedDates.map((elem) => elem.date), [excludedDates]);

  useEffect(() => {
    if (repeat !== 'Custom schedule' && repeat !== 'One-time') {
      checkForDuplicates(excludedDates, setExcludedDates);
    }
  }, [excludedDateDays]);

  const calculateLastDate = (duration) => {
    const parsedStartDate = parse(startDate, 'dd.MM.yyyy', new Date());

    let newLastDate;

    if (Number(duration) !== 0) {
      switch (repeat) {
        case 'Weekly':
          newLastDate = addWeeks(parsedStartDate, Number(duration) - 1);
          break;
        case 'Every 2 weeks':
          newLastDate = addWeeks(parsedStartDate, 2 * (Number(duration) - 1));
          break;
        case 'Monthly':
          newLastDate = addMonths(parsedStartDate, Number(duration) - 1);
          break;
        default:
          newLastDate = new Date();
      }
    } else {
      newLastDate = parsedStartDate;
    }

    setLastDate(format(newLastDate, 'dd.MM.yyyy'));

    return format(newLastDate, 'dd.MM.yyyy');
  };

  useEffect(() => {
    if (!isAutoUpdate && startDate.replace(/\D/g, '').length === 8 && isStartDateValid && duration) {
      calculateLastDate(duration);
      setCurrentDate(parse(startDate, 'dd.MM.yyyy', new Date()));
    }

    if (startDate.replace(/\D/g, '').length === 0 || duration === '') {
      setLastDate('');
    }

    setIsAutoUpdate(true);
  }, [startDate, duration, repeat]);

  const calculateDuration = () => {
    const parsedStartDate = parse(startDate, 'dd.MM.yyyy', new Date());
    const parsedEndDate = parse(lastDate, 'dd.MM.yyyy', new Date());

    let diff;
    switch (repeat) {
      case 'Weekly':
        diff = differenceInWeeks(parsedEndDate, parsedStartDate);
        break;
      case 'Every 2 weeks':
        diff = Math.floor(differenceInWeeks(parsedEndDate, parsedStartDate) / 2);
        break;
      case 'Monthly':
        diff = differenceInMonths(parsedEndDate, parsedStartDate);
        break;
      default:
        diff = '';
    }

    setDuration(diff + 1);

    return diff + 1;
  };

  const findNearestDuration = () => {
    setIsAutoUpdate(true);

    const parsedStartDate = parse(startDate, 'dd.MM.yyyy', new Date());
    const parsedLastDate = parse(lastDate, 'dd.MM.yyyy', new Date());

    const daysDifference = differenceInDays(parsedLastDate, parsedStartDate);

    let duration;

    switch (repeat) {
      case 'Weekly':
        duration = daysDifference / 7;
        break;
      case 'Every 2 weeks':
        duration = daysDifference / 14;
        break;
      case 'Monthly':
        duration = daysDifference / 30.5;
        break;
      default:
        duration = 0;
    }

    setDuration(Math.round(duration) + 1);
    calculateLastDate(Math.round(duration) + 1);
  };

  useEffect(() => {
    if (!isAutoUpdate && lastDate.replace(/\D/g, '').length === 8 && isLastDateValid && startDate && isStartDateValid) {
      const duration = calculateDuration();

      if (duration !== '' && calculateLastDate(duration) !== lastDate) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
        findNearestDuration();
      }
    }

    if (lastDate.replace(/\D/g, '').length === 0) {
      setDuration('');
    }

    setIsAutoUpdate(true);
  }, [lastDate]);

  useEffect(() => {
    if (startDate && isStartDateValid && lastDate && isLastDateValid && duration) {
      const selectedDays = [startDate];

      for (let i = 1; i < Number(duration); i++) {
        const parsedPrevDate = parse(selectedDays[i - 1], 'dd.MM.yyyy', new Date());
        let selectedDay;

        switch (repeat) {
          case 'Weekly':
            selectedDay = addWeeks(parsedPrevDate, 1);
            break;
          case 'Every 2 weeks':
            selectedDay = addWeeks(parsedPrevDate, 2);
            break;
          case 'Monthly':
            selectedDay = addMonths(parsedPrevDate, 1);
            break;
          default:
            selectedDay = new Date();
        }

        selectedDays.push(format(selectedDay, 'dd.MM.yyyy'));
      }

      setDates(selectedDays);
    }
  }, [startDate, lastDate, duration]);

  useEffect(() => {
    const cleaningSum =
      apartmentSize === ''
        ? 0
        : calculateCleaningTypePrice(selectedCleaning.price, apartmentSize, [bedroomsNum, bathroomsNum, kitchensNum]);
    setCleaningSum(cleaningSum);
  }, [apartmentSize, bedroomsNum, bathroomsNum, kitchensNum, selectedCleaning]);

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

  const handleApartmentSizeChange = (size) => {
    if (/^\d+$/.test(size) || size === '') {
      setIsApartmentSizeValid(true);
      if (size <= 10000) {
        setApartmentSize(size);
      } else {
        setIsApartmentSizeValid(false);
        setTimeout(() => setIsApartmentSizeValid(true), 3000);
      }
    }
  };

  const handleServicesChange = (service) => {
    if (selectedServices.find((selectedService) => selectedService.name === service.name)) {
      setSelectedServices((state) => state.filter((elem) => elem.name !== service.name));
    } else {
      setSelectedServices((state) => [...state, { ...service, number: 1 }]);
    }
  };

  const handleServicesNumberChange = (e, service, isMore) => {
    e.stopPropagation();
    const serviceNumber = selectedServices.find((selectedService) => selectedService.name === service.name).number;
    const oldServices = selectedServices.filter((elem) => elem.name !== service.name);

    if (isMore && serviceNumber < 20) {
      setSelectedServices([...oldServices, { ...service, number: serviceNumber + 1 }]);
    } else if (!isMore && serviceNumber > 1) {
      setSelectedServices([...oldServices, { ...service, number: serviceNumber - 1 }]);
    } else if (!isMore && serviceNumber === 1) {
      setSelectedServices(oldServices);
    }
  };

  const handleDurationChange = (duration) => {
    if (/^\d+$/.test(duration) || duration === '') {
      setIsAutoUpdate(false);
      setDuration(duration);
    }
  };

  const handleDateInput = (value, setSelectedDate, setIsDateValid) => {
    setIsDateValid(true);
    const date = value.split('.');
    const day = date[0];
    const month = date[1];
    const year = date[2];

    if (
      (!Number.isNaN(parseInt(day, 10)) && (parseInt(day, 10) < 1 || parseInt(date, 10) > 31)) ||
      (!Number.isNaN(parseInt(month, 10)) && (parseInt(month, 10) > 12 || parseInt(month, 10) < 1)) ||
      (!Number.isNaN(parseInt(year, 10)) &&
        year.replace(/\D/g, '').length === 4 &&
        isBefore(parse(value, 'dd.MM.yyyy', new Date()), startOfDay(new Date())))
    ) {
      setIsDateValid(false);
    }

    setIsAutoUpdate(false);
    setSelectedDate(value);
  };

  const deleteDate = (index, state, setState, refs) => {
    const newDates = [...state];
    newDates.splice(index, 1);
    setState(newDates);

    refs.current = refs.current.filter((_, i) => i !== index);
  };

  const addCustomDate = () => {
    setCustomSchedule((state) => [
      ...state,
      { time: times[50], date: '', isDateValid: true, isDateActive: false, isDateUnique: true },
    ]);
    customScheduleRefs.current = [...customScheduleRefs.current, React.createRef()];
  };

  const addExcludedDate = () => {
    setExcludedDates((state) => [...state, { date: '', isDateValid: true, isDateActive: false, isDateUnique: true }]);
    excludedDateRefs.current = [...excludedDateRefs.current, React.createRef()];
  };

  const handleExcludedDatesCheck = () => {
    if (!addExcludedDates && excludedDates.length === 0) {
      addExcludedDate();
    }

    setAddExcludedDates((state) => !state);
  };

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

  const checkIsFormValid = () => {
    if (
      apartmentSize &&
      ((repeat === 'One-time' && date.replace(/\D/g, '').length === 8 && isDateValid) ||
        (repeat === 'Custom schedule' &&
          customSchedule.length >= 1 &&
          !customSchedule.find(
            (day) => day.replace(/\D/g, '').length !== 8 || !day.isDateValid || !day.isDateUnique,
          )) ||
        (repeat !== 'One-time' &&
          repeat !== 'Custom schedule' &&
          dates.length >= 1 &&
          startDate.replace(/\D/g, '').length === 8 &&
          isStartDateValid &&
          lastDate.replace(/\D/g, '').length === 8 &&
          isLastDateValid &&
          duration &&
          duration > 0 &&
          ((addExcludedDates &&
            excludedDates.length >= 1 &&
            !excludedDates.find(
              (day) => day.replace(/\D/g, '').length !== 8 || !day.isDateValid || !day.isDateUnique,
            )) ||
            !addExcludedDates))) &&
      address1 &&
      address2 &&
      postalCode &&
      city &&
      province
    ) {
      return true;
    }

    return false;
  };

  const saveOrderData = () => {
    dispatch(setRepeatAction(repeat));

    if (repeat === 'One-time') {
      dispatch(setDateAction(date));
      dispatch(setTimeAction(time));
    }

    if (repeat === 'Custom schedule') {
      dispatch(setCustomScheduleAction(customSchedule));
    }

    if (repeat === 'Weekly' || repeat === 'Every 2 weeks' || repeat === 'Monthly') {
      dispatch(setDatesAction(dates));
      dispatch(setStartDateAction(startDate));
      dispatch(setLastDateAction(lastDate));
      dispatch(setDurationAction(duration));
      dispatch(setAddExcludedDatesAction(addExcludedDates));

      if (addExcludedDates) {
        dispatch(setExcludedDatesAction(excludedDates));
      }
    }

    dispatch(setSelectedCleaningAction(selectedCleaning));
    dispatch(setSelectedServicesAction(selectedServices));
    dispatch(setApartmentSizeAction(apartmentSize));
    dispatch(setSelectedSpeedAction(selectedSpeed));
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setIsFormValid(true);
      if (user.isAuth) {
        saveOrderData();
      } else {
        setIsAuthorizationOpen(true);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="booking">
      <section className="slide-wrap">
        <div className="container">
          <div className="slide">
            <h1 className="slide__title">Sdl</h1>
            <h2 className="slide__subtitle">Servicio de limpieza</h2>
            <p className="slide__text">{t('professionalCleaning')}</p>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="book">
          <div className="book__form">
            <form className={`form ${isFormValid ? '' : 'invalid'}`} onSubmit={handleFormSubmit}>
              <div className="form__section">
                <h3 className="form__title">{t('propertyInformation')}</h3>
                <div className="form__input-wrap" ref={sizeRef}>
                  <label htmlFor="size" className="form__label">
                    {t('apartmentSize')}
                    <sup className="top-index">2</sup>
                  </label>
                  <input
                    id="size"
                    type="text"
                    className={`input ${!apartmentSize ? 'invalid-field' : ''}`}
                    value={apartmentSize}
                    onChange={(e) => handleApartmentSizeChange(e.target.value)}
                  />
                  <p className={isApartmentSizeValid ? 'hidden' : 'auth__note'}>
                    {t('apartmentSizeMessage')}
                    <sup className="top-index">2</sup>
                  </p>
                </div>
                <div className="form__properties" ref={propertyRef}>
                  <div className="form__property">
                    <span className="form__label">{t('howManyBedrooms')}</span>
                    <CustomSelect options={bedrooms} selectedOption={bedroomsNum} setSelectedOption={setBedroomsNum} />
                  </div>
                  <div className="form__property">
                    <span className="form__label">{t('howManyBathrooms')}</span>
                    <CustomSelect
                      options={bathrooms}
                      selectedOption={bathroomsNum}
                      setSelectedOption={setBathroomsNum}
                    />
                  </div>
                  <div className="form__property">
                    <span className="form__label">{t('howManyKitchens')}</span>
                    <CustomSelect options={kitchens} selectedOption={kitchensNum} setSelectedOption={setKitchensNum} />
                  </div>
                </div>
              </div>
              <div className="form__section" ref={cleaningRef}>
                <h3 className="form__title">{t('serviceType')}</h3>
                <p className="form__text">
                  {t('pricesDescription1')}
                  <sup className="top-index top-index_little">2</sup>.{t('pricesDescription2')}
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
                          {t(elem.type)}
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
                <h3 className="form__title">{t('extraServices')}</h3>
                <div className="form__services">
                  {extraServices.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => handleServicesChange(elem)}
                      className={`form__service ${
                        selectedServices.find((selectedService) => selectedService.name === elem.name) ? 'checked' : ''
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
                        <span className="form__service-label">{t(elem.name)}</span>
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
                <h3 className="form__title">{t('howFastQuestion')}</h3>
                <p className="form__text">{t('fastCleanDescription')}</p>
                <div className="form__option">
                  {speedOptions.map((elem, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedSpeed(elem)}
                      className={`form__option-variant ${selectedSpeed === elem ? 'checked' : ''}`}
                    >
                      <input
                        id={elem}
                        type="radio"
                        value={elem}
                        checked={selectedSpeed === elem}
                        onChange={(e) => setSelectedSpeed(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="form__option-checker"
                      />
                      <label htmlFor={elem} className="form__option-label">
                        {elem}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form__section">
                <h3 className="form__title">{t('recurring')}</h3>
                <p className="form__text">{t('recurringDescription')}</p>
                <span className="form__label">{t('howOften')}</span>
                <CustomSelect
                  options={repeats}
                  selectedOption={repeat}
                  setSelectedOption={setRepeat}
                  setIsAutoUpdate={setIsAutoUpdate}
                />
              </div>
              <div className="form__section">
                <h3 className="form__title" ref={dateTimeRef}>
                  {t('when')}
                </h3>
                <div className="form__date-period">
                  <div className={`form__input-wrap form__one-time ${repeat === 'Custom schedule' ? 'hidden' : ''}`}>
                    <span className="form__label">{t('time')}</span>
                    <CustomSelect
                      options={times}
                      selectedOption={time}
                      setSelectedOption={setTime}
                      noTranslation={true}
                    />
                  </div>
                  <div
                    className={repeat === 'One-time' || repeat === 'Custom schedule' ? 'hidden' : 'form__input-wrap'}
                  >
                    <label htmlFor="duration" className="form__label">
                      {t('duration')}
                    </label>
                    <input
                      id="duration"
                      type="text"
                      className={`input ${!duration || duration <= 0 ? 'invalid-field' : ''}`}
                      value={duration}
                      onChange={(e) => handleDurationChange(e.target.value)}
                    />
                  </div>
                </div>
                <div className={repeat === 'Custom schedule' ? 'form__date-period' : 'hidden'}>
                  {customSchedule.map((elem, index) => (
                    <div key={index} className="form__date-custom">
                      <svg
                        className={`form__close ${customSchedule.length === 1 ? 'hidden' : ''}`}
                        onClick={() => deleteDate(index, customSchedule, setCustomSchedule, customScheduleRefs)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M17.6574 17.6566L6.34367 6.34285" stroke="black" strokeLinecap="round" />
                        <path d="M17.6563 6.34285L6.34262 17.6566" stroke="black" strokeLinecap="round" />
                      </svg>
                      <div className="form__input-wrap">
                        <span className="form__label">{t('time')}</span>
                        <CustomSelect
                          options={times}
                          selectedOption={elem.time}
                          setSelectedOption={(value) => handleDatesArrUpdate(setCustomSchedule, value, 'time', index)}
                          noTranslation={true}
                        />
                      </div>
                      <div className="form__input-wrap">
                        <span className="form__label">{t('date')}</span>
                        <InputMask
                          value={elem.date}
                          mask="99.99.9999"
                          placeholder={format(new Date(), 'dd.MM.yyyy')}
                          onChange={(e) =>
                            handleDateInput(
                              e.target.value,
                              (value) => handleDatesArrUpdate(setCustomSchedule, value, 'date', index),
                              (value) => handleDatesArrUpdate(setCustomSchedule, value, 'isDateValid', index),
                            )
                          }
                          onFocus={() => handleDatesArrUpdate(setCustomSchedule, true, 'isDateActive', index)}
                        >
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              id={`custom-date${index}`}
                              className={`input ${
                                elem.date.replace(/\D/g, '').length !== 8 || !elem.isDateValid || !elem.isDateUnique
                                  ? 'invalid-field'
                                  : ''
                              }`}
                              ref={customScheduleRefs.current[index]}
                            />
                          )}
                        </InputMask>
                        <p className={elem.isDateValid ? 'hidden' : 'auth__note'}>{t('correctDateMessage')}</p>
                        <p className={elem.isDateUnique ? 'hidden' : 'auth__note'}>{t('selectedDateMessage')}</p>
                      </div>
                    </div>
                  ))}
                  <span className="form__date-add" onClick={addCustomDate}>
                    {t('add')}
                  </span>
                </div>
                <div className={repeat === 'One-time' || repeat === 'Custom schedule' ? 'hidden' : 'form__date-period'}>
                  <div className="form__input-wrap">
                    <label htmlFor="start-date" className="form__label">
                      {t('startDate')}
                    </label>
                    <InputMask
                      value={startDate}
                      mask="99.99.9999"
                      placeholder={format(new Date(), 'dd.MM.yyyy')}
                      onChange={(e) => handleDateInput(e.target.value, setStartDate, setIsStartDateValid)}
                      onFocus={() => setIsStartDateActive(true)}
                    >
                      {(inputProps) => (
                        <input
                          {...inputProps}
                          id="start-date"
                          className={`input ${
                            startDate.replace(/\D/g, '').length !== 8 || !isStartDateValid ? 'invalid-field' : ''
                          }`}
                          ref={startDateRef}
                        />
                      )}
                    </InputMask>
                    <p className={isStartDateValid ? 'hidden' : 'auth__note'}>{t('correctDateMessage')}</p>
                    <p className={Number(duration) !== 0 || duration === '' ? 'hidden' : 'auth__note'}>
                      {t('periodDateMessage')}
                    </p>
                  </div>
                  <div className="form__input-wrap">
                    <label htmlFor="last-date" className="form__label">
                      {t('lastDate')}
                    </label>
                    <InputMask
                      value={lastDate}
                      mask="99.99.9999"
                      placeholder={format(new Date(), 'dd.MM.yyyy')}
                      onChange={(e) => handleDateInput(e.target.value, setLastDate, setIsLastDateValid)}
                      onFocus={() => setIsLastDateActive(true)}
                    >
                      {(inputProps) => (
                        <input
                          {...inputProps}
                          id="last-date"
                          className={`input ${
                            lastDate.replace(/\D/g, '').length !== 8 || !isLastDateValid ? 'invalid-field' : ''
                          }`}
                          ref={lastDateRef}
                        />
                      )}
                    </InputMask>
                    <p className={isLastDateValid ? 'hidden' : 'auth__note'}>{t('correctDateMessage')}</p>
                    <p className={showNotification ? 'auth__note' : 'hidden'}>{t('changedDateMessage')}</p>
                  </div>
                </div>
                <div className={repeat === 'One-time' || repeat === 'Custom schedule' ? 'hidden' : 'checkbox'}>
                  <input
                    id="excluded-dates"
                    type="checkbox"
                    checked={addExcludedDates}
                    onChange={handleExcludedDatesCheck}
                  />
                  <div className="checkbox__tick" onClick={handleExcludedDatesCheck}>
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
                  <label htmlFor="excluded-dates" className="checkbox__label">
                    {t('excludedDates')}
                  </label>
                </div>
                <div
                  className={
                    addExcludedDates && repeat !== 'One-time' && repeat !== 'Custom schedule'
                      ? 'form__date-excluded'
                      : 'hidden'
                  }
                >
                  <div className="form__date-fields">
                    {excludedDates.map((elem, index) => (
                      <div key={index} className="form__input-wrap">
                        <svg
                          className="form__close"
                          onClick={() => deleteDate(index, excludedDates, setExcludedDates, excludedDateRefs)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M17.6574 17.6566L6.34367 6.34285" stroke="black" strokeLinecap="round" />
                          <path d="M17.6563 6.34285L6.34262 17.6566" stroke="black" strokeLinecap="round" />
                        </svg>
                        <span className="form__label">{t('excludedDate')}</span>
                        <InputMask
                          value={elem.date}
                          mask="99.99.9999"
                          placeholder={format(new Date(), 'dd.MM.yyyy')}
                          onChange={(e) =>
                            handleDateInput(
                              e.target.value,
                              (value) => handleDatesArrUpdate(setExcludedDates, value, 'date', index),
                              (value) => handleDatesArrUpdate(setExcludedDates, value, 'isDateValid', index),
                            )
                          }
                          onFocus={() => handleDatesArrUpdate(setExcludedDates, true, 'isDateActive', index)}
                        >
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              id={`excluded-date${index}`}
                              className={`input ${
                                elem.date.replace(/\D/g, '').length !== 8 || !elem.isDateValid || !elem.isDateUnique
                                  ? 'invalid-field'
                                  : ''
                              }`}
                              ref={excludedDateRefs.current[index]}
                            />
                          )}
                        </InputMask>
                        <p className={elem.isDateValid ? 'hidden' : 'auth__note'}>{t('correctDateMessage')}</p>
                        <p className={elem.isDateUnique ? 'hidden' : 'auth__note'}>{t('excludedDateMessage')}</p>
                        <p
                          className={
                            elem.date.replace(/\D/g, '').length === 8 &&
                            elem.isDateValid &&
                            !dates.find((day) => day === elem.date)
                              ? 'auth__note'
                              : 'hidden'
                          }
                        >
                          {t('notIncludedDateMessage')}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span className="form__date-add" onClick={addExcludedDate}>
                    {t('add')}
                  </span>
                </div>
                <div className={repeat === 'One-time' ? 'form__input-wrap form__one-time' : 'hidden'}>
                  <label htmlFor="date" className="form__label">
                    {t('date')}
                  </label>
                  <InputMask
                    id="date"
                    className={`input ${date.replace(/\D/g, '').length !== 8 || !isDateValid ? 'invalid-field' : ''}`}
                    value={date}
                    mask="99.99.9999"
                    placeholder={format(new Date(), 'dd.MM.yyyy')}
                    onChange={(e) => handleDateInput(e.target.value, setDate, setIsDateValid)}
                  />
                  <p className={isDateValid ? 'hidden' : 'auth__note'}>{t('correctDateMessage')}</p>
                </div>
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
                        className={`form__arrow ${
                          `${currentDate.getMonth()}.${currentDate.getFullYear()}` !==
                          `${new Date().getMonth()}.${new Date().getFullYear()}`
                            ? ''
                            : 'unactive'
                        }`}
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
                    selectedDays={dates}
                    setSelectedDays={setDates}
                    repeat={repeat}
                    date={date}
                    setIsDateValid={setIsDateValid}
                    setDate={setDate}
                    isStartDateActive={isStartDateActive}
                    setIsStartDateActive={setIsStartDateActive}
                    setIsStartDateValid={setIsStartDateValid}
                    setStartDate={setStartDate}
                    isLastDateActive={isLastDateActive}
                    setIsLastDateActive={setIsLastDateActive}
                    setIsLastDateValid={setIsLastDateValid}
                    setLastDate={setLastDate}
                    calendarRef={calendarRef}
                    setIsAutoUpdate={setIsAutoUpdate}
                    customSchedule={customSchedule}
                    handleCustomScheduleUpdate={(value, key, index) =>
                      handleDatesArrUpdate(setCustomSchedule, value, key, index)
                    }
                    handleExcludedDatesUpdate={(value, key, index) =>
                      handleDatesArrUpdate(setExcludedDates, value, key, index)
                    }
                    excludedDates={excludedDates}
                  />
                </div>
              </div>
              <div className="form__section" ref={addressRef}>
                <h3 className="form__title">{t('propertyAddress')}</h3>
                <div className="form__input-wrap">
                  <label htmlFor="address1" className="form__label">
                    {t('address')}
                  </label>
                  <input
                    id="address1"
                    type="text"
                    className={`input form__address ${!address1 ? 'invalid-field' : ''}`}
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                  <input
                    id="address2"
                    type="text"
                    className={`input form__address ${!address2 ? 'invalid-field' : ''}`}
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div className="form__city">
                  <div className="form__input-wrap form__code">
                    <label htmlFor="code" className="form__label">
                      {t('postalCode')}
                    </label>
                    <input
                      id="code"
                      type="number"
                      className={`input form__address ${!postalCode ? 'invalid-field' : ''}`}
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="form__input-wrap form__city-name">
                    <label htmlFor="city" className="form__label">
                      {t('city')}
                    </label>
                    <input
                      id="city"
                      type="text"
                      className={`input form__address ${!city ? 'invalid-field' : ''}`}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form__input-wrap">
                  <label htmlFor="province" className="form__label">
                    {t('province')}
                  </label>
                  <input
                    id="province"
                    type="text"
                    className={`input form__address ${!province ? 'invalid-field' : ''}`}
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </div>
                <div className="form__input-wrap">
                  <label htmlFor="instructions" className="form__label">
                    {t('specialInstructions')}
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
                <p className={!isFormValid ? 'auth__note' : 'hidden'}>{t('fillInAllFieldsMessage')}</p>
              </div>
              <div className="checkbox">
                <input id="save" type="checkbox" checked={saving} onChange={() => setSaving(!saving)} />
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
                  {t('saveInformationForFuture')}
                </label>
              </div>
              <button className={`btn form__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                {routes[2] ? t('save') : t('next')}
              </button>
            </form>
          </div>
          <div className="book__summary">
            <div className={`summary ${isSummaryUnderlined ? 'underlined' : ''}`}>
              <h2 className="summary__title">{t('summary')}</h2>
              <div className="summary__line summary__line_bold">
                <h3 className="summary__subtitle">{t(selectedCleaning.type)}</h3>
                <span className="summary__price">{`€${roundPrice(cleaningSum)}`}</span>
              </div>
              <div className={selectedServices.length !== 0 ? 'summary__line summary__line_list' : 'hidden'}>
                <span className="summary__item">{t('extraServices')}</span>
                <span className="summary__price">{`€${roundPrice(extrasSum)}`}</span>
              </div>
              <div className="summary__extras">
                {selectedServices.map((service, index) => {
                  const serviceNumber = selectedServices.find(
                    (selectedService) => selectedService.name === service.name,
                  ).number;
                  return (
                    <div key={index} className="summary__line summary__line_list">
                      <span className="summary__item">{`${t(service.name)}${
                        serviceNumber > 1 ? ` (x${serviceNumber})` : ''
                      }`}</span>
                      <span className="summary__price">{`€${roundPrice(service.price * serviceNumber)}`}</span>
                    </div>
                  );
                })}
              </div>
              <div className={speedSum !== 0 ? 'summary__line' : 'hidden'}>
                <span className="summary__item">{t('howFast')}</span>
                <span className="summary__price">{`€${roundPrice(speedSum)}`}</span>
              </div>
              <div className={timeSum !== 0 ? 'summary__line' : 'hidden'}>
                <span className="summary__item">{t('offPeakHours')}</span>
                <span className="summary__price">{`€${roundPrice(timeSum)}`}</span>
              </div>
              <div className="summary__subtotal">
                <div className="summary__line">
                  <span className="summary__item">{t('subtotal')}</span>
                  <span className="summary__price">{`€${roundPrice(subtotal)}`}</span>
                </div>
                <div className="summary__line">
                  <span className="summary__item">{t('iva')} 21%</span>
                  <span className="summary__price">{`€${roundPrice(iva)}`}</span>
                </div>
              </div>
              <div className="summary__line summary__line_bold">
                <span className="summary__subtitle">{t('total')}</span>
                <span className="summary__price">{`€${roundPrice(total)}`}</span>
              </div>
              <button className={`btn summary__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                {routes[2] ? t('save') : t('next')}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Booking;
