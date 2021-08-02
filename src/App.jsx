import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [statusModal, setStatusModal] = useState(false);

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

  const handelModal = () => {
    setStatusModal(!statusModal);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        todayDate={getTodayDate}
        handelModal={handelModal}
      />

      <Calendar
        weekDates={weekDates}
        statusModal={statusModal}
        handelModal={handelModal}
      />
    </>
  );
};

export default App;
