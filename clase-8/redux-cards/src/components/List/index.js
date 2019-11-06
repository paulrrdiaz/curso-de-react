import React from "react";

import { List, ListTitle } from "./styled";
import Card from "containers/Card";
import CreateCard from "containers/CreateCard";

export default ({ title = "Default List's title", cards, listId }) => {
  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CreateCard listId={listId} />
      {cards.map(cardId => (
        <Card key={cardId} listId={listId} cardId={cardId} />
      ))}
    </List>
  );
};
