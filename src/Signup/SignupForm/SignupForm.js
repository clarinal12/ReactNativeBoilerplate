import React from "react";
import { Link } from "react-router-native";

import { withFormik, ErrorMessage } from "formik";
import {
  Text,
  Button,
  Item,
  Label,
  Input,
  Form,
  Icon,
  Spinner
} from "native-base";
import styles from "../styles";
import validationSchema from "./validationSchema";
import InputFeedback from "../../components/InputFeedback";

const SignupForm = props => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    loading
  } = props;

  const nameError = errors.name && touched.name;
  const emailError = errors.email && touched.email;
  const passwordError = errors.password && touched.password;
  const passwordConfirmError =
    errors.passwordConfirm && touched.passwordConfirm;

  return (
    <Form style={styles.form}>
      <Item floatingLabel error={nameError}>
        <Label>Name</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
        />
        {nameError && <Icon name="close-circle" />}
      </Item>
      {nameError && (
        <InputFeedback type="error">
          <ErrorMessage name="name" />
        </InputFeedback>
      )}
      <Item floatingLabel error={emailError}>
        <Label>Email</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        {emailError && <Icon name="close-circle" />}
      </Item>
      {emailError && (
        <InputFeedback type="error">
          <ErrorMessage name="email" />
        </InputFeedback>
      )}
      <Item floatingLabel error={passwordError}>
        <Label>Password</Label>
        <Input
          secureTextEntry={true}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        {passwordError && <Icon name="close-circle" />}
      </Item>
      {passwordError && (
        <InputFeedback type="error">
          <ErrorMessage name="password" />
        </InputFeedback>
      )}
      <Item floatingLabel error={passwordConfirmError}>
        <Label>Re-type Password</Label>
        <Input
          secureTextEntry={true}
          onChangeText={handleChange("passwordConfirm")}
          onBlur={handleBlur("passwordConfirm")}
          value={values.passwordConfirm}
        />
        {passwordConfirmError && <Icon name="close-circle" />}
      </Item>
      {passwordConfirmError && (
        <InputFeedback type="error">
          <ErrorMessage name="passwordConfirm" />
        </InputFeedback>
      )}
      <Button
        onPress={handleSubmit}
        primary
        full
        iconRight
        style={styles.loginButton}
        disabled={loading}
      >
        {loading ? <Spinner /> : <Text>Sign Up</Text>}
      </Button>
      <Text style={{ alignSelf: "center", marginTop: 40 }}>Or</Text>
      <Button transparent style={{ alignSelf: "center", marginTop: 20 }}>
        <Link to="/login">
          <Text>Login</Text>
        </Link>
      </Button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    signup: props.onSubmit
  }),
  handleSubmit: async (values, { resetForm }) => {
    const { signup, email, password, name } = values;
    const response = await signup({ variables: { email, password, name } });
    if (response) resetForm();
  },
  validationSchema: validationSchema
})(SignupForm);
