import CreateCard from "components/CreateCard";
import { connect } from "react-redux";
import { v4 } from "uuid";

const mapDispatchToProps = dispatch => {
  return {
    addCard(card, listId) {
      const action = {
        type: "ADD_CARD",
        payload: {
          card,
          cardId: v4(),
          listId
        }
      };

      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(CreateCard);
