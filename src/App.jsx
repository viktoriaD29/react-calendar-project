import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    statusModalWindow: false,
  };

  nextWeek = () => {
    let today = this.state.weekStartDate;
    let nextweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    this.setState({
      weekStartDate: nextweek,
    });
  };

  prevWeek = () => {
    let today = this.state.weekStartDate;
    let prevweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    this.setState({
      weekStartDate: prevweek,
    });
  };

  getTodayDate = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  handelModalWindow = () => {
    this.setState({
      statusModalWindow: !this.state.statusModalWindow,
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          todayDate={this.getTodayDate}
          handelModalWindow={this.handelModalWindow}
        />

        <Calendar
          weekDates={weekDates}
          statusModalWindow={this.state.statusModalWindow}
          handelModalWindow={this.handelModalWindow}
        />
      </>
    );
  }
}

export default App;
