import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import NavigationStack from "./src/components/navigation/NavigationStack";

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <StatusBar style="dark" />
        <NavigationStack />
      </SafeAreaView>
    </PaperProvider>
  );
}
