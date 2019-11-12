import React from "react";

export default ({ name, picture: { medium }, email, location: { state, city, street } }) => {
  return (
    <div className="user">
      <picture>
        <img src={medium} alt={JSON.stringify(name, null, 2)} />
      </picture>
      <div>
        <h3>{JSON.stringify(name, null, 2)}</h3>
        <p>{email}</p>
        <small>
          {state}, {city}, {street.name}
        </small>
      </div>
    </div>
  );
};
