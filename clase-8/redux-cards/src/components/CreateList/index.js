import React, { Component } from "react";

import { Form, Input, FormControl, Button } from "components/Shared/Form";


export default class extends Component {
  onSubmit() {
    console.log('submitting');
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} marginBottom={true} direction="row">
        <FormControl>
          <Input placeholder="List title" type="text" />
        </FormControl>
        <FormControl>
          <Button disabled type="submit">
            Create new list
          </Button>
        </FormControl>
      </Form>
    );
  }
};
