import React from "react";

export default ({ name, email, address: { zipcode, city, street } }) => {
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>{email}</p>
      <small>
        {zipcode}, {city}, {street}
      </small>
    </div>
  );
};
