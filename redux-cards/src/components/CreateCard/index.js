import React, { Component } from "react";

import {
  Form,
  Input,
  Textarea,
  FormControl,
  Button
} from "components/Shared/Form";

export default class extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const { addCard, listId } = this.props;
    e.preventDefault();

    addCard(this.state, listId);
  };

  render() {
    const { title, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} marginBottom={true} direction="column">
        <FormControl>
          <Input
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
            type="text"
          />
        </FormControl>
        <FormControl>
          <Textarea
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Description"
          />
        </FormControl>
        <FormControl>
          <Button type="submit">Create new card</Button>
        </FormControl>
      </Form>
    );
  }
}
