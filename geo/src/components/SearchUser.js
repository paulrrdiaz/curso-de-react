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
    const { handleFilter } = this.props;

    this.setState({
      value
    });

    handleFilter(value);
  }

  render() {
    const { value } = this.state;
    const { handleFilter } = this.props;
    return (
      <form className="form">
        <input
          value={value}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Search an user"
        />
        <button onClick={handleFilter} type="button" className="button">
          Search
        </button>
      </form>
    );
  }
}
