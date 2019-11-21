import User from "components/User";
import { connect } from "react-redux";

const mapStateToProps = ({ users: { entities } }, { userId }) => {
  return {
    ...entities[userId]
  };
};

export default connect(mapStateToProps)(User);
