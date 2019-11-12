import React from "react";

export const Presentational = props => {
  const { lat, lng } = props;
  return (
    <div>
      <p>Latitud: {lat}</p>
      <p>Longitud: {lng}</p>
    </div>
  );
};
