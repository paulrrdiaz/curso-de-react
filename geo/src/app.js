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
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      isFetching: false
    };

    console.log("constructor");
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    console.log("mounted...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    }
  }

  setPosition({ coords: { latitude, longitude } }) {
    setTimeout(() => {
      this.setState({
        lat: latitude,
        lng: longitude,
        isFetching: false
      });
    }, 2000);
  }

  render() {
    const { isFetching } = this.state;
    console.log("rendering...");
    console.log(this.state);

    return (
      <div className="container">
        <h2>Container</h2>
        {isFetching ? "Loading..." : <Presentational {...this.state} />}
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
