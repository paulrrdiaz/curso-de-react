import React from "react";

export default ({ count }) => {
  const validatorClass = count % 2 ? "is-odd" : "";

  return <div className={`validator ${validatorClass}`}>Test</div>;
};
