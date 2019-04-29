import React from "react";
import { Redirect } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

export default ComposedComponent => {
  const Authenticate = async props => {
    const token = await AsyncStorage.getItem("accessToken");
    console.log("token", token);
    if (!token) return <Redirect to="/login" />;
    return <ComposedComponent {...props} />;
  };
  return Authenticate;
};
