import { connect } from "react-redux";
import Lists from "components/Lists";

const mapStateToProps = ({ lists }) => {
  return {
    lists: lists.ids
  };
};

export default connect(mapStateToProps)(Lists);
