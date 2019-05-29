import React from "react";
import PropTypes from "prop-types";

import ProductForm from "../ProductForm";
import { Text } from "native-base";

const NewProduct = props => {
  const {} = props;
  return (
    <>
      <ProductForm />
    </>
  );
};

NewProduct.propTypes = {};

NewProduct.defaultProps = {};

export default NewProduct;
