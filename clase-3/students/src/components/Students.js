import React from "react";
import Student from "./Student";

export default ({ students }) =>
  students.map(student => {
    return <Student {...student} />;
  });
