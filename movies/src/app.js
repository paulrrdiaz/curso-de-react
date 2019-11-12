import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <div className='drinks__search'></div>
      <div className='drinks__list'></div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
