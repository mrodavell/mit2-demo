import { View, Text } from "react-native";
import React from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginPage(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginForm {...props} />
    </View>
  );
}
