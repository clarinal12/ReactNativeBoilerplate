import React, { Component } from "React";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import { Text } from "native-base";

class Profile extends Component {
  render() {
    return (
      <CoreLayout title="Profile">
        <Text>This is Content Section for Profile</Text>
      </CoreLayout>
    );
  }
}

export default Profile;
