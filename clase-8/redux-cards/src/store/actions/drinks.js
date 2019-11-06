import axios from "axios";
import { setIsLoading } from "store/actions/status";

export const DRINKS_ADD = "DRINKS_ADD";

const DRINKS_API =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila";

export const fetchDrinksBySpirit = () => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    const {
      data: { drinks }
    } = await axios.get(DRINKS_API);

    setTimeout(() => {
      dispatch(setIsLoading(false));
      dispatch(addDrinks(drinks));
    }, 5000);
  };
};

export const addDrinks = drinks => ({
  type: DRINKS_ADD,
  payload: {
    drinks
  }
});
