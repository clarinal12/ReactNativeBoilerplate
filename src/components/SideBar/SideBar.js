import React, { Component } from "react";
import { View, Text, List, ListItem } from "native-base";
import { StyleSheet } from "react-native";
import { withRouter } from "react-router-native";

class SideBar extends Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <List>
          <ListItem onPress={() => history.push("/profile")}>
            <Text>Profile</Text>
          </ListItem>
          <ListItem onPress={() => history.push("/about")}>
            <Text>About</Text>
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
