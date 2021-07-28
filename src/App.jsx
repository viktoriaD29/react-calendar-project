import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [statusModalWindow, setStatusModalWindow] = useState(false);

  const nextWeek = () => {
    let today = weekStartDate;
    let nextweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    setWeekStartDate(nextweek);
  };

  const prevWeek = () => {
    let today = weekStartDate;
    let prevweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    setWeekStartDate(prevweek);
  };

  const getTodayDate = () => {
    setWeekStartDate(new Date());
  };

  const handelModalWindow = () => {
    setStatusModalWindow(!statusModalWindow);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        todayDate={getTodayDate}
        handelModalWindow={handelModalWindow}
      />

      <Calendar
        weekDates={weekDates}
        statusModalWindow={statusModalWindow}
        handelModalWindow={handelModalWindow}
      />
    </>
  );
};

export default App;
