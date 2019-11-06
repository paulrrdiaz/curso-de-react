import { cards as defaultCards } from "data/normalized";
import { addEntity } from "helpers/data";

export default (cards = defaultCards, action) => {
  if (action.type === "CARD_CREATE") {
    const { card, cardId } = action.payload;

    return addEntity(cards, card, cardId);

    // return {
    //   entities: {
    //     ...cards.entities,
    //     [cardId]: card,
    //   },
    //   ids: [...cards.ids, cardId]
    // }
  }

  return cards;
};
