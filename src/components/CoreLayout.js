import React from "react";

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
  StyleProvider
} from "native-base";
import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";

const CoreLayout = props => {
  const { title } = props;
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Header>
          <Left>
            <Button primary transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{title || "Title"}</Title>
          </Body>
          <Right>
            <Text>Right Text</Text>
          </Right>
        </Header>
        <Content padder>{props.children}</Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
  );
};

export default CoreLayout;
