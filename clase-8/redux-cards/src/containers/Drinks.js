import { connect } from "react-redux";
import Drinks from "components/Drinks";
import { fetchDrinksBySpirit } from "store/actions/drinks";

const mapStateToProps = ({ drinks, status }) => ({
  drinks,
  status
});
const mapDispatchToProps = { fetchDrinksBySpirit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drinks);
