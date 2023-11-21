import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Component1 from "./src/components/Component1";
import React from "react";
export default function App() {
  const [init, setInit] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <Text>Test State Management</Text>
      <Component1 init={init} />
    </SafeAreaView>
  );
}
