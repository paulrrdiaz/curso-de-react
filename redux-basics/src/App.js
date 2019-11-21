import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    number: ""
  };

  handleChange = e => {
    this.setState({
      number: Number(e.target.value)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { number } = this.state;
    const { addAmount } = this.props;

    addAmount(number);
  };

  render() {
    const { current, add, addAmount } = this.props;
    const { number } = this.state;

    return (
      <div>
        <div className="app-wrapper">
          <h2 className="counter">{current}</h2>
        </div>
        <div className="app-wrapper">
          <button className="button" type="button" onClick={add}>
            Add
          </button>
        </div>
        <div className="app-wrapper">
          <form onSubmit={this.handleSubmit} className="form">
            <input
              onChange={this.handleChange}
              value={number}
              className="input"
              type="number"
            />
            <button type="submit" className="button">
              Add {number}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    current: counter.current
  };
};

const actionCreator = amount => ({
  type: "ADD",
  payload: {
    amount
  }
});

const mapDispatchToProps = dispatch => {
  return {
    add() {
      console.log("dispatching");

      dispatch({
        type: "ADD",
        payload: {
          amount: 5
        }
      });
    },
    addAmount(amount) {
      dispatch(actionCreator(amount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
