import { lists as initialState } from "data/normalized";
import { addItemToEntity } from "helpers/data";

export default (state = initialState, action) => {
  if (action.type === "ADD_CARD") {
    const { listId, cardId } = action.payload;

    return addItemToEntity(listId, "cards", cardId, state);

    // return {
    //   ...state,
    //   entities: {
    //     ...state.entities,
    //     [listId]: {
    //       ...state.entities[listId],
    //       cards: [...state.entities[listId].cards, cardId]
    //     }
    //   }
    // };
  }
  return state;
};
