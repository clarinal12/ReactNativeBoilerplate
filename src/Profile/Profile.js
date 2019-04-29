import React, { Component } from "React";
import { Link } from "react-router-native";

import CoreLayout from "../components/CoreLayout";
import { Text, Button, Form, Item, Label, Input } from "native-base";

class Profile extends Component {
  render() {
    const { history } = this.props;

    return (
      <CoreLayout>
        <Text>This is Content Section for Profile</Text>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button primary>
            <Text>Hello Idiots</Text>
          </Button>
        </Form>
      </CoreLayout>
    );
  }
}

export default Profile;
