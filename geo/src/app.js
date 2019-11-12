import React from "react";
import { render } from "react-dom";

import User from "./components/User";
import { Container } from "./containers/GeoContainer";

const App = () => {
  return (
    <React.Fragment>
      <div className="app-wrapper">
        <h1>Hello</h1>
      </div>
      <div className="app-wrapper">
        <User
          name="Paul Diaz"
          email="paulrrdiaz@gmail.com"
          image="http://placeimg.com/480/480/any"
          location={{ state: "Lima", city: "Lima", street: "Arenales" }}
        />
      </div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
