import { DRINKS_ADD } from "store/actions/drinks";

const defaultDrinks = [];

export default (drinks = defaultDrinks, action) => {
  if (action.type === DRINKS_ADD) {
    const { drinks } = action.payload;

    return drinks;
  }

  return drinks;
};
