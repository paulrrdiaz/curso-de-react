const initialCounterState = {
  count: 0
};

const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1
    };
  }

  if (action.type === "RESET") {
    return {
      count: initialCounterState.count
    };
  }

  return state;
};

export default counterReducer;
