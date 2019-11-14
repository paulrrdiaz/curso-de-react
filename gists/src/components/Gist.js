import React from "react";

export default (props = {}) => {
  const { description } = props;
  return (
    <div className="gist">
      <h3 className="gist__title">{description}</h3>
    </div>
  );
};
