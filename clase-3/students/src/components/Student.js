import React from "react";
import Proptypes from 'prop-types'

const Student = ({
  name = "Somebody",
  background = "Programmer",
  company = "Area51",
  age,
  sex,
  birthday,

}) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{background}</p>
    <span>{company}</span>
  </div>
);

export default Student;
