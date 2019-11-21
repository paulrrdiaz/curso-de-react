import { cards as initialState } from "data/normalized";

export default (state = initialState, action) => {
  if (action.type === "ADD_CARD") {
    const { cardId, card } = action.payload;

    return {
      ...state,
      entities: {
        ...state.entities,
        [cardId]: {
          ...card,
          id: cardId
        },
      },
      ids: [
        ...state.ids,
        cardId
      ]
    };
  }
  return state;
};
