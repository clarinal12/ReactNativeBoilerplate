import React, { Component } from "React";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import { ScrollView } from "react-native";
import { Text, Card, CardItem, Body } from "native-base";
// import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";

const buttons = [
  {
    label: "Apps"
  },
  {
    label: "Camera"
  },
  {
    label: "Button"
  },
  {
    label: "Contact"
  }
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "true"
    };
  }

  render() {
    return (
      <CoreLayout
        title="Products"
        footer={true}
        footerButtons={buttons}
        style={styles.content}
      >
        <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </ScrollView>
      </CoreLayout>
    );
  }
}

export default Profile;
