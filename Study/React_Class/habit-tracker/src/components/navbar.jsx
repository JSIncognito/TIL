import React, { Component } from 'react';

class Navbar extends Component {
  hanleTotalCount = (navbar) => {
    console.log(`this.props ${this.props}`);
    console.log(`this.props ${navbar}`);
  };
  render() {
    return (
      <div className="habit-tracker">
        <span className="tracker-name">HabitTracker</span>
        <span className="tracker-count">1</span>
      </div>
    );
  }
}

export default Navbar;
