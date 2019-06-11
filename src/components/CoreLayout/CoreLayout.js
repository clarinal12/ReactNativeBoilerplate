import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  StyleProvider,
  Drawer
} from "native-base";
import SideBar from "../SideBar";
import getTheme from "ReactNativeBoilerplate/native-base-theme/components";
import platform from "ReactNativeBoilerplate/native-base-theme/variables/platform";
import material from "ReactNativeBoilerplate/native-base-theme/variables/material";
import commonColor from "ReactNativeBoilerplate/native-base-theme/variables/commonColor";

class CoreLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const { title, style, history } = this.props;

    return (
      <StyleProvider style={getTheme(platform)}>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
        >
          <Container>
            <Header>
              <Left>
                <Button onPress={() => this.openDrawer()} transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>{title || "Title"}</Title>
              </Body>
              <Right>
                {history.index !== 0 && (
                  <Button transparent onPress={() => history.goBack()}>
                    <Text>Back</Text>
                  </Button>
                )}
              </Right>
            </Header>
            <Content padder contentContainerStyle={style || {}}>
              {this.props.children}
            </Content>
          </Container>
        </Drawer>
      </StyleProvider>
    );
  }
}

CoreLayout.propTypes = {};

CoreLayout.defaultProps = {};

export default withRouter(CoreLayout);
