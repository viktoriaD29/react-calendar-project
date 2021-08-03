import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [statusModal, setStatusModal] = useState(false);

  const nowYear = weekStartDate.getFullYear();
  const nowMonth = weekStartDate.getMonth();
  const nowDate = weekStartDate.getDate();

  const nextWeek = () => {
    const nextweek = new Date(nowYear, nowMonth, nowDate + 7);
    setWeekStartDate(nextweek);
  };

  const prevWeek = () => {
    const prevweek = new Date(nowYear, nowMonth, nowDate - 7);
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
