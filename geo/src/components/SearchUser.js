import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const { filter } = this.props;

    this.setState({
      value
    });

    filter(value);
  }

  render() {
    const { value } = this.state;
    const { filter } = this.props;
    return (
      <form className="form">
        <input
          value={value}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Search an user"
        />
        <button onClick={filter} type="button" className="button">
          Search
        </button>
      </form>
    );
  }
}
