import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week.jsx';
import Sidebar from '../sidebar/Sidebar';
//import events from '../../gateway/events';
import Modal from '../modal/modal.jsx';
import './calendar.scss';

const Calendar = ({ weekDates, statusModalWindow, handelModalWindow }) => {
  const [events, setEvents] = useState([]);

  const changeEvent = (newEvents) => {
    console.log(newEvents)
    setEvents([newEvents]);
  }
  console.log(events)

  // const getEvent = () => {
  //   getEvents().then((res) => setEvents(res));
  // };
  // useEffect(() => {
  //   getEvent();
  // }, []);

  // const baseUrl =
  //   'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/events';

  // const getEvents = (baseUrl) => {
  //   fetch(baseUrl).then(res => console.log(res.json()))
  //   throw new Error('Internal Server Error. Can\'t display events')
  // }

  return (
    <>
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={events} />
          </div>
        </div>
        {statusModalWindow ? (
          <Modal closeModalWindow={handelModalWindow} onSubmit={changeEvent} />
        ) : null}
      </section>
    </>
  );
};

export default Calendar;

// const mapTasks = (tasks) =>
//   tasks.map(({ date, dateFrom, dateTo, ...rest }) => ({
//     dateFrom: getDateTime(date, dateFrom),
//     dateTo: getDateTime(date, dateTo),
//     ...rest,
//   }));
// // export const mapTasks = (tasks) =>
// //   tasks.map(({ ...rest }) => ({
// //     ...rest,
// //   }));
// export const getEvents = () => {
//   return fetch(baseUrl)
//     .then((response) => response.json())
//     .then((tasks) => mapTasks(tasks))
//     .catch(() => {
//       console.log('error');
//     });
// };
// export const addEvent = (events) =>
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(events),
//   });
// export const deleteEvent = (id) => {
//   return fetch(`${baseUrl}/${id}`, {
//     method: 'DELETE',
//   });
// };
