import React from "react";
import { Select } from "components/Shared/Form";

export default ({ lists, listId, moveCardToList }) => {
  return (
    <Select value={listId} onChange={moveCardToList}>
      {lists.map(({ id, title }) => (
        <option key={id} value={id}>
          {title}
        </option>
      ))}
    </Select>
  );
};
