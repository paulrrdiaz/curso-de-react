import React, { Component } from "react";
import Drink from "components/Drink";
import { Form, Button, Input } from "components/Shared/Form";

export default class extends Component {
  state = {
    drink: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchDrinks } = this.props;
    const { drink } = this.state;
    searchDrinks(drink);
  };

  handleChange = e => {
    this.setState({
      drink: e.target.value
    });
  };

  render() {
    console.log(this.props);
    const { drinks = [] } = this.props;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter a base"
          />
          <Button type="submit">Search</Button>
        </Form>
        <ul>
          {drinks.map(drink => (
            <Drink key={drink.idDrink} {...drink} />
          ))}
        </ul>
      </div>
    );
  }
}
