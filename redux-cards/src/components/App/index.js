import React from "react";
import { Global, css } from "@emotion/core";
import { Router } from "@reach/router";

import Header from "components/Shared/Header";
import Home from "pages/Home";
import Board from "pages/Board";
import Login from "pages/Login";
import GlobalStyles from "./styles";

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
          <Board path="/board" />
          <Login path="/login" />
        </Router>
      </main>
    </>
  );
}

export default App;
