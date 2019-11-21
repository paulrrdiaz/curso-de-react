import React from "react";

import { Lists } from "./styles";
import List from "containers/List";

export default ({ lists = [] }) => {
  return (
    <Lists>
      {lists.map(id => (
        <List listId={id} key={id} />
      ))}
    </Lists>
  );
};
