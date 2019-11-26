import { cards as initialState } from "data/normalized";
import { addEntity } from "helpers/data";

export default (state = initialState, action) => {
  if (action.type === "ADD_CARD") {
    const { cardId, card } = action.payload;

    return addEntity(cardId, card, state);

    // return {
    //   ...state,
    //   entities: {
    //     ...state.entities,
    //     [cardId]: {
    //       ...card,
    //       id: cardId
    //     }
    //   },
    //   ids: [...state.ids, cardId]
    // };
  }
  return state;
};
