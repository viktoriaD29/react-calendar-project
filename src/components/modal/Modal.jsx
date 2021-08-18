import React from 'react';
import { createEvent } from '../../gateway/eventsGateway';
import PropTypes from 'prop-types';
import moment from 'moment'
import {getDateTime} from '../../utils/dateUtils'
import './modal.scss';

const Modal = ({ closeModal, getEvent }) => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    const date = moment(formData.date).format("YYYY-MM-DD")

    createEvent({
      title: formData.title,
      description: formData.description,
      dateFrom: getDateTime(date, formData.startTime),
      dateTo: getDateTime(date, formData.endTime),
    }).then(() => getEvent());
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form onSubmit={handelSubmit} className="event-form">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                id="startTime"
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                id="endTime"
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
};
