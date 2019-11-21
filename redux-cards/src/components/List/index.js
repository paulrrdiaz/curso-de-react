import React from "react";

import { List, ListTitle } from "./styles";
import Card from "components/Card";
import CreateCard from "components/CreateCard";

export default ({ title, cards }) => {
  return (
    <List>
      <ListTitle>{title || ""}</ListTitle>
      <CreateCard />
      {cards.map(id => (
        <Card key={id} />
      ))}
    </List>
  );
};
