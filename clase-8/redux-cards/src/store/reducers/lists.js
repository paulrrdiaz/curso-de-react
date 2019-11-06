import { lists as defaultLists } from "data/normalized";
import { CARD_CREATE, CARD_MOVE } from 'store/actions/cards'
import { addIdToChildren, removeIdFromChildren } from "helpers/data";

export default (lists = defaultLists, action) => {
  if (action.type === CARD_CREATE) {
    const { listId, cardId } = action.payload;
    // const cards = [...lists.entities[listId].cards, cardId]

    return addIdToChildren(lists, listId, "cards", cardId);
    // return assocPath(['entities', listId, 'cards'], cards, lists)

    // const entities = { ...lists.entities }

    // entities[listId] = {
    //   ...entities[listId],
    //   cards: [...entities[listId].cards, cardId]
    // }

    // return {
    //   ...lists,
    //   entities,
    // }
  }

  if (action.type === CARD_MOVE) {
    const { cardId, originListId, destinationListId } = action.payload;
    let newState = removeIdFromChildren(lists, originListId, 'cards', cardId);
    return addIdToChildren(newState, destinationListId, 'cards', cardId);
  }

  return lists;
};
