import React from "react";
import { Route, Switch, Redirect } from "react-router-native";

import About from "../About";
import Profile from "../Profile";

const pages = [
  <Redirect key={1} from="/" exact to="/profile" />,
  <Route key={2} path="/profile" component={Profile} />,
  <Route key={3} path="/about" component={About} />
  // { path: "/about", component: About },
  // { path: "/profile", component: Profile }
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <Switch>
        {/* <Redirect from="/" exact to="/profile" />,
        {pages.map((page, key) => (
          <Route key={key} path={page.path} component={page.component} />
        ))} */}
        {pages}
      </Switch>
    );
  }
}
