import React from "react";

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

import SignupForm from "./SignupForm";

import { Mutation } from "react-apollo";
import { SIGN_UP } from "./mutations";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSignupSuccess = data => {
    Toast.show({
      text: "Sign up success! Go to our login page to login",
      buttonText: "Okay",
      position: "bottom",
      duration: 3000
    });
  };

  handleSignupError = error => {
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
              <Title>Sign Up</Title>
            </Body>
            <Right />
          </Header>
          <Content padder contentContainerStyle={styles.content}>
            {/* <Mutation
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
            </Mutation> */}
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
