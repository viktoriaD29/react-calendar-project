import React from 'react';
import { months } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ nextWeek, prevWeek, todayDate, handelModal }) => {
  return (
    <>
      <header className="header">
        <button className="button create-event-btn" onClick={handelModal}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button className="navigation__today-btn button" onClick={todayDate}>
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={prevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={nextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {months[new Date().getMonth()]}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  todayDate: PropTypes.func.isRequired,
  handelModal: PropTypes.func.isRequired,
};
