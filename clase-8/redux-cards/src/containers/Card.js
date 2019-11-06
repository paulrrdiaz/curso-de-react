import { connect } from "react-redux";
import Card from "components/Card";

const mapStateToProps = ({ cards }, ownProps) => {
  const card = cards.entities[ownProps.cardId];
  return card;
};

export default connect(mapStateToProps)(Card);
