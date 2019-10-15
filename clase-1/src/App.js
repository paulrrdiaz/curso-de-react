import React from "react";
import { render } from "react-dom";
import { Student } from "./components/Student";

const root = document.getElementById("root");

const Title = () => (
  <h1 id="hello-world" className="app-title">
    Hello World
  </h1>
);

const App = () => (
  <div>
    <Title />
    <div className="app-wrapper">
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
  </div>
);

render(<App />, root);
