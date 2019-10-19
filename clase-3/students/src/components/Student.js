import React from "react";

const Student = ({
  name = "Somebody",
  background = "Programmer",
  company = "Area51"
}) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{background}</p>
    <span>{company}</span>
  </div>
);

export default Student;
