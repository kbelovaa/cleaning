import React from 'react';
import { useTranslation } from 'react-i18next';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isToday, addDays, parse } from 'date-fns';
import { weekdays } from '../../constants/selectOptions';
import './Calendar.scss';

const Calendar = ({
  currentDate,
  setCurrentDate,
  selectedDays,
  repeat,
  date,
  setIsDateValid,
  setDate,
  isStartDateActive,
  setIsStartDateActive,
  setIsStartDateValid,
  setStartDate,
  isLastDateActive,
  setIsLastDateActive,
  setIsLastDateValid,
  setLastDate,
  calendarRef,
  setIsAutoUpdate,
  customSchedule,
  handleCustomScheduleUpdate,
  handleExcludedDatesUpdate,
  excludedDates,
}) => {
  const { t } = useTranslation();

  const daysInCalendar = () => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });

    const calendarDays = [];
    let day = start;

    while (day <= end || calendarDays.length < 42) {
      calendarDays.push(day);
      day = addDays(day, 1);
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
        if (activeFieldIndex !== -1) {
          handleCustomScheduleUpdate(format(day, 'dd.MM.yyyy'), 'date', activeFieldIndex);
          handleCustomScheduleUpdate(false, 'isDateActive', activeFieldIndex);
          handleCustomScheduleUpdate(true, 'isDateValid', activeFieldIndex);
          setCurrentDate(day);
        }
      } else {
        const activeFieldIndex = excludedDates.findIndex((elem) => elem.isDateActive);
        if (activeFieldIndex !== -1 && selectedDays.find((elem) => elem === format(day, 'dd.MM.yyyy'))) {
          handleExcludedDatesUpdate(format(day, 'dd.MM.yyyy'), 'date', activeFieldIndex);
          handleExcludedDatesUpdate(false, 'isDateActive', activeFieldIndex);
          setCurrentDate(day);
        }
        if (isStartDateActive) {
          setStartDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsStartDateActive(false);
          setIsStartDateValid(true);
          setCurrentDate(day);
        }
        if (isLastDateActive) {
          setLastDate(format(day, 'dd.MM.yyyy'));
          setIsAutoUpdate(false);
          setIsLastDateActive(false);
          setIsLastDateValid(true);
          setCurrentDate(day);
        }
      }
    }
  };

  const getWeekDayClassName = (weekday) => {
    let isAvailable = false;

    if (repeat === 'Monthly') {
      const day = parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDate();
      const availableDate = new Date(currentDate);
      availableDate.setDate(day);
      isAvailable = availableDate.getDay() === weekday.index;
    } else if (repeat === 'Weekly' || repeat === 'Every 2 weeks') {
      const weekdayNr = parse(selectedDays[0], 'dd.MM.yyyy', new Date()).getDay();
      isAvailable = weekdayNr === weekday.index;
    }

    return isAvailable ? 'calendar__weekday_available' : '';
  };

  const getDayClassName = (day) => {
    let className = '';

    if (
      day.getMonth() - currentDate.getMonth() === 1 ||
      day.getMonth() - currentDate.getMonth() === -11 ||
      day.getMonth() - currentDate.getMonth() === -1
    ) {
      className += ' calendar__day_next';
    }

    if (
      day >= new Date().setHours(0, 0, 0, 0) &&
      (repeat === 'One-time' ||
        (repeat === 'Custom schedule' && customSchedule.find((date) => date.isDateActive)) ||
        (repeat !== 'One-time' &&
          repeat !== 'Custom schedule' &&
          ((excludedDates.find((date) => date.isDateActive) &&
            selectedDays.find((date) => date === format(day, 'dd.MM.yyyy'))) ||
            isStartDateActive ||
            isLastDateActive)))
    ) {
      className += ' calendar__day_after';
    } else {
      className += ' calendar__day_before';
    }

    if (day.getMonth() < currentDate.getMonth()) {
      className += ' calendar__day_previous';
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
        {daysInCalendar().map((day, index) => (
          <div key={index} className={`calendar__day ${getDayClassName(day)}`} onClick={() => handleDayClick(day)}>
            <span
              className={`${isToday(day) ? 'calendar__day_today' : ''} ${
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
            >
              {format(day, 'd')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
