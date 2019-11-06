import React from "react";

import { Header, NavList, NavListLink } from "./styled";

export default () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <NavListLink to="/">Home</NavListLink>
          </li>
          <li>
            <NavListLink to="/login">Login</NavListLink>
          </li>
          <li>
            <NavListLink to="/board">Board</NavListLink>
          </li>
          <li>
            <NavListLink to="/drinks">Drinks</NavListLink>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};
