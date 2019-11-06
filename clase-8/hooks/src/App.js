import React, { useState, useEffect } from 'react';

export default () => {
  const [time, setTime] = useState(new Date().getSeconds())
  const [name, setName] = useState('')
  const [centerTraining, setCenterTraining] = useState('Area51')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = e => {
    setCenterTraining(name)
    setName('')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date().getSeconds()
      console.log(date);
      setTime(date)
    }, 1000)

    return () => clearTimeout(timer)
  }, [time])

  useEffect(() => {
    // const data = axios.get(API)
  }, [])

  return (
    <div className="app-wrapper">
      <h1>Hooks in {centerTraining}</h1>
      <h1>{time}</h1>
      <form className="form">
        <input className="input" type="text" onChange={handleChange} value={name} />
        <button type="button" className="button" onClick={handleClick}>Click me!</button>
      </form>
    </div>
  );
}

// function useState(initialState) {
//   /*
//   const state = initialState

//   const setState = () => {
//     ...
//   }

//   do stuff...
  
//   */
//   return [state, setState]
// }