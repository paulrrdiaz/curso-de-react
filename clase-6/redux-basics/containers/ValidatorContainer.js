import { connect } from "react-redux";
import Validator from "../components/Validator";

const mapStateToProps = state => {
  return {
    ...state.counter
  };
};

export default connect(mapStateToProps)(Validator);
