import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Drinks from "components/Drinks";
import { searchDrinks } from "store/actions/drinks";

const mapStateToProps = ({ drinks: { searchedDrinks } }) => {
  return {
    drinks: searchedDrinks
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchDrinks
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
