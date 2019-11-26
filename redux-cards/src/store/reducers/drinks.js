import { ADD_DRINKS } from "store/actions/drinks";

const initialState = {
  searchedDrinks: []
};
export default (state = initialState, action) => {
  if (action.type === ADD_DRINKS) {
    const { drinks } = action.payload;

    return {
      ...state,
      searchedDrinks: drinks
    };
  }

  return state;
};
