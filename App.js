import React, { Component } from "react";
import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Platform } from "react-native";
import firebase from "react-native-firebase";

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
  componentDidMount() {
    // Build a channel
    const channel = new firebase.notifications.Android.Channel(
      "test-channel",
      "Test Channel",
      firebase.notifications.Android.Importance.Max
    ).setDescription("My apps test channel");

    // Create the channel
    firebase.notifications().android.createChannel(channel);

    this.removeNotificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });

    this.removeNotificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // Process your notification as required
        this.displayNotification(notification);
      });
  }

  componentWillUnmount() {
    this.removeNotificationDisplayedListener();
    this.removeNotificationListener();
  }

  displayNotification = notification => {
    notification.android
      .setChannelId("test-channel")
      .android.setSmallIcon("ic_launcher");
    firebase.notifications().displayNotification(notification);
  };

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
