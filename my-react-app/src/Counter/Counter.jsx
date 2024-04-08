import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <p className="header-count">Count: {count}</p>

      <div className="buttons">
        <button className="btn btn-sub" onClick={decreaseCount}>
          Decrease
        </button>
        <button className="btn btn-reset" onClick={resetCount}>
          Reset
        </button>
        <button className="btn btn-add" onClick={increaseCount}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
