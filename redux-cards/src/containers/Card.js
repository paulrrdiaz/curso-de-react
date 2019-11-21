import Card from "components/Card";
import { connect } from "react-redux";

const mapStateToProps = ({ cards: { entities } }, { cardId }) => {
  return {
    ...entities[cardId]
  };
};

export default connect(mapStateToProps)(Card);
