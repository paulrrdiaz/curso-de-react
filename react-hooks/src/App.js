import React, { useState, useEffect } from 'react';

const Button = ({ triggerEvent, children }) =>
  <button
    className="button"
    onClick={triggerEvent}>{children}</button>

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + number);
  }

  useEffect(() => {
    console.log("yo reemplazo al componentDidUpdate")
  }, [count])

  useEffect(() => {
    console.log("yo reemplazo al componentDidUpdate")
  }, [number])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log('scrolling', window.pageYOffset);
    })

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <>
      <div className="app-wrapper">
        <h1>{count}</h1>
      </div>
      <div className="app-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <input
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            type="number"
            className="input" />
          <button
            className="button"
            type="submit">Agregar número</button>
        </form>
      </div>
      <div className="app-wrapper">
        <Button
          triggerEvent={() => setCount(count + 1)}>Agregar 1</Button>
        <Button
          triggerEvent={() => setCount(count - 1)}>Disminuir 1</Button>
      </div>
    </>
  );
}

export default App;
