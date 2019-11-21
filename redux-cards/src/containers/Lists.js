import Lists from "components/Lists";
import { connect } from "react-redux";

const mapStateToProps = ({ lists }) => {
  return {
    lists: lists.ids
  };
};

export default connect(mapStateToProps)(Lists);
