import React from "react";
import { Form, FormControl, Input, Button } from "components/Shared/Form";
import { Auth, AuthTitle } from "./styled";

export default () => {
  return (
    <Auth>
      <AuthTitle>Please, try to pass my security 😉</AuthTitle>
      <Form direction="column">
        <FormControl>
          <Input required placeholder="Email" type="text" />
        </FormControl>
        <FormControl>
          <Input required placeholder="Password" type="password" />
        </FormControl>
        <FormControl>
          <Button type="submit">Log In</Button>
        </FormControl>
      </Form>
    </Auth>
  );
};
