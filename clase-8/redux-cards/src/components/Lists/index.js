import React from "react";

import { Lists } from "./styled";
import List from "containers/List";

export default ({ lists }) => {
  return (
    <Lists>
      {lists.map(id => (
        <List key={id} listId={id} />
      ))}
    </Lists>
  );
};
