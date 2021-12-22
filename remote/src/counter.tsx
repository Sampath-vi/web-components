import React from 'react';

export default () => {
  const [count, setCount] = React.useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={incrementCount}>  Increment Count </button>
    </div>
  );
};