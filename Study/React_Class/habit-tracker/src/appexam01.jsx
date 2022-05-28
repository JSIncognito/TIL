import React from 'react';
import './app.css';

function App() {
  const name = 'ellie';
  // const name = undefined;

  return (
    <React.Fragment>
      <h1>Hello</h1>
      {name && <h1 className="title">Hello {name} :)</h1>}
      {['hart', 'apple'].map((item) => (
        <h1>{item}</h1>
      ))}
    </React.Fragment>
  );
}

export default App;
