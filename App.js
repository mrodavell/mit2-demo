import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar style="dark" />
      <View className="flex-1 justify-center">
        <View>
          <Text className="text-red-600">Item 1</Text>
        </View>
        <View>
          <Text>Item 2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
//   item: {
//     height: 100,
//     width: 100,
//     borderColor: "#000",
//     borderWidth: 2,
//   },
// });
