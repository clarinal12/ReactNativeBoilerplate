import React, { Component } from "React";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import { Text } from "native-base";

class About extends Component {
  render() {
    return (
      <CoreLayout title="About">
        <Text>This is Content Section for About</Text>
      </CoreLayout>
    );
  }
}

export default About;
