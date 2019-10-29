import React from "react";
import "./styles/app.scss";
import { Router } from "@reach/router";

import Home from "./pages/index";
import PokemonDetail from "./pages/pokemonDetail";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Home path="/" />
      <PokemonDetail path="/pokemon/:name" />
      <NotFound default />
    </Router>
  );
}

export default App;
