import React from "react";
export const Student = ({
  name = "Default name",
  company = "Default company",
  background = "Default background"
}) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{company}</p>
    <span>{background}</span>
  </div>
);
