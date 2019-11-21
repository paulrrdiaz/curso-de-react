import React from "react";

import { Form, Input, FormControl, Button } from "components/Shared/Form";

export default () => {
  return (
    <Form marginBottom={true} direction="row">
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
};
