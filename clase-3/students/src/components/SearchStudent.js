import React from "react";

class SearchStudent extends React.Component {
  state = {
    value: "Javascript"
  };

  handleChange = e => {
    const { handleFilter } = this.props;
    const { target: { value }} = e;

    this.setState({
      value
    });

    handleFilter(value);
  };

  render() {
    const { value } = this.state;

    return (
      <form className="form">
        <label htmlFor="" className="label">
          <input
            onChange={this.handleChange}
            value={value}
            placeholder="Search by skills"
            className="input"
          />
        </label>
        <button className="button">Search</button>
      </form>
    );
  }
}

export default SearchStudent;
