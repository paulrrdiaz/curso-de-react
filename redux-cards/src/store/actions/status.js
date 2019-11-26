export const SET_ERROR = "SET_ERROR"

export const setError = (value) => ({
  type: SET_ERROR,
  payload: {
    value
  }
})