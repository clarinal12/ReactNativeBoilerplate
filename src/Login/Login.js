import React from "react";

import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Body,
  Content,
  StyleProvider,
  Toast
} from "native-base";
import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";
import styles from "./styles";

import LoginForm from "./LoginForm";

import { Mutation } from "react-apollo";
import { LOGIN } from "./mutations";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleLoginSuccess = async data => {
    const { history } = this.props;
    await AsyncStorage.setItem("accessToken", data.login);
    history.push("/");
  };

  handleLoginError = error => {
    Toast.show({
      text: error.message,
      buttonText: "Okay",
      position: "bottom",
      duration: 3000
    });
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Login</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={styles.content}>
            <Mutation
              mutation={LOGIN}
              onCompleted={data => this.handleLoginSuccess(data)}
              onError={error => this.handleLoginError(error)}
            >
              {(login, { loading, error }) => (
                <LoginForm loading={loading} error={error} onSubmit={login} />
              )}
            </Mutation>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
