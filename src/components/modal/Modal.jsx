import React, { Component, useState } from 'react';
import moment from 'moment';
import './modal.scss';

class Modal extends Component {
  state = {
    title: '',
    startTime: moment(new Date()).format('h:mm'),
    endTime: moment(new Date()).format('h:mm'),
    description: '',
  };

  handleChange = (event) => {
    
    console.log(event.target.value)
    
    this.setState = () => {
     
    };
  };

  handelSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.closeModalWindow}
            >
              +
            </button>
            <form onSubmit={this.handelSubmit} className="event-form">
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <div className="event-form__time">
                <input type="date" name="date" className="event-form__field" />
                <input
                  id="startTime"
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={this.state.startTime}
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  id="endTime"
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
