import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (event) => {
    // console.log(event);
    // state 오브젝트 안에 있는 count 를 증가 한뒤 state 를 업데이트 해야 함.
    // this.state.count += 1; // React 는 옆의 코드와 같이 변경을 했을때, 업데이트 되었는지 알수없음. (부분적으로 업데이트를 할 수 없음.)
    this.setState({ count: this.state.count + 1 }); // React 에서 제공하는 setState 를 사용해야함.
  };
  handleDecrement = (event) => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
