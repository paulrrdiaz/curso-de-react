import React from "react";
import { render } from "react-dom";

import { Student } from "./Student";
import { AppWrapper } from "./AppWrapper";
import { Title } from "./Title";

const App = () => {
  return (
    <React.Fragment>
      <AppWrapper>
        <Title text="Hello React in Area51" />
      </AppWrapper>
      <AppWrapper>
        <Student name="Paul" company="Tranzact" background="UI Engineer" />
        <Student name="Cristian" company="Google" background="Backend" />
        <Student name="Yoel" company="Facebook" background="UI Engineer" />
      </AppWrapper>
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
