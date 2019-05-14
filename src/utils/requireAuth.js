import React from "react";
import { Redirect } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

export default ComposedComponent => {
  const Authenticate = props => {
    const token = null;
    if (!token) return <Redirect to="/login" />;
    return <ComposedComponent {...props} />;
  };

  return Authenticate;
};
