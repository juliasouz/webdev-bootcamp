import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <div className="button-group">
        <button className="button decrease" onClick={decrease}>
          -
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
        <button className="button increase" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;