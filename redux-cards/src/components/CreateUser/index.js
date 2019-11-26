import React, { Component } from "react";

import { Form, Input, FormControl, Button } from "components/Shared/Form";

export default class extends Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addUser } = this.props;
    const { user } = this.state;

    addUser(this.state);
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} marginBottom={true} direction="column">
        <FormControl>
          <Input
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
          />
        </FormControl>
        <FormControl>
          <Input
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
          />
        </FormControl>
        <FormControl>
          <Button type="submit">Create new user</Button>
        </FormControl>
      </Form>
    );
  }
}
