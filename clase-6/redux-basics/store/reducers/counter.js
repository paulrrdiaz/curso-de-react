const initialCounterState = {
  count: 0,
}

const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "ADD") {
    const { payload: { amount } } = action;

    return {
      count: state.count + amount
    }
  }

  return state
}

export default counterReducer