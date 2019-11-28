import React from "react";
import { Global, css } from "@emotion/core";
import { Router } from "@reach/router";

import Header from "components/Shared/Header";
import Home from "pages/Home";
import Board from "pages/Board";
import Login from "pages/Login";
import Drinks from "pages/Drinks";
import Drink from "pages/Drink";
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
          <Drinks path="/drinks" />
          <Drink path="/drinks/details/:id" />
        </Router>
      </main>
    </>
  );
}

export default App;
