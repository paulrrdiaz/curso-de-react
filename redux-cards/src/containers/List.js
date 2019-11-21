import List from "components/List";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    lists: { entities }
  } = state;
  const { listId } = ownProps;

  return {
    ...entities[listId]
  };
};

export default connect(mapStateToProps)(List);
