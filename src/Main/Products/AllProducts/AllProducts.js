import React, { Component } from "React";

import { Query } from "react-apollo";
import { PRODUCTS } from "../queries";

import { ScrollView } from "react-native";
import { Text, Fab, Icon, Spinner, Card, CardItem, Body } from "native-base";

import CoreLayout from "ReactNativeBoilerplate/src/components/CoreLayout";

class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <>
        <CoreLayout title="Products">
          <ScrollView>
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
                          <CardItem bordered>
                            <Body>
                              <Text>{product.description}</Text>
                              <Text>{product.quantity}</Text>
                            </Body>
                          </CardItem>
                          <CardItem footer bordered>
                            <Text>{product.price}</Text>
                          </CardItem>
                        </Card>
                      ))}
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

export default AllProducts;
