import React, { Component } from 'react';

class Navbar extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  state = {
    search: [{ part: 'snippet', maxResult: 25, q: 'bts' }],
  };

  onSubmit = (event) => {
    console.log(`onSubmit >>  ${event}`);
    event.preventDefault();

    const text = this.inputRef.current.value;
    console.log(text);
    text && this.props.searchInput(text);
  };

  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fa-brands fa-youtube"></i>
        <span className="navbar-name">Youtube</span>
        <form
          ref={this.formRef}
          action=""
          className="add-form"
          onSubmit={this.onSubmit}
        >
          <input
            ref={this.inputRef}
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <button className="add-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
