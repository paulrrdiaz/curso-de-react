import React from "react";

import { List, ListTitle } from "./styles";
import Card from "components/Card";
import CreateCard from "components/CreateCard";

export default ({ title = "Default List's title" }) => {
  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CreateCard />
      {[1, 2].map(id => (
        <Card key={id} />
      ))}
    </List>
  );
};
