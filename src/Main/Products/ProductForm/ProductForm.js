import React from "react";
import PropTypes from "prop-types";

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

import InputFeedback from "ReactNativeBoilerplate/src/components/InputFeedback";

import validationSchema from "./validationSchema";

const ProductForm = props => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    loading
  } = props;

  const nameError = errors.name && touched.name;
  const descriptionError = errors.description && touched.description;
  const quantityError = errors.quantity && touched.quantity;
  const priceError = errors.price && touched.price;

  return (
    <Form>
      <Item floatingLabel error={nameError}>
        <Label>Name</Label>
        <Input
          autoCorrect={false}
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
      <Item floatingLabel error={descriptionError}>
        <Label>Description</Label>
        <Input
          autoCorrect={false}
          onChangeText={handleChange("description")}
          onBlur={handleBlur("description")}
          value={values.description}
        />
        {descriptionError && <Icon name="close-circle" />}
      </Item>
      {descriptionError && (
        <InputFeedback type="error">
          <ErrorMessage name="description" />
        </InputFeedback>
      )}
      <Item floatingLabel error={quantityError}>
        <Label>Quantity</Label>
        <Input
          onChangeText={handleChange("quantity")}
          onBlur={handleBlur("quantity")}
          value={String(values.quantity)}
          keyboardType="numeric"
        />
        {quantityError && <Icon name="close-circle" />}
      </Item>
      {quantityError && (
        <InputFeedback type="error">
          <ErrorMessage name="quantity" />
        </InputFeedback>
      )}
      <Item floatingLabel last error={priceError}>
        <Label>Price</Label>
        <Input
          onChangeText={handleChange("price")}
          onBlur={handleBlur("price")}
          value={String(values.price)}
          keyboardType="numeric"
        />
        {priceError && <Icon name="close-circle" />}
      </Item>
      {priceError && (
        <InputFeedback type="error">
          <ErrorMessage name="price" />
        </InputFeedback>
      )}
      <Button
        onPress={handleSubmit}
        primary
        full
        disabled={loading}
        style={{ marginTop: 20 }}
      >
        {loading ? <Spinner /> : <Text>{values.id ? "Edit" : "Create"}</Text>}
      </Button>
    </Form>
  );
};

ProductForm.propTypes = {
  values: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  touched: PropTypes.shape({}),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  product: PropTypes.shape({})
};

ProductForm.defaultProps = {
  values: {},
  errors: {},
  touched: {},
  handleBlur: e => e,
  handleChange: e => e,
  handleSubmit: e => e,
  loading: false,
  product: {}
};

export default withFormik({
  mapPropsToValues: props => {
    const { product } = props;

    if (product) {
      return {
        ...product,
        mutation: props.onSubmit
      };
    } else {
      return {
        id: "",
        name: "",
        description: "",
        quantity: "",
        price: "",
        mutation: props.onSubmit
      };
    }
  },
  handleSubmit: async (values, { resetForm }) => {
    const { mutation, name, description, quantity, price, id } = values;
    let variables = {};
    if (id) {
      variables = {
        id,
        input: {
          name,
          description,
          quantity: Number(quantity),
          price: Number(price)
        }
      };
    } else {
      variables = {
        name,
        description,
        quantity: Number(quantity),
        price: Number(price)
      };
    }
    const response = await mutation({ variables });
    if (response && !id) resetForm();
  },
  validationSchema
})(ProductForm);
