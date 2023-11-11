import { View, Text } from "react-native";
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Component2() {
  return (
    <View>
      <Text>Component2</Text>
      <Child1 />
      <Child2 />
    </View>
  );
}
