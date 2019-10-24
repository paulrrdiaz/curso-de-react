import React from "react";

export default ({ name: { first, last }, picture, location }) => {
  const userName = `${first} ${last}`;

  return (
    <div className="student">
      <picture>
        <img src={picture.thumbnail} alt={userName} />
      </picture>
      <div>
        <h3>{userName}</h3>
        <p>
          {location.country} {location.city}
        </p>
      </div>
    </div>
  );
};
