import { connect } from "react-redux";
import List from "components/List";

const mapStateToProps = ({ lists }, ownProps) => {
  const list = lists.entities[ownProps.listId];
  return list;
};

export default connect(mapStateToProps)(List);
