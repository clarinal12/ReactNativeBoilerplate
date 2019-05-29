import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
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
import getTheme from "../../../native-base-theme/components";
import platform from "../../../native-base-theme/variables/platform";

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
    const { title, style, footer, footerButtons } = this.props;
    const { isDrawer } = this.state;

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
                <Button onPress={() => this.openDrawer()} primary transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>{title || "Title"}</Title>
              </Body>
              <Right>{/* <Text>Right Head</Text> */}</Right>
            </Header>
            <Content padder contentContainerStyle={style || {}}>
              {this.props.children}
            </Content>
            {footer && (
              <Footer>
                <FooterTab>
                  {footerButtons.map((button, index) => (
                    <Button
                      key={index}
                      active={button.active}
                      onPress={() => button.action(index)}
                    >
                      <Text>{button.label}</Text>
                    </Button>
                  ))}
                </FooterTab>
              </Footer>
            )}
          </Container>
        </Drawer>
      </StyleProvider>
    );
  }
}

CoreLayout.propTypes = {
  footerButtons: PropTypes.arrayOf(PropTypes.shape({})),
  footer: PropTypes.bool
};

CoreLayout.defaultProps = {
  footerButtons: [],
  footer: false
};

export default CoreLayout;
