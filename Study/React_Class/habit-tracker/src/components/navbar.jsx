import React, { Component } from 'react';

class Navbar extends Component {
  // hanleTotalCount = (navbar) => {
  //   console.log(`this.props ${this.props}`);
  //   console.log(`this.props ${navbar}`);
  // };
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fa-light fa-star"></i>
        <span className="tracker-name">Habit Tracker </span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
