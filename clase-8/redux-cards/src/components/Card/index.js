import React from "react";
import MoveCardToList from "containers/MoveCardToList";
import { Card, CardTitle, CardDescription } from "./styled";

export default ({
  title = "Default Title",
  description = "Default Description",
  listId,
  cardId
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <MoveCardToList cardId={cardId} listId={listId} />
    </Card>
  );
};
