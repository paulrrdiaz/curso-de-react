import React from "react";

export default ({ name, image, email, location: { state, city, street } }) => {
  return (
    <div className="user">
      <picture>
        <img src={image} alt={name} />
      </picture>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <small>
          {state}, {city}, {street}
        </small>
      </div>
    </div>
  );
};
