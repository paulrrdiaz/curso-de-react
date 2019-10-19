import React from "react";
import { render } from "react-dom";
import Student from "./components/Student";
import { GeoContainer } from "./components/GeoContainer";
import VanillaTilt from "vanilla-tilt";

const Title = () => (
  <h1 id="hello-world" className="app-title">
    Hello World
  </h1>
);

class App extends React.Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelector(".js--app-wrapper"));
  }

  render() {
    return (
      <div>
        <Title />
        <div
          data-til
          data-tilt-max="50"
          data-tilt-speed="400"
          data-tilt-perspective="500"
          className="app-wrapper"
        >
          <Student
            name="Paul Diaz"
            company="Cignium Technologies"
            background="Software Engineer"
          />
          <Student name="Luis Ruiz" company="Freelance" />
          <Student
            name="Andres Saavedra"
            company="Cibertec"
            background="Estudiante"
          />
        </div>
        <div className="app-wrapper">
          <GeoContainer />
        </div>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
