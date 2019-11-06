import { connect } from "react-redux";
import User from "components/User";

const mapStateToProps = ({ users }, ownProps) => {
  const user = users.entities[ownProps.id];
  return user;
};

export default connect(mapStateToProps)(User);
