import React from "react";
import { render } from "react-dom";

import UsersContainer from "./containers/UsersContainer";
import { Container } from "./containers/GeoContainer";



const App = () => {
  return (
    <React.Fragment>
      <div className="app-wrapper">
        <h1>Hello</h1>
      </div>
      <div className="app-wrapper">
        <UsersContainer />
      </div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
