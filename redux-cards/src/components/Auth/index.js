import React from "react";
import { withFormik } from "formik";
import { Form, FormControl, Input, Button } from "components/Shared/Form";
import { Auth, AuthTitle } from "./styles";

const AuthForm = props => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values: { username, password }
  } = props;

  return (
    <Auth>
      <AuthTitle>Please, try to pass my security 😉</AuthTitle>
      <Form onSubmit={handleSubmit} direction="column">
        <FormControl>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={username}
            name="username"
            required
            placeholder="Email"
            type="text"
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </FormControl>
        <FormControl>
          <Input
            onChange={handleChange}
            value={password}
            name="password"
            required
            placeholder="Password"
            type="password"
          />
        </FormControl>
        <FormControl>
          <Button type="submit">Log In</Button>
        </FormControl>
      </Form>
    </Auth>
  );
};

const formikConf = {
  mapPropsToValues: ({ username }) => ({
    username: username || "",
    password: ""
  }),
  validate: values => {
    const errors = {};

    if (!values.username) {
      errors.username = "Es requerido";
    } else if (values.username.length < 5) {
      errors.username = "Necesitas más letras";
    }

    return errors;
  },
  handleSubmit: values => {
    console.log(values);
  }
};

export default withFormik(formikConf)(AuthForm);
