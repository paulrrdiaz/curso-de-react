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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  get isValid() {
    const { title, description } = this.state;
    return title && description;
  }

  get isInvalid() {
    return !this.isValid;
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.isInvalid) return;

    const { createCard, listId } = this.props;

    if (createCard) {
      createCard(listId, this.state);
    }

    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} marginBottom={true} direction="column">
        <FormControl>
          <Input
            onChange={this.handleChange}
            name="title"
            placeholder="Title"
            type="text"
            value={title}
          />
        </FormControl>
        <FormControl>
          <Textarea
            onChange={this.handleChange}
            placeholder="Description"
            name="description"
            type="text"
            value={description}
          />
        </FormControl>
        <FormControl>
          <Button disabled={this.isInvalid} type="submit">
            Create new card
          </Button>
        </FormControl>
      </Form>
    );
  }
}
