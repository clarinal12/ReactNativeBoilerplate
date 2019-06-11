import React, { Component } from "react";
import PropTypes from "prop-types";

import CoreLayout from "ReactNativeBoilerplate/src/components/CoreLayout";
import { ScrollView, Alert, Text } from "react-native";

import ProductForm from "../ProductForm";

import { Mutation } from "react-apollo";
import { UPDATE_PRODUCT, PRODUCTS } from "../queries";

class EditProduct extends Component {
  constructor(props) {
    super(props);
  }

  handleEditProductSuccess = () => {
    Alert.alert(
      "Success",
      "Edit Product Successful",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  handleEditProductError = error => {
    Alert.alert(
      "Edit Product Failed",
      error.message,
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  render() {
    const { location } = this.props;
    let product = {};

    if (location.state.product) {
      product = location.state.product;
    }

    return (
      <CoreLayout title="Edit Product">
        <ScrollView>
          <Mutation
            mutation={UPDATE_PRODUCT}
            onCompleted={() => this.handleEditProductSuccess()}
            onError={error => this.handleEditProductError(error)}
            refetchQueries={[{ query: PRODUCTS }]}
          >
            {(edit, { loading, error }) => (
              <ProductForm
                product={product}
                loading={loading}
                error={error}
                onSubmit={edit}
              />
            )}
          </Mutation>
        </ScrollView>
      </CoreLayout>
    );
  }
}

EditProduct.propTypes = {};

export default EditProduct;
