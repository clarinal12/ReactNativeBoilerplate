import React from "react";

import { Text, Card, CardItem, Body, Spinner } from "native-base";

const AllProducts = props => {
  const { data, error, loading } = props;
  console.log(props);
  return (
    <>
      {error && <Text>{error.message}</Text>}
      {loading && <Spinner />}
      {data.products &&
        data.products.map((product, index) => (
          <Card key={index}>
            <CardItem header bordered>
              <Text>{product.name}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{product.description}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>{product.price}</Text>
            </CardItem>
          </Card>
        ))}
    </>
  );
};

export default AllProducts;
