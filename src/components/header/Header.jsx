import React from 'react';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ nextWeek, prevWeek, todayDate, handelModalWindow }) => {
  return (
    <>
      <header className="header">
        <button className="button create-event-btn" onClick={handelModalWindow}>
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

{
  /* <svg width="36" height="36" viewBox="0 0 36 36">
  <path fill="#34A853" d="M16 16v14h4V20z"></path>
  <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
  <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
  <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
  <path fill="none" d="M0 0h36v36H0z"></path>
</svg>; */
}
