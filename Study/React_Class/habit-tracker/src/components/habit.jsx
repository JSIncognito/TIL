import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          {/* <i class="fa-solid fa-plus"></i> */}
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease">
          {/* <i class="fa-solid fa-minus"></i> */}
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
