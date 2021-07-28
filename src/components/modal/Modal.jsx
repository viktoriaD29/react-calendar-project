import React, { useState } from 'react';
import './modal.scss';
import events from '../../gateway/events';

const Modal = ({ closeModalWindow, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  //const [events, setEvents] = useState(events);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeStartTime = (event) => {
    setStartTime(event.target.value);
  };

  const handleChangeEndTime = (event) => {
    setEndTime(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    // const newEvent = {
    //   id: Math.random(),
    //   title: title,
    //   description: description,
    //   startTime: startTime,
    //   endTime: endTime
    // }
    // console.log(newEvent)
    // onSubmit(newEvent)

    onSubmit({
      id: Math.random(),
      title: title,
      description: description,
      startTime: startTime,
      endTime: endTime,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={closeModalWindow}
          >
            +
          </button>
          <form className="event-form">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChangeTitle}
            />
            <div className="event-form__time">
              <input
                value={date}
                onChange={handleChangeDate}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                id="startTime"
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChangeStartTime}
              />
              <span>-</span>
              <input
                id="endTime"
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChangeEndTime}
              />
            </div>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChangeDescription}
            ></textarea>
            <button
              onClick={handelSubmit}
              type="submit"
              className="event-form__submit-btn"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
