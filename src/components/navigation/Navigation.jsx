import React from 'react';
import { days } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
  let today = false;

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div className="calendar__day-label day-label">
          {dayDate.getDate() === new Date().getDate()
            ? (today = true)
            : (today = false)}
          <span
            className={
              today ? 'day-label__day-name-today' : 'day-label__day-name'
            }
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

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
