import React from "react";

import { Lists } from "./styles";
import List from "components/List";

export default () => {
  return (
    <Lists>
      {[1, 2, 3].map(id => (
        <List key={id} />
      ))}
    </Lists>
  );
};
