import React from "react";
import { Route, Switch, Redirect } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

import About from "./About";
import Profile from "./Profile";
import Products from "./Products";

const pages = [
  { path: "/Products", component: Products },
  { path: "/about", component: About },
  { path: "/profile", component: Profile }
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", auth: false };
  }

  async componentWillMount() {
    const { history } = this.props;
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) history.push("/login");
    else this.setState({ auth: true });
  }

  render() {
    const { auth } = this.state;
    if (!auth) return null;
    return (
      <Switch>
        <Redirect from="/" exact to="/products" />,
        {pages.map((page, key) => (
          <Route key={key} path={page.path} component={page.component} />
        ))}
      </Switch>
    );
  }
}
