import { v4 } from 'uuid'

export const ADD_CARD = "ADD_CARD"

export const addCard = (card, listId) => ({
  type: ADD_CARD,
  payload: {
    card,
    cardId: v4(),
    listId
  }
})