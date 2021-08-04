import React, { useState } from 'react';
import { deleteEvents } from '../../gateway/eventsGateway';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ ID, height, marginTop, title, time }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);

  const clickEvent = () => {
    setShowBtn(!showBtn);
  };

  const handleDelete = () => {
    deleteEvents(ID);
    setDeleteEvent(true);
  };

  const eventStyle = {
    height,
    marginTop,
  };

  return !deleteEvent ? (
    <div style={eventStyle} className="event" onClick={clickEvent}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showBtn === true && (
        <button onClick={handleDelete} className="delete-event-btn">
          Delete
        </button>
      )}
    </div>
  ) : null;
};

export default Event;

Event.propTypes = {
  ID: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
