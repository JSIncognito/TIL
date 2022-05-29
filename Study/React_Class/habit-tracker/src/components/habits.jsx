import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    // habit.count++;
    // this.setState(this.state);

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    // this.setState({ habits: habits }); // state 의 hagits 와 로컬변수 habits 의 이름의 같은 경우 아래와 같이 생략이 가능함.
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    // console.log(`hadleDecrement is index >> ${index}`);
    // this.setState({ habits: habits }); // state 의 hagits 와 로컬변수 habits 의 이름의 같은 경우 아래와 같이 생략이 가능함.
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    // const habits = [...this.state.habits];
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
