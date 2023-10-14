import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";

export default function App() {
  return (
    <View style={styles.box}>
      <Header />
      <Content /> 
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
