import React from "react";
import { render } from "react-dom";

const Presentational = props => {
  const { lat, lng } = props;

  return (
    <div>
      <p>Latitud: {lat}</p>
      <p>Longitud: {lng}</p>
    </div>
  );
};

class Container extends React.Component {
  componentDidMount() {
    console.log("mounted...");
    if (navigator.geolocation) {
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(function(coords) {
        console.log("---");
        console.log(coords);
      });
    }
  }

  render() {
    console.log("rendering...");

    return (
      <div className="container">
        <h2>Container</h2>
      </div>
    );
  }
}
const App = () => {
  return (
    <React.Fragment>
      <div className="app-wrapper">
        <h1>Hello</h1>
      </div>
      <div className="app-wrapper">
        <Container />
      </div>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
