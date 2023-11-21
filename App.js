import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import Colors from "./src/config/theme/Colors";
const theme = {
  ...DefaultTheme,
  colors: Colors.colors,
  mode: "exact",
};

export default function App() {
  
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 50,
          justifyContent: "center",
          alignItems: " center",
        }}
      >
        <Header />
        <Content />
      </SafeAreaView>
    </PaperProvider>
  );
}
