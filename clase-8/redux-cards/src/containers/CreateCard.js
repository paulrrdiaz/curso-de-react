import { connect } from "react-redux";
import CreateCard from "components/CreateCard";
import { createCard } from 'store/actions/cards'

const mapDispatchToProps = { createCard }

export default connect(
  null,
  mapDispatchToProps
)(CreateCard);
