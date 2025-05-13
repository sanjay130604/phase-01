import React, { useState, useCallback } from "react";
import './App.css';
const Child = React.memo(({ handleClick }) => {
  console.log("Child component re-rendered");
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;