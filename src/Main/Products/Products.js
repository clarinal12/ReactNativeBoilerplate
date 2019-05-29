import React, { Component } from "React";

import { ScrollView } from "react-native";
import styles from "./styles";

import { Query } from "react-apollo";
import { PRODUCTS } from "./queries";

import { Text } from "native-base";

import CoreLayout from "../../components/CoreLayout/CoreLayout";
import AllProducts from "./AllProducts";
import NewProduct from "./NewProduct";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerButtons: [
        {
          label: "All Products",
          active: true,
          action: this.onTabChange
        },
        {
          label: "New Product",
          active: false,
          action: this.onTabChange
        }
      ],
      activeTab: 0
    };
  }

  onTabChange = index => {
    const { activeTab, footerButtons } = this.state;

    footerButtons[activeTab].active = false;
    footerButtons[index].active = true;

    this.setState({ activeTab: index, footerButtons });
  };

  render() {
    const { footerButtons } = this.state;
    return (
      <CoreLayout
        title="Products"
        footer={true}
        footerButtons={footerButtons}
        style={styles.content}
      >
        <ScrollView>
          {footerButtons[0].active && (
            <Query query={PRODUCTS}>
              {response => {
                return <AllProducts {...response} />;
              }}
            </Query>
          )}
          {footerButtons[1].active && <NewProduct />}
        </ScrollView>
      </CoreLayout>
    );
  }
}

export default Profile;
