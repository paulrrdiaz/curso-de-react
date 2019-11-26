import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreateCard from "components/CreateCard";
import { addCard } from "store/actions/cards";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(CreateCard);
