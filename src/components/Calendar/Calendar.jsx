import React from 'react';
import { useDispatch } from 'react-redux';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isToday, addDays } from 'date-fns';
import './Calendar.scss';

const Calendar = ({ currentDate, setCurrentDate, selectedDay, setSelectedDay }) => {
  const dispatch = useDispatch();

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
      dispatch(setSelectedDay(day.toLocaleDateString()));
      setCurrentDate(day);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__weekdays">
        <span className="calendar__weekday">M</span>
        <span className="calendar__weekday">T</span>
        <span className="calendar__weekday">W</span>
        <span className="calendar__weekday">T</span>
        <span className="calendar__weekday">F</span>
        <span className="calendar__weekday">S</span>
        <span className="calendar__weekday">S</span>
      </div>
      <div className="calendar__days">
        {daysInCalendar().map((day, index) => (
          <div
            key={index}
            className={`calendar__day ${
              day.getMonth() - currentDate.getMonth() === 1 ||
              day.getMonth() - currentDate.getMonth() === -11 ||
              day.getMonth() - currentDate.getMonth() === -1
                ? 'calendar__day_next'
                : ''
            } ${day >= new Date().setHours(0, 0, 0, 0) ? 'calendar__day_after' : 'calendar__day_before'} ${
              day.getMonth() < currentDate.getMonth() ? 'calendar__day_previous' : ''
            }`}
            onClick={() => handleDayClick(day)}
          >
            <span
              className={`${isToday(day) ? 'calendar__day_today' : ''} ${
                selectedDay === day.toLocaleDateString() ? 'calendar__day_selected' : ''
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
