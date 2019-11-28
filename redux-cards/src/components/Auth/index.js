import React from "react";
import { withFormik, ErrorMessage } from "formik";
import * as yup from 'yup'
import { Form, FormControl, Input, Button } from "components/Shared/Form";
import { Auth, AuthTitle } from "./styles";

const MyErrorComponent = (props) => {
  return <p>{props.children}</p>
}

const AuthForm = () => {
  return (
    <Auth>
      <AuthTitle>Please, try to pass my security 😉</AuthTitle>
      <Form direction="column">
        <FormControl>
          <Input
            name="username"
            placeholder="Email"
          />
          <ErrorMessage name="username" component={MyErrorComponent} />
        </FormControl>
        <FormControl>
          <Input
            name="password"
            placeholder="Password"
            type="password"
          />
          <ErrorMessage name="password" component={MyErrorComponent} />
        </FormControl>
        <FormControl>
          <Button type="submit">Log In</Button>
        </FormControl>
      </Form>
    </Auth>
  );
};

const formikConf = {
  validationSchema: () => yup.object().shape({
    username: yup.string().min(5).required("Email es un campo requerido"),
    password: yup.string().min(5, "mínimo 5 letras").max(10, "máximo 10 letras").required("Password es un campo requerido"),
  }),
  handleSubmit: values => {
    console.log(values);
  }
};

export default withFormik(formikConf)(AuthForm);
