import { SET_ERROR } from "store/actions/status";

const initialState = {
  isLoading: false,
  hasError: false
};

export default (state = initialState, action) => {
  if (action.type === SET_ERROR) {
    const { value } = action.payload;

    return {
      ...state,
      hasError: value
    };
  }

  return state;
};
