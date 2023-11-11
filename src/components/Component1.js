import { View, Text } from "react-native";
import React from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

export default function Component1() {
  return (
    <View>
      <Text>Component1</Text>
      <Component2 />
      <Component3 />
    </View>
  );
}
