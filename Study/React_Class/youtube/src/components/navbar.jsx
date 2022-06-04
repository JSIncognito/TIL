import React, { Component } from 'react';

class Navbar extends Component {
  onSubmit = (event) => {
    console.log(`onSubmit >>  ${event}`);
    event.preventDefault();
  };
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fa-brands fa-youtube"></i>
        <span className="navbar-name">Youtube</span>
        <form action="" className="add-form" onSubmit={this.onSubmit}>
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="add-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
