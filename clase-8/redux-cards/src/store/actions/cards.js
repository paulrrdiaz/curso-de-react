import { v4 } from "uuid";

export const CARD_CREATE = "CARD_CREATE";
export const CARD_MOVE = "CARD_MOVE";

const defaultCardData = {
  title: "Default Title",
  description: "Default Description"
};

export const createCard = (listId, cardData) => {
  const cardId = v4();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData
  };

  return {
    type: CARD_CREATE,
    payload: {
      card,
      listId,
      cardId
    }
  };
};

export const moveCardToList = (cardId, originListId, destinationListId) => {
  return {
    type: CARD_MOVE,
    payload: {
      cardId,
      originListId,
      destinationListId,
    },
  };
};