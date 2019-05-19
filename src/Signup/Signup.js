import React from "react";

import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Body,
  Content,
  StyleProvider
} from "native-base";
import { Alert } from "react-native";

import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";
import styles from "./styles";

import SignupForm from "./components/SignupForm";

import { Mutation } from "react-apollo";
import { SIGN_UP } from "./mutations";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSignupSuccess = data => {
    const { history } = this.props;
    Alert.alert(
      "Registration Successful",
      "You can now login using your account",
      [{ text: "OK", onPress: () => history.push("/login") }],
      { cancelable: false }
    );
  };

  handleSignupError = error => {
    Alert.alert(
      "Registration Failed",
      error.message,
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Sign Up</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={styles.content}>
            <Mutation
              mutation={SIGN_UP}
              onCompleted={data => this.handleSignupSuccess(data)}
              onError={error => this.handleSignupError(error)}
            >
              {(register, { loading, error }) => (
                <SignupForm
                  loading={loading}
                  error={error}
                  onSubmit={register}
                />
              )}
            </Mutation>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
