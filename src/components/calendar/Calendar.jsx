import React, { useEffect, useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week.jsx';
import Sidebar from '../sidebar/Sidebar';
import { getEvents } from '../../gateway/eventsGateway';
import Modal from '../modal/Modal.jsx';
import PropTypes from 'prop-types';
import './calendar.scss';

const Calendar = ({ weekDates, statusModal, handelModal }) => {
  const [events, setEvents] = useState([]);

  const getEvent = () => getEvents().then((response) => setEvents(response));

  useEffect(() => {
    getEvent();
  }, []);

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
        {statusModal ? (
          <Modal closeModal={handelModal} events={events} getEvent={getEvent} />
        ) : null}
      </section>
    </>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  statusModal: PropTypes.bool.isRequired,
  handelModal: PropTypes.func.isRequired,
};
