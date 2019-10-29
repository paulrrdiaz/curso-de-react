import { connect } from "react-redux";
import Counter from "../components/Counter";

const mapStateToProps = state => {
  const { counter, message } = state;

  return {
    ...counter,
    ...message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment(amount) {
      dispatch({
        type: "INCREMENT"
      });
    },
    decrement(amount) {
      dispatch({
        type: "DECREMENT"
      });
    },
    reset(amount) {
      dispatch({
        type: "RESET"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
