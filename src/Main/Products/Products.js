import React, { Component } from "React";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import { ScrollView } from "react-native";
import styles from "./styles";
import { Query } from "react-apollo";
import { PRODUCTS } from "./queries";
import AllProducts from "./AllProducts";

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
          <Query query={PRODUCTS}>
            {response => {
              return <AllProducts {...response} />;
            }}
          </Query>
        </ScrollView>
      </CoreLayout>
    );
  }
}

export default Profile;
