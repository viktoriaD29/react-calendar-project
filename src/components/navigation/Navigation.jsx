import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  let isToday = false
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div className="calendar__day-label day-label">
          {dayDate.getDate() === new Date().getDate()
            ? (isToday = true)
            : (isToday = false)}
          <span
            className={isToday ? 'day-label__day-name-now' : 'day-label__day-name'}
          >
            {days[dayDate.getDay()]}
          </span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
