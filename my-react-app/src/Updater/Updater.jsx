import React, { useState } from "react";

const Updater = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const resetCount = () => {
    setCount((c) => (c = 0));
  };

  const addCount = () => {
    setCount((c) => c + 1); //c is previous count not current count.
    setCount((c) => c + 1); //c is updated to 1 and adds 1 updates to 2.
    setCount((c) => c + 1); //c is 2 updates to three.
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={addCount}>Add</button>
    </div>
  );
};

export default Updater;
