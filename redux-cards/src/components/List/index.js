import React from "react";

import { List, ListTitle } from "./styles";
import Card from "containers/Card";
import CreateCard from "containers/CreateCard";

export default ({ title, cards, listId }) => {
  return (
    <List>
      <ListTitle>{title || ""}</ListTitle>
      <CreateCard listId={listId} />
      {cards.map(id => (
        <Card cardId={id} key={id} />
      ))}
    </List>
  );
};
