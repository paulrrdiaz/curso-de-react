import React from "react";

export default props => {
  const { count, increment, decrement, reset } = props;

  return (
    <div className="counter text-center">
      <h2 className="counter__number">{count}</h2>
      <div>
        <button onClick={increment} className="button">Increment</button>
        <button onClick={reset} className="button">Reset</button>
        <button onClick={decrement} className="button">Disminuir</button>
      </div>
    </div>
  );
};
