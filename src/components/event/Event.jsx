import React, {useState} from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const [deleteWindow, setDeleteWindow] = useState(false)
  const [deleteEvent, setDeleteEvent] = useState(false);

  const toggle = () => {
    setDeleteWindow(!deleteWindow)
  }

  const handleDelete = () => {
    setDeleteEvent(true);
  };
  
  const eventStyle = {
    height,
    marginTop,
  };

  return !deleteEvent ? (
    <div style={eventStyle} className="event" onClick={toggle}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {deleteWindow === true && (
        <button onClick={handleDelete} className="delete-event-btn">Delete</button>
      )}
    </div>
  ) : null
};

export default Event;
