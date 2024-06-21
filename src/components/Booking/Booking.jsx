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
  differenceInDays,
  format,
} from 'date-fns';
import { setCleaningAction } from '../../store/actions/cleaningActions';
import { getAddresses } from '../../http/addressAPI';
import {
  months,
  bedrooms,
  bathrooms,
  kitchens,
  speedOptions,
  repeats,
  times,
  livingRooms,
} from '../../constants/selectOptions';
import { getTimeCoeff, calculateCleaningTypePrice, roundPrice } from '../../utils/calculatePrice';
import {
  checkIsDateValid,
  checkIsSameDate,
  filterTimes,
  formatDate,
  isTimeLessThanFiltered,
} from '../../utils/formatDate';
import AddressSelect from '../AddressSelect/AddressSelect';
import CustomSelect from '../CustomSelect/CustomSelect';
import Calendar from '../Calendar/Calendar';
import ScheduleWindow from '../ScheduleWindow/ScheduleWindow';
import './Booking.scss';

const Booking = ({ loading }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const cleaning = useSelector((state) => state.cleaning);
  const cleaningTypes = useSelector((state) => state.services.serviceTypes);
  const extraServices = useSelector((state) => state.services.extraServices);
  const pricing = useSelector((state) => state.services.pricing);
  const timePricing = useSelector((state) => state.services.timePricing);
  const cleaningPricing = useSelector((state) => state.services.cleaningPricing);
  const sqmPricing = useSelector((state) => state.services.sqmPricing);

  const [currentDate, setCurrentDate] = useState(cleaning.currentDate);
  const [repeat, setRepeat] = useState(cleaning.repeat);
  const [date, setDate] = useState(cleaning.date);
  const [isDateValid, setIsDateValid] = useState(cleaning.isDateValid);
  const [time, setTime] = useState(cleaning.time);
  const [dates, setDates] = useState(cleaning.dates);
  const [subscriptionPrices, setSubscriptionPrices] = useState(cleaning.subscriptionPrices);
  const [addExcludedDates, setAddExcludedDates] = useState(cleaning.addExcludedDates);
  const [excludedDates, setExcludedDates] = useState(cleaning.excludedDates);
  const [customSchedule, setCustomSchedule] = useState(cleaning.customSchedule);
  const [duration, setDuration] = useState(cleaning.duration);
  const [startDate, setStartDate] = useState(cleaning.startDate);
  const [isStartDateValid, setIsStartDateValid] = useState(cleaning.isStartDateValid);
  const [isStartDateActive, setIsStartDateActive] = useState(false);
  const [lastDate, setLastDate] = useState(cleaning.lastDate);
  const [isLastDateValid, setIsLastDateValid] = useState(cleaning.isLastDateValid);
  const [isLastDateActive, setIsLastDateActive] = useState(false);
  const [isAutoUpdate, setIsAutoUpdate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedCleaning, setSelectedCleaning] = useState(cleaning.selectedCleaning);
  const [selectedServices, setSelectedServices] = useState(cleaning.selectedServices);
  const [apartmentSize, setApartmentSize] = useState(cleaning.apartmentSize);
  const [isApartmentSizeValid, setIsApartmentSizeValid] = useState(true);
  const [selectedSpeed, setSelectedSpeed] = useState(cleaning.selectedSpeed);
  const [livingRoomsNum, setLivingRoomsNum] = useState(cleaning.livingRoomsNum);
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
  const [timeCoeff, setTimeCoeff] = useState(cleaning.timeCoeff);
  const [timeSum, setTimeSum] = useState(cleaning.timeSum);
  const [subtotal, setSubtotal] = useState(cleaning.subtotal);
  const [iva, setIva] = useState(cleaning.iva);
  const [total, setTotal] = useState(cleaning.total);
  const [tariffNumber, setTariffNumber] = useState(cleaning.tariff);
  const [isSummaryUnderlined, setIsSummaryUnderlined] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [defaultAddressId, setDefaultAddressId] = useState(cleaning.defaultAddressId);
  const [addressesLoading, setAddressesLoading] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = pathname.split('/');

  const customScheduleRefs = useRef([]);
  const excludedDateRefs = useRef([]);
  const dateTimeRef = useRef(null);
  const addressSelectRef = useRef(null);
  const addressRef = useRef(null);
  const speedRef = useRef(null);
  const recurringRef = useRef(null);
  const sizeRef = useRef(null);
  const propertyRef = useRef(null);
  const cleaningRef = useRef(null);
  const extrasRef = useRef(null);
  const instructionsRef = useRef(null);
  const instructionsTextareaRef = useRef(null);
  const calendarRef = useRef(null);
  const startDateRef = useRef(null);
  const lastDateRef = useRef(null);

  const setIsAuthorizationOpen = useOutletContext();

  const { t } = useTranslation();

  useEffect(() => {
    if (!cleaning.address1 && sessionStorage.getItem('cleaning')) {
      const cleaning = JSON.parse(sessionStorage.getItem('cleaning'));
      dispatch(setCleaningAction(cleaning));
    }
  }, []);

  useEffect(() => {
    const getAdressesData = async () => {
      const addresses = await getAddresses(user.id);
      setAddresses(addresses);

      if (!defaultAddressId || (defaultAddressId && !addresses.find((address) => address._id === defaultAddressId))) {
        const defaultAddress = addresses.find((address) => address.isDefault);
        if (defaultAddress) {
          setDefaultAddressId(defaultAddress._id);
        }
      }

      setAddressesLoading(false);
    };

    if (user.id) {
      getAdressesData();
    } else if (!loading && !user.id) {
      setAddressesLoading(false);
    }
  }, [user, loading]);

  useEffect(() => {
    if (
      repeat === 'One-time' &&
      date &&
      isDateValid &&
      checkIsSameDate(date) &&
      isTimeLessThanFiltered(time, filterTimes(times)[0])
    ) {
      setTime(filterTimes(times)[0]);
    }
  }, [date, repeat]);

  useEffect(() => {
    if (
      repeat !== 'One-time' &&
      repeat !== 'Custom schedule' &&
      startDate &&
      isStartDateValid &&
      checkIsSameDate(startDate) &&
      isTimeLessThanFiltered(time, filterTimes(times)[0])
    ) {
      setTime(filterTimes(times)[0]);
    }
  }, [startDate, repeat]);

  useEffect(() => {
    if (defaultAddressId && addresses.length !== 0) {
      const defaultAddress = addresses.find((address) => address._id === defaultAddressId);

      if (defaultAddress) {
        setApartmentSize(defaultAddress.size);
        setLivingRoomsNum(livingRooms.find((elem) => Number(elem.split(' ')[0]) === defaultAddress.livingRooms));
        setBedroomsNum(bedrooms.find((elem) => Number(elem.split(' ')[0]) === defaultAddress.bedrooms));
        setBathroomsNum(bathrooms.find((elem) => Number(elem.split(' ')[0]) === defaultAddress.bathrooms));
        setKitchensNum(kitchens.find((elem) => Number(elem.split(' ')[0]) === defaultAddress.kitchens));
        setAddress1(defaultAddress.address);
        setAddress2(defaultAddress.secondAddress);
        setPostalCode(defaultAddress.postalCode);
        setCity(defaultAddress.city);
        setProvince(defaultAddress.province);
      }
    }
  }, [defaultAddressId, addresses]);

  useEffect(() => {
    setCurrentDate(new Date(cleaning.currentDate));
    setRepeat(cleaning.repeat);
    setDate(cleaning.date);
    setIsDateValid(cleaning.isDateValid);
    setTime(cleaning.time);
    setDates(cleaning.dates);
    setAddExcludedDates(cleaning.addExcludedDates);
    setExcludedDates(cleaning.excludedDates);
    setCustomSchedule(cleaning.customSchedule);
    setDuration(cleaning.duration);
    setStartDate(cleaning.startDate);
    setIsStartDateValid(cleaning.isStartDateValid);
    setLastDate(cleaning.lastDate);
    setIsLastDateValid(cleaning.isLastDateValid);
    setSelectedCleaning(cleaning.selectedCleaning);
    setSelectedServices(cleaning.selectedServices);
    setDefaultAddressId(cleaning.defaultAddressId);
    setApartmentSize(cleaning.apartmentSize);
    setSelectedSpeed(cleaning.selectedSpeed);
    setLivingRoomsNum(cleaning.livingRoomsNum);
    setBedroomsNum(cleaning.bedroomsNum);
    setBathroomsNum(cleaning.bathroomsNum);
    setKitchensNum(cleaning.kitchensNum);
    setAddress1(cleaning.address1);
    setAddress2(cleaning.address2);
    setPostalCode(cleaning.postalCode);
    setCity(cleaning.city);
    setProvince(cleaning.province);
    setInstructions(cleaning.instructions);
    setSaving(cleaning.saving);
    setCleaningSum(cleaning.cleaningSum);
    setExtrasSum(cleaning.extrasSum);
    setSpeedSum(cleaning.speedSum);
    setTimeSum(cleaning.timeSum);
    setSubtotal(cleaning.subtotal);
    setIva(cleaning.iva);
    setTotal(cleaning.total);
  }, [cleaning]);

  useEffect(() => {
    if (cleaningTypes.length !== 0 && !selectedCleaning.type) {
      setSelectedCleaning(cleaningTypes[0]);
    }
  }, [cleaningTypes]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      let yBreakPoint = 0;

      if (windowWidth > 1440) {
        yBreakPoint = 440;
      } else if (windowWidth > 1024) {
        yBreakPoint = 400;
      } else if (windowWidth > 744) {
        yBreakPoint = 380;
      }

      if (scrollY > yBreakPoint) {
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
      case 'address-select':
        currentRef = addressSelectRef;
        break;
      case 'address':
        currentRef = addressRef;
        break;
      case 'speed':
        currentRef = speedRef;
        break;
      case 'recurring':
        currentRef = recurringRef;
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
      case 'instructions':
        currentRef = instructionsRef;
        break;
      default:
        currentRef = null;
    }
    if (currentRef && !loading && !addressesLoading) {
      const element = currentRef.current;
      const header = document.getElementById('header');
      const y = element.getBoundingClientRect().top - header.clientHeight * 1.5;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [loading, addressesLoading]);

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

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
    return new Date(year, month - 1, day);
  };

  const handleDatesArrUpdate = (setValue, value, key, index) =>
    setValue((prevArr) => {
      let newData = [...prevArr];
      if (newData[index]) {
        newData[index] = { ...newData[index], [key]: value };
      }
      if (key === 'date' && !newData[index].isDateActive) {
        newData = newData.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date));
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

      setLastDate(format(newLastDate, 'dd.MM.yyyy'));
      setIsLastDateValid(true);

      return format(newLastDate, 'dd.MM.yyyy');
    }

    setLastDate('');

    return '';
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
    if (
      startDate &&
      startDate.replace(/\D/g, '').length === 8 &&
      isStartDateValid &&
      lastDate &&
      lastDate.replace(/\D/g, '').length === 8 &&
      isLastDateValid &&
      duration
    ) {
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
    } else {
      setDates([]);
    }
  }, [startDate, lastDate, duration]);

  const calculatePrice = (time, date) => {
    const totalCleaningSum = cleaningSum + extrasSum;
    const speedSum =
      totalCleaningSum *
      ([pricing.coefficientX1, pricing.coefficientX2, pricing.coefficientX3][speedOptions.indexOf(selectedSpeed)] - 1);
    const { coefficient, tariffNumber } = getTimeCoeff(time, date, timePricing);
    const timeCoeff = coefficient;
    const timeSum = totalCleaningSum * (timeCoeff - 1);
    const subtotal = totalCleaningSum + speedSum + timeSum;
    const iva = subtotal * (pricing.orderTaxPercent / 100);
    const total = Number(subtotal) + Number(iva);

    return { speedSum, timeCoeff, timeSum, subtotal, iva, total, tariffNumber };
  };

  const calculateCustomSchedulePrice = (index, date, time) => {
    if (customSchedule[index].isDateValid && pricing.length !== 0 && timePricing.length !== 0) {
      const timeValue = time ?? customSchedule[index].time;
      const dateValue = date ?? customSchedule[index].date;
      const { timeCoeff, timeSum, subtotal, iva, total, tariffNumber } = calculatePrice(timeValue, dateValue);
      handleDatesArrUpdate(setCustomSchedule, timeCoeff, 'timeCoeff', index);
      handleDatesArrUpdate(setCustomSchedule, timeSum, 'timeSum', index);
      handleDatesArrUpdate(setCustomSchedule, subtotal, 'subtotal', index);
      handleDatesArrUpdate(setCustomSchedule, iva, 'iva', index);
      handleDatesArrUpdate(setCustomSchedule, total, 'total', index);
      handleDatesArrUpdate(setCustomSchedule, tariffNumber, 'tariff', index);
    }
  };

  useEffect(() => {
    if (repeat === 'Custom schedule' && pricing.length !== 0 && timePricing.length !== 0) {
      customSchedule.forEach((day, index) => calculateCustomSchedulePrice(index, day.date, day.time));
    }
  }, [repeat, pricing, timePricing, cleaningSum, extrasSum, selectedSpeed]);

  useEffect(() => {
    if (repeat !== 'One-time' && repeat !== 'Custom schedule' && pricing.length !== 0 && timePricing.length !== 0) {
      const prices = dates.map((date) => {
        const { timeCoeff, timeSum, subtotal, iva, total, tariffNumber } = calculatePrice(time, date);
        return {
          timeCoeff,
          timeSum,
          subtotal,
          iva,
          total,
          tariff: tariffNumber,
        };
      });

      setSubscriptionPrices(prices);
    }
  }, [dates, time, repeat, pricing, timePricing, cleaningSum, extrasSum, selectedSpeed]);

  useEffect(() => {
    if (instructionsTextareaRef.current && !loading && !addressesLoading) {
      const textarea = instructionsTextareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  }, [instructions, loading, addressesLoading]);

  useEffect(() => {
    const cleaningSum =
      apartmentSize === '' || cleaningPricing.length === 0 || sqmPricing.length === 0
        ? 0
        : calculateCleaningTypePrice(
            selectedCleaning.price,
            apartmentSize,
            [bedroomsNum, bathroomsNum, kitchensNum],
            [pricing.bedroomPrice, pricing.bathroomPrice, pricing.kitchenPrice],
            cleaningPricing,
            sqmPricing,
          );
    setCleaningSum(cleaningSum);
  }, [pricing, sqmPricing, cleaningPricing, selectedCleaning, apartmentSize, bedroomsNum, bathroomsNum, kitchensNum]);

  useEffect(() => {
    const extrasSum = selectedServices.reduce((sum, service) => sum + service.price * service.count, 0);
    setExtrasSum(extrasSum);
  }, [selectedServices]);

  useEffect(() => {
    if (pricing.length !== 0 && timePricing.length !== 0) {
      const { speedSum, timeCoeff, timeSum, subtotal, iva, total, tariffNumber } = calculatePrice(time, date);
      setSpeedSum(speedSum);
      setTimeCoeff(timeCoeff);
      setTimeSum(timeSum);
      setSubtotal(subtotal);
      setIva(iva);
      setTotal(total);
      setTariffNumber(tariffNumber);
    }
  }, [repeat, pricing, timePricing, cleaningSum, extrasSum, selectedSpeed, time, date]);

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
    if (selectedServices.find((selectedService) => selectedService.type === service.type)) {
      setSelectedServices((state) => state.filter((elem) => elem.type !== service.type));
    } else {
      setSelectedServices((state) => [...state, { ...service, count: 1 }]);
    }
  };

  const handleServicesNumberChange = (e, service, isMore) => {
    e.stopPropagation();
    const serviceNumber = selectedServices.find((selectedService) => selectedService.type === service.type).count;
    const oldServices = selectedServices.filter((elem) => elem.type !== service.type);

    if (isMore && serviceNumber < 20) {
      setSelectedServices([...oldServices, { ...service, count: serviceNumber + 1 }]);
    } else if (!isMore && serviceNumber > 1) {
      setSelectedServices([...oldServices, { ...service, count: serviceNumber - 1 }]);
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

    const isDateValid = checkIsDateValid(value);

    if (!isDateValid) {
      setIsDateValid(isDateValid);
    }

    setIsAutoUpdate(false);
    setSelectedDate(value);
  };

  const handleCustomDateChange = (e, index) => {
    handleDateInput(
      e.target.value,
      (value) => handleDatesArrUpdate(setCustomSchedule, value, 'date', index),
      (value) => handleDatesArrUpdate(setCustomSchedule, value, 'isDateValid', index),
    );

    calculateCustomSchedulePrice(index, e.target.value, null);

    if (
      e.target.value &&
      checkIsDateValid(e.target.value) &&
      checkIsSameDate(e.target.value) &&
      isTimeLessThanFiltered(customSchedule[index].time, filterTimes(times)[0])
    ) {
      handleDatesArrUpdate(setCustomSchedule, filterTimes(times)[0], 'time', index);
    }
  };

  const handleCustomTimeChange = (value, index) => {
    handleDatesArrUpdate(setCustomSchedule, value, 'time', index);
    calculateCustomSchedulePrice(index, null, value);
  };

  const handleExcludedDatesChange = (e, index) => {
    handleDateInput(
      e.target.value,
      (value) => handleDatesArrUpdate(setExcludedDates, value, 'date', index),
      (value) => handleDatesArrUpdate(setExcludedDates, value, 'isDateValid', index),
    );
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
      {
        time: times[24],
        date: '',
        timeSum: 0,
        subtotal: 0,
        iva: 0,
        total: 0,
        isDateValid: true,
        isDateActive: false,
        isDateUnique: true,
      },
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
      (repeat === 'One-time' && date.replace(/\D/g, '').length === 8 && isDateValid) ||
      (repeat === 'Custom schedule' &&
        customSchedule.length >= 1 &&
        !customSchedule.find(
          (day) => day.date.replace(/\D/g, '').length !== 8 || !day.isDateValid || !day.isDateUnique,
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
            (day) => day.date.replace(/\D/g, '').length !== 8 || !day.isDateValid || !day.isDateUnique,
          )) ||
          !addExcludedDates))
    ) {
      if (
        (addresses.length === 0 && apartmentSize && address1 && postalCode && city && province) ||
        (addresses.length !== 0 && defaultAddressId)
      ) {
        return true;
      }
    }

    return false;
  };

  const saveOrderData = () => {
    const cleaningState = {};
    cleaningState.currentDate = currentDate;
    cleaningState.repeat = repeat;
    cleaningState.date = date;
    cleaningState.isDateValid = isDateValid;
    cleaningState.time = time;

    const sortedCustomSchedule =
      repeat === 'Custom schedule'
        ? customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))
        : customSchedule;
    cleaningState.customSchedule = sortedCustomSchedule;

    cleaningState.dates = dates;
    cleaningState.subscriptionPrices = subscriptionPrices;
    cleaningState.startDate = startDate;
    cleaningState.isStartDateValid = isStartDateValid;
    cleaningState.lastDate = lastDate;
    cleaningState.isLastDateValid = isLastDateValid;
    cleaningState.duration = duration;
    cleaningState.addExcludedDates = addExcludedDates;
    cleaningState.excludedDates = excludedDates;
    cleaningState.selectedCleaning = selectedCleaning;
    cleaningState.selectedServices = selectedServices;
    cleaningState.defaultAddressId = defaultAddressId;
    cleaningState.apartmentSize = apartmentSize;
    cleaningState.selectedSpeed = selectedSpeed;
    cleaningState.livingRoomsNum = livingRoomsNum;
    cleaningState.bedroomsNum = bedroomsNum;
    cleaningState.bathroomsNum = bathroomsNum;
    cleaningState.kitchensNum = kitchensNum;
    cleaningState.address1 = address1;
    cleaningState.address2 = address2;
    cleaningState.postalCode = postalCode;
    cleaningState.city = city;
    cleaningState.province = province;
    cleaningState.instructions = instructions;
    cleaningState.saving = saving;
    cleaningState.cleaningSum = cleaningSum;
    cleaningState.extrasSum = extrasSum;
    cleaningState.speedSum = speedSum;
    cleaningState.timeCoeff = timeCoeff;
    cleaningState.timeSum = timeSum;
    cleaningState.subtotal = subtotal;
    cleaningState.ivaPercent = pricing.orderTaxPercent;
    cleaningState.iva = iva;
    cleaningState.total = total;
    cleaningState.tariff = tariffNumber;
    cleaningState.paymentStatus = 'Not paid';
    sessionStorage.setItem('cleaning', JSON.stringify(cleaningState));

    return cleaningState;
  };

  useEffect(() => {
    if (routes[2] !== 'edit') {
      saveOrderData();
    }
  }, [
    pathname,
    currentDate,
    repeat,
    date,
    time,
    customSchedule,
    dates,
    subscriptionPrices,
    startDate,
    lastDate,
    duration,
    addExcludedDates,
    excludedDates,
    selectedCleaning,
    selectedServices,
    apartmentSize,
    selectedSpeed,
    livingRoomsNum,
    bedroomsNum,
    bathroomsNum,
    kitchensNum,
    defaultAddressId,
    address1,
    address2,
    postalCode,
    city,
    province,
    instructions,
    saving,
    cleaningSum,
    extrasSum,
    speedSum,
    timeCoeff,
    timeSum,
    subtotal,
    iva,
    total,
    tariffNumber,
  ]);

  const handleWheel = (event) => {
    event.target.blur();
    event.preventDefault();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setIsFormValid(true);
      if (user.isAuth) {
        dispatch(setCleaningAction(saveOrderData()));
        navigate('/summary');
      } else {
        setIsAuthorizationOpen(true);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <div className="booking">
        <section className="slide-wrap">
          <div className="container">
            <div className="slide">
              <h1 className="slide__title">Sdl</h1>
              <h2 className="slide__subtitle">Servicio de limpieza</h2>
            </div>
          </div>
        </section>
        <div className="container">
          {loading || addressesLoading ? (
            <div className="spinner"></div>
          ) : (
            <section className="book">
              <div className="book__form">
                <form
                  className={`form ${isFormValid ? '' : 'invalid'}`}
                  onSubmit={handleFormSubmit}
                  ref={addressSelectRef}
                >
                  {addresses.length === 0 ? (
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
                          <span className="form__label">{t('howManyLivingRooms')}</span>
                          <CustomSelect
                            options={livingRooms}
                            selectedOption={livingRoomsNum}
                            setSelectedOption={setLivingRoomsNum}
                          />
                        </div>
                        <div className="form__property">
                          <span className="form__label">{t('howManyKitchens')}</span>
                          <CustomSelect
                            options={kitchens}
                            selectedOption={kitchensNum}
                            setSelectedOption={setKitchensNum}
                          />
                        </div>
                        <div className="form__property">
                          <span className="form__label">{t('howManyBedrooms')}</span>
                          <CustomSelect
                            options={bedrooms}
                            selectedOption={bedroomsNum}
                            setSelectedOption={setBedroomsNum}
                          />
                        </div>
                        <div className="form__property">
                          <span className="form__label">{t('howManyBathrooms')}</span>
                          <CustomSelect
                            options={bathrooms}
                            selectedOption={bathroomsNum}
                            setSelectedOption={setBathroomsNum}
                          />
                        </div>
                      </div>
                      <div className="form__input-wrap instructions" ref={instructionsRef}>
                        <label htmlFor="instructions" className="form__label">
                          {t('instructions')}
                        </label>
                        <p className="form__text">{t('instructionsText')}</p>
                        <textarea
                          id="instructions"
                          ref={instructionsTextareaRef}
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
                  ) : (
                    <div className="form__section">
                      <h3 className="form__label">{t('address')}</h3>
                      <AddressSelect
                        options={addresses}
                        selectedOption={defaultAddressId}
                        setSelectedOption={setDefaultAddressId}
                      />
                      <div className="form__new-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M17 12H7" stroke="#268664" strokeLinecap="round" />
                          <path d="M12 17V7" stroke="#268664" strokeLinecap="round" />
                        </svg>
                        <span className="form__new-address-text" onClick={() => navigate('/address/new/booking')}>
                          {t('newAddress')}
                        </span>
                      </div>
                      <div className="form__input-wrap instructions" ref={instructionsRef}>
                        <label htmlFor="instructions" className="form__label">
                          {t('instructions')}
                        </label>
                        <p className="form__text">{t('instructionsText')}</p>
                        <textarea
                          id="instructions"
                          ref={instructionsTextareaRef}
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
                  )}
                  <div className="form__section" ref={cleaningRef}>
                    <h3 className="form__title">{t('serviceType')}</h3>
                    <p className="form__text">
                      {t('pricesDescription1')}
                      <sup className="top-index top-index_little">2</sup>.{t('pricesDescription2')}
                      <br />
                      {`${t('pricesDependentOnTime')} `}
                      <span className="link form__link" onClick={() => navigate('/info-price')}>
                        {t('here')}
                      </span>
                      .
                    </p>
                    <div className="form__radios">
                      {cleaningPricing.length !== 0 &&
                        sqmPricing.length !== 0 &&
                        cleaningTypes.length !== 0 &&
                        cleaningTypes.map((elem, index) => (
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
                                : repeat === 'One-time'
                                ? `€${roundPrice(
                                    calculateCleaningTypePrice(
                                      elem.price,
                                      apartmentSize,
                                      [bedroomsNum, bathroomsNum, kitchensNum],
                                      [pricing.bedroomPrice, pricing.bathroomPrice, pricing.kitchenPrice],
                                      cleaningPricing,
                                      sqmPricing,
                                    ) * timeCoeff,
                                  )}`
                                : repeat !== 'Custom schedule' && subscriptionPrices.length !== 0
                                ? `${
                                    subscriptionPrices.every(
                                      (price) => price.timeCoeff === subscriptionPrices[0].timeCoeff,
                                    )
                                      ? ''
                                      : `${t('from')} `
                                  }€${roundPrice(
                                    calculateCleaningTypePrice(
                                      elem.price,
                                      apartmentSize,
                                      [bedroomsNum, bathroomsNum, kitchensNum],
                                      [pricing.bedroomPrice, pricing.bathroomPrice, pricing.kitchenPrice],
                                      cleaningPricing,
                                      sqmPricing,
                                    ) *
                                      subscriptionPrices.reduce((min, curr) =>
                                        cleaningSum * min.timeCoeff < cleaningSum * curr.timeCoeff ? min : curr,
                                      ).timeCoeff,
                                  )}`
                                : repeat === 'Custom schedule' && customSchedule[0].date.replace(/\D/g, '').length === 8
                                ? `${
                                    customSchedule.every((price) => price.timeCoeff === customSchedule[0].timeCoeff)
                                      ? ''
                                      : `${t('from')} `
                                  } €${roundPrice(
                                    calculateCleaningTypePrice(
                                      elem.price,
                                      apartmentSize,
                                      [bedroomsNum, bathroomsNum, kitchensNum],
                                      [pricing.bedroomPrice, pricing.bathroomPrice, pricing.kitchenPrice],
                                      cleaningPricing,
                                      sqmPricing,
                                    ) *
                                      customSchedule.reduce((min, curr) =>
                                        cleaningSum * min.timeCoeff < cleaningSum * curr.timeCoeff ? min : curr,
                                      ).timeCoeff,
                                  )}`
                                : `${t('from')} €${roundPrice(
                                    calculateCleaningTypePrice(
                                      elem.price,
                                      apartmentSize,
                                      [bedroomsNum, bathroomsNum, kitchensNum],
                                      [pricing.bedroomPrice, pricing.bathroomPrice, pricing.kitchenPrice],
                                      cleaningPricing,
                                      sqmPricing,
                                    ),
                                  )}`}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="form__section" ref={extrasRef}>
                    <h3 className="form__title">{t('extraServices')}</h3>
                    <div className="form__services">
                      {extraServices.length !== 0 &&
                        extraServices.map((elem, index) => (
                          <div
                            key={index}
                            onClick={() => handleServicesChange(elem)}
                            className={`form__service ${
                              selectedServices.find((selectedService) => selectedService.type === elem.type)
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
                              <span className="form__service-label">{t(elem.type)}</span>
                            </div>
                            <div
                              className={
                                selectedServices.find((selectedService) => selectedService.type === elem.type)
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
                                <path d="M17 12H7" stroke="#C9C7C7" strokeLinecap="round" />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  stroke="#C9C7C7"
                                />
                              </svg>
                              <span className="form__service-quantity">
                                {selectedServices.find((selectedService) => selectedService.type === elem.type)?.count}
                              </span>
                              <svg
                                className={`form__service-sign ${
                                  selectedServices.find((selectedService) => selectedService.type === elem.type)
                                    ?.count === 20
                                    ? 'unactive'
                                    : ''
                                }`}
                                onClick={(e) => handleServicesNumberChange(e, elem, true)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path d="M17 12H7" stroke="#C9C7C7" strokeLinecap="round" />
                                <path d="M12 17V7" stroke="#C9C7C7" strokeLinecap="round" />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  stroke="#C9C7C7"
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
                  <div className="form__section" ref={recurringRef}>
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
                      <div
                        className={`form__input-wrap form__time ${repeat !== 'One-time' ? 'subscription' : ''} ${
                          repeat === 'Custom schedule' ? 'hidden' : ''
                        }`}
                      >
                        <span className="form__label">{t('time')}</span>
                        <CustomSelect
                          options={
                            (repeat === 'One-time' && date && isDateValid && checkIsSameDate(date)) ||
                            (repeat !== 'One-time' &&
                              repeat !== 'Custom schedule' &&
                              startDate &&
                              isStartDateValid &&
                              checkIsSameDate(startDate))
                              ? filterTimes(times)
                              : times
                          }
                          selectedOption={time}
                          setSelectedOption={setTime}
                          noTranslation={true}
                        />
                      </div>
                      <div
                        className={
                          repeat === 'One-time' || repeat === 'Custom schedule' ? 'hidden' : 'form__input-wrap'
                        }
                      >
                        <label htmlFor="duration" className="form__label">
                          {t('numberOfCleans')}
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
                            <span className="form__label">{t('date')}</span>
                            <InputMask
                              value={elem.date}
                              mask="99.99.9999"
                              placeholder={format(new Date(), 'dd.MM.yyyy')}
                              onChange={(e) => handleCustomDateChange(e, index)}
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
                          <div className="form__input-wrap">
                            <span className="form__label">{t('time')}</span>
                            <CustomSelect
                              options={
                                repeat === 'Custom schedule' &&
                                customSchedule[index].date &&
                                customSchedule[index].isDateValid &&
                                checkIsSameDate(customSchedule[index].date)
                                  ? filterTimes(times)
                                  : times
                              }
                              selectedOption={elem.time}
                              setSelectedOption={(value) => handleCustomTimeChange(value, index)}
                              noTranslation={true}
                            />
                          </div>
                        </div>
                      ))}
                      <span className="form__date-add" onClick={addCustomDate}>
                        {t('add')}
                      </span>
                    </div>
                    <div
                      className={repeat === 'One-time' || repeat === 'Custom schedule' ? 'hidden' : 'form__date-period'}
                    >
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
                              onChange={(e) => handleExcludedDatesChange(e, index)}
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
                    <div className={repeat === 'One-time' ? 'form__input-wrap form__time' : 'hidden'}>
                      <label htmlFor="date" className="form__label">
                        {t('date')}
                      </label>
                      <InputMask
                        id="date"
                        className={`input ${
                          date.replace(/\D/g, '').length !== 8 || !isDateValid ? 'invalid-field' : ''
                        }`}
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
                        subscriptionPrices={subscriptionPrices}
                        total={total}
                        setSelectedDays={setDates}
                        repeat={repeat}
                        time={time}
                        date={date}
                        isDateValid={isDateValid}
                        setIsDateValid={setIsDateValid}
                        setDate={setDate}
                        startDate={startDate}
                        isStartDateActive={isStartDateActive}
                        setIsStartDateActive={setIsStartDateActive}
                        setIsStartDateValid={setIsStartDateValid}
                        setStartDate={setStartDate}
                        lastDate={lastDate}
                        isLastDateActive={isLastDateActive}
                        setIsLastDateActive={setIsLastDateActive}
                        setIsLastDateValid={setIsLastDateValid}
                        setLastDate={setLastDate}
                        duration={duration}
                        calendarRef={calendarRef}
                        setIsAutoUpdate={setIsAutoUpdate}
                        customSchedule={customSchedule}
                        handleCustomScheduleUpdate={(value, key, index) =>
                          handleDatesArrUpdate(setCustomSchedule, value, key, index)
                        }
                        calculateCustomSchedulePrice={calculateCustomSchedulePrice}
                        handleExcludedDatesUpdate={(value, key, index) =>
                          handleDatesArrUpdate(setExcludedDates, value, key, index)
                        }
                        excludedDates={excludedDates}
                        addExcludedDates={addExcludedDates}
                      />
                    </div>
                  </div>
                  {addresses.length === 0 ? (
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
                          placeholder={t('address1Placeholder')}
                        />
                        <input
                          id="address2"
                          type="text"
                          className="input form__address"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                          placeholder={t('address2Placeholder')}
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
                            onWheel={handleWheel}
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
                      <p className={!isFormValid && windowWidth > 744 ? 'auth__note' : 'hidden'}>
                        {t('fillInAllFieldsMessage')}
                      </p>
                    </div>
                  ) : (
                    <div className="form__section">
                      <p className={!isFormValid && windowWidth > 744 ? 'auth__note' : 'hidden'}>
                        {t('fillInAllFieldsMessage')}
                      </p>
                    </div>
                  )}
                  {addresses.length === 0 && (
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
                  )}
                  <button className={`btn form__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                    {routes[2] ? t('save') : t('next')}
                  </button>
                </form>
              </div>
              <div className="book__summary">
                <div className="summary_scrollable">
                  <div className={`summary ${isSummaryUnderlined ? 'underlined' : ''}`}>
                    <h2 className="summary__title">{t('summary')}</h2>
                    <div className="summary__line summary__line_bold">
                      <h3 className="summary__subtitle">
                        {repeat !== 'One-time' ? t('cleaning') : t(selectedCleaning.type)}
                      </h3>
                      <span className="summary__price">{`€${
                        repeat === 'One-time'
                          ? roundPrice(cleaningSum * timeCoeff)
                          : repeat === 'Custom schedule'
                          ? roundPrice(customSchedule.reduce((acc, curr) => acc + curr.subtotal, 0))
                          : subscriptionPrices.length === 0
                          ? roundPrice(subtotal)
                          : subscriptionPrices.length === Number(duration)
                          ? roundPrice(
                              dates
                                .filter((date) => {
                                  const datesToRemove = excludedDates.map((elem) => elem.date);
                                  return !datesToRemove.includes(date);
                                })
                                .reduce((acc, curr) => acc + subscriptionPrices[dates.indexOf(curr)].subtotal, 0),
                            )
                          : 0
                      }`}</span>
                    </div>
                    <div
                      className={
                        repeat === 'One-time' && selectedServices.length !== 0
                          ? 'summary__line summary__line_list'
                          : 'hidden'
                      }
                    >
                      <span className="summary__item">{t('extraServices')}:</span>
                    </div>
                    <div className={repeat === 'One-time' ? 'summary__extras' : 'hidden'}>
                      {selectedServices.map((service, index) => {
                        const serviceNumber = selectedServices.find(
                          (selectedService) => selectedService.type === service.type,
                        ).count;
                        return (
                          <div key={index} className="summary__line summary__line_list">
                            <span className="summary__item">{`${t(service.type)}${
                              serviceNumber > 1 ? ` (x${serviceNumber})` : ''
                            }`}</span>
                            <span className="summary__price">{`€${roundPrice(
                              service.price * serviceNumber * timeCoeff,
                            )}`}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={repeat === 'One-time' && speedSum !== 0 ? 'summary__line' : 'hidden'}>
                      <span className="summary__item">{`${t('howFast')} (${selectedSpeed})`}</span>
                      <span className="summary__price">{`€${roundPrice(speedSum)}`}</span>
                    </div>
                    <div className={repeat !== 'One-time' ? 'summary__subscription' : 'hidden'}>
                      <div className="summary__line">
                        <span className="summary__item">{t('type')}</span>
                        <span className="summary__price">{repeat === 'Custom schedule' ? t('custom') : t(repeat)}</span>
                      </div>
                      <div
                        className={
                          (repeat !== 'Custom schedule' &&
                            repeat !== 'One-time' &&
                            dates.length !== 0 &&
                            Number(duration) !== 0) ||
                          (repeat === 'Custom schedule' &&
                            customSchedule[0].date.replace(/\D/g, '').length === 8 &&
                            customSchedule[0].isDateValid)
                            ? 'summary__line'
                            : 'hidden'
                        }
                      >
                        <span className="summary__item">{t('numberOfCleans')}</span>
                        <span className="summary__price">
                          {repeat === 'Custom schedule'
                            ? customSchedule.filter((day) => day.date.replace(/\D/g, '').length === 8).length
                            : dates.filter((date) => {
                                const datesToRemove = excludedDates.map((elem) => elem.date);
                                return !datesToRemove.includes(date);
                              }).length}
                        </span>
                      </div>
                    </div>
                    <div className="summary__subtotal">
                      <div className="summary__line">
                        <span className="summary__item">{t('subtotal')}</span>
                        <span className="summary__price">
                          {`€${
                            repeat === 'One-time'
                              ? roundPrice(subtotal)
                              : repeat === 'Custom schedule'
                              ? roundPrice(customSchedule.reduce((acc, curr) => acc + curr.subtotal, 0))
                              : subscriptionPrices.length === 0
                              ? roundPrice(subtotal)
                              : subscriptionPrices.length === Number(duration)
                              ? roundPrice(
                                  dates
                                    .filter((date) => {
                                      const datesToRemove = excludedDates.map((elem) => elem.date);
                                      return !datesToRemove.includes(date);
                                    })
                                    .reduce((acc, curr) => acc + subscriptionPrices[dates.indexOf(curr)].subtotal, 0),
                                )
                              : 0
                          }`}
                        </span>
                      </div>
                      <div className="summary__line">
                        <span className="summary__item">{`${t('iva')} ${pricing.orderTaxPercent}%`}</span>
                        <span className="summary__price">
                          {`€${
                            repeat === 'One-time'
                              ? roundPrice(iva)
                              : repeat === 'Custom schedule'
                              ? roundPrice(customSchedule.reduce((acc, curr) => acc + curr.iva, 0))
                              : subscriptionPrices.length === 0
                              ? roundPrice(iva)
                              : subscriptionPrices.length === Number(duration)
                              ? roundPrice(
                                  dates
                                    .filter((date) => {
                                      const datesToRemove = excludedDates.map((elem) => elem.date);
                                      return !datesToRemove.includes(date);
                                    })
                                    .reduce((acc, curr) => acc + subscriptionPrices[dates.indexOf(curr)].iva, 0),
                                )
                              : 0
                          }`}
                        </span>
                      </div>
                    </div>
                    <div className="summary__line summary__line_bold">
                      <span className="summary__subtitle">
                        {t('total')}
                        <span
                          className={repeat === 'One-time' ? 'link summary__tariff' : 'hidden'}
                          onClick={() => navigate('/info-price')}
                        >
                          {`(${t('tariff')} ${tariffNumber})`}
                        </span>
                      </span>
                      <span className="summary__price">
                        {`€${
                          repeat === 'One-time'
                            ? roundPrice(total)
                            : repeat === 'Custom schedule'
                            ? roundPrice(customSchedule.reduce((acc, curr) => acc + curr.total, 0))
                            : subscriptionPrices.length === 0
                            ? roundPrice(total)
                            : subscriptionPrices.length === Number(duration)
                            ? roundPrice(
                                dates
                                  .filter((date) => {
                                    const datesToRemove = excludedDates.map((elem) => elem.date);
                                    return !datesToRemove.includes(date);
                                  })
                                  .reduce((acc, curr) => acc + subscriptionPrices[dates.indexOf(curr)].total, 0),
                              )
                            : 0
                        }`}
                      </span>
                    </div>
                    <div
                      className={
                        (repeat !== 'Custom schedule' &&
                          repeat !== 'One-time' &&
                          dates.length !== 0 &&
                          Number(duration) !== 0) ||
                        (repeat === 'Custom schedule' &&
                          customSchedule[0].date.replace(/\D/g, '').length === 8 &&
                          customSchedule[0].isDateValid)
                          ? 'next-cleaning'
                          : 'hidden'
                      }
                    >
                      <span className="next-cleaning__title">{t('nextCleaning')}</span>
                      <span className="next-cleaning__value">
                        {repeat === 'Custom schedule'
                          ? `${
                              customSchedule[0].date.replace(/\D/g, '').length === 8 &&
                              formatDate(
                                customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))[0]
                                  .date,
                              )
                                .split(', ')
                                .map((elem, index) => {
                                  if (index === 1) {
                                    return t(elem).slice(0, 3);
                                  }
                                  return elem;
                                })
                                .join(', ')
                            }, ${
                              customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))[0]
                                .time
                            }`
                          : `${
                              dates.length !== 0 &&
                              formatDate(
                                dates.filter((date) => {
                                  const datesToRemove = excludedDates.map((elem) => elem.date);
                                  return !datesToRemove.includes(date);
                                })[0],
                              )
                                .split(', ')
                                .map((elem, index) => {
                                  if (index === 1) {
                                    return t(elem).slice(0, 3);
                                  }
                                  return elem;
                                })
                                .join(', ')
                            }, ${time}`}
                      </span>
                      <span className="next-cleaning__service">{t(selectedCleaning.type)}</span>
                      <span className="next-cleaning__value">
                        {repeat === 'Custom schedule'
                          ? `€${roundPrice(
                              customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))[0]
                                .total,
                            )}`
                          : dates.length !== 0 &&
                            Number(duration) !== 0 &&
                            subscriptionPrices.length === Number(duration)
                          ? `€${roundPrice(
                              subscriptionPrices[
                                dates.indexOf(
                                  dates.filter((date) => {
                                    const datesToRemove = excludedDates.map((elem) => elem.date);
                                    return !datesToRemove.includes(date);
                                  })[0],
                                )
                              ].total,
                            )}`
                          : '€0'}
                        <span className="link next-cleaning__subtitle" onClick={() => navigate('/info-price')}>
                          {repeat === 'Custom schedule'
                            ? `(${t('tariff')} ${
                                customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))[0]
                                  .tariff
                              })`
                            : dates.length !== 0 &&
                              Number(duration) !== 0 &&
                              subscriptionPrices.length === Number(duration)
                            ? `(${t('tariff')} ${
                                subscriptionPrices[
                                  dates.indexOf(
                                    dates.filter((date) => {
                                      const datesToRemove = excludedDates.map((elem) => elem.date);
                                      return !datesToRemove.includes(date);
                                    })[0],
                                  )
                                ].tariff
                              })`
                            : `(${t('tariff')} 1)`}
                        </span>
                      </span>
                      <span className="next-cleaning__link" onClick={() => setIsScheduleOpen(true)}>
                        {t('seeFullSchedule')}
                      </span>
                    </div>
                    <button
                      className={`btn summary__btn ${checkIsFormValid() ? '' : 'inactive'}`}
                      onClick={handleFormSubmit}
                    >
                      {routes[2] ? t('save') : t('next')}
                    </button>
                    <p className={!isFormValid && windowWidth <= 744 ? 'auth__note' : 'hidden'}>
                      {t('fillInAllFieldsMessage')}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      <ScheduleWindow
        isOpen={isScheduleOpen}
        setIsOpen={setIsScheduleOpen}
        repeat={repeat}
        duration={duration}
        dates={
          repeat === 'Custom schedule'
            ? customSchedule.sort((date1, date2) => parseDate(date1.date) - parseDate(date2.date))
            : dates.filter((date) => {
                const datesToRemove = excludedDates.map((elem) => elem.date);
                return !datesToRemove.includes(date);
              })
        }
        time={time}
        subscriptionPrices={subscriptionPrices}
        selectedCleaning={selectedCleaning}
        selectedServices={selectedServices}
        cleaningSum={cleaningSum}
        selectedSpeed={selectedSpeed}
        speedSum={speedSum}
        ivaPercent={pricing.orderTaxPercent}
      />
    </>
  );
};

export default Booking;
