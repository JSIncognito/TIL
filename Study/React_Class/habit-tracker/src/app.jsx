import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

// import Habit from './components/habit';

class App extends Component {
  state = {
    habitTracker: { id: 1, count: 0 },
  };
  render() {
    return (
      <>
        <Navbar />
        <input className="habit-input" defaultValue="Habit" type="text" />
        <button className="habit-add-btn">Add</button>
        <Habits />
        <button className="habit-reset-btn">Reset All</button>
      </>
    );
  }
}

export default App;
