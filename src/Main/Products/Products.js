import React from "react";

import { Route, Switch, Redirect } from "react-router-native";

import AllProducts from "./AllProducts";
import NewProduct from "./NewProduct";

const Products = ({ match }) => (
  <>
    <Switch>
      <Redirect from={match.path} exact to={`${match.path}/all-products`} />
      <Route path={`${match.path}/all-products`} component={AllProducts} />
      <Route path={`${match.path}/new-product`} component={NewProduct} />
    </Switch>
  </>
);

export default Products;
