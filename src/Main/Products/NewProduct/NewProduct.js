import React, { Component } from "react";
import PropTypes from "prop-types";

import CoreLayout from "ReactNativeBoilerplate/src/components/CoreLayout";
import { ScrollView, Alert } from "react-native";

import ProductForm from "../ProductForm";

import { Mutation } from "react-apollo";
import { NEW_PRODUCT, PRODUCTS } from "../queries";

class NewProduct extends Component {
  constructor(props) {
    super(props);
  }

  handleCreateProductSuccess = () => {
    Alert.alert(
      "Success",
      "Create Product Successful",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  handleCreateProductError = error => {
    Alert.alert(
      "Create Product Failed",
      error.message,
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  render() {
    return (
      <CoreLayout title="New Product">
        <ScrollView>
          <Mutation
            mutation={NEW_PRODUCT}
            onCompleted={() => this.handleCreateProductSuccess()}
            onError={error => this.handleCreateProductError(error)}
            refetchQueries={[{ query: PRODUCTS }]}
          >
            {(create, { loading, error }) => (
              <ProductForm loading={loading} error={error} onSubmit={create} />
            )}
          </Mutation>
        </ScrollView>
      </CoreLayout>
    );
  }
}

NewProduct.propTypes = {};

export default NewProduct;
