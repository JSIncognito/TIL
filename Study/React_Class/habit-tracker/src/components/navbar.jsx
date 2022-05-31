import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  // hanleTotalCount = (navbar) => {
  //   console.log(`this.props ${this.props}`);
  //   console.log(`this.props ${navbar}`);
  // };
  render() {
    console.log('navbar');
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
