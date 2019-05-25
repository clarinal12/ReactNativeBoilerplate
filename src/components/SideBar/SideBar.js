import React, { Component } from "react";

import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, List, ListItem } from "native-base";
import { StyleSheet } from "react-native";
import { withRouter } from "react-router-native";

class SideBar extends Component {
  logout = async () => {
    const { history } = this.props;
    await AsyncStorage.clear();
    history.push("/login");
  };

  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <List>
          <ListItem onPress={() => history.push("/products")}>
            <Text>Products</Text>
          </ListItem>
          <ListItem onPress={() => history.push("/profile")}>
            <Text>Profile</Text>
          </ListItem>
          <ListItem onPress={() => history.push("/about")}>
            <Text>About</Text>
          </ListItem>
          <ListItem onPress={() => this.logout()}>
            <Text>Logout</Text>
          </ListItem>
        </List>
      </View>
    );
  }
}

export default withRouter(SideBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80
  }
});
