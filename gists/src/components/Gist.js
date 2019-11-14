import React from "react";

export default (props = {}) => {
  const {
    description,
    owner: { login }
  } = props;
  return (
    <div className="gist">
      <h3 className="gist__title">{description}</h3>
      <p>{login}</p>
    </div>
  );
};
