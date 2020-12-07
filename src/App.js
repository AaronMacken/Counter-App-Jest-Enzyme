import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isError, setError] = useState(false);

  const setIncrement = () => {
    if (isError) {
      setError(false);
    }
    setCount(count + 1);
  }

  const setDecrement = () => {
    if (count === 0) {
      setError(true);
      return;
    } 
    setCount(count -1);
  }

  return (
    <div className="App" data-test="componentApp">
      <h1>Learn Jest & Enzyme!</h1>
      <br />
      <h2 data-test="counterDisplay">Current Count:<span>{count}</span></h2>

      { isError ? <p>You cannot go below 0</p> : null }

      <button className="btn increment" type="button" onClick={setIncrement}>Increment Count</button>
      <button className="btn decrement" type="button" onClick={setDecrement}>Decrement count</button>

    </div>
  );
}

export default App;
