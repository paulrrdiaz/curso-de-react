import React from "react";
export const Student = ({ name, company, background = "SE" }) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{background}</p>
    <span>{company}</span>
  </div>
);
