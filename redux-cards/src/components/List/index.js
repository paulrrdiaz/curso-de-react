import React from "react";

import { List, ListTitle } from "./styles";
import Card from "containers/Card";
import CreateCard from "components/CreateCard";

export default ({ title, cards }) => {
  return (
    <List>
      <ListTitle>{title || ""}</ListTitle>
      <CreateCard />
      {cards.map(id => (
        <Card cardId={id} key={id} />
      ))}
    </List>
  );
};
