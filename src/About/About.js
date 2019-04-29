import React, { Component } from "React";

import CoreLayout from "../components/CoreLayout";
import { Text } from "native-base";

class About extends Component {
  render() {
    return (
      <CoreLayout>
        <Text>This is Content Section for About</Text>
      </CoreLayout>
    );
  }
}

export default About;
