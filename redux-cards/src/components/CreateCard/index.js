import React from "react";

import {
  Form,
  Input,
  Textarea,
  FormControl,
  Button
} from "components/Shared/Form";

export default () => {
  return (
    <Form marginBottom={true} direction="column">
      <FormControl>
        <Input placeholder="Title" type="text" />
      </FormControl>
      <FormControl>
        <Textarea placeholder="Description" />
      </FormControl>
      <FormControl>
        <Button disabled type="submit">
          Create new card
        </Button>
      </FormControl>
    </Form>
  );
};
