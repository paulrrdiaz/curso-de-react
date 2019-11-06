import React from "react";

import { Form, Input, FormControl, Button } from "components/Shared/Form";

export default () => {
  return (
    <Form marginBottom={true} direction="column">
      <FormControl>
        <Input placeholder="Name" type="text" />
      </FormControl>
      <FormControl>
        <Input placeholder="Email" type="email" />
      </FormControl>
      <FormControl>
        <Button disabled type="submit">
          Create new user
        </Button>
      </FormControl>
    </Form>
  );
};
