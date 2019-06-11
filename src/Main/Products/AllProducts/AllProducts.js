import React, { Component } from "React";

import { Query, withApollo } from "react-apollo";
import { PRODUCTS, DELETE_PRODUCT } from "../queries";

import Dialog from "react-native-dialog";
import { ScrollView, Alert } from "react-native";
import {
  Text,
  Fab,
  Icon,
  Spinner,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Button
} from "native-base";

import CoreLayout from "ReactNativeBoilerplate/src/components/CoreLayout";

class AllProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDeleting: false,
      product: {}
    };
  }

  toEditPage = product => {
    const { history } = this.props;

    history.push({
      pathname: "/products/edit-product",
      state: {
        product: product
      }
    });
  };

  confirmDelete = product => {
    this.setState({ product });
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete " + product.name + "?",
      [
        { text: "Yes", onPress: () => this.deleteProduct(product) },
        { text: "No", onPress: () => {} }
      ],
      { cancelable: false }
    );
  };

  deleteProduct = async product => {
    const { client } = this.props;

    this.setState({ isDeleting: true });
    await client.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id: product.id },
      refetchQueries: [{ query: PRODUCTS }]
    });
    this.setState({ isDeleting: false });
  };

  render() {
    const { history } = this.props;
    const { isDeleting, product } = this.state;

    return (
      <>
        <CoreLayout title="Products">
          <ScrollView>
            <Dialog.Container visible={isDeleting}>
              <Dialog.Description>
                {`Deleting ${product.name} ...`}
              </Dialog.Description>
            </Dialog.Container>
            <Query query={PRODUCTS}>
              {response => {
                const { error, loading, data } = response;
                return (
                  <>
                    {error && <Text>{error.message}</Text>}
                    {loading && <Spinner />}
                    {data.products &&
                      data.products.map((product, index) => (
                        <Card key={index} style={{ marginBottom: 10 }}>
                          <CardItem header bordered>
                            <Text>{product.name}</Text>
                          </CardItem>
                          <CardItem>
                            <Body>
                              <Text>{product.description}</Text>
                            </Body>
                          </CardItem>
                          <CardItem>
                            <Body>
                              <Text style={{ marginBottom: 10 }}>
                                Quantity: {product.price}
                              </Text>
                              <Text>Price: {product.quantity}</Text>
                            </Body>
                          </CardItem>
                          <CardItem footer bordered>
                            <Left>
                              <Button
                                hasText
                                transparent
                                onPress={() => this.toEditPage(product)}
                              >
                                <Text>Edit</Text>
                              </Button>
                            </Left>
                            <Right>
                              <Button
                                hasText
                                transparent
                                onPress={() => this.confirmDelete(product)}
                              >
                                <Text>Delete</Text>
                              </Button>
                            </Right>
                          </CardItem>
                        </Card>
                      ))}
                    {data.products && data.products.length === 0 && (
                      <Text>No products yet.</Text>
                    )}
                  </>
                );
              }}
            </Query>
          </ScrollView>
        </CoreLayout>
        <Fab
          containerStyle={{}}
          position="bottomRight"
          onPress={() => history.push("/products/new-product")}
        >
          <Icon name="add" />
        </Fab>
      </>
    );
  }
}

AllProducts.propTypes = {};

export default withApollo(AllProducts);
