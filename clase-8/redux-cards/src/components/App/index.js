import React from "react";
import { Global, css } from "@emotion/core";
import { Router } from "@reach/router";

import Header from "components/Shared/Header";
import Home from "pages/Home";
import Login from "pages/Login";
import Board from "pages/Board";
import Drinks from "pages/Drinks";
import GlobalStyles from "./styled";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${GlobalStyles}
        `}
      />
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Board path="/board" />
          <Drinks path="/drinks" />
        </Router>
      </main>
    </>
  );
}

export default App;
