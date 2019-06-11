import React, { Component } from "react";
import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Platform } from "react-native";

// import requireAuth from "./src/utils/requireAuth";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Main from "./src/Main";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: Platform.OS === "ios" ? "http://localhost:4000" : "http://10.0.2.2:4000"
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
        <NativeRouter>
          <BackButton>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Main} />
            </Switch>
          </BackButton>
        </NativeRouter>
      </ApolloProvider>
    );
  }
}

export default App;
