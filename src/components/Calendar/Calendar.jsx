import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isToday,
  addDays,
  parse,
  isSameMonth,
} from 'date-fns';
import { weekdays } from '../../constants/selectOptions';
import { roundPrice } from '../../utils/calculatePrice';
import './Calendar.scss';

const Calendar = ({
  currentDate,
  setCurrentDate,
  selectedDays,
  subscriptionPrices,
  total,
  repeat,
  time,
  date,
  setIsDateValid,
  setDate,
  startDate,
  isStartDateActive,
  setIsStartDateActive,
  setIsStartDateValid,
  setStartDate,
  lastDate,
  isLastDateActive,
  setIsLastDateActive,
  setIsLastDateValid,
  setLastDate,
  duration,
  calendarRef,
  setIsAutoUpdate,
  customSchedule,
  handleCustomScheduleUpdate,
  calculateCustomSchedulePrice,
  handleExcludedDatesUpdate,
  excludedDates,
  addExcludedDates,
}) => {
  const { t } = useTranslation();

  const daysInCalendar = () => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });

    const calendarDays = [];
    let day = start;

    while (day <= end || calendarDays.length < 42) {
      if (isSameMonth(day, currentDate)) {
        calendarDays.push(day);
      } else {
        calendarDays.push('');
      }
      day = addDays(day, 1);
    }

    for (let i = 0; i < 2; i++) {
      const remainingEmptyLines = calendarDays.slice(-7).every((day) => day === '');
      if (remainingEmptyLines) {
        calendarDays.splice(-7);
      }
    }

    return calendarDays;
  };

  const handleDayClick = (day) => {
    if (day >= new Date().setHours(0, 0, 0, 0)) {
      if (repeat === 'One-time') {
        setDate(format(day, 'dd.MM.yyyy'));
        setIsDateValid(true);
        setCurrentDate(day);
      } else if (repeat === 'Custom schedule') {
        const activeFieldIndex = customSchedule.findIndex((elem) => elem.isDateActive);
        const emptyIndex = customSchedule.findIndex((elem) => elem.date.replace(/\D/g, '').length !== 8);
        if (activeFieldIndex !== -1) {
          handleCustomScheduleUpdate(false, 'isDateActive', activeFieldIndex);
          handleCustomScheduleUpdate(true, 'isDateValid', activeFieldIndex);
          handleCustomScheduleUpdate(format(day, 'dd.MM.yyyy'), 'date', activeFieldIndex);
          calculateCustomSchedulePrice(
            activeFieldIndex,
            format(day, 'dd.MM.yyyy'),
            customSchedule[activeFieldIndex].time,
          );
          setCurrentDate(day);
        } else if (emptyIndex !== -1) {
          handleCustomScheduleUpdate(false, 'isDateActive', emptyIndex);
          handleCustomScheduleUpdate(true, 'isDateValid', emptyIndex);
          calculateCustomSchedulePrice(emptyIndex, format(day, 'dd.MM.yyyy'), customSchedule[emptyIndex].time);
          handleCustomScheduleUpdate(format(day, 'dd.MM.yyyy'), 'date', emptyIndex);
          setCurrentDate(day);
        }
      } else {
        const activeFieldIndex = excludedDates.findIndex((elem) => elem.isDateActive);
        const emptyIndex = excludedDates.findIndex((elem) => elem.date.replace(/\D/g, '').length !== 8);
        if (activeFieldIndex !== -1 && selectedDays.find((elem) => elem === format(day, 'dd.MM.yyyy'))) {
          handleExcludedDatesUpdate(false, 'isDateActive', activeFieldIndex);
          handleExcludedDatesUpdate(true, 'isDateValid', activeFieldIndex);
          handleExcludedDatesUpdate(format(day, 'dd.MM.yyyy'), 'date', activeFieldIndex);
          setCurrentDate(day);
        } else if (isStartDateActive) {
          setStartDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsStartDateActive(false);
          setIsStartDateValid(true);
          setCurrentDate(day);
        } else if (isLastDateActive) {
          setLastDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsLastDateActive(false);
          setIsLastDateValid(true);
          setCurrentDate(day);
        } else if (startDate.replace(/\D/g, '').length !== 8) {
          setStartDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsStartDateActive(false);
          setIsStartDateValid(true);
          setCurrentDate(day);
        } else if (lastDate.replace(/\D/g, '').length !== 8) {
          setLastDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsLastDateActive(false);
          setIsLastDateValid(true);
          setCurrentDate(day);
        } else if (
          addExcludedDates &&
          emptyIndex !== -1 &&
          selectedDays.find((elem) => elem === format(day, 'dd.MM.yyyy'))
        ) {
          handleExcludedDatesUpdate(false, 'isDateActive', emptyIndex);
          handleExcludedDatesUpdate(true, 'isDateValid', emptyIndex);
          handleExcludedDatesUpdate(format(day, 'dd.MM.yyyy'), 'date', emptyIndex);
          setCurrentDate(day);
        }
      }
    }
  };

  const getWeekDayClassName = (weekday) => {
    let isAvailable = false;

    if (repeat === 'Monthly' && selectedDays.length !== 0) {
      const day = parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDate();
      const availableDate = new Date(currentDate);
      availableDate.setDate(day);
      isAvailable = availableDate.getDay() === weekday.index;
    } else if ((repeat === 'Weekly' || repeat === 'Every 2 weeks') && selectedDays.length !== 0) {
      const weekdayNr = parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDay();
      isAvailable = weekdayNr === weekday.index;
    } else {
      isAvailable = true;
    }

    return isAvailable ? 'calendar__weekday_available' : 'calendar__weekday_unavailable';
  };

  const getDayClassName = (day) => {
    let className = '';

    if (
      day >= new Date().setHours(0, 0, 0, 0) &&
      (repeat === 'One-time' ||
        (repeat === 'Custom schedule' &&
          (customSchedule.find((elem) => elem.date.replace(/\D/g, '').length !== 8) ||
            customSchedule.find((date) => date.isDateActive))) ||
        (repeat !== 'One-time' &&
          repeat !== 'Custom schedule' &&
          (((excludedDates.find((date) => date.isDateActive) ||
            (addExcludedDates && excludedDates.find((elem) => elem.date.replace(/\D/g, '').length !== 8))) &&
            selectedDays.find((date) => date === format(day, 'dd.MM.yyyy'))) ||
            isStartDateActive ||
            startDate.replace(/\D/g, '').length !== 8 ||
            isLastDateActive ||
            lastDate.replace(/\D/g, '').length !== 8)))
    ) {
      className += ' calendar__day_after';
    } else if (day < new Date().setHours(0, 0, 0, 0)) {
      className += 'calendar__day_before';
    }

    if (selectedDays.length !== 0) {
      if (repeat === 'Monthly' && !(parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDate() === day.getDate())) {
        className += ' calendar__day_unactive';
      } else if (
        (repeat === 'Weekly' || repeat === 'Every 2 weeks') &&
        !(parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDay() === day.getDay())
      ) {
        className += ' calendar__day_unactive';
      }
    }

    return className;
  };

  return (
    <div className="calendar" ref={calendarRef}>
      <div className="calendar__weekdays">
        {weekdays.map((weekday, index) => (
          <span key={index} className={`calendar__weekday ${getWeekDayClassName(weekday)}`}>
            {t(weekday.name).slice(0, 1)}
          </span>
        ))}
      </div>
      <div className="calendar__days">
        {daysInCalendar().map((day, index) =>
          day ? (
            <div
              key={index}
              className={`calendar__day ${getDayClassName(day)} ${isToday(day) ? 'calendar__day_today' : ''} ${
                (repeat !== 'Custom schedule' &&
                  repeat !== 'One-time' &&
                  selectedDays.includes(format(day, 'dd.MM.yyyy')) &&
                  !excludedDates.find((elem) => elem.date === format(day, 'dd.MM.yyyy'))) ||
                (repeat === 'Custom schedule' &&
                  customSchedule.find((elem) => elem.date === format(day, 'dd.MM.yyyy'))) ||
                (repeat === 'One-time' && date === format(day, 'dd.MM.yyyy'))
                  ? 'calendar__day_selected'
                  : ''
              }`}
              onClick={() => handleDayClick(day)}
            >
              <span className="calendar__date">{format(day, 'd')}</span>
              {(repeat !== 'Custom schedule' &&
                repeat !== 'One-time' &&
                selectedDays.includes(format(day, 'dd.MM.yyyy')) &&
                !excludedDates.find((elem) => elem.date === format(day, 'dd.MM.yyyy'))) ||
              (repeat === 'Custom schedule' &&
                customSchedule.find((elem) => elem.date === format(day, 'dd.MM.yyyy'))) ||
              (repeat === 'One-time' && date === format(day, 'dd.MM.yyyy')) ? (
                <>
                  <span className="calendar__time">
                    {repeat === 'Custom schedule'
                      ? customSchedule.find((elem) => elem.date === format(day, 'dd.MM.yyyy')).time
                      : time}
                  </span>
                  <span className="calendar__price">
                    {repeat !== 'Custom schedule' &&
                    repeat !== 'One-time' &&
                    subscriptionPrices.length === Number(duration)
                      ? `€${roundPrice(
                          subscriptionPrices[selectedDays.findIndex((elem) => elem === format(day, 'dd.MM.yyyy'))]
                            .total,
                        )}`
                      : repeat === 'Custom schedule'
                      ? `€${roundPrice(customSchedule.find((elem) => elem.date === format(day, 'dd.MM.yyyy')).total)}`
                      : `€${roundPrice(total)}`}
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div key={index} className="calendar__day calendar__day_invisible"></div>
          ),
        )}
      </div>
    </div>
  );
};

export default Calendar;
