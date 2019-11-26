import axios from "axios";
import { setError } from "store/actions/status";

export const SEARCH_DRINKS_BASED_ON = "SEARCH_DRINKS_BASED_ON";
export const ADD_DRINKS = "ADD_DRINKS";

const addDrinks = drinks => ({
  type: ADD_DRINKS,
  payload: {
    drinks
  }
});

export const searchDrinks = letter => {
  return async dispatch => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    try {
      const {
        data: { drinks }
      } = await axios.get(API);

      if (drinks === undefined) {
        throw new Error("WWWW");
      }

      dispatch(addDrinks(drinks));
    } catch (error) {
      dispatch(setError(true));
    }
  };
};
