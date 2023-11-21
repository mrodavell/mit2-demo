import { View, StyleSheet, Keyboard } from "react-native";
import { TextInput, Button } from "react-native-paper";
import globalstyles from "../config/styles";
import React from "react";

export default function Content() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TextInput
        placeholder="Email"
        label="Email"
        style={{ marginBottom: 5 }}
      />
      <TextInput
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={() => {
              Keyboard.dismiss;
              setShowPassword(!showPassword);
            }}
          />
        }
      />
      <View style={{ marginTop: 10 }}>
        <Button icon="login" mode="contained">
          Login
        </Button>
      </View>
      <View style={{ marginTop: 5 }}>
        <Button icon="account-plus" mode="contained">
          Signup
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(globalstyles);
