import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "./src/components/page/LoginPage";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <StatusBar style="dark" />
        <View>
          <LoginPage />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
