import { SET_IS_LOADING } from "store/actions/status";

const defaultStatus = {
  isLoading: false
};

export default (status = defaultStatus, action) => {
  if (action.type === SET_IS_LOADING) {
    const { isLoading } = action.payload;

    return {
      ...status,
      isLoading
    };
  }
  return status;
};
