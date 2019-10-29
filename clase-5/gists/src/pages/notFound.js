import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <div className="app-wrapper">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};
