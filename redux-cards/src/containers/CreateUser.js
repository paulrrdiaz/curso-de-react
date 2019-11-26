import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CreateUser from "components/CreateUser";
import { addUser } from "store/actions/users";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUser
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(CreateUser);
