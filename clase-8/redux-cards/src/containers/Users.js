import { connect } from "react-redux";
import Users from "components/Users";

const mapStateToProps = ({ users }) => {
  return {
    users: users.ids
  };
};

export default connect(mapStateToProps)(Users);
