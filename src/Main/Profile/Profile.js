import React, { Component } from "React";
import { Link } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import { Text, Button, Form, Item, Label, Input } from "native-base";

class Profile extends Component {
  logout = async () => {
    const { history } = this.props;
    await AsyncStorage.clear();
    history.push("/login");
  };

  render() {
    return (
      <CoreLayout>
        <Text>This is Content Section for Profile</Text>
        <Button primary style={{ marginTop: 20 }} onPress={this.logout}>
          <Text>Logout</Text>
        </Button>
      </CoreLayout>
    );
  }
}

export default Profile;
