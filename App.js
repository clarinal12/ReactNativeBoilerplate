import React, { Component } from "react";
import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

import requireAuth from "./src/utils/requireAuth";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Main from "./src/Main";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Root } from "native-base";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("accessToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root>
          <NativeRouter>
            <BackButton>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Main} />
              </Switch>
            </BackButton>
          </NativeRouter>
        </Root>
      </ApolloProvider>
    );
  }
}

export default App;
