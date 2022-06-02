import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    // this.setState({ count: this.state.count + 1 });
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated `);
  }, [count]);

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{this.state.count}</span>
      <button
        className="habit-button habit-increase"
        onClick={this.handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
