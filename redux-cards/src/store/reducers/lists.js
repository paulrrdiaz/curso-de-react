import { lists as initialState } from "data/normalized";

export default (state = initialState, action) => {
  if (action.type === "ADD_CARD") {
    const { listId, cardId } = action.payload;

    return {
      ...state,
      entities: {
        ...state.entities,
        [listId]: {
          ...state.entities[listId],
          cards: [...state.entities[listId].cards, cardId]
        }
      }
    };
  }
  return state;
};
