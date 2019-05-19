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
import styles from "../../styles";
import validationSchema from "./validationSchema";
import InputFeedback from "ReactNativeBoilerplate/src/components/InputFeedback";

const LoginForm = props => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    loading
  } = props;

  const emailError = errors.email && touched.email;
  const passwordError = errors.password && touched.password;

  return (
    <Form style={styles.form}>
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
      <Item floatingLabel error={passwordError} last>
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
      <Button
        onPress={handleSubmit}
        primary
        full
        style={styles.loginButton}
        disabled={loading}
      >
        {loading ? <Spinner /> : <Text>Login</Text>}
      </Button>
      <Text style={{ alignSelf: "center", marginTop: 40 }}>Or</Text>
      <Button transparent style={{ alignSelf: "center", marginTop: 20 }}>
        <Link to="/signup">
          <Text>Sign Up </Text>
        </Link>
      </Button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    email: "",
    password: "",
    login: props.onSubmit
  }),
  handleSubmit: async (values, { resetForm }) => {
    const { login, email, password } = values;
    const response = await login({ variables: { email, password } });
    if (response) resetForm();
  },
  validationSchema: validationSchema
})(LoginForm);
