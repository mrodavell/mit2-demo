import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Component1 from "./src/components/Component1";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <Text>Test State Management</Text>
      <Component1 />
    </SafeAreaView>
  );
}
