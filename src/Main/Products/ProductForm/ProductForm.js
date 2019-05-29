import React from "react";
// import { Link } from "react-router-native";

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
// import styles from "../../styles";
// import validationSchema from "./validationSchema";
import InputFeedback from "ReactNativeBoilerplate/src/components/InputFeedback";

const ProductForm = props => {
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
    <Form>
      <Text>Product Form</Text>
    </Form>
  );
};

ProductForm.propTypes = {};

ProductForm.defaultProps = {};

export default withFormik({
  mapPropsToValues: props => ({
    // email: "",
    // password: "",
    // login: props.onSubmit
  }),
  handleSubmit: async (values, { resetForm }) => {
    // const { login, email, password } = values;
    // const response = await login({ variables: { email, password } });
    // if (response) resetForm();
  }
  // validationSchema: validationSchema
})(ProductForm);
